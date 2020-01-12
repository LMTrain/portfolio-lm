import auth0 from 'auth0-js';
import Cookies from 'js-cookie';

class Auth0 {

    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain:'dev-mt2g3wp7.auth0.com',
            clientID: 'bGOaWGQAd73mPygXMen4XkptBMrglXRY',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });
        this.login = this.login.bind(this);
        this.logout =this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);

    }

    handleAuthentication() {     
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                }else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        })
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        // localStorage.setItem('access_token', authResult.accessToken);
        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientID: 'bGOaWGQAd73mPygXMen4XkptBMrglXRY'
        })
    }

    login() {        
        this.auth0.authorize();
            
    }

    isAuthenticated() {
        // Check whether the current time is past the Access Token's exoiry time
        const expiresAt = Cookies.getJSON('expiresAt');
        // console.log(new Date().getTime() < expiresAt);
        return new Date().getTime() < expiresAt;   
    }

    clientAuth() {
        return this.isAuthenticated();
    }

    serverAuth(req) {
        if (req.headers.cookie) {

            const expiresAtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('expiresAt='));

            // const cookies = req.header.cookie;
            // console.log(coookies);
            // const splitedCookies = cookies.split(';');
            // console.log(splitedCookies);
            // const expiresAtCookie = splitedCookies.find(c => c.trim().startsWith('expiresAt='));
            // console.log(expiresAtCookie);
            // const expiresAtArray = expiresAtCookie.split('=');
            // console.log(expiresAtArray);
            // const expiresAt = expiresAtArray[1];
            // console.log(expiresAt);

            if (!expiresAtCookie) { return undefined };

            const expiresAt = expiresAtCookie.split('=')[1];

            return new Date().getTime() < expiresAt;
        }
    }
}

const auth0Client = new Auth0();

export default auth0Client;
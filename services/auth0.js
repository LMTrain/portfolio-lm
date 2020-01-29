import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';

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
        // this.isAuthenticated = this.isAuthenticated.bind(this);
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

    async getJWKS() {
        const res = await axios.get('https://dev-mt2g3wp7.auth0.com/.well-known/jwks.json');
        const jwks = res.data;
        // console.log("THIS is JWKS res: ", jwks)
        return jwks;
    }

    // isAuthenticated() {
    //     // Check whether the current time is past the Access Token's exoiry time
    //     const expiresAt = Cookies.getJSON('expiresAt');
    //     // console.log(new Date().getTime() < expiresAt);
    //     return new Date().getTime() < expiresAt;   
    // }

    async verifyToken(token) {
        if (token) {
            const decodedToken = jwt.decode(token, { complete: true});

            // if (!decodedToken) { return undefined; }

            const jwks = await this.getJWKS();
            const jwk = jwks.keys[0];
            console.log("THIS IS jwk :", jwk);

            //BUILD CERTIFICATE
            let cert = jwk.x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
            //
            if (jwk.kid === decodedToken.header.kid) {
                try {
                    const verifiedToken = jwt.verify(token, cert);
                    const expiresAt = decodedToken.exp * 1000;

                    return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
                }catch(err) {
                    return undefined;
                }
            }
        }
        //THESE ARE FOR ME
        // console.log("THIS IS FROM jwt.io :", jwt.decode(token));
        // console.log("NAME : ", decodedToken.nickname);
        // console.log("PICTURE : ", decodedToken.picture);            

        return undefined;    
    }

    async clientAuth() {
        const token = Cookies.getJSON('jwt');
        const verifiedToken = await this.verifyToken(token);

        return verifiedToken;
    }

    async serverAuth(req) {
        if (req.headers.cookie) {

            const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));

            // const cookies = req.header.cookie;
            // console.log(coookies);
            // const splitedCookies = cookies.split(';');
            // console.log(splitedCookies);
            // const tokenCookie = splitedCookies.find(c => c.trim().startsWith('jwt='));
            // console.log(tokenCookie);
            // const expiresAtArray = tokenCookie.split('=');
            // console.log(expiresAtArray);
            // const jwt = expiresAtArray[1];
            // console.log(jwt);

            if (!tokenCookie) { return undefined };

            const token = tokenCookie.split('=')[1];
            const verifiedToken = await this.verifyToken(token);

            return verifiedToken;
        }
        return undefined;
    }
}

const auth0Client = new Auth0();

export default auth0Client;
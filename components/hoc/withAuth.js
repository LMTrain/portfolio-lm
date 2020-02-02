import React from 'react';
import BaseLayout from '../layout/BaseLayout';
import BasePage from '../BasePage';

const namespace = 'http://localhost:300/';

export default role => Component =>
    class withAuth extends React.Component {
        
    static async getInitialProps(args) {
        const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

        return { ...pageProps };
        
    }

    renderProtectedPage() {
        const { isAuthenticated } = this.props.auth;
        const userRole = user && user[`${namespace}role`];

        if (role) {
            if (userRole && userRole === role) { isAuthorized = true};
        } else {
            isAuthorized = true;
        }

        if (!isAuthenticated) {
            return (                
                <BaseLayout {...this.props.auth}>
                    <BasePage>                                  
                        <h1>You are not Authenticated. Please login to access Page.</h1>             
                    </BasePage>
                </BaseLayout>
            )
        } else if (!isAuthorized) {
            return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>                                  
                        <h1>You are not authorized.you don't have a permission to visit this page.</h1>             
                    </BasePage>
                </BaseLayout>
            )
        } else {
            return ( <Component {...this.props} />)
        }
    }

        render() {
            return this.renderProtectedPage()

        }
    }

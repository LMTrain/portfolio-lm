import React from 'react';
import App, { Container } from 'next/app';
import { ToastContainer } from 'react-toastify';

import auth0 from '../services/auth0';

//Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/main.scss';

const namespace = 'http://localhost:3000';

export default class MyApp extends App {
    
    static async getInitialProps({ Component, router, ctx}) {
        let pageProps = {};
        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);       

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        // console.log(user);

        const isSiteOwner = user && user[namespace + '/role'] === 'siteOwner';

        const auth = { user, isAuthenticated: !!user, isSiteOwner };

        // let isAuthenticated = false;
        // if (user) {
        //     isAuthenticated = true;
        // } IS THESAME AS THE BELOW LINE

        // console.log("isAuthenticated :", isAuthenticated)
        // console.log("THIS IS THE USER :", user);

        return { pageProps, auth }
    }

    render () {
        const { Component, pageProps, auth } = this.props
    
        return (
            <Container>
                <ToastContainer />
                <Component {...pageProps} auth={auth} />
            </Container>
        )
    }
}
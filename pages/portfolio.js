import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router';
import axios from 'axios';

class Portfolio extends React.Component {
    static async getInitialProps({query}) {
        const portfolioId = query.id;      
        let portfolio = {};
        
        try {            
            const response = await axios.get(`https://jsonplaceholder.typicode.com/post/${portfolioIdId}`);           
            portfolio = response.data;
            console.log(portfolio)                      
        } catch(err) {
            console.error(err);
        }
        return {portfolio};        
    }    

    render() {
        console.log(this.props)
        const {portfolio} = this.props;
        return (
            <BaseLayout>
                <BasePage {...this.props.auth}>
                    <h1>{portfolio.title}</h1>
                    <h2>Body: {portfolio.body}</h2>
                    <p> ID: {portfolio.id}</p>        
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);
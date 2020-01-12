import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { withRouter } from 'next/router';

import axios from 'axios';

class Portfolio extends React.Component {
    static async getInitialProps(context) {               
        let post = {};
        const postId = context.query.id

        try {            
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);           
            post = response.data;                       
        } catch(err) {
            console.error(err);
        }
        return {post};        
    }    

    render() {
        console.log(this.props)
        const {post} = this.props;
        return (
            <BaseLayout>
                <BasePage {...this.props.auth}>
                    <h1>{post.title}</h1>
                    <h2>{post.body}</h2>
                    <p> {post.id}</p>        
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withRouter(Portfolio);
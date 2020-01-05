import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import Link from 'next/link';

import axios from 'axios';

class Portfolios extends React.Component {

    static async getInitialProps() {               
        let posts = [];

        try {            
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');           
            posts = response.data;                       
        } catch(err) {
            console.error(err);
        }
        return {posts:posts.splice(0,10)};        
    }    

    renderPosts(posts) {        
        return posts.map((post) => {          
            return (
                <li>
                    <Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
                        <a style={{'fontSize': '20px'}}>{post.title}</a>
                    </Link>
                </li>
            )
        })
    }

    render() {        
        const { posts } = this.props;
      
        return (            
            <BaseLayout>
                <h1>I am a Portfolio</h1>              
                <ul>
                    { this.renderPosts(posts) }
                   
                </ul>                
            </BaseLayout>            
        )
    }
}

export default Portfolios

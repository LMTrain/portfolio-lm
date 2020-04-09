import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';

class BlogDetail extends React.Component {

    static getInitialProps() {
        
    }
    render () {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="about-page" title="I am Blog Detail Page">
                          
                </BasePage>
            </BaseLayout>
        )
    }
}

export default BlogDetail
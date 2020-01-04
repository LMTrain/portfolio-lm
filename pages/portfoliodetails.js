import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import { withRouter } from 'next/router';

class PortfolioDetails extends React.Component {

    render() {
        console.log(this.props)
        return (
            <BaseLayout>
                <h1>I am a Portfolio Details</h1>
                <h2>{this.props.router.query.title}</h2>          
            </BaseLayout>
        )
    }
}

export default withRouter(PortfolioDetails);
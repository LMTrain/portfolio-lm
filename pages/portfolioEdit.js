import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import PortfolioCreateForm from '../components/portfolios/PortfolioCreateForm';
import { Row, Col } from 'reactstrap';
import { createPortfolio, getPortfolioById } from '../actions';
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';

// var portfolioWithId = {};
class PortfolioEdit extends React.Component {

    static async getIntialProps({query}) {
        console.log({query});
        let portfolio = {};

        try {
            portfolio = await getPortfolioById(query.id);         
        }   catch(error) {
            console.error(err);
        }
        console.log(portfolio);
        return {portfolio};
    }

    constructor(props){
        super();
        this.state = {
            error: undefined
        }
        this.savePortfolio = this.savePortfolio.bind(this);
    }

    savePortfolio(portfolioData, {setSubmitting}) {
        // setSubmitting(true);
        // createPortfolio(portfolioData)
        // .then((portfolio) => {
        //     setSubmitting(false);           
        //     this.setState({error: undefined});
        //     Router.pushRoute('/portfolios');
        // })
        // .catch((err) => {
        //     const error = err.message || 'Server Error!'
        //     setSubmitting(false);
        //     this.setState({error});
        // })
    }

    render () {
        // console.log(this.props)
        const {error} = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Create New Portfolio">
                    <Row>
                        <h1>EDIT PAGE</h1>                        
                        <Col md="6">
                            <PortfolioCreateForm error={error} onSubmit={this.savePortfolio} />                       
                        </Col>
                    </Row>  
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(PortfolioEdit);
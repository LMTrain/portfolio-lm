import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import { Col, Row, Button} from 'reactstrap';
import PortfolioCard from '../components/portfolios/PortfolioCard';
import { Router } from '../routes';

import { getPortfolios, deletePortfolio } from '../actions';

class Portfolios extends React.Component {

    static async getInitialProps() {            
        let portfolios = [];

        try {
            portfolios = await getPortfolios();
        } catch(err) {
            console.error(err);
        }

        return {portfolios};
    }
    
    navigateToEdit(portfolioId, e) {
        console.log("NAVIGATE", portfolioId)
        e.stopPropagation();
        Router.pushRoute(`/portfolios/${portfolioId}/edit`)
    }
    
    displayDeleteWarning(portfolioId, e) {
        console.log("DISPLAY", portfolioId)
        e.stopPropagation();
        const isConfirm = confirm('Are you sure you want to delete this portfolio?');

        if (isConfirm) {            
            this.deletePortfolio(portfolioId);
        }
    }

    deletePortfolio(portfolioId) {
        deletePortfolio(portfolioId)
        .then(() => {
            Router.pushRoute('/portfolios');
        })
        .catch(err => console.error(err));

    }

    renderPortfolios(portfolios) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;
        return portfolios.map((portfolio, index) => {          
            return (
                <Col key={index} md="12">
                   <PortfolioCard portfolio={portfolio}>
                   { isAuthenticated && isSiteOwner &&
                        <>
                            <Button onClick={(e) => this.navigateToEdit(portfolio._id, e)} color="warning">Edit</Button>{' '}
                            <Button onClick={(e) => this.displayDeleteWarning(portfolio._id, e)} color="danger">Delete</Button>
                        </>
                    }
                   </PortfolioCard> 
                </Col>
            )
        })
    }

    render() {        
        const { portfolios } = this.props;
        const { isAuthenticated, isSiteOwner } = this.props.auth;
      
        return (            
            <BaseLayout title="Laycon Muriziq - See My Portfolio" {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolios">
                    { isAuthenticated && isSiteOwner &&
                        <Button onClick={() => Router.pushRoute('/portfolios/new')}
                                color="success" 
                                className="create-port-btn">Create Portfolio
                        </Button>
                    }
                    <Row>
                        { this.renderPortfolios(portfolios) }
                    
                    </Row>
                </BasePage>                
            </BaseLayout>            
        )
    }
}

export default Portfolios

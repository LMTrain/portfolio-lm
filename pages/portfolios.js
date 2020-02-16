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
    
    displayDeleteWarning(portfolioId) {
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
                <Col key={index} md="4">
                   <PortfolioCard portfolio={portfolio}>
                   { isAuthenticated && isSiteOwner &&
                        <>
                            <Button onClick={() => Router.pushRoute(`/portfolios/${portfolio._id}/edit`)} color="warning">Edit</Button>{' '}
                            <Button onClick={() => this.displayDeleteWarning(portfolio._id)} color="danger">Delete</Button>
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
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-page" title="Portfolios">
                    { isAuthenticated && isSiteOwner &&
                        <Button onClick={() => Router.pushRoute('/portfolioNew')}
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

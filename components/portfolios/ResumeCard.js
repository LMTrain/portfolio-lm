import React from 'react'
import { Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap';
import PortfolioCardDetail from './PortfolioCardDetail';
import moment from 'moment';

export default class ResumeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {function truncateString(str, num) {    
        if (str.length > num && num > 3) {
                return str.slice(0, (num - 3)) + '...';
            } else if (str.length > num && num <= 3) {
                return str.slice(0, num) + '...';
            } else {
            return str;
        }    
      }
       
        const { portfolio, children } = this.props;
        const { isOpen } = this.state;
        return (          
            <span title="Click for Details" onClick={this.handleToggle}>
                <PortfolioCardDetail toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen}/>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">{portfolio.company}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-text"> {portfolio.location} </p>
                        <CardTitle className="portfolio-card-title"><h4><b>{portfolio.title}</b></h4></CardTitle>
                        <CardText className="portfolio-card-text">
                            {portfolio.shortDescription = truncateString(portfolio.shortDescription, 60)}
                            <p><b>{moment(portfolio.startDate).format('MMMM YYYY')} - {portfolio.endDate ? moment(portfolio.endDate).format('MMMM YYYY') : 'Still Working here'}</b></p> 
                        
                        </CardText>
                        <div className="readMore"> 
                            { children }
                        </div>
                    </CardBody>                    
                </Card>
            </span>
        
        )
    }
}
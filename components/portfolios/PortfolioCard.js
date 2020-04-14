import React from 'react'
import { Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap';
// import ResumeCardDetail from '../resumes/ResumeCardDetail';
import moment from 'moment';

export default class PortfolioCard extends React.Component {
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

    render() {
       
        const { portfolio, children } = this.props;
        const { isOpen } = this.state;
        return (          
            <span title="Visit Website">
                {/* <ResumeCardDetail toggle={this.handleToggle} portfolio={portfolio} isOpen={isOpen}/> */}
                <Card className="portfolio-project-card">
                    <CardHeader className="portfolio-project-card-header">{portfolio.projectName}</CardHeader>
                    <CardBody>
                        <div>
                            <a href={portfolio.deployedLink} target="_blank">
                                <img alt="Project Image" width="950" height="500" src={portfolio.imageLink} />
                            </a>
                        </div>                      
                        <CardText className="portfolio-project-card-text">
                            <p><b>Category : </b>{portfolio.category} </p>
                            <p><b>Client : </b>{portfolio.client}</p>
                            <p><b>Completion : </b>{moment(portfolio.completion).format('MMMM YYYY')}</p>
                            <p><b>Role : </b>{portfolio.role}</p>                            
                            <p><b>Repository Link : </b><a href={portfolio.repositoryLink} target="_blank">{portfolio.repositoryLink}</a></p>
                            <p><b>Deployed Link : </b><a href={portfolio.deployedLink} target="_blank">{portfolio.deployedLink}</a></p>
                            <p><b>Description : </b>{portfolio.projectDescription}</p>                       
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
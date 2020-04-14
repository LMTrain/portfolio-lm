import React from 'react'
import { Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap';
import ResumeCardDetail from './ResumeCardDetail';
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

    render() {
       
        const { resume, children } = this.props;
        const { isOpen } = this.state;
        return (          
            <span title="Click for Details" onClick={this.handleToggle}>
                <ResumeCardDetail toggle={this.handleToggle} resume={resume} isOpen={isOpen}/>
                <Card className="portfolio-card">
                    <CardHeader className="portfolio-card-header">{resume.company}</CardHeader>
                    <CardBody>
                        <p className="portfolio-card-text"> {resume.location} </p>
                        <CardTitle className="portfolio-card-title"><h4><b>{resume.title}</b></h4></CardTitle>
                        <CardText className="portfolio-card-text">
                            {resume.shortDescription}
                            <p><b>{moment(resume.startDate).format('MMMM YYYY')} - {resume.endDate ? moment(resume.endDate).format('MMMM YYYY') : 'Still Working here'}</b></p> 
                        
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
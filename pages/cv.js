import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { Link } from '../routes';
import { Col, Row, Button} from 'reactstrap';
import ResumeCard from '../components/resumes/ResumeCard';
import { Router } from '../routes';

import { getResumes, deleteResume } from '../actions';

class Cv extends React.Component {

    static async getInitialProps() {            
        let resumes = [];

        try {
            resumes = await getResumes();
        } catch(err) {
            console.error(err);
        }

        return {resumes};
    }
    
    navigateToEdit(resumeId, e) {
        e.stopPropagation();
        Router.pushRoute(`/resumes/${resumeId}/edit`)
    }
    
    displayDeleteWarning(resumeId, e) {
        e.stopPropagation();
        const isConfirm = confirm('Are you sure you want to delete this Work Experience?');

        if (isConfirm) {            
            this.deleteResume(resumeId);
        }
    }

    deleteResume(resumeId) {
        deleteResume(resumeId)
        .then(() => {
            Router.pushRoute('/cv');
        })
        .catch(err => console.error(err));

    }

    renderResumes(resumes) {
        const { isAuthenticated, isSiteOwner } = this.props.auth;
        return resumes.map((resume, index) => {          
            return (
                <Col key={index} md="4">
                   <ResumeCard resume={resume}>
                   { isAuthenticated && isSiteOwner &&
                        <>
                            <Button onClick={(e) => this.navigateToEdit(resume._id, e)} color="warning">Edit</Button>{' '}
                            <Button onClick={(e) => this.displayDeleteWarning(resume._id, e)} color="danger">Delete</Button>
                        </>
                    }
                   </ResumeCard> 
                </Col>
            )
        })
    }

    render() {        
        const { resumes } = this.props;
        const { isAuthenticated, isSiteOwner } = this.props.auth;
      
        return (            
            <BaseLayout cannonical="/resumes"
                        title="Laycon Muriziq - See My Resume" 
                        {...this.props.auth}>
                <BasePage className="portfolio-page" title="Resume">
                    <Row>
                        <Col md={{size: 12}} style={{display: "flex"}}>
                            { isAuthenticated && isSiteOwner &&
                                <Button onClick={() => Router.pushRoute('/resumes/cvnew')}
                                        color="success" 
                                        className="create-port-btn">Add Work Experience
                                </Button>
                            }
                            <div style={{color: "transparent"}}><a>Dn</a></div>
                            <div className="cv-title">
                                <a download="laycon_muriziq.pdf" className="btn btn-success" href="/static/laycon_muriziq.pdf">
                                    Download Resume
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        { this.renderResumes(resumes) }
                    
                    </Row>
                </BasePage>                
            </BaseLayout>            
        )
    }
}

export default Cv;

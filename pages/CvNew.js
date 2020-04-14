import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import ResumeCreateForm from '../components/resumes/ResumeCreateForm'
import { Row, Col } from 'reactstrap';
import { createPortfolio } from '../actions';
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';
import moment from 'moment';

const INITIAL_VALUES = { title: '',
                         company: '',
                         location: '',
                         position: '',
                         description: '', 
                         startDate: moment(), 
                         endDate: moment() };

class CvNew extends React.Component {

    constructor(props){
        super();
        this.state = {
            error: undefined
        }
        this.savePortfolio = this.savePortfolio.bind(this);
    }

    saveResume(resumeData, {setSubmitting}) {
        setSubmitting(true);
        createResume(resumeData)
        .then((resume) => {
            setSubmitting(false);           
            this.setState({error: undefined});
            Router.pushRoute('/cv');
        })
        .catch((err) => {
            const error = err.message || 'Server Error!'
            setSubmitting(false);
            this.setState({error});
        })
    }

    render () {
        const {error} = this.state;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Add Work Experience">
                    <Row>
                        <Col md="6">
                            <ResumeCreateForm initialValues={INITIAL_VALUES} 
                                                error={error} 
                                                onSubmit={this.saveResume}/>                       
                        </Col>
                    </Row>  
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(CvNew);
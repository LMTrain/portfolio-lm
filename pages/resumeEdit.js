import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import ResumeCreateForm from '../components/resumes/ResumeCreateForm';
import { Row, Col } from 'reactstrap';
import { updateResume, getResumeById } from '../actions';
import withAuth from '../components/hoc/withAuth';
import { Router } from '../routes';


class ResumeEdit extends React.Component {
    static async getInitialProps({query}) { 
        let resume = {};        
        try {
            console.log(query.id)                 
            resume = await getResumeById(query.id);         
        }   catch(error) {
            // console.error(err);
        }
        console.log('RESUME', resume);       
        return {resume};
    }

    constructor(props){        
        super();
        this.state = {
            error: undefined
        }
        this.updateResume = this.updateResume.bind(this);
    }

    updateResume(resumeData, {setSubmitting}) {
        setSubmitting(true);
        updateResume(resumeData)
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
        const { resume } = this.props;
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="portfolio-create-page" title="Update Resume">
                    <Row>                                             
                        <Col md="6">
                            <ResumeCreateForm initialValues={resume}
                                                error={error}
                                                onSubmit={this.updateResume}/>                       
                        </Col>
                    </Row>  
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(ResumeEdit);
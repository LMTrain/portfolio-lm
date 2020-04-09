import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row} from 'reactstrap';

class About extends React.Component {
    render () {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="about-page">
                    <Row className="mt-5">
                        <Col md="6">
                            <div className="left-side">
                                <h1 className="title fadein">Hello, Welcome</h1>
                                <h4 className="subtitle fadein">To About Page</h4>
                                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="fadein" id="intro">
                                <p>My Name is Laycon Muriziq, I'm a System Administrator & Full Stack Web Developer from Minneapolis, MN. I aim to make a difference through my creative solution.</p>
                                <p> 
                                    Worked with project teams to create user-friendly and appealing application interfaces and websites for users. Met with project manager, 
                                    business analyst and architect right from beginning of project, creating rough mock-ups that were refined and extended over many iterations. 
                                    Adjustments to mock-ups as necessary to address problems encountered.
                                </p>
                            </div>
                        </Col>
                    </Row>
                          
                </BasePage>
            </BaseLayout>
        )
    }
}

export default About
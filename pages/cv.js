import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import {Row, Col} from 'reactstrap';

class Cv extends React.Component {

    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage title="Preview of My Resume" className="cv-page"> 
                <Row>
                    <Col md={{size: 8, offset: 2}}>
                        <div className="cv-title">
                            <a download="laycon_muriziq.pdf" className="btn btn-success" href="/static/laycon_muriziq.pdf">
                                Download
                            </a>
                        </div>
                        <iframe style={{width: '100%', height: '100%'}} scr="/static/laycon_muriziq.pdf">                            
                        </iframe>
                    
                    </Col>
                </Row>                                 
                              
                </BasePage>
            </BaseLayout>
        )
    }
}

export default Cv;
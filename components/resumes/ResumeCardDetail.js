import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class ResumeCardDetail extends React.Component { 
    
    render() {
      const { isOpen, toggle, resume } = this.props;
      return (
        <div>
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal size="large" isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{resume.title}</ModalHeader>
            <ModalBody>
              <p><b>Company: </b>{resume.company}</p>
              <p><b>Position: </b>{resume.position}</p>
              <p><b>Location: </b>{resume.location}</p>
              <p><b>Start Date: </b>{moment(resume.startDate).format('MMMM YYYY')}</p>
              <p><b>End Date: </b>{resume.endDate ? moment(resume.endDate).format('MMMM YYYY') : 'Still Working here'}</p>
              <p><b>Experience: </b>{resume.description}</p>
            </ModalBody>
            <ModalFooter>                
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );

    }
}

export default ResumeCardDetail;
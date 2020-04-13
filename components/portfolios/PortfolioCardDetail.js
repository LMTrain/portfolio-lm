import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import moment from 'moment';

class PortfolioCardDetail extends React.Component { 
    
    render() {
      const { isOpen, toggle, portfolio } = this.props;
      return (
        <div>
          {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
          <Modal size="large" isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{portfolio.title}</ModalHeader>
            <ModalBody>
              <p><b>Company: </b>{portfolio.company}</p>
              <p><b>Position: </b>{portfolio.position}</p>
              <p><b>Location: </b>{portfolio.location}</p>
              <p><b>Start Date: </b>{moment(portfolio.startDate).format('MMMM YYYY')}</p>
              <p><b>End Date: </b>{portfolio.endDate ? moment(portfolio.endDate).format('MMMM YYYY') : 'Still Working here'}</p>
              <p><b>Experience: </b>{portfolio.description}</p>
            </ModalBody>
            <ModalFooter>                
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      );

    }
}

export default PortfolioCardDetail;
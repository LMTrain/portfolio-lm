import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class PortButtonDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdown: false
        };
    }

    toggle (){
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    } 

  render () {
      return (
        <ButtonDropdown direction="right" className="port-dropdown" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret size="sm">
               
            </DropdownToggle>
            <DropdownMenu>                
                <DropdownItem>Draft / Publish</DropdownItem>               
                <DropdownItem>Delete</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
  }
}

// export default PortButtonDropdown;
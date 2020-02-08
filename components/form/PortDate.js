import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Label } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css";

export default class PortDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateValue: moment()
        };

        this.handleChange = this.handleChange.bind(this);
    }
 
    handleChange(date) {
        const { setFieldValue, setFieldTouched } = this.props.form;
        const { name } = this.props.field;
        
        this.setState({
            dateValue: date
        });

        setFieldValue(name, date, true);
        setFieldTouched(name, true, true);
    };

    render() {
        const {label } = this.props;
        return (
            <FormGroup>
                <Label>{label} </Label>
                <div className="input-group">
                    <DatePicker
                        selected={this.state.dateValue}
                        onChange={this.handleChange}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        maxDate={moment()}
                        dropdownMode="select"
                    />
                </div>
            </FormGroup>
        );
    }
}




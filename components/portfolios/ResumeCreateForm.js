import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

import moment from 'moment';

const validateInputs = (values) => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {    
    // console.log(key);
    //debugger
    if(!values[key] && key !== 'endDate') {
      errors[key] = `Field ${key} is required!`;
    }
  });

  const startDate = moment(values.startDate);
  const endDate = moment(values.endDate);

  if  (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date cannot before start date!!!';
  }
   
  return errors;
}


const ResumeCreateForm = ({initialValues, onSubmit, error}) => (
  <div>    
    <Formik
      initialValues={initialValues}
      validate={validateInputs}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>            
          <Field
            type="text" 
            name="title" 
            label="Title"
            component={PortInput}
          />        
          
          <Field 
            type="text" 
            name="company" 
            label="Company" 
            component={PortInput}
          />
        
          <Field 
            type="text" 
            name="location" 
            label="Location" 
            component={PortInput}
          />
        
          <Field 
            type="text" 
            name="position" 
            label="Position" 
            component={PortInput}
          />

          <Field 
            type="textarea" 
            name="shortDescription" 
            label="Brief Experience" 
            component={PortInput} 
          />        
          
          <Field 
            type="textarea" 
            name="description" 
            label="Detail Experience" 
            component={PortInput} 
          />        
          
          <Field 
            name="startDate"
            label="Start Date"
            initialDate={initialValues.startDate}
            component={PortDate} 
          />        
        
          <Field 
            name="endDate" 
            label="End Date"
            canBeDisabled={true}               
            initialDate={initialValues.endDate}
            component={PortDate} 
          />
          { error && 
            <Alert color="danger">
              {error}
            </Alert>
          }         

          <Button color="success" type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default ResumeCreateForm;







// import React from 'react';


// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         title: '',
//         description: '',
//         language: ''
//       };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       const field = event.target.name;
//       this.setState({[field]: event.target.value});
//     }

   
//     handleSubmit(event) {
//       alert('A name was submitted: ' + this.state.title + ' ' + this.state.description + ' ' + this.state.language);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <Label>
//             Name:
//             <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
//           </Label>
//           <Label>
//             Description:
//             <textarea name="description" value={this.state.description} onChange={this.handleChange} />
//           </Label>
//           <Label>
//             Pick your favorite Programming Language:
//             <select name="language" value={this.state.language} onChange={this.handleChange}>
//               <option value="Javascript">Javascript</option>
//               <option value="Python">Python</option>
//               <option value="Java">Java</option>
//               <option value="C#">C#</option>
//             </select>
//           </Label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
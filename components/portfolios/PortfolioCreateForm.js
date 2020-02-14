import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Alert } from 'reactstrap';
import PortInput from '../form/PortInput';
import PortDate from '../form/PortDate';

const validateInputs = (values) => {
  let errors = {};

  Object.entries(values).forEach(([key, value]) => {    
    // console.log(key);
    if(!values[key] && values[key] === 'startDate' || values[key] === 'endDate') {
      errors[key] = `Field ${key} is required!`
    }
  });

  const startDate = values.startDate;
  const endDate = values.endDate;

  if  (startDate && endDate && endDate.isBefore(startDate)) {
    errors.endDate = 'End Date cannot before start date!!!';
  }
   
  return errors;
}

const INITIAL_VALUES = { title: '',
                         company: '',
                         location: '',
                         position: '',
                         description: '', startDate: '', endDate: '' };

const PortfolioCreateForm = (props) => (
  <div>    
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={props.onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>         
            
          <Field 
            label="Title"
            type="text" 
            name="title" 
            component={PortInput}
          />        
          
          <Field 
            label="Company" 
            type="text" 
            name="company" 
            component={PortInput}
          />
        
          <Field 
            label="Location" 
            type="text" 
            name="location" 
            component={PortInput}
          />
        
          <Field 
            label="Position" 
            type="text" 
            name="position" 
            component={PortInput}
          />
          
          <Field 
            label="Description" 
            type="textarea" 
            name="description" 
            component={PortInput} 
          />        
          
          <Field 
            name="startDate"
            label="Start Date" 
            component={PortDate} 
          />        
        
          <Field 
            name="endDate" 
            label="End Date"
            canBeDisabled={true}               
            component={PortDate} 
          />
          { props.error && 
            <Alert color="danger">
              {props.error}
            </Alert>
          }         

          <Button color="success" type="submit" disabled={isSubmitting}>
            Create
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default PortfolioCreateForm;







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
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
 
  const endDate = moment(values.endDate);

  if  (endDate === null) {
    errors.endDate = 'Completion Date cannot be empty!!!';
  }
   
  return errors;
}


const PortfolioCreateForm = ({initialValues, onSubmit, error}) => (
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
            name="projectName" 
            label="Project Name"
            component={PortInput}
          />        
                      
          <Field
            type="text" 
            name="category" 
            label="Category"
            component={PortInput}
          />        
          
          <Field 
            type="text" 
            name="client" 
            label="Client" 
            component={PortInput}
          />
        
        <Field 
            name="completion" 
            label="Completion"
            canBeDisabled={true}               
            initialDate={initialValues.endDate}
            component={PortDate} 
          />
        
          <Field 
            type="text" 
            name="role" 
            label="Role" 
            component={PortInput}
          />

          <Field 
            type="text" 
            name="repositoryLink" 
            label="Repository Link" 
            component={PortInput} 
          />        
          
          <Field 
            type="text" 
            name="deployedLink" 
            label="Deployed Link" 
            component={PortInput} 
          /> 

          <Field 
            type="text" 
            name="imageLink" 
            label="Image Link" 
            component={PortInput} 
          />               
          
          <Field 
            type="textarea" 
            name="projectDescription" 
            label="Project Description" 
            component={PortInput} 
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
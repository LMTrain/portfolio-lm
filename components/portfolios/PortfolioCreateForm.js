import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, Label } from 'reactstrap';



const validateInputs = (validate) => {
  let errors = {};

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (
  //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  // ) {
  //   errors.email = 'Invalid email address';
  // }
  return errors;
}

const INITIAL_VALUES = { title: '',
                         company: '',
                         location: '',
                         position: '',
                         description: '', startDate: '', endDate: '' };

const PortfolioCreateForm = () => (
  <div>    
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateInputs}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 800);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <FormGroup>
            <Label>Title</Label>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage name="title" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Company</Label>
            <Field className="form-control" type="text" name="company" />
            <ErrorMessage name="company" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>Location</Label>
            <Field className="form-control" type="text" name="location" />
            <ErrorMessage name="location" component="div" />
          </FormGroup>

          <FormGroup>

            <Label>Title</Label>
            <Field className="form-control" type="text" name="position" />
            <ErrorMessage name="position" component="div" />            
          </FormGroup>

          <FormGroup>
            <Label>Description</Label>
            <Field className="form-control" type="text" name="description" component="textarea" />
            <ErrorMessage name="description" component="div" />            
          </FormGroup>

          <FormGroup>
            <Label>Start Date</Label>
            <Field className="form-control" type="text" name="startDate" />
            <ErrorMessage name="startDate" component="div" />
          </FormGroup>

          <FormGroup>
            <Label>End Date</Label>
            <Field className="form-control" type="text" name="endDate" />
            <ErrorMessage name="endDate" component="div" />
          </FormGroup>

          <button type="submit" disabled={isSubmitting}>
            Create
          </button>
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
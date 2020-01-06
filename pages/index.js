import React from 'react';
import '../styles/main.scss';
import BaseLayout from '../components/layout/BaseLayout';

import { Button, Container} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


class Index extends React.Component {

    render() {     

        return (
            <BaseLayout>
                <Container>                
                    <Button color="danger">Danger!</Button>
                </Container>
            </BaseLayout>
        )

    }
}
  export default Index;


//FUNCTIONAL COMPONENT
// const Index = () => {
//     return (
//         <h1> I am Index Page </h1>
//     )
// }  

{/* <Header title={'I am a header component'}> 
    <h1> I am header subtitle</h1>
</Header> */}
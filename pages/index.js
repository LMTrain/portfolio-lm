import React from 'react';
// import Header from '../components/shared/Header';
import BaseLayout from '../components/layout/BaseLayout';



// const Index = () => {
//     return (
//         <h1> I am Index Page </h1>
//     )
// }  

class Index extends React.Component {
    render() {
        return (
            <BaseLayout>
               <h1> I am Index Page </h1>               
            </BaseLayout>
        )

    }
}
  export default Index;

{/* <Header title={'I am a header component'}> 
    <h1> I am header subtitle</h1>
</Header> */}
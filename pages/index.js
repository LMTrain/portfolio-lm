import React from 'react';
import '../styles/main.scss';
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
               <div className='customClass'> Customize</div>               
            </BaseLayout>
        )

    }
}
  export default Index;

{/* <Header title={'I am a header component'}> 
    <h1> I am header subtitle</h1>
</Header> */}
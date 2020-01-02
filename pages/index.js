import React from 'react';
import '../styles/main.scss';
import BaseLayout from '../components/layout/BaseLayout';


class Index extends React.Component {
    //REACT LIFE CYCLE METHOD
    constructor() {
        super();
        this.state = {
            title: 'I am Index Page'
        }
        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    updateTitle() {
        this.setState({title: 'I am Updating Index Page'})
    }

    render() {
        console.log('render');

        return (
            <BaseLayout>
               <h1> I am Index Page </h1>
               <div className='customClass'> Customize</div>
               <h2>{this.state.title}</h2>
               <button onClick={() => this.updateTitle()}>Change Title</button>            
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
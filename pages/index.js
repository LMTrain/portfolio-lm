import React from 'react';
import '../styles/main.scss';
import BaseLayout from '../components/layout/BaseLayout';
import axios from 'axios';
import SuperComponent from '../components/SuperComponent';


class Index extends SuperComponent {

    static async getInitialProps() {
        console.log('I am getting initial props');
        // axios.get('https://api.walmartlabs.com/v1/search?&apiKey=vng9pukufs97mcyyjs5ps266&query=BELT&format=json')
        // .then(
        //     (response) => console.log(response.data))
        // .catch(err => console.error(err))
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            // console.log(response.data)
            userData = response.data;
        } catch(err) {
            console.error(err);
        }
        
        return {initialData: [1,2,3,3,4], userData};
    }
    //REACT LIFE CYCLE FUNCTIONS
    constructor(props) {      
        super(props);     

        this.state = {
            title: 'I am Index Page'
        }
        console.log('constructor');
        //this.updateTitle = this.updateTitle.bind(this);
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

    updateTitle = () => {
        this.setState({title: 'I am Updating Index Page'})
    }

    render() {
        // console.log('render');
        //DESTRUCTURING --- const { title } = this.state
        const title = this.state.title;     
        const { userData, initialData } = this.props;
        console.log({userData})

        return (
            <BaseLayout>
               <h1> I am Index Page </h1>
               <div className='customClass'> Customize</div>
               <h2>{title}</h2>
               <h2>{userData[0].title}</h2>
               <button onClick={ this.updateTitle }>Change Title</button>            
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
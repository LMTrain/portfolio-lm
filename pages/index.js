import React from 'react';



// const Index = () => {
//     return (
//         <h1> I am Index Page </h1>
//     )
// }  

class Index extends React.Component {
    render() {
        return (
            <div>
               <h1> I am Index Page </h1>
               <a href="/">Home</a>
               <a href="/about">About</a>
               <a href="/portfolios">Portfolios</a>
               <a href="/blogs">Blogs</a>
               <a href="/cv">CV</a>
            </div>
        )

    }
}
  export default Index;
  
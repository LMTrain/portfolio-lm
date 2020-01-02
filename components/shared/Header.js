import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        debugger;
        const title = this.props.title;
        return (
            <>  
                <p>{ title }</p>
                {this.props.children}
                         
               <Link href="/">
                   {/* INLINE STYLING */}
                   {/* <a style={{'fontSize': '30px', 'fontWeight': 'bold'}}>Home</a> */}
                    <a>Home</a>
               </Link>
               <Link href="/about">
                    <a>About</a>
               </Link>
               <Link href="/portfolios">
                    <a>Portfolios</a>
               </Link>
               <Link href="/blogs">
                    <a>Blogs</a>
               </Link>
               <Link href="/cv">
                    <a>CV</a>
               </Link>
               <style>
                   {
                       `
                       a{
                            font-size: 20px;
                       }
                       `
                   }
               </style>
            </>

        )
    }
}

export default Header;
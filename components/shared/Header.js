import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes';

import '../../styles/main.scss';

class Header extends React.Component {

    render() {        
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
               <NextLink route='test' params={{id: '2'}}>>Test 2</NextLink>
               <NextLink route='/test/5' params={{id: '5'}}>>Test 5</NextLink>
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
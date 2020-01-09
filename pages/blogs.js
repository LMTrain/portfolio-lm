import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';

class Blogs extends React.Component {

    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1>I am a Blogs</h1>             
                </BasePage>                              
            </BaseLayout>
        )
    }
}

export default Blogs;
import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';

class SuperComponent extends React.Component {
    constructor() {
        super();
        this.someVariable = 'Just some variable';
    }

    alertName(title) {
        alert(title);
    }

    render() {
        return (
            <BaseLayout>
                <h1>I am a Blogs</h1>              
            </BaseLayout>
        )
    }
}

export default SuperComponent;
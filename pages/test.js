import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import { withRouter } from 'next/router';

import axios from 'axios';

class Test extends React.Component {
    static async getInitialProps({query}) {
        const testId = query.id             
       return {testId};
    }    

    render() {
        const {testId} = this.props
        return (
            <BaseLayout>
                <h1>This is TEST Page with id of {testId}</h1>                     
            </BaseLayout>
        )
    }
}

export default withRouter(Test);
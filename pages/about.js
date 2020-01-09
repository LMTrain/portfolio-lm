import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';

import BasePage from '../components/BasePage';


class About extends React.Component {
    render () {
        return (
            <BaseLayout>
                <BasePage className="about-page">
                    <h1> I am About Page from Class Component </h1>               
                </BasePage>
            </BaseLayout>
        )
    }
}

export default About
import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

import SlateEditor from '../components/slate-editor/Editor';

class BlogEditor extends React.Component {

    constructor(props) {
        super(props);
        this.saveBlog =  this.saveBlog.bind(this);
    }

    saveBlog(heading) {

        heading.title
        heading.subtitle
        console.log('Calling saveBlog()');
    }


    render () {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage containerClass="editor-wrapper" className="blog-editor-page" >
                    <SlateEditor save={this.saveBlog} />                        
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth('siteOwner')(BlogEditor);
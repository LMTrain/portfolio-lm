import React from 'react'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { getBlogBySlug } from '../actions';
import { Row, Col} from 'reactstrap';

class BlogDetail extends React.Component {

    static async getInitialProps({query}) {
        let blog = {};
        const slug = query.slug;

        try {
            blog = await getBlogBySlug(slug);
        }   catch(err) {
            console.error(err);
        }
        return {blog};
    }


    render () {
        const {blog} = this.props;
       
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-detail-page">
                <Row>
                    <Col md={{size:8}}>
                        <div dangerouslySetInnerHTML={{__html: blog.story}}></div>
                    
                    </Col>
                </Row>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default BlogDetail;
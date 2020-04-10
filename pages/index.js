import React from 'react';
import Typed from 'react-typed';
// import '../styles/main.scss';
import BaseLayout from '../components/layout/BaseLayout';

import { Container, Row, Col } from 'reactstrap';


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isFlipping: false
        }

        this.roles = ['System Administrator', 'Full-Stack Web Developer', 'React.js', 'Next.js', 'Angular', 'JavaScript', 'C##'];
    }


    componentDidMount() {
        this.animateCard();
    }

    // componentWillLeave() {
    //     this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    // }

    componentWillUnmount() {
        this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
    }

    animateCard() {
        setInterval(() => {
            this.cardAnimationInterval = setInterval(() => {
                this.setState({
                    isFlipping : true
                });
               
            })
        }, 8000); 
             
    }
    

    render() {
        const { isAuthenticated, user } = this.props.auth;
        const { isFlipping }= this.state;

        return (
            <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} 
                        headerType="index"
                        title="Laycon Muriziq - Portfolio">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/static/images/background-index.png" />
                        {/* <img src="https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg" /> */}
                    </div>
                    <Container>                       
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper ${isFlipping ? 'isFlipping' : ''}` }>
                                        <div className="front" onClick={() => this.animateCard()} title="Click to flipp">
                                            <div className="hero-section-content">
                                                <h2> Full Stack Web Developer </h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio and job history.
                                                </div>
                                            </div>
                                            {/* <img className="image" src="/static/images/section-1.png"/> */}
                                            <img className="image" src="../static/images/supernova.jpg"/>
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                        <div className="back" onClick={() => this.animateCard()} title="Click to flipp">
                                            <div className="hero-section-content">
                                                <h2> System Administrator </h2>
                                                <div className="hero-section-content-intro">
                                                    In ERP Systems and Application Integration
                                                </div>
                                            </div>
                                            {/* <img className="image" src="/static/images/section-2.png"/> */}
                                            <img className="image" src="../static/images/space1.jpg"/>
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        { isAuthenticated && <span></span> }
                                        Welcome to the portfolio website of Laycon Muriziq.
                                        Get informed, collaborate and discover projects I was working on through the years!
                                    </h1>
                                </div>
                                <Typed
                                    loop
                                    typeSpeed={70}
                                    backSpeed={70}
                                    strings={this.roles}
                                    // smartBackspace
                                    // shuffle={false}
                                    backDelay={1000}
                                    // fadeOut={false}
                                    // fadeOutDelay={100}
                                    loopCount={0}
                                    showCursor
                                    className="self-typed"
                                    cursorChar="|"
                                    />
                                <div className="hero-welcome-bio">
                                    <h1>
                                        Let's take a look on my work.
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
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
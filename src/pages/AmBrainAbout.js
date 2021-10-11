import React from "react";
import "../css/pages/amBrainAbout.css"
import AmBrainHeader from "../components/AmBrainHeader";
import { Animated } from "react-animated-css";

class AmBrainAbout extends React.Component {

    constructor(props) {
        super(props)
    }

    getAboutSectionContent = () => {
        return [
            {
                name: 'Coffee Time',
                description: 'Choose coffee and great conversation when your stressed or something is not going well.',
                images: [
                    'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80',
                    'https://images.unsplash.com/photo-1601933470096-0e34634ffcde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                ]
            },
            {
                name: 'Mafia Time',
                description: 'Rarely we play mafia and as you can see it is so fun.',
                images: [
                    'https://images.pexels.com/photos/3856020/pexels-photo-3856020.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                ]
            },
            {
                name: 'Meeting Time',
                description: 'We have meetings twice a week, where one employee shares the problems they faced and others helps them with advice.',
                images: [
                    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                    'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                ]
            }
        ]
    }

    getFrontendTechnologies = () => {
        return [
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
                name: 'javascript',
                description: 'JavaScript is well-known as the scripting language for Web pages.'
            },
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                name: 'react',
                description: 'React is declarative, component-based JavaScript framework.'
            },
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
                name: 'angular',
                description: 'Angular is a structural framework for dynamic web apps.'
            },
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg',
                name: 'vue',
                description: 'Vue is a progressive framework for building user interfaces.'
            },
        ]
    }

    getBackendTechnologies = () => {
        return [
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/php-1.svg',
                name: 'php',
                description: 'PHP is a popular general-purpose scripting language that is suited to web development.'
            },
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
                name: 'laravel',
                description: 'Laravel is easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.'
            },
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg',
                name: 'node.js',
                description: 'Node.js lets developers use JavaScript to write command line tools and for server-side scripting'
            },
            {
                logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg',
                name: 'redis',
                description: 'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.'
            }
        ]
    }

    renderAboutSections = () => {
        const sectionContent = this.getAboutSectionContent();

        return sectionContent.map((item) => {
            return (
                <section className="aboutSection">
                    <div className="sectionTop">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className="sectionImageContent">
                        {item.images.map((imgSrc) => {
                            if (item.images.length === 2) {
                                return (
                                    <div className="sectionImages">
                                        <img src={imgSrc} alt="Section Image" />                                        
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="sectionImage">
                                        <img src={imgSrc} alt="Section Image" />    
                                    </div>
                                )
                            }
                        })}
                    </div>
                </section>
            )
        })
    }

    renderTechnologies = (content) => {
        return content.map((item) => {
            return (
                <div className="technologie">
                    <div className="logo">
                        <img src={item.logo} alt={item.name}/>
                    </div>
                    <div className="info">
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <AmBrainHeader headerClassName="fill"/>
                <div className="amBrainAboutContent">
                    <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                        <div className="aboutTopContent">
                            <div className="topText">
                                <p className="companyName">AmBr</p>
                                <p>IT OUTSOURCING</p>
                            </div>
                            <div className="topCircle">
                                <div className="bigCircle">
                                    <div className="bigCircleText">
                                        <p>ain</p>
                                        <p className="companyInfo">COMPANY</p>
                                    </div>
                                </div>
                                <div className="smallCircle"></div>
                            </div>
                        </div>
                    </Animated>
                    <div className="mainImage">
                        <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Main Image"/>
                    </div>
                    <div className="aboutSectionWrapper">
                        {this.renderAboutSections()}
                    </div>
                    <section className="aboutTechnologies">
                        <div className="technologiesTop">
                            <h2>Technologies we use</h2>
                        </div>
                        <div className="frontendTechnologiesWrapper">
                            <div className="technologieTop">
                                <h3>Frontend</h3>
                                <p>Depends on what type of project you want we will use JavaScript and one of these frameworks.</p>
                            </div>
                            <div className="frontendTechnologies">
                                {this.renderTechnologies(this.getFrontendTechnologies())}
                            </div>
                        </div>
                        <div className="backendTechnologiesWrapper">
                            <div className="technologieTop">
                                <h3>Backend</h3>
                                <p>And these thecnologies for Backend.</p>
                            </div>
                            <div className="backendTechnologies">
                                {this.renderTechnologies(this.getBackendTechnologies())}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default AmBrainAbout
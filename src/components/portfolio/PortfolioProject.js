import React from 'react';
import '../../css/components/portfolio/portfolioProject.css';
import Fade from 'react-reveal/Fade';


class PortfolioProject extends React.Component {

    renderPotrfolioProject = () => {
        const { projects } = this.props;

        return (
            projects.map((item, index) => {
                const frontEnd = item.frontEnd.map((name, index) => name && <img src={name} alt=""/>);
                const backEnd = item.backEnd.map((name, index) => name && <img src={name} alt=""/>);
                const fadeProps = {};
                
                if(index % 2){
                    fadeProps.left=true;
                }
                else {
                    fadeProps.right=true;
                }
                
                return (
                    <Fade {...fadeProps} >
                        <div className={`portfolioProject ${index % 2 ? 'projectRight' : 'projectLeft'}`}>
                            <div className="projectImage">
                                <img src={item.image} alt="project screen"/>
                            </div>
                            <div className="projectInfo">
                                <div className="projectName">
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.name}
                                    </a>
                                </div>
                                <div className="projectDesc">
                                    <p>{item.desc1}</p>
                                    <p>{item.desc2}</p>
                                </div>
                            </div>
                            <div className="usedTechnologies">
                                <div className="technologiesList">
                                  <h4>Used technologies</h4>
                                  {frontEnd}
                                  {backEnd}
                                </div>
                            </div>
                          <hr className="projectsHeadline"/>
                        </div>
                    </Fade>
                )
            })
        )
    }

    render() {
        return (
            <div className="portfolioProjectWrapper">
                {this.renderPotrfolioProject()}
            </div>
        )
    }
}

export default PortfolioProject;

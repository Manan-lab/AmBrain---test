import React from 'react';
import '../css/pages/amBrainJobs.css';
import AmBrainHeader from '../components/AmBrainHeader';
import JobCard from '../components/jobs/JobCard';
import jobsLeft from '../images/jobsLeft.jpg';
import jobsRight from '../images/jobsRight.jpg';
import {Link} from "react-router-dom";

class AmBrainJobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJobs: [],
        }
    }

    renderJobsContent = () => {
        return (
            <div className="openedJobsContent">
                {/*<div className="hiringContent">*/}
                {/*    <img alt="we are hiring"/>*/}
                {/*</div>*/}
                <div className="jobItemsBlock">
                    <div className="jobCardItem">
                        <JobCard jobName={'name'} jobDescription={'description'} />
                    </div>
                    {/*<div className="jobCardItem">*/}
                    {/*    <JobCard jobName={'name'} jobDescription={'description'} />*/}
                    {/*</div>*/}
                    {/*<div className="jobCardItem">*/}
                    {/*    <JobCard jobName={'name'} jobDescription={'description'} />*/}
                    {/*</div>*/}
                    {/*<div className="jobCardItem">*/}
                    {/*    <JobCard jobName={'name'} jobDescription={'description'} />*/}
                    {/*</div>*/}
                    {/*<div className="jobCardItem">*/}
                    {/*    <JobCard jobName={'name'} jobDescription={'description'} />*/}
                    {/*</div>*/}
                </div>
            </div>
        )

    }

    renderNoJobsContent = () => {
        return (
            <div className="noJobsContent">
                <div className="noJobsCircle"></div>
                <div className="noJobsText">
                    <h3 className="noJobsTitle">There are no job applications for now</h3>
                    <p>But thats okay! You can always send your CV for future job applications</p>
                </div>
                <div className="noJobsSendCV">
                    <Link to="/join-us">
                        <button className="joinUsBtn">JOIN US</button>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        const {currentJobs} = this.state;
        return (
            <div className="amBrainJobs">
                <AmBrainHeader headerClassName="transparent" isAnimated={true}/>
                <div className="amBrainJobContent">
                    <div className="imgWrapper"></div>
                    <div className="jobsTop">
                        <h3>Join our team</h3>
                        <div className="jobsTopText">
                            <p>AmBrain is not just a company, AmBarin is a strong team of professional, genuine, productive, smart and good individuals.</p>
                            <p>If you want to work with creative, genuine team, grow as a developer and fill your knowledge more every day, then we are glad to welcome you in our company.</p>
                        </div>
                        <div className="jobsTopImages">
                            <div className="leftImage">
                                <img src={jobsLeft} alt="Jobs"/>
                            </div>
                            <div className="rightImage">
                                <img src={jobsRight} alt="Jobs"/>
                            </div>
                        </div>
                    </div>
                    {currentJobs.length
                        ? this.renderJobsContent()
                        : this.renderNoJobsContent()
                    }
                </div>
            </div>
        )
    }
}

export default AmBrainJobs

import React from "react";
import PropTypes from 'prop-types';
import '../../css/components/jobs/jobCard.css'
import nail from '../../images/full-stack-developer1.jpg'

class JobCard extends React.Component {
    static propTypes = {
        jobName: PropTypes.string.isRequired,
        jobDescription: PropTypes.string.isRequired,
    }

    render() {
        const {jobName, jobDescription} = this.props;
        return (
            <div className="jobCard">
                <div className="nailBlock">
                    <div className="nailWrapper">
                        <img src={nail} alt="nail" />
                    </div>
                </div>
                <div className="cardHeader">Name</div>
                <div className="cardDescription">Description</div>
            </div>
        )
    }
}

export default JobCard
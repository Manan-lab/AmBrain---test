import React from "react";
import '../../css/components/team/teamMember.css';
import PropTypes from 'prop-types';

class TeamMember extends React.Component {
    static propTypes = {
        member: PropTypes.object.isRequired,
        backColor: PropTypes.string,
        isLeftPosition: PropTypes.bool,
    }

    static defaultProps = {
        backColor: '#DCE0E0',
        isLeftPosition: true
    }

    render() {
        const { isLeftPosition, member, backColor } = this.props;
        return (
            <div className="teamMemberBlock">
                <div className="teamMemberAvatarBlock" style={{order: isLeftPosition ? 1 : 2, backgroundColor: backColor}}>
                    <div className="memberAvatar">
                        <img src={member.avatar} alt="Member Avatar" />
                    </div>
                </div>
                <div className="memberInfo" style={{alignItems: isLeftPosition ? "flex-start": "flex-end" }}>
                    <p className="memberProfile">{member.profile}</p>
                    <p className="memberName">{member.name}</p>
                    <p className="separator" />
                    <p
                        className="memberDescription"
                        style={{textAlign: isLeftPosition ? "start": "end" }}
                    >
                        {member.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default TeamMember
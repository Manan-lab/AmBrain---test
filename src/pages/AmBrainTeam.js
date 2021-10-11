import React from "react";
import "../css/pages/amBrainTeam.css"
import AmBrainHeader from "../components/AmBrainHeader";
import TextRevealingAnim from "../components/animations/TextRevealingAnim";
import TeamMember from "../components/team/TeamMember";
import PropTypes from 'prop-types';
import userLogo from '../images/teemMember.png';
import userLogo2 from '../images/team-single-1.png';


class AmBrainTeam extends React.Component {

    static propTypes = {
        members: PropTypes.array,
    }

    static defaultProps = {
        members: [
            {
                profile: 'Ceo & Founder',
                avatar: userLogo,
                name: 'Name',
                description: 'Loren IpsumLoren IpsumLoren IpsumLoren IpsumLoren IpsumLoren IpsumLoren Ipsum',
                backColor: '#DCE0E0'
            },
            {
                profile: 'Full Stack Developer',
                avatar: userLogo2,
                name: 'Name',
                description: 'Loren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren Ipsum',
                backColor: '#ff000047'
            } ,
            {
                profile: 'Front-End Developer',
                avatar: userLogo,
                name: 'Name',
                description: 'Loren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren Ipsum',
                backColor: '#88d1d18a'
            },
            {
                profile: 'Front-End Developer',
                avatar: userLogo,
                name: 'Name',
                description: 'Loren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren IpsumLoren Ipsum Loren Ipsum',
                backColor: '#edc91861'
            }
        ],
    }

    constructor(props) {
        super(props);
        this.renderTeamMembersBlock = this.renderTeamMembersBlock.bind(this);
    }

    renderTeamMembersBlock() {
        const { members } = this.props;

        return members.map((member, index) => {
            return (
                <div className="teamMemberItem" key={index}>
                    <TeamMember
                        member={member}
                        backColor={member.backColor}
                        isLeftPosition={ index%2 === 0}
                    />
                </div>
            )
        });
    }

    render() {
        return (
            <div className="amBrainTeamSection">
                <AmBrainHeader
                    headerClassName="transparent"
                    isAnimated={true}
                />
                <div>
                    <div className="welcomeContent">
                        <div className="animItem">
                            <TextRevealingAnim
                                startedWord="Welcome"
                                animText="to AmBrain team ..."
                                fontSize={'4rem'}
                                color={'#F7F7F7'}
                            />
                        </div>
                    </div>
                    <div className="teamMemberContent">
                        <div className="teamHeader">
                            
                        </div>
                        <div className="teamMembersBlock">
                            {this.renderTeamMembersBlock()}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default AmBrainTeam
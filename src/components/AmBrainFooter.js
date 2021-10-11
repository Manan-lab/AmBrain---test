import React from "react";
import "../css/components/amBrainFooter.css"
import amBrainLogo from "../images/amBrainLogo6.png";
import {
    PhoneOutlined,
    MailOutlined,
    RollbackOutlined,
    LinkedinFilled,
    FacebookFilled,
    SkypeFilled,
} from '@ant-design/icons';
import PageUpButton from "./pageUpAndDown/PageUpButton";

class AmBrainFooter extends React.Component {
    render() {
        return (
            <div className="amBrainFooter">
                <div className="firstContent">
                    <div className="logoContent">
                        <img src={amBrainLogo} alt="AmBrainLogo"/>
                    </div>
                    <div className="infoTabs">
                        <div className="serviceContent">
                            <h6> Services</h6>
                            <p className="phoneInfo">
                                Web Development
                            </p>
                            <p>
                                Project Management
                            </p>
                            <p className="addressContent">
                                Data Science
                            </p>
                            <p className="addressContent">
                                Loren ipsum
                            </p>
                        </div>

                        <div className="contactContent">
                            <h6> Contact information</h6>
                            <div className="phoneInfo">
                                <PhoneOutlined/>
                                <p>+374 96 415815</p>
                            </div>
                            <div>
                                <MailOutlined/>
                                <p>info@ambrain.org</p>
                            </div>
                            <div className="addressContent">
                                <RollbackOutlined/>
                                <p className="address">
                                    <span>11b Avet Avetisyan st.</span>
                                    <span>Yerevan, 0033</span>
                                    <span>Armenia</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="secondContent">
                    <div className="copyrights">
                        Copyrights © 2020 All Rights Reserved.
                    </div>
                    <div className="followUs">
                        <h6> Follow us </h6>
                        <div>
                            <div>
                                <LinkedinFilled />
                            </div>
                            <div>
                                <FacebookFilled />
                            </div>
                            <div>
                                <SkypeFilled />
                                <div className="skypeHover" />
                            </div>
                        </div>
                    </div>
                    <PageUpButton />
                </div>

            </div>
        )
    }
}

export default AmBrainFooter

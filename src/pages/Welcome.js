import React from "react";
import AmBrainHeader from "../components/AmBrainHeader";
import "../css/pages/welcome.css"
import companyImages from "../images/companyImages.png"
import ShortInfo from "../components/welcome/ShortInfo";
import ContactUs from "../components/ContactUs";
import PageDownButton from "../components/pageUpAndDown/PageDownButton";
import { Animated } from "react-animated-css";

class Welcome extends React.Component {

    render() {
        return (
            <div className="amBrainWelcome">
                <div className="mainContent">
                   <AmBrainHeader
                       headerClassName ={'transparent'}
                       isAnimated ={true}
                   />
                    <div className="bodyContent">
                        <div className="acquaintance">
                            <div className="infoContent">
                                <Animated 
                                    animationIn="fadeInUp"
                                    animationOut="fadeOutUp" 
                                    animationInDuration={800} 
                                    animationOutDuration={800} 
                                    isVisible={true} 
                                >
                                    <h1>Welcome to AmBrain</h1>
                                    <h6>It Outsourcing company</h6>
                                <p>Start to realize your Perfect Website with AmBrain. You can get advice from a team of
                                    professional developers to implement your Perfect Website.</p>
                                <p className="goText">Lets Work Together</p>
                                </Animated>
                                
                            </div>
                            <div className="imageContent">
                                <img src={companyImages} alt="company images"/>
                            </div>
                        </div>
                        <div className="pageDownContent">
                            <PageDownButton />
                        </div>
                    </div>
                </div>
                <ShortInfo/>
                <div className="contactSection" id="contactUs">
                    <div className="contactContent">
                        <ContactUs/>
                        {/*<AmBrainLocation/>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome

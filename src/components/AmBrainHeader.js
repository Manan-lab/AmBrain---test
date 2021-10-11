import React from "react";
import amBrainWhiteLogo from "../images/amBrainLogo5.png";
import amBrainBlackLogo from "../images/amBrainLogoBlack2.png";
import "../css/components/amBrainHeader.css";
import { Link } from "react-router-dom";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { NavHashLink } from 'react-router-hash-link';


const headerClassName1 = 'transparentHeader fade';
const headerClassName2 = 'fillHeader fade';
const menuClassName1 = 'transparentMenu mobileMenuList';
const menuClassName2 = 'filledMenu mobileMenuList';

class AmBrainHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            headerClassName:  (props.headerClassName === 'transparent' ? headerClassName1 : headerClassName2)  || headerClassName2,
            menuClassName: (props.headerClassName === 'transparent' ? menuClassName1 : menuClassName2) || menuClassName2,
            amBrainLogo: (props.headerClassName === 'transparent' ? amBrainWhiteLogo : amBrainBlackLogo)
                        || amBrainBlackLogo,
            isAnimated: props.isAnimated || false,
            showMobileMenu: false,
        }
        this.pageScrolling = this.pageScrolling.bind(this);
    }

    componentDidMount() {
       if (this.props.isAnimated) {
           window.addEventListener('scroll', this.pageScrolling)
       }
       window.scrollTo(0, 0);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.pageScrolling)
    }

    pageScrolling() {
        const {headerClassName} = this.state;

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

            if (headerClassName === headerClassName1) {
                this.setState({
                    headerClassName: headerClassName2,
                    menuClassName: menuClassName2,
                    amBrainLogo: amBrainBlackLogo
                })
            }
        } else {

            if (headerClassName === headerClassName2) {
                this.setState({
                    headerClassName: headerClassName1,
                    menuClassName: menuClassName1,
                    amBrainLogo: amBrainWhiteLogo
                })
            }
        }

    }

    toggleMobileMenu = () => {
        this.setState({ showMobileMenu: !this.state.showMobileMenu })
    }

    closeMobileMenu = () => {
        this.setState({ showMobileMenu: false })
    }

    render() {
        const { 
            headerClassName,
            amBrainLogo, 
            showMobileMenu,
            menuClassName
        } = this.state;

        return (
            <>
                <div className={headerClassName}>
                    <div className="logoContent">
                        <Link to={"/"}>
                            <img 
                                src={amBrainLogo} 
                                alt="AmBrainLogo"/>
                        </Link>
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/portfolio">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/team">Team</Link>
                                </li>
                                <li>
                                    <Link to="/jobs">Jobs</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <button >
                                <NavHashLink to="/#contactUs">
                                    Contact us
                                </NavHashLink>
                            </button>
                        </div>
                    </div>
                    <div 
                        className="mobileMenuIcon"
                        onClick={this.toggleMobileMenu}
                    >
                        <MenuOutlined />
                    </div>
                </div>
                <div className="mobileMenuListWrapper">
                    {showMobileMenu &&
                        <div className={menuClassName}>
                            <div 
                                className="closeMenuList"
                                onClick={this.closeMobileMenu}
                            >
                                <CloseOutlined />
                            </div>
                            <nav className="mobileMenuNavbar">
                                <ul>
                                    <li>
                                        <Link to="/portfolio">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to="/team">Team</Link>
                                    </li>
                                    <li>
                                        <Link to="/jobs">Jobs</Link>
                                    </li>
                                    <li>
                                        <Link to="/about">About</Link>
                                    </li>
                                </ul>
                                <div className="mobileContactUs">
                                    <button className="mobileContactUsBtn">
                                        <NavHashLink
                                                to="/#contactUs"
                                                onClick={this.closeMobileMenu}
                                        >
                                            Contact us
                                        </NavHashLink>
                                    </button>
                                </div>
                            </nav>
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default AmBrainHeader;

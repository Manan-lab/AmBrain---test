import React from "react";
import "../../css/components/welcome/shortInfo.css";
import {ThunderboltOutlined, TeamOutlined, DesktopOutlined}  from '@ant-design/icons';

const info = [
    {
        title: 'Why you should work with us',
        iconComponent: <TeamOutlined />,
        description: "We are going to make real your all creative ideas. You will work with professional, caring, productive and wholesome team, who will carry your project until the end."
    },
    {
        title: 'What are we doing',
        iconComponent: <DesktopOutlined />,
        description: "We are creating new products for your business, improving and fixing your projects, working as fast and productive as possible, giving our recommendations and helping you understand your needs in your projects and business."
    },
    {
        title: 'Our mission',
        iconComponent: <ThunderboltOutlined />,
        description: 'Build your project fast, with high quality, care and love is our main mission.'
    },
];

class ShortInfo extends React.Component {
    
    render() {
        return (
            <div className="shortInfoContent">
                <div className="cardsContent">
                    {info.map((item, index) => {
                        return (
                            <div key={index} className="infoCard">
                                <div className="cardIcon">{item.iconComponent}</div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

}

export default ShortInfo

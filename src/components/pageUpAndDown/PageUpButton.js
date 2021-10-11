import React from "react";
import { UpOutlined } from '@ant-design/icons';
import "../../css/components/pageUpAndDown/pageUpButton.css"

class PageUpButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showButton: false,
        }
        this.goTop = this.goTop.bind(this);
        this.pageScrolling = this.pageScrolling.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.pageScrolling)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.pageScrolling)
    }

    pageScrolling() {
        const { showButton } = this.state;

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

            if (!showButton) {
                this.setState({ showButton:true })
            }
        } else {

            if (showButton) {
                this.setState({showButton: false})
            }
        }
    }

    goTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        const { showButton } = this.state;
        return (
            showButton && (
                <div className="pageUp" onClick={this.goTop}>
                    <UpOutlined/>
                </div>
            )
        )
    }
}

export default PageUpButton
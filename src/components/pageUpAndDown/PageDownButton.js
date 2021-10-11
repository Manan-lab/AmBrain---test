import React from "react";
import {DownOutlined} from '@ant-design/icons';
import "../../css/components/pageUpAndDown/pageDownButton.css"

class PageDownButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showButton: true,
        }
        this.pageScrolling = this.pageScrolling.bind(this);
        this.pageDown = this.pageDown.bind(this);
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
            if (showButton) {
                this.setState({ showButton: false })
            }
        } else {
            if (!showButton) {
                this.setState({ showButton: true })
            }
        }
    }

    pageDown() {
        document.body.scrollTop = document.body.clientHeight;
        document.documentElement.scrollTop = document.body.clientHeight;
    }

    render() {
        const { showButton } = this.state;
        return (
            showButton && (
                <div className="pageDown" onClick={this.pageDown}>
                    <DownOutlined/>
                </div>
            )
        )
    }
}

export default PageDownButton
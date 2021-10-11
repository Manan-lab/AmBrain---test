import React from "react";
import "../css/pages/amBrainPortfolio.css"
import AmBrainHeader from "../components/AmBrainHeader";
import PortfolioWrapper from "../components/portfolio/PortfolioWrapper";

class AmBrainPortfolio extends React.Component {
    render() {
        return(
            <div>
                <AmBrainHeader headerClassName="fill"/>
                <div className="amBrainPortfolioContent">
                    <PortfolioWrapper />
                </div>
            </div>
        )
    }
}

export default AmBrainPortfolio
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import AmBrainFooter from "./components/AmBrainFooter";
import AmBrainTeam from "./pages/AmBrainTeam";
import AmBrainJobs from "./pages/AmBrainJobs";
import AmBrainPortfolio from "./pages/AmBrainPortfolio";
import AmBrainAbout from "./pages/AmBrainAbout";
import JoinUs from "./pages/JoinUs"

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div className="sectionContainer">
                <Route exact path="/" component={Welcome} />
                <Route  exact path="/team" component={AmBrainTeam} />
                <Route exact path="/jobs" component={AmBrainJobs} />
                <Route exact path="/portfolio" component={AmBrainPortfolio} />
                <Route exact path="/about" component={AmBrainAbout} />
                <Route exact path="/join-us" component={JoinUs} />
            </div>
            <AmBrainFooter />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

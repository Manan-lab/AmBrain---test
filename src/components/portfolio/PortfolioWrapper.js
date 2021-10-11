import React from 'react';
import PortfolioProject from './PortfolioProject';
import ubego from '../../images/project/ubego.png';
import payllers from '../../images/project/payllers.png';
import uboard from '../../images/project/uboard.png';
import smartReviews from '../../images/project/smart_review.png';
import sboard from '../../images/project/sboard.png';
import sboardShot from '../../images/project/sboard-shot.png';
import ubegoShot from '../../images/project/ubego-shot.png';
import payllersShot from '../../images/project/payllers-shot.png';
import smartReviewsShot from '../../images/project/smart-reviews-shot.png';
import uboardShot from '../../images/project/uboard-shot.png';
import '../../css/components/portfolio/portfolioWrapper.css';

class PortfolioWrapper extends React.Component {

    getPortfolioProjects = () => {
        return [
            {
                image: ubegoShot,
                logo: ubego,
                link: 'https://ubego.ru',
                name: 'Ubego',
                desc1: 'Ubego is online platform to find, create or present narrative excursions with game elements in your city that called quest.',
                desc2: 'Participants receive assignments and give answers in the Ubego mobile app.  One phone is enough to complete the quest. ',
                frontEnd: ['https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg'],
                backEnd: ['https://cdn.worldvectorlogo.com/logos/laravel-2.svg'],
            },
            {
                image: payllersShot,
                logo: payllers,
                link: 'https://payllers.com',
                name: 'Payllers',
                desc1: 'Payllers is a trading network that consists of a module of an Internet trading platform and online payment acceptance, where each of you can register as a seller, and sell your digital product (game keys, gifts, skins, etc.) absolutely free of charge.',
                desc2: '',
                frontEnd: ['https://cdn.worldvectorlogo.com/logos/vue-js-1.svg'],
                backEnd: ['https://cdn.worldvectorlogo.com/logos/symfony.svg'],
            },
            {
                image: smartReviewsShot,
                logo: smartReviews,
                link: 'https://smart.reviews',
                name: 'Smart.Reviews',
                desc1: 'Smart.Reviews creating a platform that aims to collect the most objective and trustworthy information about businesses and products.',
                desc2: ' Its goal is to help users obtain reliable information about a business that they intend to buy products or services from.',
                frontEnd: [''],
                backEnd: ['https://cdn.worldvectorlogo.com/logos/laravel-2.svg'],
            },
            {
                image: sboardShot,
                logo: sboard,
                link: 'https://sboard.online',
                name: 'Sboard',
                desc1: 'Sboard is online board for tutor. A unique interactive platform for online collaboration, lessons and extra classes without losing their quality.',
                desc2: 'Sboard has intuitive interface, formula editor that allows you to quickly create mathematical formulas, just like in Word or LaTeX, proven tools and images adding functionality.',
                frontEnd: ['https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'],
                backEnd: ['https://cdn.worldvectorlogo.com/logos/laravel-2.svg', 'https://cdn.worldvectorlogo.com/logos/nodejs-1.svg'],
            },
            {
                image: uboardShot,
                logo: uboard,
                link: 'https://uboard.am',
                name: 'UBoard',
                desc1: 'UBoard provides you a platform where you can easly browse products and sell them.',
                desc2: 'UBoard advatages are that you can find products with easy and fast search, save fields with selected filters and restore them whenever you need and create your own account with your announcements.',
                frontEnd: ['https://cdn.worldvectorlogo.com/logos/react-2.svg'],
                backEnd: ['https://cdn.worldvectorlogo.com/logos/laravel-2.svg'],
            },
        ]
    }

    render() {
        return (
            <div className="portfolioWrapper">
                <div className="portfolioHeader">
                    <div className="title">
                        <div className="circles">
                            <div className="smallCircle"></div>
                            <div className="bigCircle"></div>
                        </div>
                        <h1> PORTFOLIO </h1>
                    </div>
                    <hr className="portfolioHeadline" />
                </div>
                <div className="portfolioTop">
                    <h3 className="portfolioTitle">Here are some projects from our portfolio</h3>
                </div>
                <div className="portfolioProjects">
                    <PortfolioProject
                        projects = { this.getPortfolioProjects() }
                    />
                </div>
            </div>
        )
    }
}

export default PortfolioWrapper;

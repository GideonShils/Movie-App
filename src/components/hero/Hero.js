import React from 'react';
import HeroButton from '../hero-button';
import './style.css';
import '../../global.css';

/**
 * @render react
 * @name Hero
 * @description Netflix's Hero banner, shows our featured content.
 * @example
 * <Hero
 *   title="Season 66 will be available soon!"
 *   description="Lorem ipsum dolor sit amet hey! id quam sapiente unde voluptatum alias vero debitis, magnam quis quod."
 * />
 */
const Hero = ({ title, description }) => (
  <div
    className="Hero"
    style={{ backgroundImage: 'url(http://bit.ly/2t7CcCl)' }}
  >
    <div className="content">
      <img
        className="logo"
        src="http://bit.ly/2oJGJFz"
        alt="movie background"
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="button-wrapper">
        <HeroButton primary text="Watch now" />
        <HeroButton primary={false} text="+ My list" />
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);

Hero.defaultProps = {
  title: 'Like a normal action movie but packed with extra action. Certified awesome!',
}

export default Hero;

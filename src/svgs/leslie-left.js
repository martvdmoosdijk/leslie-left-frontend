import React, { Component } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs/lib/anime.es';

class LeslieLeft extends Component {
  constructor(props) {
    super(props);

    this.topBorder = React.createRef();
    this.rightBorder = React.createRef();
    this.bottomBorder = React.createRef();
    this.leftBorder = React.createRef();
    this.text = React.createRef();
  }

  componentDidMount() {
    window.onscroll = () => {
      this.updateParallax(this.text, -4);
      this.updateParallax(this.bottomBorder, -6.0);
      this.updateParallax(this.leftBorder, -6.0);
      this.updateParallax(this.topBorder, -6.0);
      this.updateParallax(this.rightBorder, -6.0);
    };
  }

  getScrollPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    }
    return (document.documentElement || document.body.parentNode || document.body).scrollTop;
  }

  updateParallax(el, displace) {
    const scrollPosition = this.getScrollPosition();
    if (scrollPosition <= window.innerHeight) {
      anime({
        targets: el.current,
        translateY: scrollPosition / displace,
        duration: 0,
        easing: 'linear',
      });
    }
  }

  prepareIntroAnim() {
    anime.set(this.bottomBorder.current, { x: 530, width: 0 });
    anime.set(this.leftBorder.current, { y: 180, height: 0 });
    anime.set(this.topBorder.current, { width: 0 });
    anime.set(this.rightBorder.current, { height: 0 });
    anime.set(this.text.current, { opacity: 0 });
  }

  introAnim() {
    const duration = 1800;

    anime({
      targets: this.bottomBorder.current,
      duration,
      easing: 'easeInOutExpo',
      x: [530, 0],
      width: [0, 530],
    });
    anime({
      targets: this.leftBorder.current,
      duration,
      easing: 'easeInOutExpo',
      y: [180, 0],
      height: [0, 180],
    });
    anime({
      targets: this.topBorder.current,
      duration,
      easing: 'easeInOutExpo',
      width: [0, 600],
    });
    anime({
      targets: this.rightBorder.current,
      duration,
      easing: 'easeInOutExpo',
      height: [0, 120],
    });
    anime({
      targets: this.text.current,
      duration,
      easing: 'easeInOutExpo',
      opacity: [0, 1],
    });
  }

  render() {
    const { className } = this.props;

    return (
      <svg className={className} viewBox="0 0 600 180" fill="white" overflow="visible" xmlns="http://www.w3.org/2000/svg">
        <text fontFamily="Lato" fontSize="85px" x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" ref={this.text}>LESLIE LEFT</text>
        <rect x="0" y="0" width="600" height="10" ref={this.topBorder} />
        <rect x="590" y="0" width="10" height="120" ref={this.rightBorder} />
        <rect x="0" y="170" width="530" height="10" ref={this.bottomBorder} />
        <rect x="0" y="0" width="10" height="180" ref={this.leftBorder} />
      </svg>
    );
  }
}

LeslieLeft.defaultProps = {
  className: '',
};

LeslieLeft.propTypes = {
  className: PropTypes.string,
};

export default LeslieLeft;

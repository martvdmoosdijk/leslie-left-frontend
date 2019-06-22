import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MQ_TABLET } from '../styles/variables';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  // margin: 20px 0;

  // @media (min-width: ${MQ_TABLET}px) {
  //   margin: 40px 0;
  // }
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  width: 0px;
  height: 0px;

  top: ${props => (props.alignment === 'center' ? '50%' : '0')};
  left: ${props => (props.alignment === 'center' ? '50%' : '0')};
  transform: ${props => (props.alignment === 'center' ? 'translate(-50%, -50%)' : 'translate(0, 0)')};
`;

class PromoVideo extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
    this.youtubeFrame = React.createRef();

    this.resizeYoutubeFrame = this.resizeYoutubeFrame.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeYoutubeFrame);
    this.resizeYoutubeFrame();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeYoutubeFrame);
  }

  resizeYoutubeFrame() {
    const containerHeight = this.container.current.offsetHeight;
    const targetHeight = (this.container.current.offsetWidth / 16) * 9;
    const height = Math.min(containerHeight, targetHeight);
    const width = (height / 9) * 16;
    this.youtubeFrame.current.style.width = `${width}px`;
    this.youtubeFrame.current.style.height = `${height}px`;
  }

  // TODO: Iframe loaded then show video
  render() {
    const { embedCode, alignment } = this.props;

    return (
      <Container ref={this.container}>
        <YoutubeFrame
          ref={this.youtubeFrame}
          title="Promo Video"
          type="text/html"
          src={`https://www.youtube.com/embed/${embedCode}?modestbranding=1`}
          frameBorder="0"
          allowFullScreen
          alignment={alignment}
        />
      </Container>
    );
  }
}

PromoVideo.defaultProps = {
  embedCode: '',
  alignment: 'center',
};

PromoVideo.propTypes = {
  embedCode: PropTypes.string,
  alignment: PropTypes.oneOf(['center']),
};

export default PromoVideo;

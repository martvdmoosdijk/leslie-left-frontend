import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  justify-content: center;
`;

class Youtube extends Component {
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
    const width = this.container.current.offsetWidth;
    const height = (width / 16) * 9;
    this.youtubeFrame.current.style.width = `${width}px`;
    this.youtubeFrame.current.style.height = `${height}px`;
  }

  // TODO: Iframe loaded then show video
  render() {
    const { embedCode } = this.props;

    return (
      <Container ref={this.container}>
        <iframe
          ref={this.youtubeFrame}
          title="Promo Video"
          type="text/html"
          src={`https://www.youtube.com/embed/${embedCode}?modestbranding=1`}
          frameBorder="0"
          allowFullScreen
        />
      </Container>
    );
  }
}

Youtube.defaultProps = {
  embedCode: '',
};

Youtube.propTypes = {
  embedCode: PropTypes.string,
};

export default Youtube;

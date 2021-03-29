import ImageGallery from "react-image-gallery";
import React from "react";

class Gallery extends React.Component {
  render() {
    return (
      <ImageGallery
        showPlayButton={false}
        showFullscreenButton={false}
        infinite={false}
        items={this.props.images}
      />
    );
  }
}
export default Gallery;

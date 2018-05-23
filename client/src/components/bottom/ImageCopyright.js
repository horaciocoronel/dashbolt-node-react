import React, { Component } from 'react'

export class ImageCopyright extends Component {
  render() {
    let imageData = this.props.imageData;
    return (
      <div className="unsplash-copy">
      Photo by <a href={`https://unsplash.com/photos/${imageData.photoid}`}>{imageData.fullname}</a> on <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">Unsplash</a>
      </div>
    )
  }
}

export default ImageCopyright;
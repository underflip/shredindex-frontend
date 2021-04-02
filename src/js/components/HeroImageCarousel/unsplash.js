import React, { Component } from 'react';
import Flickity from 'react-flickity-component';
import ResortMainInfo from '../config/resort-main-config';

const flickityOptions = {
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  selectedAttraction: 0.2,
  friction: 0.8,
  imagesLoaded: true,

};

export default class Unsplash extends Component {
  constructor() {
    super();
    this.state = {
      imgs: [],
    };
  }

  componentDidMount() {
    const { name } = ResortMainInfo;
    const season = 'winter';
    fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=20&query=${name} ${season}&client_id=u0nFhizQFAypqKFo__GIgJfU02zywt5iEVbCQuie174`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ imgs: data.results });
      })
      .catch((err) => {
        console.log('Error happened during fetching!', err);
      });
  }

  render() {
    return (
      <div className="main-content">
        <Flickity
          className="hero-image-carousel pl-2 pr-2 pt-2"
          options={flickityOptions}
        >
          {this.state.imgs.map((img) => <img className="d-block border-radius-md pl-2 pr-2 carousel-cell-height" src={img.urls.small} key={img.id} />)}
          <></>
        </Flickity>
      </div>
    );
  }
}

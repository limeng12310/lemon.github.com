import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/build/image-gallery.css';
import './css/ImgGallery.css';
import bannerOne from './img/bannerTwo.png';
import bannerTwo from './img/bannerOne.png';

class ImgGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: true,
      showIndex: true,
      slideOnThumbnailHover: true,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showNav: true
      // selected: 0
    };
    this.images = [bannerOne, bannerTwo, bannerOne, bannerTwo];
  }

  render() {
    const style = {
      imgGallery: {
        width: '100%'
      }
    };
    const imageItems = [];
    for (let i = 0, Len = this.images.length; i < Len; i ++) {
      imageItems.push({
        original: this.images[i]
      });
    }
    return (
      <div style={style.imgGallery}>
        <section className="app">
          <ImageGallery
            id="#gallery"
            ref={i => this._imageGallery = i}  // eslint-disable-line
            items={imageItems}
            lazyLoad={false}
            infinite={this.state.infinite}
            showBullets={this.state.showBullets}
            showThumbnails={this.state.showThumbnails}
            showIndex={this.state.showIndex}
            showNav={this.state.showNav}
            slideInterval={4000}
            autoPlay={this.state.isPlaying}
            slideOnThumbnailHover={this.state.slideOnThumbnailHover}
          />
        </section>
      </div>
    );
  }
}
export default ImgGallery;
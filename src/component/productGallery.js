import ImageGallery from 'react-image-gallery';

const ProductGallery = ({images}) => {
    return ( 
        <div className='container images-gallery mt-5 '>
            {images &&
        <ImageGallery items={images}  
        thumbnailPosition="left"
        showFullscreenButton= {false}
        showPlayButton= {false}
        showBullets= {false}
        showNav={false}
        disableThumbnailScroll={true}
         lazyLoad = {true}
         
        />
            }
        </div>
     );
}
 
export default ProductGallery;


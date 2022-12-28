import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
const Slider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="carousel">
      {images.length != 0 ? (
        <Carousel>
          {images.map((slide) => (
            <Carousel.Item key={slide.id} >
            <div>
              <img src={slide.img} alt= {"slide" + slide.id}/>
            </div>
          </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-200">
          <Spinner animation="border" role="status" />
        </div>
      )}
    </div>
  );
};

export default Slider;

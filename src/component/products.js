import ProductGallery from "./productGallery";
import { Row, Col} from "react-bootstrap";
import PaginatedItems from "./pagination";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductDetails from "./productDetails";
import { Spinner } from "react-bootstrap";
const Products = () => {
    const {id} =useParams();
    const [products,setProducts] = useState([]);

    useEffect(() => {
      
        axios
          .get(`https://63189f2cf6b281877c71eab0.mockapi.io/products/${id}`)
          .then((res) => {
            setProducts(res.data);
            window.scrollTo({ top: 0, behavior: "smooth" });

          })
          .catch((err) => {
            console.log(err);
            window.scrollTo({ top: 0, behavior: "smooth" });

          });
      }, [id]);
      let images = []
      for (let i =0 ; i < products?.img?.length;i++){
        images.push({original:products.img[i],
            thumbnail: products.img[i]})
      }
    return ( 
      <div>
     {products.length != 0 ?(
        <div className="container mt-5">
        <Row>
     <Col md={7} sm={12}>
    <ProductGallery images={images}/> 
    </Col>
    <Col md={5} sm={12}>
    <ProductDetails  products={products}/>
    </Col>
    </Row>
    <Row>
<PaginatedItems />
    </Row>

    </div>) : (
      <div className="d-flex justify-content-center align-items-center h-200 " style = {{height : "61vh"}}>
        <Spinner animation="border" role="status" />
      </div>
    ) }
    </div>
    
    );
}
 
export default Products;
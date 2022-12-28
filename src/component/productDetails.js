import heart from "../assets/SVG/heart.svg"
import ReactStars from 'react-stars'
import ProductProperties from "./productProperties";
import bank from "../assets/bank.png"
import shipping from "../assets/SVG/shipping.svg";
import returning from "../assets/SVG/return.svg";
import { useState } from "react";
const ProductDetails = ({products}) => {
    const [itemCount , setItemCount] = useState(1);
    const fullName = document.querySelectorAll(".fullName")
    const banks =document.querySelectorAll(".banks");
    const memory =document.querySelectorAll(".memory");
    const colors =document.querySelectorAll(".colors");
    const insurance = document.querySelectorAll(".insurance");
    const handleClick = (e) => {
//         let select =fullName ;
//         let stringSelect ="fullName";
//         if (e.target.closest(".product_card").classList.contains("fullName")){
// select = fullName;
// stringSelect="fullName";
//         }
//         if (e.target.closest(".product_card").classList.contains("banks")){
//             select=banks;
//             stringSelect= "banks"
//         }
//         if (e.target.closest(".product_card").classList.contains("memory")){
//             select = memory;
//             stringSelect="memory";
//         }

//         if (e.target.closest(".product_card").classList.contains("colors")){
//             select =colors;
//             stringSelect="colors"
//         }
//         if (e.target.closest(".product_card").classList.contains("insurance")){
//             select=insurance;
//             stringSelect="insurance";
//         }

//         if (e.target.closest(".product_card").classList.contains(stringSelect)){
//             select.forEach(selected => {
//                 selected.className ="product_card " + stringSelect;
//             });
        
//             e.target.closest(".product_card").className ="product_card fullName product_card-selected"
//         }
        
        if (e.target.closest(".product_card").classList.contains("fullName")){
            fullName.forEach(bank => {
                bank.className ="product_card fullName"
            });
        
            e.target.closest(".product_card").className ="product_card fullName product_card-selected"
        }
if (e.target.closest(".product_card").classList.contains("banks")){
        banks.forEach(bank => {
            bank.className ="product_card banks"
        });
    
        e.target.closest(".product_card").className ="product_card banks product_card-selected"
    }
    if (e.target.closest(".product_card").classList.contains("memory")){
        memory.forEach(bank => {
            bank.className ="product_card memory"
        });
    
        e.target.closest(".product_card").className ="product_card memory product_card-selected"
    }
    if (e.target.closest(".product_card").classList.contains("colors")){
        colors.forEach(bank => {
            bank.className ="product_card colors"
        });
    
        e.target.closest(".product_card").className ="product_card colors product_card-selected"
    }
    if (e.target.closest(".product_card").classList.contains("insurance")){
        insurance.forEach(bank => {
            bank.className ="product_card insurance"
        });
    
        e.target.closest(".product_card").className ="product_card insurance product_card-selected"
    }
}

   const  handelAddButton =() =>{
        setItemCount(itemCount +1 );
    }
   const  handelRemoveButton = () =>{
    if(itemCount > 0)
        setItemCount(itemCount - 1 );
    }
    return (  <div className="container mt-5 product_details" > 
    <div className="d-flex justify-content-between">
        <div className="title">apple</div>
        <div><img src={heart} /></div>
    </div>
    <div className="product_name"> {products.name}</div>
    <div className="d-flex align-items-center">
    <ReactStars
  count={5}
  value={products.numberOfStars}
  size={26}
  color2={'#ffd700'}
  edit={false} 
  />
  <div className="product-review">{`(${products.numberOfReviews} reviews)`}</div>
  </div>
  <div className={products.inStock > 0 ? "product_price" : "product_price priceless"}>{`$ ${products.priceAfterdiscount?.toFixed(2)}`}</div>
  <div className={products.inStock > 0 ? "products_Instock m-0" : "products_outstock"}>{products.inStock > 0 ? "In Stock" : "Out of Stock"}
</div>
<div className="d-flex item_count_container">
    <button  className="add_item" onClick={handelAddButton}>+</button>
    <div className="item_count">{itemCount}</div>
    <button className="remove_item" onClick={handelRemoveButton}>-</button>
   
</div>
<div className="d-flex">
    <ProductProperties title={"Full price"}   handleClick={handleClick}  className ="fullName"/>
    <ProductProperties title={"installments"}   handleClick={handleClick} className ="fullName" selected={true}/>
</div>
<div className="d-flex">
    <ProductProperties  handleClick={handleClick} className="banks" src={bank}   selected={true}/>
    <ProductProperties handleClick={handleClick} className="banks" src={bank}/>
    <ProductProperties handleClick={handleClick} className="banks" src={bank}/>
    <ProductProperties handleClick={handleClick} className="banks" src={bank}/>
</div>
<div>memory</div>
<div className="d-flex">
    <ProductProperties className="memory" handleClick={handleClick} title={"128GB"} subtitle={"$999.00"} selected={true}/>
    <ProductProperties className="memory" handleClick={handleClick} title={"256GB"} subtitle={"$999.00"}/>
    <ProductProperties className="memory" handleClick={handleClick} title={"512GB"} subtitle={"$999.00"}/>
    <ProductProperties className="memory" handleClick={handleClick} title={"1TB"} subtitle={"$999.00"}/>
</div>
<div>color</div>
<div className="d-flex"> 
<ProductProperties className="colors" handleClick={handleClick} title="Silver" color="silver" />
<ProductProperties className="colors" handleClick={handleClick} title="Sierra Blue" color="blue" selected={true} />

</div>
<div>insurance</div>
<div className="d-flex"> 
<ProductProperties title="1 year" className="insurance" handleClick={handleClick} subtitle="$99.00"/>
<ProductProperties title="2 year" className="insurance" handleClick={handleClick} subtitle="$159.00" selected={true} />
</div>
<div>
<button className={products.inStock > 0 ? "button_add_to_cart" : "button_add_to_cart cartout"}>
          Add To Cart
        </button>
        </div>
      <hr />
      <div className="product_shipping">
        <img src={shipping} className="me-2" />
        Free shipping, arrives by Tue, Nov 23
      </div>
      <div className="product_shipping">
        <img src={returning} className="me-2" />
        Free 10-day return window starts Dec 26th Details
      </div>
    </div>);
}
 
export default ProductDetails;
const ProductProperties = ({title = "",src ="",subtitle ="",color ="",selected ="",className,handleClick}) => {
    return ( <div  className={selected ? `product_card product_card-selected ${className}` : `product_card ${className}`} onClick={(e) => {handleClick(e)}}>
    <div >{title}</div>
    <div>{subtitle}</div>
    <div >{src &&<img src={src} />}</div>
    <div className={color == "silver" ? "silver" : color == "blue" ? "blue" : ""}></div>

  </div> );
}
 
export default ProductProperties;
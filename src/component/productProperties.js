const ProductProperties = ({title = "",src ="",subtitle ="",color ="",selected ="",className,handleClick}) => {
    if(color){
        if(color == "silver"){
        const color = "silver"}
        else {
        const color = "blue"
        }
    }
    return ( <div  className={selected ? `product_card product_card-selected ${className}` : `product_card ${className}`} onClick={(e) => {handleClick(e)}}>
    <div >{title}</div>
    <div>{subtitle}</div>
    <div >{src &&<img src={src} />}</div>
    <div className={color}></div>
  </div> );
}
 
export default ProductProperties;
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function PaginatedItems() {
  const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  useEffect(() => {
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container-section-products">
      <div className="products-title">Explore Products</div>
      {data.length != 0 ? (
        <div>
          <div className="container-product ">
            {currentItems &&
              currentItems.map((item) => (
                <div className="products" key={item.id}>
                  <Link to={`/${item.id}`}>
                    <img src={item.img[0]} alt="First slide" />
                    <div className="products_name">{item.name}</div>
                    <div className="products_price d-flex justify-content-between">
                      <span>${item.priceAfterdiscount.toFixed(2)}</span>
                      <span className="products_old-price">${item.price.toFixed(2)}</span>
                    </div>
                    <div
                      className={
                        item.inStock > 0
                          ? "products_Instock"
                          : "products_Instock products_outstock"
                      }
                    >
                      {item.inStock > 0 ? "In Stock" : "Out of Stock"}
                    </div>
                  </Link>
                </div>
              ))}
          </div>

          <ReactPaginate
            onPageChange={handlePageClick}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            containerClassName={"align-items-center p-0"}
            pageLinkClassName={"page-link"}
            activeLinkClassName="active-link"
            previousLinkClassName="prevButton"
            nextLinkClassName="nextButton"
          />
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center h-200 ">
          <Spinner animation="border" role="status" />
        </div>
      )}
    </div>
  );
}
export default PaginatedItems;

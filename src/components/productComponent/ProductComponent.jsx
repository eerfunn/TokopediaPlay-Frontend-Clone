import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ productData }) => {
  return (
    <>
      <div className="products-bar">
        {!productData
          ? ""
          : productData.map((product) => (
              <div className="product-item-list" key={product.productId}>
                <img
                  src={
                    product.photo
                      ? product.photo
                      : "https://www.pockettactics.com/wp-content/sites/pockettactics/2023/01/honkai-star-rail-kafka-2.jpg"
                  }
                  alt=""
                  className="product-image"
                />
                <div className="product-item-desc">
                  <div className="product-item-title">{product.title}</div>
                  <div className="product-item-price">Rp.{product.price}</div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default ProductComponent;

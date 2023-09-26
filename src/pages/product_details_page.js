import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Table } from "reactstrap";
import { Button } from "reactstrap";
const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const params = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        // const result = json.products.filter(
        //   (item) => item.category === category
        // );
        console.log(json);

        setProductDetails(json);
      });
  }, []);
  return (
    <>
      <Row>
        <Col>
          <div>
            <center>
              {" "}
              <h1>Product Details</h1>
            </center>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <img className="productDetail_img" src={productDetails.thumbnail} />
        </Col>
        <Col>
          <Table>
            <tr>
              <td>Mobile</td>
              <td>{productDetails.title}</td>
            </tr>
            <tr>
              <td>Brand</td>
              <td>{productDetails.brand}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{productDetails.description}</td>
            </tr>
            <tr>
              <td>Available in Stock</td>
              <td>{productDetails.stock}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{productDetails.price}/- INR</td>
            </tr>
            <tr>
              <Row>
                <Col>
                  <Button>Add to Cart</Button>

                  <Button>Buy Now</Button>
                </Col>
              </Row>
            </tr>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ProductDetails;

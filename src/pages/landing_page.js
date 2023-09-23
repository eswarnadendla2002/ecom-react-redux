import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Carousel from "../components/carousel";
import { Row, Col } from "reactstrap";
import ProductCard from "../components/product_cards/product_card";
const LandingPage = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())

      .then((json) => setCategories(json));
  }, []);
  // console.log(products);
  return (
    <>
      <Row>
        <h2>E-Com Application</h2>
      </Row>
      <Row>
        <Link to="/registration">Sign Up/Register</Link>
        <Carousel />
      </Row>
      <Row>
        <h1>Products Column:-</h1>
      </Row>
      <Row>
        <Col>
          <h3>Column 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col>
          {" "}
          <h3>Column 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
        <Col>
          <h3>Column 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Col>
      </Row>
      <Row>
        <h2>Categories</h2>
      </Row>
      <Row>
        {categories &&
          categories.length > 0 &&
          categories.map((item, index) => {
            return (
              <>
                <Col md="4" key={index}>
                  <Link to={"products/" + item}>
                    <h4>{item}</h4>
                  </Link>
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default LandingPage;

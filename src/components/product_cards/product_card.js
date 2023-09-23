import React from "react";
import LandingPage from "../../pages/landing_page";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const ProductCard = (props) => {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={props.image} />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.brand}
        </CardSubtitle>
        <CardText>{props.text}</CardText>
        <Button>Add to Cart</Button>
        <Button>Buy Product</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

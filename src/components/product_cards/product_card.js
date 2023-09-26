import React from "react";
import { useNavigate } from "react-router-dom";
import LandingPage from "../../pages/landing_page";
import ProductDetails from "../../pages/product_details_page";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
const ProductCard = (props) => {
  const navigate = useNavigate();
  const handleDetails = (id) => {
    navigate(`/products/details/${id}`);
  };
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
        <Button
          onClick={() => {
            handleDetails(props.id);
          }}
        >
          Details
        </Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;

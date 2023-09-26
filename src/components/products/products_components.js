import { Row, Col } from "reactstrap";
import ProductCard from "../product_cards/product_card";
const ProductsComponent = ({ products, productCategory }) => {
  return (
    <>
      <Row>
        <h2>{productCategory}</h2>
      </Row>
      <Row>
        {products &&
          products.length > 0 &&
          products.map((item, index) => {
            return (
              <>
                <Col md="4" key={item.id}>
                  <ProductCard
                    title={item.title}
                    brand={item.brand}
                    text={item.description}
                    image={item.thumbnail}
                    id={item.id}
                  />
                </Col>
              </>
            );
          })}
      </Row>
    </>
  );
};

export default ProductsComponent;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SmartphonesComponents from "./smartphones_components";

const SmartphoneContainer = () => {
  const routeParams = useParams();
  const [products, setProducts] = useState([]);
  const [productCategory, setProductCategory] = useState("");
  useEffect(() => {
    const category = routeParams.item;
    setProductCategory(category.charAt(0).toUpperCase() + category.slice(1));
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        const result = json.products.filter(
          (item) => item.category === category
        );

        setProducts(result);
      });
  }, []);

  return (
    <SmartphonesComponents
      products={products}
      productCategory={productCategory}
    />
  );
};

export default SmartphoneContainer;

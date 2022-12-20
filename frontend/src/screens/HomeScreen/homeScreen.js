import Product from "../../components/product/product";
import "./homeScreen.css";
import { useSelector } from "react-redux";

const HomeScreen = () => {
  const product = useSelector((state) => state.product);
  return (
    <div className="homeScreen">
      <h2 className="home_heading"> Available Products </h2>
      <div className="products">
        {product?.map((item) => {
        return <Product
            id={item.id}
            img_url={item.image}
            title={item.name}
            price={item.price}
            description={item.description}
            inStock={item.stock}
          />
        })}
        {/* <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product /> */}
      </div>
    </div>
  );
};

export default HomeScreen;

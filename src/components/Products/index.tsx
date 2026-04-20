import "./styles.css";
import SwitcherProduct from "../SwitcherProduct";

export default function Products() {
  return (
    <section id="Product" className="products">
      <div className="productsContainer">
        <div className="contentProduct">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="productList">
            <SwitcherProduct />
            <SwitcherProduct />
          </div>

          <button className="btnProduct">
            Lorem ipsum <span className="caretProduct"></span>
          </button>
        </div>

        <div className="imgProduct"></div>
      </div>
    </section>
  );
}

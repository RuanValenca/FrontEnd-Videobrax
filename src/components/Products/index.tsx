import "./styles.css";
import SwitcherProduct from "../SwitcherProduct";

export default function About() {
  return (
    <section id="Produto" className="products">
      <div>
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <SwitcherProduct />
        <SwitcherProduct />
        <button>Lorem ipsum x</button>
      </div>
      <div className="imgProduct"></div>
    </section>
  );
}

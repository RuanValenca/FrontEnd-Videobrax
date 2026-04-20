import "./styles.css";
import switcher from "../../assets/switcherMini.png";

export default function SwitcherProduct() {
  return (
    <div className="switcherProduct">
      <div className="content">
        <img src={switcher} alt="Switcher" />

        <div className="text">
          <h3>Go Presence</h3>
          <span>Switcher Mini</span>
        </div>
      </div>

      <button className="btn">
        Lorem ipsum <span className="caret"></span>
      </button>
    </div>
  );
}

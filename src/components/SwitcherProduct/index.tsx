import "./styles.css";
import switcher from "../../assets/img/switcherMini.png";

export default function SwitcherProduct() {
  return (
    <div className="switcherProduct">
      <div className="content">
        <img src={switcher} alt="Switcher" />

        <div className="text">
          <span>GoPresence</span>
          <h3>Switcher Mini</h3>
        </div>
      </div>

      <button className="btn">
        Lorem ipsum <span className="caret"></span>
      </button>
    </div>
  );
}

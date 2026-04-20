import "./styles.css";
import twitch from "../../assets/img/twitch.png";
import youtube from "../../assets/img/youtube.png";
import facebook from "../../assets/img/facebook.png";
import instagram from "../../assets/img/instagram.png";
import tiktok from "../../assets/img/tiktok.png";
import zoom from "../../assets/img/zoom.png";
import star from "../../assets/img/Vector.png";
import layer from "../../assets/img/Layer 1.png";

export default function CompanyInfo() {
  return (
    <section id="Contact" className="companyInfoSection">
      <div className="companyInfo">
        <div className="textInfo">
          <h3>LIVE</h3>
          <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            laoreet risus neque, id convallis nisl euismod sed. Nullam neque
            nisl, blandit sed porta non, dapibus sed mauris. <br /> <br /> Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
            Mauris venenatis augue quis felis viverra bibendum.
          </p>
        </div>
        <div className="imageInfo"></div>
        <div className="socialMedia">
          <img src={twitch} alt="Twitch" />
          <img src={youtube} alt="YouTube" />
          <img src={facebook} alt="Facebook" />
          <img src={instagram} alt="Instagram" />
          <img src={tiktok} alt="TikTok" />
          <img src={zoom} alt="Zoom" className="zoom" />
        </div>
      </div>
      <div className="companyItems">
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <div className="gridItems ">
          <div className="item">
            <img src={star} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              laoreet risus neque,
            </p>
          </div>
          <div className="item">
            <img src={star} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              laoreet risus neque,
            </p>
          </div>
          <div className="item">
            <img src={star} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              laoreet risus neque,
            </p>
          </div>
        </div>
        <img className="layer" src={layer} alt="" />
      </div>
    </section>
  );
}

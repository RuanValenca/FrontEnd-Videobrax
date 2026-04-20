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
          <a
            href="https://www.twitch.tv/gopresence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitch} alt="Twitch" />
          </a>
          <a
            href="https://www.facebook.com/gopresence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com/gopresence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.youtube.com/@gopresence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YouTube" />
          </a>
          <a
            href="https://www.tiktok.com/@gopresence"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tiktok} alt="TikTok" />
          </a>
          <a
            href="https://www.zoom.us/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={zoom} alt="Zoom" className="zoom" />
          </a>
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

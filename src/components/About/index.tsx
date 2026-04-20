import "./styles.css";
import bgPodcast2 from "../../assets/img/bgPodcast2.png";
import bgStick from "../../assets/img/bgStick.png";

export default function About() {
  return (
    <section id="About" className="about">
      <div className="aboutContent">
        <h2>Lorem ipsum dolor sit amet</h2>

        <div className="image">
          <div className="imageWrapper">
            <img src={bgStick} alt="Podcast 1" />
            <span>
              Lorem ipsum,
              <br />
              dolor sit amet
            </span>
          </div>
          <div className="imageWrapper">
            <img src={bgPodcast2} alt="Podcast 2" />
            <span>
              Lorem ipsum,
              <br />
              dolor sit amet
            </span>
          </div>
          <div className="imageWrapper">
            <img src={bgStick} alt="Podcast 3" />
            <span>
              Lorem ipsum,
              <br />
              dolor sit amet
            </span>
          </div>
        </div>
      </div>
      <p className="bottomText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet
        risus neque, id convallis nisl euismod sed.
      </p>
      <div className="aboutBottom" />
    </section>
  );
}

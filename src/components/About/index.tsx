import "./styles.css";
import bgPodcast from "../../assets/bgPodcast.png";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="aboutContent">
        <h2>Lorem ipsum dolor sit amet</h2>

        <div className="image">
          <img src={bgPodcast} alt="Casal em Podcast" />
          <img src={bgPodcast} alt="Casal em Podcast" />
          <img src={bgPodcast} alt="Casal em Podcast" />
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet risus neque, id convallis nisl euismod sed.</p>
      </div>
      <div className="socialMedia"></div>
    </section>
  );
}

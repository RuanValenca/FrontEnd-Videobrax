import About from "../../components/About";
import BulletPoint from "../../components/BulletPoint";
import CompanyInfo from "../../components/CompanyInfo";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Products from "../../components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BulletPoint text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris laoreet risus neque, id convallis nisl euismod sed. Nullam neque nisl, blandit sed porta non." />
      <CompanyInfo />
      <Products />
    </>
  );
}

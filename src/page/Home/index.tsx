import Footer from "../../Layout/Footer";
import Header from "../../Layout/header";
import MenuLayout from "../../Layout/menu";
import "./styles.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <MenuLayout />
      <Footer />
    </div>
  );
}

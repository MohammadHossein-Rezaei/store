import Comment from "../../components/Comment";
import Contect from "../../components/contect";
import Pictures from "../../components/Pictures";
import "./styles.css";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <Comment />
      <Pictures />
      <Contect />
    </footer>
  );
}

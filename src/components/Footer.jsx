import kletter from "../Assets/images/kletter.png";
import aletter from "../Assets/images/aletter.png";
import homeletter from "../Assets/images/homeletter.png";
import sletter from "../Assets/images/sletter.png";

function Footer() {
  return (
    <footer>
      Ici mon footer
      <div className="logo">
        <img src={kletter} alt="" />
        <img src={homeletter} alt="" />
        <img src={sletter} alt="" />
        <img src={aletter} alt="" />
      </div>
      <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

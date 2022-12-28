import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";
import footer4 from "../assets/footer4.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
        <div className="img_footer">
      <div>
        <img src={footer1} />
      </div>
      <div>
        <img src={footer2} />
      </div>
      <div>
        <img src={footer3} />
      </div>
      <div>
        <img src={footer4} />
      </div>
      </div>
       <div className="footer_copyright">Copyright © 2022 - All rights reserved</div>
    </div>
  );
};

export default Footer;

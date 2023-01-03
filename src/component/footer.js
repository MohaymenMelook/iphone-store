import footer0 from "../assets/footer0.png"
import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";

const Footer = () => {
  const footer = [footer0,footer1,footer2,footer3]
  return (
    <div className="container-fluid footer">
        <div className="img_footer">
          {
          footer.map((footer,index) => (
            <div key={index}>
        <img src={footer} />
      </div>
        ))}
      </div>
       <div className="footer_copyright">Copyright © 2022 - All rights reserved</div>
    </div>
  );
};

export default Footer;

import { useTranslation } from "react-i18next";
import "./footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaWhatsapp,
} from "react-icons/fa6";
const Footer = () => {
  const { t } = useTranslation();
  const media = [
    {
      link: "https://wa.me/0096871111905",
      icon: <FaWhatsapp />,
    },
    {
      link: "https://www.facebook.com/profile.php?id=100076678876388",
      icon: <FaFacebookF />,
    },
    {
      link: "https://www.instagram.com/hamad_edu/",
      icon: <FaInstagram />,
    },
  ];
  return (
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Hamad Education</h3>
          <ul className="social">
            {media.map((item, index) => (
              <li key={index}>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="box">
          <ul className="links">
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/who-we-are">{t("who_we_are")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact_us")}</Link>
            </li>
            <li>
              <Link to="/apply">ِ{t("apply")}</Link>
            </li>
            <li>
              <Link to="/terms-of-service">ِ{t("terms_of_service")}</Link>
            </li>
            <li>
              <Link to="/privacy-policy">ِ{t("privacy_policy")}</Link>
            </li>
            <li>
              <Link to="/returns-policy">ِ{t("returns_policy")}</Link>
            </li>
          </ul>
        </div>
        <div className="box">
          <div className="line">
            <FaLocationDot />
            <div className="info">{t("location")} </div>
          </div>

          <div className="line">
            <div className="info">
              <a href="tel:0096898812883" target="_blank" rel="noreferrer">
                0096898812883
              </a>
              <a href="tel:0096898884331" target="_blank" rel="noreferrer">
                0096898884331
              </a>
              <a href="tel:0096892454446" target="_blank" rel="noreferrer">
                0096892454446
              </a>
              <a
                href="mailto:info@hamad-edu.com"
                target="_blank"
                rel="noreferrer"
              >
                info@hamad-edu.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright">All right received to hamad education 2024</p>
    </div>
  );
};

export default Footer;

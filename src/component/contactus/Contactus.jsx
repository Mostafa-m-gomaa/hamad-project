import { useTranslation } from "react-i18next";
import "./contact.css";
import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section className="contact container">
      <h2>{t("contact_us")}</h2>
      <div className="contact-grid">
        <div className="contact-card">
          <div className="icon" style={{ fontSize: "50px" }}>
            <FaPhone />
          </div>
          <div className="link">
            <a href="tel:0096898812883" target="_blank" rel="noreferrer">
              0096898812883
            </a>
            <a href="tel:0096898884331" target="_blank" rel="noreferrer">
              0096898884331
            </a>
            <a href="tel:0096892454446" target="_blank" rel="noreferrer">
              0096892454446
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FaWhatsapp />
          </div>
          <div className="link">
            <a
              href="https://wa.me/0096871111905"
              target="_blank"
              rel="noreferrer"
            >
              0096871111905
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FaInstagram />
          </div>
          <div className="link">
            <a
              href="https://www.instagram.com/hamad_edu/"
              target="_blank"
              rel="noreferrer"
            >
              hamad_edu
            </a>
          </div>
        </div>
        <div className="contact-card">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="link">
            <a
              href="https://www.facebook.com/profile.php?id=100076678876388"
              target="_blank"
              rel="noreferrer"
            >
              edu_hamad
            </a>
          </div>
        </div>
      </div>
      <h2>{t("our_location")}</h2>
      <p>{t("location")}</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.747236337303!2d58.4183611!3d23.5775199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff220a510d37%3A0x4a3ab019f16ddb1b!2sHamad%20Education!5e0!3m2!1sen!2sae!4v1704685031362!5m2!1sen!2sae"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default ContactUs;

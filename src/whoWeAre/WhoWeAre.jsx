import { useTranslation } from "react-i18next";
import "./whoweare.css";
const WhoWeAre = () => {
  const { t } = useTranslation();
  return (
    <section className="whoWeAre">
      <div className="aboutUs container">
        <div>
          <img
            src="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/417465894_18223129237253807_1634562884550832782_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEEbPL1m4zdVWeKjWrPc3GiY4LkolfXY7BjguSiV9djsE0O-RY6-NGeWk_BnmWawmEfLRRymK3ldqARDN_1mtMX&_nc_ohc=yOTsmYC0OLkAX_4mNhL&_nc_ht=scontent.fcai19-8.fna&oh=00_AfBOdEksohhZwxfcw3Qwyt-ZAWe841dAFocwK0yKXSCKVw&oe=65A0A7D3"
            alt=""
          />
        </div>
        <div>
          <h2>{t("about_us")}</h2>
          <p>{t("about_us_paragraph")}</p>
        </div>
      </div>
      <div className="ourStory container">
        <div>
          <img
            src="https://scontent.fcai19-8.fna.fbcdn.net/v/t39.30808-6/417465894_18223129237253807_1634562884550832782_n.jpg?stp=dst-jpg_s640x640&_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeEEbPL1m4zdVWeKjWrPc3GiY4LkolfXY7BjguSiV9djsE0O-RY6-NGeWk_BnmWawmEfLRRymK3ldqARDN_1mtMX&_nc_ohc=yOTsmYC0OLkAX_4mNhL&_nc_ht=scontent.fcai19-8.fna&oh=00_AfBOdEksohhZwxfcw3Qwyt-ZAWe841dAFocwK0yKXSCKVw&oe=65A0A7D3"
            alt=""
          />
        </div>
        <div>
          <h2>{t("our_story")}</h2>
          <p>{t("our_story_paragraph")}</p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

import { useEffect } from "react";
import { CgClose } from "react-icons/cg";

function GoogleTranslate({ onClose }) {
  window.addEventListener("click", (e) => {
    if (e.target.value === "en") {
      window.location.reload();
    }
  });
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,ar",
        },
        "google_translate_element"
      );
    };
    return () => {
      document.body.removeChild(script);
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div className="relative googleSelect">
      <button className="closeBtn" onClick={onClose}>
        <CgClose />
      </button>
      <div id="google_translate_element"></div>
    </div>
  );
}

export default GoogleTranslate;

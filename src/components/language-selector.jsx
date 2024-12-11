import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "bn", name: "বাংলা" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

//   for automatic direction change (in case of arabic language)
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);
  return (
    <div className="flex gap-2 items-center">
      {languages.map((lang) => (
        <button
          className={`px-4 py-2 rounded-md ${
            i18n.language === lang.code ? "bg-blue-500 text-white" : ""
          }`}
          key={lang.code}
          onClick={() => changleLanguage(lang.code)}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;

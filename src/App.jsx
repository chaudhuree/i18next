import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";
export default function App() {
  const { t,i18n } = useTranslation();

  const name = i18n.language === "bn" ? "চৌধুরী" : "chaudhuree";

  return (
    <div className="container mx-auto p-4">
      <LanguageSelector />

      <div className="mt-4 bg-gray-200 p-4 flex flex-col gap-4">
        <h1>
          <Trans i18nKey="greeting" values={{ name }} components={{1:<b/>}} />
        </h1>
        <p>{t("blog.title")}</p>
        <p>{t("blog.description")}</p>
      </div>
    </div>
  );
}

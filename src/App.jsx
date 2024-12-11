import { Trans, useTranslation } from "react-i18next";
import LanguageSelector from "./components/language-selector";
import {  useMemo } from "react";
export default function App() {
  const { t, i18n } = useTranslation("translation");

  // const name = i18n.language === "bn" ? "চৌধুরী" : "chaudhuree";

  const name = useMemo(() => {
    if (i18n.language === "bn") return "চৌধুরী";
    if (i18n.language === "zh") return "乔杜里";
    return "chaudhuree";
  }, [i18n.language]);
  return (
    <div className="container mx-auto p-4">
      <LanguageSelector />

      <section className="mt-4 bg-gray-200 p-4 flex flex-col gap-4">
        <h1>
          <Trans
            i18nKey="greeting"
            values={{ name }}
            components={{ 1: <b /> }}
          />
        </h1>
        <p>{t("blog.title")}</p>
        <p>{t("blog.description")}</p>
      </section>

      <section className="mt-4 bg-gray-200 p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{t("home:title")}</h1>
        <p className="text-gray-800">{t("home:description.heading")}</p>
        <p className="text-gray-600">{t("home:description.details")}</p>
      </section>

      <section className="mt-4 bg-gray-200 p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{t("about:title")}</h1>
        <p className="text-gray-800">{t("about:description")}</p>
      </section>

      <section className="mt-4 bg-gray-200 p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{t("dashboard:title")}</h1>
        <p className="text-gray-800">{t("dashboard:description")}</p>
      </section>
    </div>
  );
}

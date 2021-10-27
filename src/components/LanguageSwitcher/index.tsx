import { useTranslation } from "react-i18next";
import br from "./assets/br.svg";
import fr from "./assets/fr.svg";
import us from "./assets/us.svg";
import "./styles.css";

const languageOptions = [
  {
    name: "Português",
    value: "ptBR",
    flag: br,
  },
  {
    name: "English",
    value: "en",
    flag: us,
  },
  {
    name: "Français",
    value: "fr",
    flag: fr,
  },
];
export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="language-switcher">
      <span>{t("selectYourLanguage")}</span>

      {languageOptions.map((languageOption) => (
        <button
          key={languageOption.value}
          onClick={() => {
            i18n.changeLanguage(languageOption.value);
          }}
        >
          <img src={languageOption.flag} alt={languageOption.name} />
          <span
            style={{
              fontWeight:
                i18n.language === languageOption.value ? "bold" : "normal",
              textDecoration:
                i18n.language === languageOption.value ? "underline" : "none",
            }}
          >
            {languageOption.name}
          </span>
        </button>
      ))}
    </div>
  );
};

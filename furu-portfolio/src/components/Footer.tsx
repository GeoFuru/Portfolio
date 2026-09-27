import { useLanguage } from "../i18n/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>{t.footer.text}</p>
    </footer>
  );
}

export default Footer;
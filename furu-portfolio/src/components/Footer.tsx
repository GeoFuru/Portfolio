import { useLanguage } from "../i18n/useLanguage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>{t.footer.text}</p>
    </footer>
  );
}

export default Footer;
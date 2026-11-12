import { profile } from '../data/portfolio';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p>Designed &amp; built with React</p>
      <a className="link-u" href="#top">
        Back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;

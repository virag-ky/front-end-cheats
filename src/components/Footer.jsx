import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <p>
          🛠️ Built by{" "}
          <a href="https://github.com/virag-ky" target="_blank">
            Virag Kormoczy
          </a>
        </p>
        <div>
          <p>💜 Consider supporting the project?</p>
          <ul>
            <li>Further development</li>
            <li>Custom domain name</li>
          </ul>
          <a
            className="coffee"
            href="https://buymeacoffee.com/virag"
            target="_blank"
          >
            <button>☕️ Buy me a coffee</button>
          </a>
        </div>
      </div>
      <div className="footer-section">
        <div className="social-icons">
          <a href="https://github.com/virag-ky" target="_blank">
            <FaGithub size={25} />
          </a>
          <a href="https://x.com/Virag_Ky" target="_blank">
            <FaXTwitter size={25} />
          </a>
          <a href="https://www.linkedin.com/in/virag-kormoczy/" target="_blank">
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://bsky.app/profile/virag-ky.bsky.social"
            target="_blank"
          >
            <FaBluesky size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

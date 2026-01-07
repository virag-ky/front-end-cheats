import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <p>
          🛠️ Built by{" "}
          <a
            href="https://github.com/virag-ky"
            aria-label="Go to Virag Kormoczy GitHub page"
            target="_blank"
          >
            Virag Kormoczy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

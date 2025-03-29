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
      <div className="footer-section">
        <div className="social-icons">
          <a
            href="https://github.com/virag-ky"
            aria-label="Go to Virag Kormoczy GitHub page"
            target="_blank"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://x.com/Virag_Ky"
            aria-label="Go to Virag Kormoczy X/Twitter page"
            target="_blank"
          >
            <FaXTwitter size={25} />
          </a>
          <a
            href="https://bsky.app/profile/virag-ky.bsky.social"
            aria-label="Go to Virag Kormoczy BlueSky page"
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

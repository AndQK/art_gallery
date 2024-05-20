import "@fortawesome/fontawesome-free/css/all.min.css";
import "./footer.css";

const Footer = () => {
  const url = encodeURIComponent(window.location.href);

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Share this website on:</p>
        <div className="social-icons">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href={`https://www.pinterest.com/pin/create/button/?url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-pinterest-p"></i>
          </a>
          <a
            href={`https://wa.me/?text=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href={`mailto:?subject=Check out this site&body=${url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

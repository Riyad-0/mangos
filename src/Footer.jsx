import facebookIcon from './assets/facebook.png';
import xIcon from './assets/x.png';
import instagramIcon from './assets/instagram.png';
import youtubeIcon from './assets/youtube.png';
import tiktokIcon from './assets/tiktok.png';

function Footer() {
  return (
    <>
      <footer className="footer">
        <h2 className="footer-heading">Business hours</h2>
        <table>
          <tbody>
            <tr>
              <td className="business-hours-day">Mon-Fri:</td>
              <td>10:00am - 12:00am</td>
            </tr>
            <tr>
              <td className="business-hours-day">Sat:</td>
              <td>10:00am - 1:00am</td>
            </tr>
            <tr>
              <td className="business-hours-day">Sun:</td>
              <td>10:00am - 11:00pm</td>
            </tr>
          </tbody>
        </table>
        <h2 className="footer-heading">Follow us</h2>
        <div className="social-logos-container">
          <a href="https://www.facebook.com/RickAstley/">
            <img className="social-logo" alt="facebook" src={facebookIcon} />
          </a>
          <a href="https://x.com/rickastley">
            <img className="social-logo" alt="x" src={xIcon} />
          </a>
          <a href="https://www.instagram.com/officialrickastley">
            <img className="social-logo" alt="instagram" src={instagramIcon} />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img className="social-logo" alt="youtube" src={youtubeIcon} />
          </a>
          <a href="https://www.tiktok.com/@rickastleyofficial">
            <img className="social-logo" alt="tiktok" src={tiktokIcon} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
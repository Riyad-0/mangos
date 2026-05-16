import facebookIcon from './assets/facebook.png';
import xIcon from './assets/x.png';
import instagramIcon from './assets/instagram.png';
import youtubeIcon from './assets/youtube.png';
import tiktokIcon from './assets/tiktok.png';

function Footer() {
  return (
    <>
      <footer className="flex items-center justify-around flex-col gap-y-4 p-4 bg-[dimgray] text-white font-mont">
        <h2 className="font-bold">Business hours</h2>
        <table>
          <tbody>
            <tr>
              <td className="pr-4 ml-auto">Mon-Fri:</td>
              <td>10:00am - 12:00am</td>
            </tr>
            <tr>
              <td className="pr-4 ml-auto">Sat:</td>
              <td>10:00am - 1:00am</td>
            </tr>
            <tr>
              <td className="pr-4 ml-auto">Sun:</td>
              <td>10:00am - 11:00pm</td>
            </tr>
          </tbody>
        </table>
        <h2 className="font-bold">Follow us</h2>
        <div className="flex gap-x-4">
          <a href="https://www.facebook.com/RickAstley/">
            <img className="w-[1.6rem]" alt="facebook" src={facebookIcon} />
          </a>
          <a href="https://x.com/rickastley">
            <img className="w-[1.6rem]" alt="x" src={xIcon} />
          </a>
          <a href="https://www.instagram.com/officialrickastley">
            <img className="w-[1.6rem]" alt="instagram" src={instagramIcon} />
          </a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <img className="w-[1.6rem]" alt="youtube" src={youtubeIcon} />
          </a>
          <a href="https://www.tiktok.com/@rickastleyofficial">
            <img className="w-[1.6rem]" alt="tiktok" src={tiktokIcon} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
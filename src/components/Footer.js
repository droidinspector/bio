import ArrowImg from '../images/arrow.png';
import ScrollTo from './ScrollTo';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <ScrollTo toId="greeting">
        <img src={ArrowImg} alt="arrow up" />
      </ScrollTo>
    </footer>
  );
}

export default Footer;

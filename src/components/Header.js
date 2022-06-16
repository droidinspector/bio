import ScrollTo from './ScrollTo';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      <ScrollTo toId="greeting">About me</ScrollTo>
      <ScrollTo toId="hobbies">My hobbies</ScrollTo>
      <ScrollTo toId="plans">My future plans</ScrollTo>
      <ScrollTo toId="contacts">Contacts</ScrollTo>
    </nav>
  );
}

export default Header;

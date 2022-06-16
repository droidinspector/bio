import WaveImg from '../images/wave.gif';
import './Greeting.css';

function Greeting() {
  return (
    <section className="section-greeting">
      <div>
        <h1>Hello! I'm Emirlan.</h1>
        <h2>I'm future Software Engineer.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lorem metus, laoreet vitae libero in, suscipit viverra ligula. Sed iaculis ligula eget rutrum scelerisque. Nullam orci orci, dictum et orci vel, aliquet varius dolor. Suspendisse nec varius velit. Morbi eget tincidunt felis. Donec a lacus sed orci laoreet lobortis. Praesent gravida id erat placerat commodo. Curabitur erat sapien, dapibus ac vestibulum nec, hendrerit id leo.
        </p>
        <span>Use navigation bar for smooth transitions ⬆⬆⬆</span>
      </div>
      <img src={WaveImg} alt="hello" className="waving-hand" />
    </section>
  );
}

export default Greeting;

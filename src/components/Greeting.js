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
        <p>
          Aliquam erat volutpat. Aenean massa tortor, varius non ex vel, dignissim dignissim metus. Donec lobortis consequat congue. Nunc condimentum bibendum tincidunt. Sed rhoncus aliquet lectus in iaculis. Nullam vitae dignissim enim. Pellentesque pretium placerat nisi at maximus. Nulla et tellus sed orci blandit ornare vitae vel ipsum. Vestibulum varius felis ac maximus rhoncus. Aenean lacinia, nisi et mattis eleifend, eros lorem pulvinar dui, semper porttitor est quam quis purus. Curabitur sed nibh magna. Curabitur lectus turpis, mollis eu libero a, consequat cursus nulla.
        </p>
        <span>Use navigation bar for smooth transitions ⬆⬆⬆</span>
      </div>
      <img src={WaveImg} alt="hello" className="waving-hand" />
    </section>
  );
}

export default Greeting;

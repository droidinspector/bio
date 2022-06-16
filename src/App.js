import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Plans from './components/Plans';
import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Section id="greeting"><Greeting /></Section>
      <Section id="hobbies"><Hobbies /></Section>
      <Section id="plans"><Plans /></Section>
      <Section id="contacts"><Contacts /></Section>
      <Footer />
    </div>
  );
}

export default App;

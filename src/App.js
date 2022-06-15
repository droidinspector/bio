import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Hobbies from './components/Hobbies';
import Plans from './components/Plans';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting />
      <Hobbies />
      <Plans />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

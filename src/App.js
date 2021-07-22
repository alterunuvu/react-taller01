import './App.css';
import Header from './components/Header';
import Homepage from './views/Homepage'

export default function App() {
  return (
    <div className="App">
      <Header contact="Contáctenos" />
      <Homepage/>
    </div>
  );
}
import './index.css'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';

import img from './assets/img.jpg'

function App() {
  return (
    <div className="App h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${img})`}}>
      <Navbar/>
      <Container/>
    </div>
  );
}

export default App;

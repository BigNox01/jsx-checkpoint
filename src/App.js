
import './App.css';
import BasicExample from './components/cards';
import NavScrollExample from './components/navbar';

function App() {
  return (
    <div className="App">
     <>
      <NavScrollExample/>
      <div className='cards'>
      <BasicExample/>
      </div>

     </>
    </div>
  );
}

export default App;

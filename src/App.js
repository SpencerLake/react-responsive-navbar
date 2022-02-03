import './App.css';

function App() {
  console.log("hello world")
  return (
    <div className="App">
      <div className='navbar'>
        <div className='nav-cont'>
          <div className='left'>
            <ul className='left-cont'>
              <li className='nav-option'>Tops</li>
              <li className='nav-option'>Bottoms</li>
              <li className='nav-option'>Misc</li>
            </ul>
          </div>
          <div className='right'>
            <ul className='right-cont'>
              <li>Profile</li>
            </ul>
          </div> 
        </div>
      </div>
      
    </div>
  );
}

export default App;

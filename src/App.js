import {Route, Routes, useNavigate} from 'react-router-dom'
import Home from './Homepage/Home';

function App() {
  window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import {Route, Routes, useNavigate} from 'react-router-dom'
import About from './Aboutpage/About';
import Home from './Homepage/Home';

function App() {
  window.addEventListener('scroll', ()=> {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})
const background = ''
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home background={background} />}  />
        <Route path='about' element={<About />}  />
      </Routes>
    </div>
  );
}

export default App;

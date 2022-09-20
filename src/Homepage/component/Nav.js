import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
    window.addEventListener('scroll', () => {
        document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
    })

    const [menu, setMenu] = useState('closed')
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    })
    useEffect(() => {
        const windsize = () => {
            setWindowSize({
                width: window.innerWidth
            })
        }
        windsize()
        window.addEventListener('resize', windsize)
}, [])
// console.log(windowSize.width)

    
  return (
    <nav className='nav'>
        <div className='container navbar' id='navbar'>
            <h1>Brendan Xure</h1>
            { menu === 'opened' || windowSize.width > 1124  ?
            <ul>
                <ol><Link to='/'><a href='' target='_blank'>Home</a></Link></ol>
                <ol><Link to='/about'><a href='' target='_blank'>About</a></Link></ol>
                <ol><a href='#' target='_blank'>Courses</a></ol>
                <ol><a href='#' target='_blank'>Contact</a></ol>
            </ul> : null
            }
            { menu === 'closed' ?
            <span className='Menu' onClick={()=> setMenu('opened')} ><GiHamburgerMenu /></span> :
            <span className='Closenav' onClick={()=> setMenu('closed')}><AiOutlineClose /></span> }
        </div>
    </nav>
  )
}

export default Nav
import React from 'react'
import header from './Homeimages/header.svg'

const Header = () => {
  return (
    <div>
        <div className='Headerdiv'>
            <div className='Headerdivleft'>
                <h1>Grow your skill to advance in your career path</h1>
                <p>Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima.</p>
                <a href='#'>Get Started</a>
            </div>
            <div className='Headerdivright'>
                <img src={header}></img>
            </div>
        </div>
    </div>
  )
}

export default Header
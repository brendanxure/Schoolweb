import React from 'react'
import { useState } from 'react'
import {RiBitCoinLine} from 'react-icons/ri'
import {BsPalette} from 'react-icons/bs'
import {AiOutlineDollar} from 'react-icons/ai'
import {BsMegaphone} from 'react-icons/bs'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {FaPuzzlePiece} from 'react-icons/fa'

const Categories = () => {
    const [post, setPost]  = useState([
        {
            id: 1,
            icon: <RiBitCoinLine /> ,
            title: 'Blockchain',
            post: 'Lorem ipsum dolor sit amet consectetur, elit temporibus, qui'
        },
        {
            id: 2,
            icon: <BsPalette />,
            title: 'Graphic Design',
            post: 'Lorem ipsum dolor sit amet consectetur, elit temporibus, qui'
        },
        {
            id: 3,
            icon: <AiOutlineDollar />,
            title: 'Finance',
            post: 'Lorem ipsum dolor sit amet consectetur, elit temporibus, qui'
        },
        {
            id: 4,
            icon: <BsMegaphone />,
            title: 'Marketing',
            post: 'Lorem ipsum dolor sit amet consectetur, elit temporibus, qui'
        },
        {
            id: 5,
            icon: <BsMusicNoteBeamed />,
            title: 'Music',
            post: 'Lorem ipsum dolor sit amet consectetur, elit temporibus, qui'
        },
        {
            id: 6,
            icon: <FaPuzzlePiece />,
            title: 'Business',
            post: 'Lorem ipsum dolor sit amet consectetur, elit temporibus, qui'
        },
    ])
  return (
    <div className='Categoriescont'>
        <div className='Categories' id='Categories'>
            <div className='Categoriesleft'>
                <h1>Categories</h1>
                <p>Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima.</p>
                <a href='#'>Learn More</a>
            </div>
            <div className='Categoriesright'>
                {post.map(eachpost=> 
                <div className='Category'>
                <span className='Caticon'>{eachpost.icon}</span>
                <h4>{eachpost.title}</h4>
                <p>{eachpost.post}</p>
                </div>    
                )}
            </div>
        </div>
    </div>
  )
}

export default Categories
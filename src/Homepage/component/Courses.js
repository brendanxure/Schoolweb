
import { useState } from 'react'
import course1 from './Homeimages/course1.jpg'
import course2 from './Homeimages/course2.jpg'
import course3 from './Homeimages/course3.jpg'

const Courses = () => {
    const [card, setCard] = useState([
        {
            id: 1,
            image: course1,
            title: 'Responsive Social Media Website UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 2,
            image: course2,
            title: 'Responsive SmartHome Website Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 3,
            image: course3,
            title: 'Responsive Admin Dashboard UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
    ])
  return (
    <div>
        <div className='Courses' id='Courses'>
            <h1>Our Popular Courses</h1>
            <div className='Coursecards'>
                {card.map(eachcard=> 
                    <article key={eachcard.id}>
                        <div><img src={eachcard.image}/></div>
                        <h3>{eachcard.title}</h3>
                        <p>{eachcard.post}</p>
                        <a href='#'>Learn More</a>
                    </article>
                )}
            </div>
        </div>
    </div>
  )
}

export default Courses
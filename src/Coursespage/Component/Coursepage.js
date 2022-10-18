import {useState} from 'react'
import course1 from './Coursesimages/course1.jpg'
import course2 from './Coursesimages/course2.jpg'
import course3 from './Coursesimages/course3.jpg'
import course4 from './Coursesimages/course4.jpg'
import course5 from './Coursesimages/course5.jpg'
import course6 from './Coursesimages/course6.jpg'
import course7 from './Coursesimages/course7.jpg'
import course8 from './Coursesimages/course8.jpg'
import course9 from './Coursesimages/course9.jpg'
import course10 from './Coursesimages/course10.jpg'
import course11 from './Coursesimages/course11.jpg'
import course12 from './Coursesimages/course12.jpg'
import course13 from './Coursesimages/course13.jpg'
import course14 from './Coursesimages/course14.jpg'
import course15 from './Coursesimages/course15.jpg'
import course16 from './Coursesimages/course16.jpg'
import course17 from './Coursesimages/course17.jpg'
import course18 from './Coursesimages/course18.jpg'


const Coursepage = () => {
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
        {
            id: 4,
            image: course4,
            title: 'Responsive Social Media Website UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 5,
            image: course5,
            title: 'Responsive SmartHome Website Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 6,
            image: course6,
            title: 'Responsive Admin Dashboard UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 7,
            image: course7,
            title: 'Responsive Social Media Website UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 8,
            image: course8,
            title: 'Responsive SmartHome Website Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 9,
            image: course9,
            title: 'Responsive Admin Dashboard UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 10,
            image: course10,
            title: 'Responsive Social Media Website UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 11,
            image: course11,
            title: 'Responsive SmartHome Website Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 12,
            image: course12,
            title: 'Responsive Admin Dashboard UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 13,
            image: course13,
            title: 'Responsive Social Media Website UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 14,
            image: course14,
            title: 'Responsive SmartHome Website Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 15,
            image: course15,
            title: 'Responsive Admin Dashboard UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 16,
            image: course16,
            title: 'Responsive Social Media Website UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 17,
            image: course17,
            title: 'Responsive SmartHome Website Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 18,
            image: course18,
            title: 'Responsive Admin Dashboard UI Design',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
    ])
  return (
    <div>
        <div className='Courses' id='Coursepage'>
            <h1>Our Courses</h1>
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

export default Coursepage
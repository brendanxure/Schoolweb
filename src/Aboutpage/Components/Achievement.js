import {useState} from 'react'
import aboutachievement from './Aboutimages/about achievements.svg'
import {BsCameraVideo} from 'react-icons/bs'
import {BsPeople} from 'react-icons/bs'
import {BsTrophy} from 'react-icons/bs'

const Achievement = () => {
    const [grid, setGrid] = useState([
        {
            id: 1,
            icon: <BsCameraVideo />,
            num: '450+',
            title: 'Courses'
        },
        {
            id: 2,
            icon: <BsPeople />,
            num: '79,000+',
            title: 'Students'
        },
        {
            id: 1,
            icon: <BsTrophy />,
            num: '26+',
            title: 'Awards'
        },
    ])
  return (
    <div className='Achievement1'>
        <div className='Achievement'>
            <div>
                <img src={aboutachievement} />
            </div>
            <div className='Achievementright'>
                <h1>Achievements</h1>
                <p>Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima.
                Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem. </p>
                <div className='Achbase'>
                   {grid.map(eachgrid=>
                    <div className='Eachachbase'>
                        <span>{eachgrid.icon}</span>
                        <h2>{eachgrid.num}</h2>
                        <p>{eachgrid.title}</p>
                    </div>
                    )} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievement
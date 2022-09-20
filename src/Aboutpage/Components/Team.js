import {useState} from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import tm1 from './Aboutimages/tm1.jpg'
import tm2 from './Aboutimages/tm2.jpg'
import tm3 from './Aboutimages/tm3.jpg'
import tm4 from './Aboutimages/tm4.jpg'
import tm5 from './Aboutimages/tm5.jpg'
import tm6 from './Aboutimages/tm6.jpg'
import tm7 from './Aboutimages/tm7.jpg'
import tm8 from './Aboutimages/tm8.jpg'

const Team = () => {
    const [card, setCard] = useState([
        {
            id: 1,
            image: tm1,
            name: 'Brendan Xure',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 2,
            image: tm2,
            name: 'Alakz Amara',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 3,
            image: tm3,
            name: 'Oyindamola Balogun',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 4,
            image: tm4,
            name: 'Afunwa Paschal',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 5,
            image: tm5,
            name: 'Ayubz Rambayi',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 6,
            image: tm6,
            name: 'Harribaba Umilz',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 7,
            image: tm7,
            name: 'Ambee Zidos',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
        {
            id: 8,
            image: tm8,
            name: 'Asogwa Casper',
            role: 'Expert Tutor',
            ig: <BsInstagram />,
            twitter: <FiTwitter />,
            linkedin: <FaLinkedinIn />
        },
    ])
  return (
    <div className='Team'>
        <div className='Teammain'>
            <h1>Meet Our Team</h1>
            <div className='Teamdiv'>
               {card.map(eachcard => 
                <div className='Eachteam'>
                    <div>
                        <img src={eachcard.image} />
                    </div>
                    <h3>{eachcard.name}</h3>
                    <p>{eachcard.role}</p>
                    <span>
                        <a href=''>{eachcard.ig}</a>
                        <a href=''>{eachcard.twitter}</a>
                        <a href=''>{eachcard.linkedin}</a>
                    </span>
                </div>
                )} 
            </div>
        </div>
    </div>
  )
}

export default Team
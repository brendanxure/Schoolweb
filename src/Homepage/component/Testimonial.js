import {useState} from 'react'
import avatar1 from './Homeimages/avatar1.jpg'
import avatar2 from './Homeimages/avatar2.jpg'
import avatar3 from './Homeimages/avatar3.jpg'
import avatar4 from './Homeimages/avatar4.jpg'
import avatar5 from './Homeimages/avatar5.jpg'
import avatar6 from './Homeimages/avatar6.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Testimonial = () => {
    const [test, setTest] = useState([
        {
            id: 1,
            name: 'Jang Ok Jung',
            level: 'Student',
            image: avatar1,
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 2,
            name: 'Baek Dong Su',
            level: 'Web Developer',
            image: avatar2,
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 3,
            name: 'Kim Yushin',
            level: 'Student',
            image: avatar3,
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 4,
            name: 'Hajia Bintu',
            image: avatar4,
            level: 'Student',
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 5,
            name: 'Empress Ki',
            level: 'Web Developer',
            image: avatar5,
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
        {
            id: 6,
            name: 'Yaa Asantewaa',
            level:'Web Developer',
            image: avatar6,
            post: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
        },
    ])
  return (
    <div>
        <div className='Testimonial'>
            <h1>Student's Testimonial</h1>
            <div className='Testcards'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    // breakpoints={{
                    //     // when window width is >= 640px
                    //     640: {
                    //       width: 640,
                    //       slidesPerView: 2,
                    //     },
                    // }}
                >
                {test.map(eachtest=>
                <section>
                    <SwiperSlide>
                    <div className='Testimage'><img src={eachtest.image}></img></div>
                    <h4>{eachtest.name}</h4>
                    <p>{eachtest.level}</p>
                    <div className='Testcardspost'>
                        <p>{eachtest.post}</p>
                    </div>
                    </SwiperSlide>  
                </section>  
                )}
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
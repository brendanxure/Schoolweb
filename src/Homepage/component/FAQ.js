import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {AiFillMinusCircle} from 'react-icons/ai'

const FAQ = () => {
const [faq, setFaq] = useState([
    {
        id: 1,
        post:'How do I know the right courses for me?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 2,
        post:'Do I get a Certificate for every course i take?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 3,
        post:`Do I get a refund if the course isn't worth my money?`,
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 4,
        post:'Will I have a lifetime access to courses I purchase?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 5,
        post:'Will you assist me to get my first job?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 6,
        post:'What are your payment options?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 7,
        post:'What are the requirements to start?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
    {
        id: 8,
        post:'Do I get all source code from projects?',
        plus: <AiOutlinePlus />,
        minus: <AiFillMinusCircle />,
        answer: 'Lorem ipsum dolor sit amet. Et velit iure aut laboriosam error et accusantium veritatis Ut aliquid obcaecati deleniti nihil hic atque quia et quidem deleniti vel possimus minima'
    },
])

const [open, setOpen] = useState(0)
  return (
    <div className='FAQQ'>
        <div className='FAQ' id='FAQ'>
            <h1>Frequently Asked Questions</h1>
            <div className='FAQs'>
              {faq.map(eachfaq=> 
                <div className='Eachfaq' key={eachfaq.id}>
                    <section onClick={eachfaq.id !== open ? ()=>setOpen(eachfaq.id) : ()=> setOpen(false)}>
                    <span className='Plus'>{eachfaq.id === open ? eachfaq.minus : eachfaq.plus}</span>
                    <h3>{eachfaq.post}</h3>
                    </section>
                    <p className={eachfaq.id === open ?'DisplayFAQ': 'Dis'}>{eachfaq.answer}</p>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default FAQ
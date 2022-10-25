import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactTypingEffect from 'react-typing-effect'


const Home = () => {
    return (
        <div className='py-36'>
        <div className='text-center font-bold text-3xl text-gray-700'>
        <ReactTypingEffect text={["Ryo Eiamrerai","Bangkok,Thailand","Nice to meet you"]} speed={80} eraseDelay={100} className="typingeffect justify-center font-bold" />
        </div>
        <Slide>
        <div className='py-16'>
            <img  src="./RyoU.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className="py-16">
            <img  src="./RyoU2.jpg" className='object-cover w-96 h-96 mx-auto' />
          </div>
        </Slide>
        </div>
        )
}
export default Home
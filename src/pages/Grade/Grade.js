import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import ReactTypingEffect from 'react-typing-effect'


const Grade = () => {
    return (
        <div className='py-36'>
        <div className='text-center font-bold text-3xl text-gray-700'>
        <ReactTypingEffect text={["เกรดเฉลี่ยแต่ละเทอม","My Grade in Kasetsart University"]} speed={80} eraseDelay={100} className="typingeffect justify-center font-bold" />
        </div>
        <Slide>
        <div className='py-16'>
            <img  src="./image/1ท1.jpg" className='object-cover h-auto mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/1ท2.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/1ซม.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/2ท1.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/2ท2.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/2ซม.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/3ท1.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/3ท2.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/4ท1.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/4ท2.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/5ท1.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
          <div className='py-16'>
            <img  src="./image/5ท2.jpg" className='object-cover h-96 mx-auto w-96'/>
          </div>
        </Slide>
        </div>
        )
}
export default Grade
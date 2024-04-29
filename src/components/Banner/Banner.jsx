import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Slide1 from '../../../src/assets/images/Slide1.jpeg'
import Slide2 from '../../../src/assets/images/Slide2.jpeg'
import Slide3 from '../../../src/assets/images/Slide3.jpeg'


const Banner = () => {
    return (
        <div className='z-30'>
            <div className='w-full'>
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                      <SwiperSlide>
                               <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Slide1} alt="" />
                               
                               
                      </SwiperSlide>
                      <SwiperSlide>
                                <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Slide2} alt="" />
                                
                                
                               
                      </SwiperSlide>
                      <SwiperSlide>
                                <img className='w-full lg:h-[600px] h-[270px] md:h-[450px] rounded-b-lg' src={Slide3} alt="" />
                                
                                
                      
                      </SwiperSlide>
                      
                </Swiper>
                
            </div>
            <div className='text-2xl my-5 font-semibold text-center'>
            <Typewriter
      words={['Welcome to RusticRopeCrafts, where timeless elegance meets sustainable craftsmanship.']}
      loop= {1}
      cursor
      cursorStyle=''
      typeSpeed={70}
    //   deleteSpeed={70}
      delaySpeed={1000}
    />
            </div>
            
           
    
            </div>

            
       
    );
};

export default Banner;   
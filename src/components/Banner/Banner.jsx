import { Swiper, SwiperSlide } from 'swiper/react';
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
            
        </div>
    );
};

export default Banner;   
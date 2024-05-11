

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';



import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// Import Swiper styles

import 'swiper/css';
import './Slider.css'

const Slider = () => {
  return (
    <div>
      <h1 className='text-center text-2xl mt-4 justify-center'>Swiper Slider</h1>
      <div className='mt-10' >
        <div>
          {/* <div className="absolute -mr-9">
        <h3 className="text-bold">Our property</h3>
      </div> */}
          <Swiper

            className="h-3/4 relative rounded-3xl md:h-96vh"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade,]}

            spaceBetween={50}
            slidesPerView={1}
            navigation={true}

            effect="fade"
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
          // onSwiper={swiper => console.log(swiper)}


          >
            <div >

              <div>

                <SwiperSlide className='flex justify-center text-center  font-bold bg-slate-400 items-center  
          '>

                  <div className='slide  slide10'>



                  </div>


                </SwiperSlide>

              </div>
              <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center
          '>



                <div className='slide  slide20'>



                </div>

              </SwiperSlide>
              <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center'>



                <div className='slide slide30'>


                </div>

              </SwiperSlide>
              <SwiperSlide className='flex justify-center text-center font-bold bg-slate-400 items-center '>



                <div className='slide slide40'>


                </div>

              </SwiperSlide>
            </div>
          </Swiper>
        </div>


      </div>

    </div>
  );
};

export default Slider;
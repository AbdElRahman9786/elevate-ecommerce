
import img1 from '../assets/images/image2.jpg'
import img2 from '../assets/images/image3.jpg'
import { SwiperSlide,Swiper } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
      
    >
      
      <SwiperSlide><img src={img1} className='w-100'/></SwiperSlide>
      <SwiperSlide><img src={img2} className='w-100'/></SwiperSlide>
      
      
    </Swiper>
  )
}

export default Slider
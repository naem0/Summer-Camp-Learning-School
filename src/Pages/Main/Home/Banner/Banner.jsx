import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './banner.css'

import img1 from '../../../../assets/img/alliance-football-club-hXJ4O3S73gE-unsplash.jpg'
import img2 from '../../../../assets/img/ben-hershey-abbPnv1xq1U-unsplash.jpg'
import img3 from '../../../../assets/img/ben-hershey-B4XZxcZcTsI-unsplash.jpg'
import img4 from '../../../../assets/img/ben-hershey-nu4h8sMqees-unsplash.jpg'
import img5 from '../../../../assets/img/kenny-eliason-5X2JXYX6hP4-unsplash.jpg'
import img6 from '../../../../assets/img/kenny-eliason-8Mz5ZF5H13s-unsplash.jpg'
import img8 from '../../../../assets/img/kenny-eliason-J4RSyiz_M3I-unsplash.jpg'
import img9 from '../../../../assets/img/kyle-pham-njuYs5kFJ3s-unsplash (1).jpg'

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='h-banae ' src={img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-banar' src={img6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-banar' src={img8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-banar' src={img3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-banar' src={img4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-banar' src={img5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-banar' src={img9} alt="" />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
};

export default Banner;
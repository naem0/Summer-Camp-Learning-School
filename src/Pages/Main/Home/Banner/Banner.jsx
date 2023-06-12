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
                    <div className="" style={{
                        backgroundImage: `url(${img1})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img2})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img3})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img4})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img5})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img6})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img8})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="" style={{
                        backgroundImage: `url(${img9})`,
                        // backgroundImage: `url(${externalImage})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: 'full'
                    }}>
                        <div className=" bg-black bg-opacity-25 pb-12 pt-32">
                            <div className="md:w lg:w-1/2 text-center mx-auto mb-10 text-white">
                                <h1 className='text-4xl font-bold mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptatibus quisquam dicta quibusdam incidunt accusamus, odit adipisci illum mollitia omnis voluptatum distinctio, dolores vero doloremque at? Quae est eum reiciendis quam ullam? Ratione aut doloribus provident tempora, et cupiditate praesentium ad ipsum libero, vitae quam at, consectetur mollitia nam corporis.</p>
                            </div>
                        </div>
                    </div>
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
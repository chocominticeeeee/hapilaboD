"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React, { useEffect } from "react";
import "swiper/css";
import AppIcons from "../../assets/appIcons/AppIcons";

function AppSwiper() {
    let swiperInstance = null;
    const handleTouchStart = () => {
        console.log("start");
    };

    const handleTouchEnd = () => {
        console.log("end");
    };

    const handleSwiperInit = (swiper) => {
        swiperInstance = swiper;
    };

    return (
        <div className="appsSwiper">
            <p className="subTitle">
                業界最大級！
                <br />
                <span className="font_pink chonPink">10</span>個の配信アプリに対応！
            </p>
            <Swiper
                modules={[Autoplay]}
                loop={true}
                allowTouchMove={true}
                spaceBetween={20}
                slidesPerView={6}
                autoplay={{ delay: 500 }}
                speed={5000}
                onSwiper={handleSwiperInit}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                breakpoints={{
                    100: {
                        slidesPerView: 4,
                    },
                    540: {
                        slidesPerView: 5,
                    },
                    839: {
                        slidesPerView: 6,
                    },
                }}
            >
                {AppIcons.map((AppIcons) => {
                    return (
                        <SwiperSlide key={AppIcons.name}>
                            <div className="icon_title">
                                <div className="appIcon">
                                    <img src={AppIcons.src} alt={AppIcons.name} />
                                </div>
                                <span className="appName">{AppIcons.name}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default AppSwiper;

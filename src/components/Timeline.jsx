import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Timeline = () => {
  const { Timeline } = content;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section id="timeline">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Timeline.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Timeline.subtitle}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            console.log(e.realIndex);
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Timeline.timeline_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col h-fit
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-24" /> 
                <div>
                  <h6>{content.position}</h6>
                  <h7 className="text-gray font-bold">{content.company} </h7>
                  <br />
                  <h7 className="text-gray font-bold">[{content.duration}]</h7>
                  {/* <br /> */}
                  <p className="sm:text-base text-sm">{content.info}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Timeline;

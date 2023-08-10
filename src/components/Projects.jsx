import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="" id="projects">
      <div className="md:container px-5 pt-14 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          /> */}
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            scrollbar={{ draggable: true }}
            modules={[Pagination]}
            className="rounded-3xl pb-16  max-w-xs sm:max-w-xl self-start"
          /* drop-shadow-primary */
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className=" bg-bg_light_primary rounded-3xl p-5 border-b-8 border-slate-200 h-fit flex flex-col"
              >
                <img className="" src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h4 className="font-bold p-1">{content.title}</h4>
                  <h7 className="text-gray font-bold p-1">{content.subtitle}</h7>
                  <br />

                  <div className="flex gap-7 p-1 justify-center">

                    {content.deploymentUrl.length > 0 &&
                      <button><a href={content.deploymentUrl} target="_blank">
                        <svg class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 18 18">
                          <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                          <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                        </svg>
                      </a></button>
                    }
                    {content.githubUrl.length > 0 &&
                      <button><a href={content.githubUrl} target="_blank">
                        <svg class="w-7 h-7 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                      </a>
                      </button>
                    }

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;

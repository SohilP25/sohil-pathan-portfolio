import { content } from "../Content";

const Info = () => {
  const { Info } = content;

  return (
    <section className="bg-bg_light_primary" id="info">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Info.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Info.subtitle}
        </h4>
        <br />
        <div className="flex items-center flex-col-reverse pb-20 ">
          {/* <img
            src={Info.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Info.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          /> */}
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-xl
           p-8 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[2rem]"
          >
            <p className="leading-7">{Info.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              <a href="#contact">{Info.btnText}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

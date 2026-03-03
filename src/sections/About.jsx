const About = () => {
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="bg-black-200 border-black-300 rounded-lg p-4 flex flex-col gap-2 ">
            <div className="flex justify-center">
              <img
                src="./assets/grid1.png"
                alt="grid-1"
                className=" w-fit sm:h-[276px] h-fit rounded-t-xl"
              />
            </div>

            <div>
              <p className="text-xl mb-2 text-white font-semibold font-generalsan">
                Hi, I’m Musfiraa Arif
              </p>
              <p className="text-base text-[#afb0b6] font-generalsan">
                With 3 years of experience, I have honed my skills in both
                frontend and backend dev, creating dynamic and responsive
                websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="bg-black-200 border-black-300 rounded-lg p-4 flex flex-col gap-2">
            <div className="flex justify-center">
              <img
                src="./assets/grid2.png"
                alt="grid-1"
                className=" w-fit sm:h-[276px] h-fit rounded-t-xl"
              />
            </div>
             <div>
              <p className="text-xl mb-2 text-white font-semibold font-generalsan">
                Tech Stack
              </p>
              <p className="text-base text-[#afb0b6] font-generalsan">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

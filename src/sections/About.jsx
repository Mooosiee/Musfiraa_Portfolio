import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";
const About = () => {
  const getGlobeImageUrl = () => { 
  const hour = new Date().getHours();
  // assuming day betweeen 6 am to 6 pm
  const isDay = hour >= 6 && hour < 18;
  return isDay ? "//unpkg.com/three-globe/example/img/earth-day.jpg" : "//unpkg.com/three-globe/example/img/earth-night.jpg";
}
  const [hasCopied, setHasCopied] = useState(false);
  // created a useState hook to manage the copied state of the email address. when the user clicks on the copy container, the handleCopy function will be called,
  // which will copy the email address to the clipboard and set the hasCopied state to true for 2 seconds before resetting it back to false. 
  // this will allow us to show a tick icon when the email is successfully copied and revert back to the copy icon after a short duration.
const handleCopy = () => {
  navigator.clipboard.writeText('musfiraaarif12@gmail.com');
  // the navigator.clipboard.writeText() method is used to copy the specified text (in this case, the email address) to the clipboard. when the user clicks on the copy container, this function will be triggered, copying the email address to their clipboard for easy pasting elsewhere.
  setHasCopied(true);
  setTimeout(() => {
    setHasCopied(false);
  }, 2000);
}
  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full bg-black-200 border-black-300 rounded-lg sm:p-7 p-4 flex flex-col gap-2 ">
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
          <div className=" w-full h-full bg-black-200 border-black-300 rounded-lg sm:p-7 p-4 flex flex-col gap-2">
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

        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full bg-black-200 border-black-300 rounded-lg sm:p-7 p-4 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                // what does showAtmosphere do ? it adds a glow around the globe to make it look more realistic and visually appealing. it creates a halo effect around the globe, simulating the scattering of light in the atmosphere. this can enhance the overall aesthetic of the globe and make it more engaging for viewers.
                showGraticules
                // what does showGraticules do ? it adds a grid of lines on the globe to represent latitude and longitude. it helps to visualize the geographic coordinates and can make it easier to understand the location of different points on the globe. it can also enhance the overall appearance of the globe by adding more detail and structure.
                  globeImageUrl={getGlobeImageUrl()}
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 },
                  ]}
              />
            </div>
             <p className="text-xl mb-2 text-white font-semibold font-generalsan">I’m very flexible with time zone communications & locations</p>
          <p className="text-base text-[#afb0b6] font-generalsan">I’m based in Gwalior, India and open to remote work worldwide.</p>
            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
          </div>
          
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Copy Email to Clipboard</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">musfiraaarif12@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

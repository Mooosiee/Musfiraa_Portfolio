import { Center, OrbitControls } from "@react-three/drei";
import { myProjects } from "../constants";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";

const projectCount = myProjects.length;
const Projects = () => {
  // const selectedProjectIndex = 0; // Change this index to display different projects
  const[selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];
  return (
    <section className="c-space my-20">
      <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient">
        My Work
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-5 w-full">
        <div>
          {/* BG PNG(SPOTLIGHT) SKIPPED */}

          {/* LOGO SKIPPED */}

          <div className="flex flex-col gap-5 my-5 text-white-600  ">
            <p className="text-white text-2xl font-semibold ">
              {currentProject.title}
            </p>

            <p className="">{currentProject.desc}</p>
            <p className="">{currentProject.subdesc}</p>
          </div>

          <div className="flex justify-between flex-wrap gap-5">
            <div className="flex gap-3 items-center">
              {currentProject.tags.map((tag, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-neutral-100 bg-opacity-10 rounded-md flex justify-center items-center backdrop-blur-lg p-2"
                >
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              // target blank means it will open the link in a new tab
              target="_blank"
              // noreferrer is used to prevent the new page from being able to access the window.opener property
              // and ensures it runs in a separate process. This is a security measure to protect against certain types of attacks.
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>
            <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow"  className="w-4 h-4" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 lg:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                {/* what is the purpose of the group element here? */}
                {/* The group element is used to group multiple 3D objects together so that they can be transformed as a single unit. */}
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]} >
                   <DemoComputer texture={currentProject.texture}/>
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
         </div>
      </div>
    </section>
  );
};

export default Projects;

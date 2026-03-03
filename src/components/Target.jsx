import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

// Incomplete 
//Gsap is an animtion library
export const Target = (props) => {
const targetRef = useRef();
  const { scene } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
  );
    return (
    //    We cant Render Divs inside Canvas so we will render the 3D model of the target stand and position it in the scene.
      <mesh {...props} ref={targetRef} >
          <primitive object={scene} />
    </mesh>
  )
}

import { useFrame } from "@react-three/fiber"
import { easing } from "maath";
import { useRef } from "react"

const HeroCamera = ({isMobile,children}) => {
    const group = useRef()
    useFrame((state, delta) => {
         easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
    });
    //why do we render a group here? because we want to apply the same transformation to all the children components,
        //so we can move the camera and all the children will move with it.
        //why not div? because we are in a 3D space and we want to use the group component to group the children together and apply transformations to them.
        //does group work in a 3D space only? yes, it does. it is a special component that is used to group other components together and apply transformations to them.    
    return <group ref={group} scale={isMobile ? 1 : 1.2}>{children}</group>;
  
}

export default HeroCamera
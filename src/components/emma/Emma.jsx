import React, { useRef } from "react";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { AnimatedWoman } from "../models/Animated_Woman";
import { useFrame } from "@react-three/fiber";

const Emma = () => {
  const emma = useRef();
  const emmaTextShowing = store((state) => state.emmaTextShowing);
  const emmaQuestActive = store((state) => state.emmaQuestActive);
  const emmaQuest2Active = store((state) => state.emmaQuest2Active);
  const emmaText2Showing = store((state) => state.emmaText2Showing);

  const handleClickEmma = () => {
    if (emmaQuestActive && !emmaTextShowing)
      store.setState({ emmaTextShowing: true });
    if (emmaQuest2Active && !emmaText2Showing)
      store.setState({ emmaText2Showing: true });
  };

  return (
    <group
      ref={emma}
      position={[4.5, -0.9, 4.5]}
      rotation={[0, Math.PI, 0]}
      onClick={handleClickEmma}
      onPointerOver={() => {
        if (
          (!emmaTextShowing && emmaQuestActive) ||
          (!emmaText2Showing && emmaQuest2Active)
        )
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <AnimatedWoman scale={0.75} />
    </group>
  );
};

export default Emma;

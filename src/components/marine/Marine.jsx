import React, { useRef } from "react";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { AnimatedWoman } from "../models/Animated_Woman";
import { useFrame } from "@react-three/fiber";
import { SuitGirl } from "../models/SuitGirl";
import { AnimatedWoman2 } from "../models/Animated_Woman2";

const Marine = () => {
  const marine = useRef();
  const marineTextShowing = store((state) => state.marineTextShowing);
  const marineQuestActive = store((state) => state.marineQuestActive);
  const marineQuestDone = store((state) => state.marineQuestDone);

  const handleClickMarine = () => {
    if (marineQuestActive && !marineTextShowing)
      store.setState({ marineTextShowing: true });
  };

  return (
    <group
      ref={marine}
      position={[4.5, -0.9, -0.75]}
      rotation={[0, -Math.PI / 4, 0]}
      onClick={handleClickMarine}
      onPointerOver={() => {
        if (!marineTextShowing && marineQuestActive)
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <AnimatedWoman2 scale={0.75} />
    </group>
  );
};

export default Marine;

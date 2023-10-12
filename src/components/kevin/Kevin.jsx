import React, { useRef } from "react";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { AnimatedWoman } from "../models/Animated_Woman";
import { useFrame } from "@react-three/fiber";
import { SuitGirl } from "../models/SuitGirl";
import { BeachCharacter } from "../models/Beach_Character";

const Kevin = () => {
  const kevin = useRef();
  const kevinTextShowing = store((state) => state.kevinTextShowing);
  const kevinQuestActive = store((state) => state.kevinQuestActive);
  const kevinQuestDone = store((state) => state.kevinQuestDone);

  const handleClickKevin = () => {
    if (kevinQuestActive && !kevinTextShowing)
      store.setState({ kevinTextShowing: true });
  };

  return (
    <group
      ref={kevin}
      position={[-0.75, -0.9, -4]}
      rotation={[0, 0, 0]}
      onClick={handleClickKevin}
      onPointerOver={() => {
        if (!kevinTextShowing && kevinQuestActive)
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <BeachCharacter scale={0.75} />
    </group>
  );
};

export default Kevin;

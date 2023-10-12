import React, { useRef } from "react";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { AnimatedWoman } from "../models/Animated_Woman";
import { useFrame } from "@react-three/fiber";
import { SuitGirl } from "../models/SuitGirl";

const Laura = () => {
  const laura = useRef();
  const lauraTextShowing = store((state) => state.lauraTextShowing);
  const lauraQuestActive = store((state) => state.lauraQuestActive);
  const lauraQuestDone = store((state) => state.lauraQuestDone);

  const handleClickLaura = () => {
    if (lauraQuestActive && !lauraTextShowing)
      store.setState({ lauraTextShowing: true });
  };

  return (
    <group
      ref={laura}
      position={[2, -0.9, -1.5]}
      rotation={[0, -Math.PI / 4, 0]}
      onClick={handleClickLaura}
      onPointerOver={() => {
        if (!lauraTextShowing && lauraQuestActive)
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <SuitGirl scale={0.75} />
    </group>
  );
};

export default Laura;

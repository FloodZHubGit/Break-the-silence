import React, { useRef } from "react";
import store from "../../stores/store";
import { Html } from "@react-three/drei";
import { AnimatedWoman } from "../models/Animated_Woman";
import { useFrame } from "@react-three/fiber";
import { SuitGirl } from "../models/SuitGirl";
import { PunkGirl } from "../models/PunkGirl";

const Zoe = () => {
  const zoe = useRef();
  const zoeTextShowing = store((state) => state.zoeTextShowing);
  const zoeQuestActive = store((state) => state.zoeQuestActive);
  const zoeQuestDone = store((state) => state.zoeQuestDone);
  const zoeText2Showing = store((state) => state.zoeText2Showing);
  const zoeQuest2Active = store((state) => state.zoeQuest2Active);
  const zoeQuest2Done = store((state) => state.zoeQuest2Done);

  const handleClickZoe = () => {
    if (zoeQuestActive && !zoeTextShowing)
      store.setState({ zoeTextShowing: true });
    if (zoeQuest2Active && !zoeText2Showing)
      store.setState({ zoeText2Showing: true });
  };

  return (
    <group
      ref={zoe}
      position={[-4, -0.9, -1.7]}
      rotation={[0, -Math.PI / 2, 0]}
      onClick={handleClickZoe}
      onPointerOver={() => {
        if (
          (!zoeTextShowing && zoeQuestActive) ||
          (!zoeText2Showing && zoeQuest2Active)
        )
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <PunkGirl scale={0.75} />
    </group>
  );
};

export default Zoe;

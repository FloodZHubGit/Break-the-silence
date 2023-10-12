import React, { useRef } from "react";
import { BusinessMan } from "../models/Business_Man";
import store from "../../stores/store";
import { Html } from "@react-three/drei";

const John = () => {
  const john = useRef();
  const johnTextShowing = store((state) => state.johnTextShowing);
  const johnQuestActive = store((state) => state.johnQuestActive);
  const johnText2Showing = store((state) => state.johnText2Showing);
  const johnQuest2Active = store((state) => state.johnQuest2Active);

  const handleClickJohn = () => {
    if (!johnTextShowing && johnQuestActive)
      store.setState({ johnTextShowing: true });
    if (!johnText2Showing && johnQuest2Active)
      store.setState({ johnText2Showing: true });
  };

  return (
    <group
      ref={john}
      position={[2.5, -0.9, 4.5]}
      rotation={[0, Math.PI, 0]}
      onClick={handleClickJohn}
      onPointerOver={() => {
        if (
          (!johnTextShowing && johnQuestActive) ||
          (!johnText2Showing && johnQuest2Active)
        )
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <BusinessMan scale={0.75} />
    </group>
  );
};

export default John;

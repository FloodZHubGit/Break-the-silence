import React, { useRef } from "react";
import { BusinessMan } from "../models/Business_Man";
import store from "../../stores/store";
import { Html } from "@react-three/drei";

const John = () => {
  const john = useRef();
  const johnTextShowing = store((state) => state.johnTextShowing);
  const johnQuestActive = store((state) => state.johnQuestActive);

  const handleClickJohn = () => {
    if (johnTextShowing) return;
    if (!johnQuestActive) return;
    store.setState({ johnTextShowing: true });
  };

  return (
    <group
      ref={john}
      position={[2.5, -0.9, 1]}
      rotation={[0, Math.PI * 1.5, 0]}
      onClick={handleClickJohn}
      onPointerOver={() => {
        if (!johnTextShowing && johnQuestActive)
          document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <BusinessMan scale={0.75} />
      {!johnTextShowing && johnQuestActive && (
        <Html wrapperClass="bulle" center position={[0, 2, 0]}>
          John veut vous parler
        </Html>
      )}
    </group>
  );
};

export default John;
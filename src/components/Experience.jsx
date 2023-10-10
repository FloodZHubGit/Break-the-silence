import React from "react";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import { useRef } from "react";
import { PhoneModel } from "./models/PhoneModel";
import Phone from "./phone/phone";

export const Experience = () => {
  const office = useRef();

  return (
    <>
      <OrbitControls makeDefault enablePan={false} />
      <Stage environment="apartment" intensity={0.2} contactShadowOpacity={1}>
        <group ref={office} position={[0, 0, 0]}>
          <Office />
        </group>
      </Stage>
      <John />
      <Emma />
      <Phone />
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[-4.9, 0.3, 3.45]}
        scale={1.2}
        rotation={[0, Math.PI / 2, 0]}
        occlude
      >
        <video src="FirstAidFail-TheOfficeUS.mp4" autoPlay muted loop />
      </Html>
    </>
  );
};

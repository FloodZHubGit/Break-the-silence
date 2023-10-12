import React from "react";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Office } from "./models/Office";
import John from "./john/John";
import Emma from "./emma/Emma";
import "../index.css";
import { useRef } from "react";
import Phone from "./phone/Phone";
import Laura from "./laura/Laura";
import Zoe from "./Zoe/Zoe";
import PostIt from "./postit/PostIt";
import Kevin from "./kevin/Kevin";
import Marine from "./marine/Marine";
import { PoliceCar } from "./models/PoliceCar";
import store from "../stores/store";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
  const office = useRef();
  const policeCar = useRef();
  const animationFinale = store((state) => state.animationFinale);

  useFrame(() => {
    if (animationFinale) policeCar.current.position.x += 0.05;
  });

  return (
    <>
      <OrbitControls makeDefault enablePan={false} />
      <Stage environment="apartment" intensity={0.2} contactShadowOpacity={1}>
        <group ref={office} position={[0, 0, 0]}>
          <Office />
        </group>
      </Stage>
      {!animationFinale && <John />}
      <Emma />
      <Phone />
      <Laura />
      <Zoe />
      <PostIt />
      <Kevin />
      <Marine />
      {animationFinale && (
        <group
          position={[1.5, -1.2, 7]}
          rotation={[0, Math.PI / 2, 0]}
          ref={policeCar}
        >
          <PoliceCar />
        </group>
      )}
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

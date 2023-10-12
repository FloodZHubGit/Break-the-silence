import React, { useRef, useEffect } from "react";
import { Html, OrbitControls, Stage } from "@react-three/drei";
import { Office } from "./models/Office";
import { PoliceCar } from "./models/PoliceCar";
import John from "./john/John";
import Emma from "./emma/Emma";
import Phone from "./phone/Phone";
import Laura from "./laura/Laura";
import Zoe from "./Zoe/Zoe";
import PostIt from "./postit/PostIt";
import Kevin from "./kevin/Kevin";
import Marine from "./marine/Marine";
import store from "../stores/store";
import { useFrame } from "@react-three/fiber";

export const Experience = () => {
  const office = useRef();
  const policeCar = useRef();
  const animationFinale = store((state) => state.animationFinale);

  const maxSpeed = 0.2; // Maximum speed
  const acceleration = 0.005; // Acceleration rate
  const deceleration = 0.01; // Deceleration rate
  const rotationSpeed = 0.04;

  const moveDirection = {
    forward: false,
    backward: false,
    left: false,
    right: false,
  };

  const speed = useRef(0); // Current speed

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (animationFinale) {
        if (e.key === "z" || e.key === "ArrowUp") moveDirection.forward = true;
        if (e.key === "s" || e.key === "ArrowDown")
          moveDirection.backward = true;
        if (e.key === "q" || e.key === "ArrowLeft") moveDirection.left = true;
        if (e.key === "d" || e.key === "ArrowRight") moveDirection.right = true;
      }
    };

    const handleKeyUp = (e) => {
      if (animationFinale) {
        if (e.key === "z" || e.key === "ArrowUp") moveDirection.forward = false;
        if (e.key === "s" || e.key === "ArrowDown")
          moveDirection.backward = false;
        if (e.key === "q" || e.key === "ArrowLeft") moveDirection.left = false;
        if (e.key === "d" || e.key === "ArrowRight")
          moveDirection.right = false;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [animationFinale]);

  useFrame(() => {
    if (animationFinale) {
      const angle = policeCar.current.rotation.y;

      // Acceleration logic
      if (moveDirection.forward) {
        if (speed.current < maxSpeed) {
          speed.current += acceleration;
        }
      } else if (moveDirection.backward) {
        if (speed.current > -maxSpeed) {
          speed.current -= acceleration;
        }
      }

      // Deceleration logic
      if (!moveDirection.forward && !moveDirection.backward) {
        if (speed.current > 0) {
          speed.current -= deceleration;
          if (speed.current < 0) speed.current = 0;
        } else if (speed.current < 0) {
          speed.current += deceleration;
          if (speed.current > 0) speed.current = 0;
        }
      }

      // Update car position
      policeCar.current.position.x += speed.current * Math.sin(angle);
      policeCar.current.position.z += speed.current * Math.cos(angle);

      if (moveDirection.left) policeCar.current.rotation.y += rotationSpeed;
      if (moveDirection.right) policeCar.current.rotation.y -= rotationSpeed;
    }
  });

  return (
    <>
      <OrbitControls makeDefault enablePan={false} />
      <Stage environment="apartment" intensity={0.2} contactShadowOpacity={1}>
        <group ref={office} position={[0, 0, 0]}>
          <Office />
        </group>
      </Stage>
      {animationFinale && (
        <group
          position={[1.5, -1.2, 7]}
          rotation={[0, Math.PI / 2, 0]}
          ref={policeCar}
        >
          <PoliceCar />
        </group>
      )}
      {!animationFinale && <John />}
      <Emma />
      <Phone />
      <Laura />
      <Zoe />
      <PostIt />
      <Kevin />
      <Marine />
    </>
  );
};

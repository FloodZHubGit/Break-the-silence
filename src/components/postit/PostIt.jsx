import React, { useRef } from "react";
import store from "../../stores/store";
import { StickyNotes } from "../models/Sticky_notes";

export default function PostIt() {
  const postit = useRef();
  const postItQuestActive = store((state) => state.postItQuestActive);
  const postItMenuShowing = store((state) => state.postItMenuShowing);
  const zoeQuest2Done = store((state) => state.zoeQuest2Done);

  const handleClickPostIt = () => {
    if (!postItQuestActive) return;
    if (postItMenuShowing) return;
    store.setState({ postItMenuShowing: true });
  };

  return (
    <>
      <group
        ref={postit}
        position={[2.9, -1.1, -2.7]}
        rotation={[0, 0, 0]}
        scale={1.5}
        onPointerOver={() => {
          if (postItQuestActive && !postItMenuShowing)
            document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
        onClick={handleClickPostIt}
      >
        <StickyNotes />
      </group>
    </>
  );
}

import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader } from "@react-three/drei";
import ConversationJohn from "./components/john/ConversationJohn";
import ConversationEmma from "./components/emma/ConversationEmma";
import Interface from "./components/Interface";
import ConversationEmma2 from "./components/emma/ConversationEmma2";
import PhoneInterface from "./components/phone/PhoneInterface";
import ConversationLaura from "./components/laura/ConversationLaura";
import ConversationZoe from "./components/Zoe/ConversationZoe";
import PostItInterface from "./components/postit/PostItInterface";
import ConversationZoe2 from "./components/Zoe/ConversationZoe2";
import ConversationKevin from "./components/kevin/ConversationKevin";
import ConversationMarine from "./components/marine/ConversationMarine";
import ConversationJohn2 from "./components/john/ConversationJohn2";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [10, 5, 10], fov: 30 }}>
        <color attach="background" args={["#f7dcad"]} />
        <Experience />
      </Canvas>
      <Loader />
      <Interface />
      <PhoneInterface />
      <ConversationJohn />
      <ConversationEmma />
      <ConversationEmma2 />
      <ConversationLaura />
      <ConversationZoe />
      <PostItInterface />
      <ConversationZoe2 />
      <ConversationKevin />
      <ConversationMarine />
      <ConversationJohn2 />
    </>
  );
}

export default App;

import React from "react";
import store from "../../stores/store";

export default function PostItInterface() {
  const postItMenuShowing = store((state) => state.postItMenuShowing);
  const postItQuestActive = store((state) => state.postItQuestActive);

  const handleClickClose = () => {
    if (!postItMenuShowing) return;
    if (!postItQuestActive) return;
    store.setState({ postItMenuShowing: false });
    store.setState({ postItQuestActive: false });
    store.setState({ postItQuestDone: true });
    store.setState({ currentQuest: "Retourner voir Zoé" });
    store.setState({ zoeQuest2Active: true });
  };

  return (
    <>
      {postItMenuShowing && (
        <div>
          <div className="phone-interface">
            <img src="./post-it.png" alt="" />
          </div>
          <div className="close-phone" onClick={handleClickClose}>
            X
          </div>
        </div>
      )}
    </>
  );
}

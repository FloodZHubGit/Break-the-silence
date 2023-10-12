import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export default create(
  subscribeWithSelector((set) => {
    return {
      currentQuest: "Parler à John",

      personHelped: 0,
      totalPersonToHelp: 5,

      johnQuestActive: true,
      johnQuestDone: false,
      johnTextShowing: false,

      emmaQuestActive: false,
      emmaTextShowing: false,
      emmaQuestDone: false,

      phoneQuestActive: false,
      phoneMenuShowing: false,
      phoneQuestDone: false,

      emmaQuest2Active: false,
      emmaText2Showing: false,
      emmaQuest2Done: false,

      lauraQuestActive: false,
      lauraTextShowing: false,
      lauraQuestDone: false,

      zoeQuestActive: false,
      zoeTextShowing: false,
      zoetQuestDone: false,

      postItQuestActive: false,
      postItMenuShowing: false,
      postItQuestDone: false,

      zoeQuest2Active: false,
      zoeText2Showing: false,
      zoeQuest2Done: false,

      kevinQuestActive: false,
      kevinTextShowing: false,
      kevinQuestDone: false,

      marineQuestActive: false,
      marineTextShowing: false,
      marineQuestDone: false,

      johnQuest2Active: false,
      johnText2Showing: false,
      johnQuest2Done: false,

      animationFinale: false,
    };
  })
);

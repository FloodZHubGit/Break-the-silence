import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationZoe2() {
  const zoeText2Showing = store((state) => state.zoeText2Showing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Zoé",
      message:
        "Super tu l’as trouvé ! Le message qu’il m'a laissé me rend vraiment mal à l’aise.",
      options: [
        {
          text: "Tu devrais en parler à ton supérieur !",
          correct: false,
        },
        {
          text: "Et c’est la première fois qu’il te laisse ce genre de message sur ton bureau ?",
          correct: true,
        },
        {
          text: "Ne répond pas et ignore le.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Zoé",
      message:
        "Oui c’est la première fois qu’il me laisse un message sur mon bureau, même à la pause il ne m’a jamais adressé la parole.",
      options: [
        {
          text: "Tu devrais en parler immédiatement à la police ou à la gendarmerie !",
          correct: false,
        },
        {
          text: "Je pense qu’il essaye de te draguer, il doit être timide pour ne jamais t’avoir adressé la parole. Tu as essayé de lui en parler ?",
          correct: true,
        },
      ],
    },
    {
      speaker: "Zoé",
      message: "Non jamais.",
      options: [
        {
          text: "Parle lui et dit lui que tu n’es pas intéressé et que le post-it t’a mit mal à l’aise. S’il insiste et continue à laisser des post-it sur ton bureau, préviens la police ou la gendarmerie.",
          correct: false,
        },
        {
          text: "Laisse tomber, ne fais rien il arrêtera sûrement.",
          correct: false,
        },
        {
          text: "Parle lui, dis lui que tu n’es pas intéressé et que le post-it t’as mis mal à l’aise. S’il insiste et continue à laisser des post-it sur ton bureau, préviens ton supérieur hiérarchique.",
          correct: true,
        },
      ],
    },
    {
      speaker: "Zoé",
      message:
        "Oui c’est vrai, tu as surement raison, je vais aller lui parler. Merci pour ton aide !",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "Zoé") {
      return "zoe.png";
    } else {
      return "moi.png";
    }
  };

  const handleResponse = (responseIndex) => {
    if (step < steps.length) {
      const currentStep = steps[step];
      if (currentStep.options && currentStep.options[responseIndex].correct) {
        // L'utilisateur a choisi la réponse correcte
        setStep(step + 1);
      } else {
        // L'utilisateur a choisi une réponse incorrecte
        setStep(0);
      }
    }
  };

  const closeConversation = () => {
    store.setState({ currentQuest: "A suivre" });
    store.setState({ personHelped: 3 });
    store.setState({ zoeQuest2Active: false });
    store.setState({ zoeQuest2Done: true });
    store.setState({ zoeText2Showing: false });
    store.setState({ kevinQuestActive: true });
  };

  return (
    <>
      {zoeText2Showing && (
        <div className="conversation">
          <img
            src={getImage(steps[step].speaker)}
            alt={steps[step].speaker}
            className="employe-image"
          />
          <div className="nomPersonne">
            <p>{steps[step].speaker}</p>
          </div>
          <div className="message">
            <p>{steps[step].message}</p>
          </div>
          <div className="boutons">
            {step < steps.length && (
              <div className="reponse-buttons">
                {steps[step].options ? (
                  steps[step].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleResponse(index)}
                      className="reponse-button"
                    >
                      {option.text}
                    </button>
                  ))
                ) : (
                  <>
                    {!(step === steps.length - 1) && (
                      <button onClick={next} className="reponse-button">
                        Suivant
                      </button>
                    )}
                    {step === steps.length - 1 && (
                      <button
                        onClick={closeConversation}
                        className="reponse-button"
                      >
                        Fermer
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

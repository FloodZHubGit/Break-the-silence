import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationZoe() {
  const zoeTextShowing = store((state) => state.zoeTextShowing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Moi",
      message: "Bonjour, Zoé c’est bien ça ?",
    },
    {
      speaker: "Zoé",
      message: "Oui c’est moi.",
    },
    {
      speaker: "Moi",
      message:
        "Comment se passe ta vie au travail, tes collègues sont respectueux ? ",
    },
    {
      speaker: "Zoé",
      message:
        "Ça se passe bien. Mais Nathan a laissé un post-it sur mon bureau, m’invitant à aller boire un verre après le travail. Cela me met mal à l’aise.",
    },
    {
      speaker: "Moi",
      message: "Tu as gardé ce post-it ?",
    },
    {
      speaker: "Zoé",
      message:
        " Oui il est sur mon bureau, peux-tu aller le chercher s’il te plait ?",
    },
    {
      speaker: "Moi",
      message: "Oui bien sûr, je vais le chercher.",
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
    store.setState({ currentQuest: "Retrouver le post-it" });
    store.setState({ zoeTextShowing: false });
    store.setState({ zoeQuestActive: false });
    store.setState({ zoeQuestDone: true });
    store.setState({ postItQuestActive: true });
  };

  return (
    <>
      {zoeTextShowing && (
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

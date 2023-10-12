import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationJohn2() {
  const johnText2Showing = store((state) => state.johnText2Showing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Moi",
      message:
        "Tu m’as dit qu’il n’y avait aucun problème dans le bureau, mais j’en ai constaté plusieurs, d’ailleurs le dernier m'a grandement surpris, Marine est partie porter plainte, ce n’est qu’une question de temps pour que la police vienne t’arrêter. Toute l’agression a été filmée.",
    },
    {
      speaker: "John",
      message: "Non mais c’est ridicule je n’ai j…",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "John") {
      return "john.png";
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
    store.setState({ currentQuest: "Au revoir John !" });
    store.setState({ johnQuest2Active: false });
    store.setState({ johnQuest2Done: true });
    store.setState({ johnText2Showing: false });
    store.setState({ animationFinale: true });
  };

  return (
    <>
      {johnText2Showing && (
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

import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationKevin() {
  const kevinTextShowing = store((state) => state.kevinTextShowing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Kévin",
      message: "Salut, j’ai des questions à te poser.",
      options: [
        {
          text: "Désolé j’ai pas le temps.",
          correct: false,
        },
        {
          text: "Je t'écoute.",
          correct: true,
        },
      ],
    },
    {
      speaker: "Kévin",
      message:
        "Avec Sarah, je ne comprends pas, j’essaye d'être tactile avec elle, mais elle n'est pas réceptive, je l’ai invité à boire un verre, mais elle a refusé. Je ne sais plus quoi faire pour la draguer.",
      options: [
        {
          text: "Elle est peut-être juste trop timide.",
          correct: false,
        },
        {
          text: "Fais attention à tes actes quand tu dis que tu a essayer d’étre tactile avec elle, car il n'est pas nécessaire qu'il y ait des actes de violence pour qualifier un acte d'agression sexuelle.",
          correct: true,
        },
      ],
    },
    {
      speaker: "Kévin",
      message:
        "Mince je ne m'imaginais pas être auteur d’agressions sexuelles.",
      options: [
        {
          text: "Tu devrais arrêter immédiatement et t’excuser auprès de Sarah, elle avait peut-être peur des représailles c’est pour ça qu’elle ne t’a pas dit d'arrêter.",
          correct: true,
        },
        {
          text: "Tant qu'elle ne dit pas d'arrêter essaye de continuer.",
          correct: false,
        },
        {
          text: "Dans le fond tu n'as rien fait de mal.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Kévin",
      message:
        "Oui je vais m’excuser de suite, je n'avais vraiment pas de mauvaises intentions.",
    },
    {
      speaker: "Moi",
      message:
        "Vas-y, elle sera sûrement soulagée de savoir que tu n'avais pas de mauvaises intentions. Mais fais attention à tes actes, car il n'est pas nécessaire qu'il y ait des actes de violence pour qualifier un acte d'agression sexuelle.",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "Kévin") {
      return "kevin.png";
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
    store.setState({ currentQuest: "Derniere quête..." });
    store.setState({ personHelped: 4 });
    store.setState({ kevinTextShowing: false });
    store.setState({ kevinQuestActive: false });
    store.setState({ kevinQuestDone: true });
  };

  return (
    <>
      {kevinTextShowing && (
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

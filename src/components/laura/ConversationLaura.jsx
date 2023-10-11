import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationLaura() {
  const lauraTextShowing = store((state) => state.lauraTextShowing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Moi",
      message:
        "Salut Laura, comment vas-tu ? As-tu remarqué quelque chose d’anormal dans le bureau ?",
    },
    {
      speaker: "Laura",
      message:
        "Salut, ça va, mais j'ai récemment été témoin de comportements inappropriés au bureau et je ne sais pas quoi faire.",
      options: [
        {
          text: "Dans ce bureau ? Cela m’étonnerait beaucoup, tout le monde s’entend bien.",
          correct: false,
        },
        {
          text: "Si ça ne te concerne pas directement ne t’en préoccupe pas.",
          correct: false,
        },
        {
          text: "Cela peut être du harcèlement, de quel type de comportements il s'agit ?",
          correct: true,
        },
      ],
    },
    {
      speaker: "Laura",
      message:
        "Camille a fait des commentaires inappropriés sur l’apparence de Guillaume et je crois que ça le rend mal à l’aise.",
      options: [
        {
          text: "Tu penses que c’est à cause de la tenue de Guillaume ?",
          correct: false,
        },
        {
          text: "Ces commentaires inappropriés, les as-tu entendus à plusieurs reprises ?",
          correct: true,
        },
        {
          text: "Pourquoi ne pas simplement dire à Guillaume d’ignorer ces commentaires ?",
          correct: false,
        },
      ],
    },
    {
      speaker: "Laura",
      message:
        "Oui à plusieurs reprises, et Guillaume lui a déjà demandé d’arrêter.",
      options: [
        {
          text: "Penses-tu que la situation peut s’arranger avec le temps ?",
          correct: false,
        },
        {
          text: "Penses-tu que la situation est urgente ?",
          correct: true,
        },
      ],
    },
    {
      speaker: "Laura",
      message:
        "Non la situation n’est pas urgente mais Guillaume semble de plus en plus mal à l’aise vis à vis du comportement de Camille.",
      options: [
        {
          text: "Très bien, alors tu devrais envisager de signaler le comportement de Camille à un supérieur hiérarchique ou à ton employeur.",
          correct: true,
        },
        {
          text: "Tu devrais immédiatement signaler cette situation à la gendarmerie ou à la police.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Laura",
      message:
        "Tu as raison. Je vais y aller, je proposerai à Guillaume de venir avec moi s’il le souhaite. Mais tu sais à quelle loi du code pénale on peut se référer ?",
      options: [
        {
          text: "Article 222-33.",
          correct: true,
        },
        {
          text: "Article 222-32.",
          correct: false,
        },
        {
          text: "Article 222-23.",
          correct: false,
        },
        {
          text: "Article 222-22.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Laura",
      message: "Ok l’article 222-33 du code pénal, je prends note, merci !",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "Laura") {
      return "laura.png";
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
    store.setState({ currentQuest: "Parler à Zoé" });
    store.setState({ personHelped: 2 });
    store.setState({ lauraTextShowing: false });
    store.setState({ lauraQuestActive: false });
    store.setState({ lauraQuestDone: true });
    store.setState({ zoeQuestActive: true });
  };

  return (
    <>
      {lauraTextShowing && (
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

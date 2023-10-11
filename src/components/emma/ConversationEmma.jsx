import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationEmma() {
  const emmaTextShowing = store((state) => state.emmaTextShowing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Moi",
      message: "Salut Emma, comment se passe ton travail ?",
    },
    {
      speaker: "Emma",
      message:
        "Salut, il y a eu un incident récemment je ne sais pas vraiment si c’est du harcèlement ou non. Je ne sais pas quoi faire.",
      options: [
        {
          text: "Je suis désolé de t’entendre dire ça. Veux-tu m’en parler je pourrais peut-être t’aider ?",
          correct: true,
        },
        {
          text: "Je voulais te demander si tu n’avais pas trop de travail ?",
          correct: false,
        },
        { text: "Oula ! Je ne peux pas t’aider pour cela !", correct: false },
      ],
    },
    {
      speaker: "Emma",
      message:
        "Gabriel m'a envoyé des messages à caractère sexuel explicite sans mon consentement.",
      options: [
        {
          text: "Mais Gabriel c’est un grand déconneur ce n’est pas grave !",
          correct: false,
        },
        { text: "Si c’est par message ça ne me concerne pas.", correct: false },
        {
          text: "C'est inacceptable. As-tu conservé des preuves de ces messages ?",
          correct: true,
        },
      ],
    },
    {
      speaker: "Emma",
      message:
        "Oui, j'ai conservé les messages. Mais je ne sais pas où est mon téléphone. Tu peux le chercher pour moi s’il te plait ? Ton équipier sait sûrement où il est.",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "Emma") {
      return "emma.png";
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
    store.setState({ currentQuest: "Retrouver le téléphone d'Emma" });
    store.setState({ emmaTextShowing: false });
    store.setState({ emmaQuestActive: false });
    store.setState({ emmaQuestDone: true });
    store.setState({ phoneQuestActive: true });
  };

  return (
    <>
      {emmaTextShowing && (
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

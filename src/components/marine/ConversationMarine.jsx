import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationMarine() {
  const marineTextShowing = store((state) => state.marineTextShowing);
  const [step, setStep] = useState(0);

  const steps = [
    {
      speaker: "Marine",
      message:
        "Bonjour, je ne sais pas vers qui me tourner, j’ai un problème au travail.",
    },
    {
      speaker: "Moi",
      message:
        "Bonjour ! Dites-moi tout, je suis là pour vous aider. Quel est votre problème ?",
    },
    {
      speaker: "Marine",
      message:
        "John, mon supérieur hiérarchique... La semaine dernière il est venu me voir dans mon bureau... Il a eu un comportement très inapproprié et... *Marine sanglote*",
    },
    {
      speaker: "Moi",
      message:
        "Je suis à votre écoute et surtout je suis là pour vous aider à sortir de cette situation. Vous pouvez tout me dire.",
    },
    {
      speaker: "Marine",
      message:
        "Merci... Quand il est arrivé dans mon bureau, il s'est mis derrière moi et a commencé à me caresser les cheveux... J’étais pétrifiée ... En mettant ses mains sur ma poitrine, il m'a murmuré à l’oreille...  *Marine sanglote*",
      options: [
        {
          text: "La situation est très grave Marine, que t’a-t-il murmuré à l’oreille ?",
          correct: true,
        },
        {
          text: "Demandez-lui d’arrêter et dites-lui que vous n’avez pas aimé son comportement.",
          correct: false,
        },
        {
          text: "Passe à autre chose !",
          correct: false,
        },
      ],
    },
    {
      speaker: "Marine",
      message:
        "Il m’a murmuré que si je voulais l’augmentation que je lui avais demandé il y a 3 mois je devais... Lui faire une fellation. Je ne sais pas quoi faire, je crains les représailles... J’ai besoin de mon travail. *Marine sanglote*",
      options: [
        {
          text: "Dans la loi française l’article L. 3332-18 protège les personnes contre les représailles.",
          correct: false,
        },
        {
          text: "Dans la loi française l’article L. 1152-2 protège les personnes contre les représailles.",
          correct: true,
        },
        {
          text: "Dans la loi française l’article 222-32 protège les personnes contre les représailles.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Marine",
      message:
        "Je ne savais pas... mais je ne sais pas à qui le dire pour que les choses s’arrangent. *Marine sanglote*",
      options: [
        {
          text: "Vous devriez immédiatement signaler cet incident à votre supérieur hiérarchique.",
          correct: false,
        },
        {
          text: "Vous devriez immédiatement signaler cet incident à la gendarmerie ou à la police et à l’inspection du travail.",
          correct: true,
        },
        {
          text: "Vous devriez immédiatement signaler cet incident uniquement à la gendarmerie ou à la police et à personne d'autre.",
          correct: false,
        },
      ],
    },
    {
      speaker: "Marine",
      message:
        "Merci pour tout, je ne me sentais vraiment pas bien à cause de cet incident, je vais aller en parler à la gendarmerie et à l’inspection du travail.",
    },
  ];

  const next = () => {
    setStep(step + 1);
  };

  const getImage = (speaker) => {
    if (speaker === "Marine") {
      return "marine.png";
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
    store.setState({
      currentQuest: "Parler à John...",
    });
    store.setState({ personHelped: 5 });
    store.setState({ marineTextShowing: false });
    store.setState({ marineQuestActive: false });
    store.setState({ marineQuestDone: true });
  };

  return (
    <>
      {marineTextShowing && (
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

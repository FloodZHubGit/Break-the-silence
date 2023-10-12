import { useState } from "react";
import "../../index.css";
import store from "../../stores/store";

export default function ConversationJohn() {
  const johnTextShowing = store((state) => state.johnTextShowing);
  const [accepted, setAccepted] = useState(false);

  const handleAccept = () => {
    setAccepted(true);
  };

  const closeConversation = () => {
    store.setState({ johnTextShowing: false });
    store.setState({ johnQuestActive: false });
    store.setState({ johnQuestDone: true });
    store.setState({ emmaQuestActive: true });
    store.setState({ currentQuest: "Parler à Emma" });
  };

  return (
    <>
      {johnTextShowing && (
        <div className="conversation">
          <img src="john.png" alt="John" className="employe-image" />
          <div className="nomPersonne">
            <p>John</p>
          </div>
          <div className="message">
            {accepted ? (
              <>
                <p>
                  Reviens me voir quand tu auras fait le tour de tous les
                  employés.
                </p>

                <div className="boutons">
                  <button onClick={closeConversation}>Fermer</button>
                </div>
              </>
            ) : (
              <p>
                Salut, je suis John, le supérieur de cet étage. Le patron de la
                boîte m’a demandé de t’accueillir pour que tu règles les
                problèmes d’harcèlement sexuel et d’agression sexuelle. Même si
                je ne vois pas vraiment l’utilité car il n’y a aucun problème
                dans cet étage de la boîte. Je te laisse aller voir tous les
                employés.
              </p>
            )}
          </div>
          <div className="boutons">
            {!accepted && (
              <>
                <button onClick={handleAccept}>Accepter</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

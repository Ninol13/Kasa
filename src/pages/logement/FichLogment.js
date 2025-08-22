import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import data from "../../datas/logement.json";

// composants de présentation
import Carrousel from "../../components/ficheLogement/Carrousel";
import Host from "../../components/ficheLogement/Host";
import Rate from "../../components/ficheLogement/Rate";
import Tag from "../../components/ficheLogement/Tag";
import Collapse from "../../components/collapse/Collapse";

// (optionnel) si tu préfères afficher la page 404 quand l'id est invalide
import NoPage from "../error/NoPage";

const FichLogement = () => {
  const { id } = useParams();
  const logement = data.find((l) => l.id === id);

  if (!logement) {
    // Variante 1 (recommandée ici) : on affiche directement la 404
    return (
      <div className="logement">
        <Header />
        <main>
          <NoPage />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="logement">
      <Header />

      <main>
        <section className="fiche-container">
          {/* Galerie */}
          <Carrousel slides={logement.pictures} />

          {/* En-tête fiche */}
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{logement.title}</span>
                  <span className="endroit-logement">{logement.location}</span>
                </div>

                {/* Tags */}
                <div className="description-info__titletags__tags">
                  {logement.tags.map((tag) => (
                    <Tag key={tag} nom={tag} />
                  ))}
                </div>
              </div>

              {/* Hôte + Note */}
              <div className="description-info__proprietaire">
                <div className="description-info__proprietaire__nom-prop">
                  <Host
                    name={logement.host.name}
                    picture={logement.host.picture}
                  />
                </div>
                <div className="description-info__proprietaire__rate">
                  <Rate score={logement.rating} />
                </div>
              </div>
            </div>
          </section>

          {/* Collapses */}
          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse title="Description" content={logement.description} />
            </div>

            <div className="description-centent__equipement">
              <Collapse
                title="Équipements"
                content={
                  <ul className="equipements">
                    {logement.equipments.map((eq) => (
                      <li key={eq}>{eq}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FichLogement;

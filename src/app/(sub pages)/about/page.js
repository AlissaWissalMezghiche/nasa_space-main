"use client";  // Rendre ce composant un Client Component

import Image from "next/image";
import bg from "../../../../public/bg/bg.jpg"; // Image de fond
import lifeImage from "../../../../public/bg/factoryy.webp"; // Chemin de la nouvelle image
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Ajouter une animation au texte lorsque la page se charge
    const textElement = document.querySelector('.text-animate');
    if (textElement) {
      textElement.classList.add('text-animate');
    }
  }, []);

  return (
    <>
      {/* Image de fond */}
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* Section de contenu avec nouvelle image et texte */}
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-4">
        {/* Titre au-dessus de l'image avec couleur orange */}
        <h1 className="text-orange-500 font-semibold text-center text-4xl capitalize mb-2 text-animate">
          Factory
        </h1>

        {/* Nouvelle image avec cadre orange, flou léger et coins arrondis */}
        <Image
          src={lifeImage}
          alt="Image representing Enceladus and its unique ecosystem"
          className="w-3/4 max-w-sm h-auto rounded-lg shadow-lg filter blur-xs border-4 border-orange-500 image-animate" // Cadre orange et coins arrondis
        />

        <div className="flex flex-col items-center justify-center space-y-4 w-full sm:w-3/4">
          {/* Texte ajouté avec taille et épaisseur augmentées */}
          <p className="text-center font-medium text-lg xs:text-xl text-animate">
          Located near active tectonic plate boundaries, these innovative factories utilize the natural geothermal activity produced by the planet’s dynamic crust. By tapping into the heat and pressure generated by tectonic shifts, they convert this raw energy into usable power through advanced thermal energy systems.
          </p>
        </div>
      </article>
    </>
  );
}

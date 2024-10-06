"use client"; // Rendre ce composant un Client Component

import Image from "next/image";
import bg from "../../../../public/bg/bg.jpg"; // Image de fond
import lifeImage1 from "../../../../public/bg/lifelifelife.webp"; // Chemin de la première image
import lifeImage2 from "../../../../public/bg/lifelifelifelifelife.webp"; // Chemin de la deuxième image
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

      {/* Section de contenu avec texte */}
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-4">
        {/* Titre */}
        <h1 className="lobster-regular text-orange-500 font-semibold text-center text-4xl capitalize mb-2">
          Encaladus
        </h1>

        {/* Texte d'introduction */}
        <p className="lobster-regular text-center font-medium text-lg xs:text-xl text-animate px-4">
          Beneath its endless, dark ocean, life thrives in ways we never imagined. Fueled by the planet’s own core, creatures harness chemical energy to survive. A world that thrives by feeding only on the energy of the planet itself—this is the reality of an oceanic realm unlike any we know. Here, the forces that drive life are hidden deep within the planet’s core, powering ecosystems that defy the rules of biology as we understand them.
        </p>
      </article>

      {/* Section pour les deux nouvelles images */}
      <div className="flex justify-center space-x-8 p-8"> {/* Espace entre les images */}
        <Image
          src={lifeImage1}
          alt="Life Image 1"
          className="w-[600px] h-[300px] rounded-lg shadow-md" // Réduire la hauteur
        />
        <Image
          src={lifeImage2}
          alt="Life Image 2"
          className="w-[600px] h-[300px] rounded-lg shadow-md" // Réduire la hauteur
        />
      </div>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    href: "/courses/A1/BreakThrough",
    description: "A1 —  Acceso",
    imageSrc: "src/assets/A1.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    href: "/courses/A2/WayStage",
    description: "A2 —  Plataforma",
    imageSrc: "src/assets/A2.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    href: "/courses/B1/ThresHold",
    description: "B1 —  Intermedio",
    imageSrc: "src/assets/B1.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    href: "/courses/B2/Vantage",
    description: "B2 —  Intermedio Alto",
    imageSrc: "src/assets/B2.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 5,
    href: "/courses/C1/Advanced",
    description: "C1 —  Dominio Operativo Eficaz",
    imageSrc: "src/assets/C1.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    href: "/courses/C2/Mastery",
    description: "C2 —  Maestría",
    imageSrc: "src/assets/C2.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 7,
    href: "/courses/B2CambridgeFirst",
    description: "Pass the B2 Cambrdige Exam!",
    imageSrc: "src/assets/b2_first.png",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 8,
    href: "/courses/C1CambridgeAdvanced",
    description: "Pass the C1 Cambrdige Exam!",
    imageSrc: "src/assets/c1_advanced.png",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 9,
    href: "/courses/C2CambridgeProficiency",
    description: "Pass the C2 Cambrdige Exam",
    imageSrc: "src/assets/c2_pro.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 10,
    href: "/courses/GramaticaEsencial",
    description: "Learn all about English Pronunciation",
    imageSrc: "src/assets/pronunciacion-en-ingles.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 11,
    href: "/courses/VerbosEnIngles",
    description: "Learn the Essentials of English Grammar",
    imageSrc: "src/assets/Gramatica-esencial.png",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 12,
    href: "/courses/PronunciacionEnIngles",
    description: "Auxiliaries, Modals, Copulas, Active & Passive Voice, Get...",
    imageSrc: "src/assets/verbos-en-ingles.png",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  // More products...
];

function Products() {
  return (
    <div className="bg-mellowGreen min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-16 py-2 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 py-4">
          {products.map((product, index) => (
            <>
            {/* Insert an H3 header before course 7 */}
          {index === 6 && (
            <div className="col-span-full flex justify-center items-center pt-8">
              <h2 className="text-5xl text-center font-bold text-white leading-tight font-dosis">Specialized Courses</h2>   
            </div>
          )}
            <Link
              key={product.id}
              to={product.href} // Change href to to for react-router
              className="group bg-white rounded-lg"
            >
              <div className="w-full overflow-hidden rounded-t-lg">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-0 w-full rounded-lg">
                <div className="w-8/12 mx-auto">
                  <p className="py-8 text-lg font-bold text-black text-center">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
            </>
          ))}
        </div>
        <div className="flex justify-center pt-4">
          <button className="px-32 py-3 bg-[rgb(79,70,229)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Get started!
          </button>
        </div>
      </div>
    </div>
  );
}
export default Products;

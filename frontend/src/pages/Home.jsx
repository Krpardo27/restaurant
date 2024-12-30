import React from "react";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <div className="mt-8 flex flex-col justify-center gap-4 items-center text-center">
        <h1 className="lg:text-7xl text-5xl font-bold mb-4">
          Per Se (Nueva York, EE. UU.)
        </h1>
        <p className="text-lg mb-4">
          <strong>Biografía:</strong> Fundado en 2004 por el chef Thomas Keller,
          Per Se es un restaurante de alta cocina que se ha destacado por su
          cocina francesa y su enfoque en los ingredientes frescos y de
          temporada. Thomas Keller es conocido por su perfeccionismo y su
          minucioso enfoque en la calidad de cada plato.
        </p>
        <p className="text-lg mb-4">
          Per Se ofrece menús de degustación con platos franceses clásicos como
          foie gras, ostras y caviar, junto con interpretaciones modernas y de
          autor. La experiencia incluye una selección de vinos cuidadosamente
          elegidos para maridar con cada plato.
        </p>
      </div>
      <HeroSlider />
    </div>
  );
};

export default Home;

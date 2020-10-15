import React, { FC, useState, useEffect, Dispatch } from "react";
import IAnimal from "../../Interfaces/IAnimal";
import Animals from "../../apifake/Animals";

interface IAnimalsProps {
  ownerId: number;
  animals: IAnimal[];
  setAnimals: Dispatch<IAnimal[]>;
}

const SelectAnimals: FC<IAnimalsProps> = ({ ownerId, animals, setAnimals }) => {
  const [animalsSelected, setAnimalSelect] = useState<IAnimal[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setAnimals(animals);
      setLoading(false);
    }
    getData();
  }, [ownerId, setAnimals]);

  return (
    <section id="animals-section">
      <label htmlFor="animals">Animals: {ownerId > 0 && loading && <span>Loading</span>}</label>
      <select id="animals" disabled={!animalsSelected.length || loading}>
        {!animalsSelected.length && <option value="Select an owner">Select an owner</option>}
        {animalsSelected.map((animal) => (
          <option key={animal.id}>{animal.name}</option>
        ))}
      </select>
    </section>
  );
};

export default SelectAnimals;

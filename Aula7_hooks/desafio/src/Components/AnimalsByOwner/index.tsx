import React, { FC, useEffect, useState } from "react";
import IAnimal from "../../Interfaces/IAnimal";
import IOwner from "../../Interfaces/IOwner";
import Animals from "../../apifake/Animals";
import IAnimalQuantity from "../../Interfaces/IAnimalQuantity";

interface ITableProps {
  owners: IOwner[];
  animals: IAnimal[];
}

const getAnimalsApi: Animals = new Animals();

const AnimalsByOwner: FC<ITableProps> = ({ owners, animals }) => {
  console.log("animals", animals);
  const [animalQuantity, setAnimalsQuantity] = useState<IAnimalQuantity[]>([]);

  const animalsByOwner = () => {
    const ownerWithAnimals: IAnimalQuantity[] = owners.map((owner) => ({
      ownerName: owner.name,
      quantity: animals.filter((animal) => animal.ownerId === owner.id).length,
    }));
    setAnimalsQuantity(ownerWithAnimals);
  };

  return (
    <section id="report">
      <button onClick={animalsByOwner}>Order by owners with animals quantity</button>
      {console.log("animalQuantity", animalQuantity)}
      <table id="reportList">
        <thead>
          <tr>
            <th>Owners</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {animalQuantity.map((item, index) => (
            <tr key={`animalQuantity_${index}`}>
              <td>{item.ownerName}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AnimalsByOwner;

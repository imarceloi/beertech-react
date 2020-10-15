import React, { useEffect, useState } from "react";
import SelectOwners from "./Components/Owners";
import SelectAnimals from "./Components/Animals";
import AnimalsByOwner from "./Components/AnimalsByOwner";
import Owners from "./apifake/Owners";

import "./style.css";
import IOwner from "./Interfaces/IOwner";
import IAnimal from "./Interfaces/IAnimal";
import IAnimalQuantity from "./Interfaces/IAnimalQuantity";
import Animals from "./apifake/Animals";

const getOwnersApi: Owners = new Owners();
const getAnimalsApi: Animals = new Animals();

const getData = async () => {
  const ownersResult: IOwner[] = await getOwnersApi.getAll();
  return ownersResult;
};

const geAnimalsByOwner = async (ownerId: number) => {
  const animalsResult: IAnimal[] = await getAnimalsApi.getByOwnerId(ownerId);
  console.log("animalsResult", animalsResult);
  return animalsResult;
};

function App() {
  const [owners, setOwners] = useState<IOwner[]>([]);
  const [ownerId, setOwnerId] = useState(Number);
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    getData().then((resultOwners) => {
      setOwners(resultOwners);
      let animalsOwners: IAnimal[] = [];
      resultOwners.forEach((owner) => {
        geAnimalsByOwner(owner.id);
      });
      console.log("animalsOwners", animalsOwners);
    });
  }, [ownerId, setOwners]);

  return (
    <div className="App">
      <SelectOwners owners={owners} selectOwner={setOwnerId} />
      <SelectAnimals ownerId={ownerId} animals={animals} setAnimals={setAnimals} />
      <AnimalsByOwner owners={owners} animals={animals} />
    </div>
  );
}

export default App;

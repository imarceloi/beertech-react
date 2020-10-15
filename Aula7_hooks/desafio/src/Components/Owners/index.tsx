import React, { FC, Dispatch } from "react";
import IOwner from "../../Interfaces/IOwner";

interface IOwnersProps {
  owners: IOwner[];
  selectOwner: Dispatch<number>;
}

const SelectOwners: FC<IOwnersProps> = ({ owners, selectOwner }) => {
  const changeValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    selectOwner(Number(value));
  };
  return (
    <section id="owners-section">
      <label htmlFor="owners">Owners:</label>
      <select id="owners" onChange={changeValue}>
        <option value="">Select</option>
        {owners.map((owner: IOwner) => (
          <option key={owner.id} value={owner.id}>
            {owner.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default SelectOwners;

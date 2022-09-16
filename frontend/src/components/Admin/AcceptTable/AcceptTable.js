import "./AcceptTable.scss";
import { MdVerifiedUser } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";

const AcceptTable = () => {
  const acceptsArray = [
    { id: "1", name: "Arvelos", person: "onur" },
    { id: "1", name: "Manljus", person: "onur" },
    { id: "1", name: "OnurcumHarikasın", person: "onur" },
    { id: "1", name: "Roigen", person: "onur" },
  ];

  const accepts = acceptsArray.map((accept) => {
    const id = uuidv4();

    return (
      <tr key={id.toString()}>
        <td>{accept.id}</td>
        <td>{accept.name}</td>
        <th>{accept.person}</th>
        <td>
          <button>
            <MdVerifiedUser />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="accept-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Kullanıcı</th>
            <th>Proje Ekleyen</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>{accepts}</tbody>
      </table>
    </div>
  );
};

export default AcceptTable;

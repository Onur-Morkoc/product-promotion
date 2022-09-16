import "./UserTable.scss";
import { v4 as uuidv4 } from "uuid";

const UserTable = () => {
  const usersArray = [
    { id: "1", name: "Arvelos", status: "Çevrimiçi" },
    { id: "2", name: "Manljus", status: "Çevrimiçi" },
    { id: "3", name: "OnurcumHarikasın", status: "Çevrimiçi" },
    { id: "4", name: "Roigen", status: "Çevrimiçi" },
  ];

  const users = usersArray.map((user) => {
    const id = uuidv4();

    return (
      <tr key={id.toString()}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <th>{user.status}</th>
      </tr>
    );
  });

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Kullanıcı</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>{users}</tbody>
      </table>
    </div>
  );
};

export default UserTable;

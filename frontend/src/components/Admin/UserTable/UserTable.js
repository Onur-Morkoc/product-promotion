import "./UserTable.scss";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../../redux/actions/userAction";

const UserTable = () => {

  const {users} = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]);

  const members = users.map((user) => {
    const id = uuidv4();

    return (
      <tr key={id.toString()}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <th>{user.role}</th>
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
            <th>role</th>
          </tr>
        </thead>
        <tbody>{members}</tbody>
      </table>
    </div>
  );
};

export default UserTable;

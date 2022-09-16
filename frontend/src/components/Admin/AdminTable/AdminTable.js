import "./AdminTable.scss";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "../../../redux/actions/userAction";
import { useEffect } from "react";

const AdminTable = () => {
  let navigate = useNavigate();

  const {users} = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(deleteUser(id));
    navigate(`/admin`, { replace: true });
  };

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]);


  const allusers = users.map((user) => {
    const id = uuidv4();

    return (
      <tr key={id.toString()}>
        <td>{user._id}</td>
        <td>{user.name}</td>
        <th>{user.status}</th>
        <td>
          <button onClick={() => deleteHandler(user._id)}>
            <MdDeleteOutline />
          </button>
          <Link to={`/admin/kullanici/${user._id}`}>
            <button>
              <MdOutlineEdit />
            </button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="admin-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Kullanıcı</th>
            <th>Durum</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>{allusers.reverse()}</tbody>
      </table>
    </div>
  );
};

export default AdminTable;

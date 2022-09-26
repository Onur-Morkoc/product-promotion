import "./AcceptTable.scss";
import { MdVerifiedUser } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, updateProduct } from "../../../redux/actions/productAction";
import { useEffect } from "react";

const AcceptTable = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const {projects} = useSelector((state) => state.products);
  const {user} = useSelector((state) => state.user);

  const updateHandler = (id) => {
    dispatch(updateProduct(id, {accept:"onaylı"}));
    navigate(`/admin`, { replace: true });
  };

  useEffect(() => {
    dispatch(getProduct("onaysız"))
  }, [dispatch]);

  const accepts = projects.map((accept) => {
    const id = uuidv4();

    return (
      <tr key={id.toString()}>
        <td>{accept._id}</td>
        <td>{accept.name}</td>
        <th>{accept.user}</th>
        {user?.role==="Admin"?(
        <td>
          <button onClick={(e)=>updateHandler(accept._id)}>
            <MdVerifiedUser />
          </button>
        </td>
        ):(
          <td>İzniniz Yok</td>
        )}

      </tr>
    );
  });

  return (
    <div className="accept-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Proje</th>
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

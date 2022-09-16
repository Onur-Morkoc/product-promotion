import "./ProductTable.scss";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../../redux/actions/productAction";


const ProductTable = () => {
  const {projects} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch]);


  const Products = projects.map((product) => {
    const id = uuidv4();

    return (
      <tr key={id.toString()}>
        <td>{product._id}</td>
        <td>{product.name}</td>
        <td>{product.stock}</td>
        <th>{product.blockchain}</th>
        <th>{product.accept}</th>
        <td>
          <button>
            <MdDeleteOutline />
          </button>

          <Link to={`/admin/proje/${product._id}`}>
            <button>
              <MdOutlineEdit />
            </button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className="product-table">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Proje</th>
            <th>Stock</th>
            <th>Blockchain</th>
            <th>Durum</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>{Products}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;

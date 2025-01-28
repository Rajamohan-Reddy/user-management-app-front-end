import { Link } from "react-router-dom";
import "./index.css";
const UserItem = (props) => {
  const { userDetails, onDeleteUser } = props;
  const { id, firstname, lastname, email, department } = userDetails;
  const deleteUser = () => {
    onDeleteUser(id);
  };

  return (
    <li className="user-item">
      <p className="user-item-paragraph">{id}</p>
      <p className="user-item-paragraph">{firstname}</p>
      <p className="user-item-paragraph">{lastname}</p>
      <p className="user-item-paragraph">{email}</p>
      <p className="user-item-paragraph">{department}</p>
      <div className="btns-container">
        <Link to={`/edit/${id}`} className="link-item">
          <button className="edit-btn" type="button">
            Edit
          </button>
        </Link>
        <button className="delete-btn" type="button" onClick={deleteUser}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default UserItem;

import { Component } from "react";
import { Link } from "react-router-dom";
import UserItem from "../UserItem";
import "./index.css";

class UserList extends Component {
  state = { usersList: [] };

  componentDidMount() {
    this.getUsersList();
  }

  getUsersList = async () => {
    const url = "https://user-management-app-backend-6.onrender.com/users";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    console.log(response);
    const usersList = await response.json();
    console.log(usersList);
    this.setState({
      usersList,
    });
  };

  onDeleteUser = async (id) => {
    const { usersList } = this.state;
    const filteredList = usersList.filter((eachUser) => eachUser.id !== id);
    this.setState({ usersList: filteredList });
    const url = `https://user-management-app-backend-6.onrender.com/users/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  render() {
    const { usersList } = this.state;
    return (
      <div className="user-list-bg-container">
        <h1 className="user-management-main-heading">
          User Management Dashboard
        </h1>
        <div className="add-user-btn-container">
          <img
            src="https://res.cloudinary.com/dchkvmpzf/image/upload/v1738002167/aoesrf96uiuhdeijqmpn.jpg"
            alt="avatar"
            className="avatar"
          />
          <Link to="/add" className="link-item">
            <button className="add-user-btn" type="button">
              Add User
            </button>
          </Link>
          <img
            src="https://res.cloudinary.com/dchkvmpzf/image/upload/v1738002167/aoesrf96uiuhdeijqmpn.jpg"
            alt="avatar"
            className="avatar"
          />
        </div>
        <div className="user-table-container">
          <ul className="user-table-headers-list-container">
            <li className="header-list-item">ID</li>
            <li className="header-list-item">First Name</li>
            <li className="header-list-item">Last Name</li>
            <li className="header-list-item">Email</li>
            <li className="header-list-item">Department</li>
            <li className="header-list-item">Actions</li>
          </ul>
          <ul className="users-list-container">
            {usersList.map((eachUser) => (
              <UserItem
                key={eachUser.id}
                userDetails={eachUser}
                onDeleteUser={this.onDeleteUser}
                onEditUser={this.onEditUser}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserList;

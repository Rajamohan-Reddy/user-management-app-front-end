import { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class UserForm extends Component {
  state = {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    department: "",
    idErrorMsg: "",
    firstNameErrorMsg: "",
    lastNameErrorMsg: "",
    emailErrorMsg: "",
    departmentErrorMsg: "",
    isEditMode: false,
  };

  onBlurIdField = (event) => {
    if (event.target.value === "") {
      this.setState({ idErrorMsg: "*Required" });
    } else {
      this.setState({ idErrorMsg: "" });
    }
  };

  onBlurFirstNameField = (event) => {
    if (event.target.value === "") {
      this.setState({ firstNameErrorMsg: "*Required" });
    } else {
      this.setState({ firstNameErrorMsg: "" });
    }
  };

  onBlurLastNameField = (event) => {
    if (event.target.value === "") {
      this.setState({ lastNameErrorMsg: "*Required" });
    } else {
      this.setState({ lastNameErrorMsg: "" });
    }
  };

  onBlurEmailField = (event) => {
    if (event.target.value === "") {
      this.setState({ emailErrorMsg: "*Required" });
    } else {
      this.setState({ emailNameErrorMsg: "" });
    }
  };

  onBlurDepartmentField = (event) => {
    if (event.target.value === "") {
      this.setState({ departmentErrorMsg: "*Required" });
    } else {
      this.setState({ departmentErrorMsg: "" });
    }
  };

  changeId = (event) => {
    this.setState({ id: event.target.value });
  };

  changeFirstName = (event) => {
    this.setState({ firstname: event.target.value });
  };

  changeLastName = (event) => {
    this.setState({ lastname: event.target.value });
  };

  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  changeDepartment = (event) => {
    this.setState({ department: event.target.value });
  };

  componentDidMount() {
    const pathname = window.location.pathname;
    const pathList = pathname.split("/");
    const userid = pathList[pathList.length - 1];
    if (userid !== "add" && userid) {
      this.getEditableUserResponse(userid);
    }
  }

  getEditableUserResponse = async (userid) => {
    const url = `https://user-management-app-backend-6.onrender.com/users/${userid}`;
    const options = {
      method: "GET",
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      const { id, firstname, lastname, email, department } = data;
      this.setState({
        id,
        firstname,
        lastname,
        email,
        department,
        isEditMode: true,
      });
    } catch (error) {
      console.log(`Error occured while fetching: ${error}`);
    }
  };

  submitForm = async (event) => {
    event.preventDefault(); // preventing the default behaviour of the form

    try {
      const { id, firstname, lastname, email, department, isEditMode } =
        this.state;
      // To submit form every field must be filled
      if (!firstname || !lastname || !email || !department) {
        alert("Please fill  all the required fields.");
        return;
      }
      //creating new user object
      const newUser = {
        id,
        firstname,
        lastname,
        email,
        department,
      };
      const requestMethod = isEditMode ? "PUT" : "POST";
      const url = isEditMode
        ? `https://user-management-app-backend-6.onrender.com/users/${id}`
        : "https://user-management-app-backend-6.onrender.com/users";
      const options = {
        method: requestMethod,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      };
      const response = await fetch(url, options);
      console.log(response);
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        const message = isEditMode
          ? "User details updated successfully!!"
          : "User details added successfully!!";
        alert(message);
        // making fields empty after http request
        this.setState({
          id: "",
          firstname: "",
          lastname: "",
          email: "",
          department: "",
          isEditMode: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {
      id,
      firstname,
      lastname,
      email,
      department,
      idErrorMsg,
      firstNameErrorMsg,
      lastNameErrorMsg,
      emailErrorMsg,
      departmentErrorMsg,
      isEditMode,
    } = this.state;
    return (
      <div className="user-form-bg-container">
        <img
          src="https://res.cloudinary.com/dchkvmpzf/image/upload/v1738002167/aoesrf96uiuhdeijqmpn.jpg"
          alt="avatar"
          className="form-logo"
        />
        <h1 className="user-form-main-heading">User Form</h1>
        <form onSubmit={this.submitForm}>
          <div className="field-container">
            <label htmlFor="id">Id</label>
            <br />
            <input
              type="text"
              id="id"
              placeholder="Id"
              value={id}
              onChange={this.changeId}
              onBlur={this.onBlurIdField}
              disabled={isEditMode} //disable while updating existing user details
            />
            <p className="error-msg">{idErrorMsg}</p>
          </div>
          <div className="field-container">
            <label htmlFor="firstname">First Name</label>
            <br />
            <input
              type="text"
              id="firstname"
              placeholder="First Name"
              value={firstname}
              onChange={this.changeFirstName}
              onBlur={this.onBlurFirstNameField} // for field level validations
            />
            <p className="error-msg">{firstNameErrorMsg}</p>
          </div>
          <div className="field-container">
            <label htmlFor="lastname">Last Name</label>
            <br />
            <input
              type="text"
              id="lastname"
              placeholder="Last Name"
              value={lastname}
              onChange={this.changeLastName}
              onBlur={this.onBlurLastNameField}
            />
            <p className="error-msg">{lastNameErrorMsg}</p>
          </div>
          <div className="field-container">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              id="email"
              placeholder="Email"
              value={email}
              onChange={this.changeEmail}
              onBlur={this.onBlurEmailField}
            />
            <p className="error-msg">{emailErrorMsg}</p>
          </div>
          <div className="field-container">
            <label htmlFor="department">Department</label>
            <br />
            <input
              type="text"
              id="department"
              placeholder="Department"
              value={department}
              onChange={this.changeDepartment}
              onBlur={this.onBlurDepartmentField}
            />
            <p className="error-msg">{departmentErrorMsg}</p>
          </div>
          <div className="field-container">
            <button type="submit" className="submit-user-btn">
              Submit
            </button>
            <Link to="/" className="link-item">
              <button type="button" className="back-btn">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default UserForm;

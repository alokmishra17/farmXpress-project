import React from "react";
import axios from "axios";

class UserApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      email: "",
      name: "",
    };
  }

  handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createPost();

    console.log("form is submitted");
  };

  deletePost = async ({ target: { name } }) => {
    await axios.delete("https://jsonplaceholder.typicode.com/users/" + name);
    const updated = this.state.users.filter((user) => {
      return user.id != name;
    });

    this.setState({ users: updated });
    console.log("post " + name + " is deleted");
  };

  componentDidMount = () => {
    this.getPosts();
  };

  getPosts = async () => {
    try {
      const users = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.setState({ users: users.data });
    } catch (error) {
      console.error(error);
    }
  };

  createPost = async () => {
    const { username, name, email } = this.state;

    const { data:user } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      {
        username,
        name,
        email,
      }
    );
  console.log(user)
    const newUser = [...this.state.users];
    newUser.push(user);
    this.setState({ users: newUser, username: "", name: "", email: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>Choose username : </label>

         
          <select
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          >
            <option defaultValue> -- select an option -- </option>
            {this.state.users.map((user) => {
              return <option key={user.id}>{user.name}</option>;
            })}
          </select>
          <br />
          <br />
          <label>Enter userName : </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <br />
          <br />

          <label>Enter email : </label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />

          <br />
          <br />
          <button type="submit">Add</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>

                  <td>
                    <button onClick={this.deletePost} name={user.id}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default UserApi;

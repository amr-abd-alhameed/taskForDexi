import React, { useState, useEffect } from "react";
import Modal from "react-modal"; // Import a modal library

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [updatedUser, setUpdatedUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async (page) => {
      const url = `https://randomuser.me/api/?seed=dexi-interview&page=${page}&results=5`;
      const response = await fetch(url);
      const data = await response.json();
      setUsers((prevUsers) => [...prevUsers, ...data.results]);
    };

    fetchUsers(currentPage);
  }, [currentPage]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditUser = (userId) => {
    const user = users.find((user) => user.login.uuid === userId);
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  // const handleUpdateUser = (updatedUser) => {
  //   // Implement logic to update the user in your database
  //   // ...
  //   const updatedUsers = users.map((user) =>
  //     user.login.uuid === updatedUser.login.uuid ? updatedUser : user
  //   );
  //   setUsers(updatedUsers);
  //   handleCloseModal();
  // };

  // const handleUpdateUser = (updatedUser) => {
  //   // Implement logic to update the user in your database
  //   // ...
  //   const updatedUsers = users.map((user) =>
  //     user.login.uuid === updatedUser.login.uuid ? updatedUser : user
  //   );
  //   setUsers(updatedUsers);
  //   handleCloseModal();
  // };

  const handleUpdateUser = () => {
    // Update the user locally without database interaction
    const updatedUsers = users.map((user) =>
      user.login.uuid === updatedUser.login.uuid ? updatedUser : user
    );
    setUsers(updatedUsers);
    handleCloseModal();
  };

  const handleInputChange = (event) => {
    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value,
    });
  };
  // const handleUpdateUser = (updatedUser) => {
  //   // Update the user locally without database interaction
  //   const updatedUsers = users.map((user) =>
  //     user.login.uuid === updatedUser.login.uuid ? updatedUser : user
  //   );
  //   setUsers(updatedUsers);
  //   handleCloseModal();
  // };

  // const handleInputChange = (event) => {
  //   setUpdatedUser({
  //     ...updatedUser,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h1>User Table</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.login.uuid}>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>
                {user.location.city && user.location.state
                  ? `${user.location.city}, ${user.location.state}`
                  : user.location.city || user.location.state || "N/A"}
              </td>
              {/* <td>{`${user.location.city}, ${user.location.state}`}</td> */}
              <td>
                <button onClick={() => handleEditUser(user.login.uuid)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="load-more-button" onClick={handleLoadMore}>
        Load More
      </button>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Edit User Details</h2>
        <form>
          <input
            type="text"
            name="name"
            value={updatedUser.name ? updatedUser.name.first : ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            value={updatedUser.name ? updatedUser.name.last : ""}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={updatedUser.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="gender"
            value={updatedUser.gender}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            value={updatedUser.phone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            value={updatedUser.location.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="state"
            value={updatedUser.location.state ? updatedUser.location.state : ""}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdateUser}>Save Changes</button>
          <button onClick={handleCloseModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserTable;

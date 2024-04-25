import React, { useState, useEffect } from "react";const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [editUserDetails, setEditUserDetails] = useState({});

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = () => {
    fetch(
      `https://randomuser.me/api/?seed=dexi-interview&page=${currentPage}&results=5`
    )
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data.results]);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditUserDetails(users[index]);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editIndex] = editUserDetails;
    setUsers(updatedUsers);
    setEditIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName") {
      setEditUserDetails((prevDetails) => ({
        ...prevDetails,
        name: {
          ...prevDetails.name,
          first: value,
        },
      }));
    } else if (name === "lastName") {
      setEditUserDetails((prevDetails) => ({
        ...prevDetails,
        name: {
          ...prevDetails.name,
          last: value,
        },
      }));
    } else {
      setEditUserDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };
  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     if (name === "name") {
  //       const [firstName, lastName] = value.split(" ");
  //       setEditUserDetails((prevDetails) => ({
  //         ...prevDetails,
  //         name: {
  //           first: firstName,
  //           last: lastName,
  //         },
  //       }));
  //     } else {
  //       setEditUserDetails((prevDetails) => ({
  //         ...prevDetails,
  //         [name]: value,
  //       }));
  //     }
  //   };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                {editIndex === index ? (
                  <div className="pop-wrapper">
                    <div className="pop">
                      <input
                        type="text"
                        name="firstName"
                        value={editUserDetails.name.first}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={editUserDetails.name.last}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="email"
                        value={editUserDetails.email}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="phone"
                        value={editUserDetails.phone}
                        onChange={handleInputChange}
                      />
                      <button onClick={handleSave}>Save</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={loadMore}>Load More</button>
    </div>
  );
};

export default UserTable;

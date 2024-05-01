// import React, { useCallback, useEffect, useState } from "react";const SecondII = () => {//   const [users, setUsers] = useState([]);//   const [editIndex, setEditIndex] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [updatedUser, setUpdatedUser] = useState({});
//   useEffect(() => {
//     fetchUsers();
//   }, [currentPage]);

//   function fetchUsers() {
//     fetch(
//       `https://randomuser.me/api/?seed=dexi-interview&page=${currentPage}&results=5`
//     )
//       .then((response) => response.json())
//       .then((data) => setUsers([...users, ...data.results]));
//   }
//   const loadMore = () => {
//     setCurrentPage((prevState) => prevState + 1);
//   };
//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setUpdatedUser(users[index]);
//   };
//   const handleSave = () => {
//     const editedUsers = [...users];
//     editedUsers[editIndex] = updatedUser;
//     setUsers(editedUsers);
//     setEditIndex(null);
//   };
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     switch (name) {
//       case "firstName":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           name: {
//             ...prevDetails.name,
//             first: value,
//           },
//         }));
//         break;
//       case "lastName":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           name: {
//             ...prevDetails.name,
//             last: value,
//           },
//         }));
//         break;
//       case "country":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           location: {
//             ...prevDetails.name,
//             country: value,
//           },
//         }));
//         break;
//       case "nat":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           nat: value,
//         }));
//         break;
//       case "phone":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           phone: value,
//         }));
//         break;
//       case "gender":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           gender: value,
//         }));
//         break;
//       case "email":
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           email: {
//             first: value,
//           },
//         }));
//         break;

//       default:
//         setUpdatedUser((prevDetails) => ({
//           ...prevDetails,
//           [name]: value,
//         }));
//         break;
//     }
//     return (
//       <div>
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Country</th>
//               <th>Gender</th>
//               <th>Phone</th>
//               <th>Edit</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user, index) => (
//               <tr key={index}>
//                 <td>
//                   <div className="parentOne">
//                     <div className="imageWrapper">
//                       <img src={user.picture.thumbnail} alt="thumbnail" />
//                     </div>
//                     <div className="info">
//                       <p className="name">
//                         {`${user.name.first} ${user.name.last}`}
//                       </p>
//                       <p className="email">{user.email}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="parentTwo">
//                     <p className="country"> {user.location.country}</p>
//                     <p className="nationality"> {user.nat}</p>
//                   </div>
//                 </td>
//                 <td>
//                   <span>{user.gender}</span>
//                 </td>
//                 <td style={{ color: "#8895a0" }}>{user.phone}</td>

//                 <td>
//                   {editIndex === index ? (
//                     <div className="pop-wrapper">
//                       <div className="pop">
//                         <input
//                           type="text"
//                           name="firstName"
//                           value={updatedUser.name.first}
//                           onChange={handleInputChange}
//                         />
//                         <input
//                           type="text"
//                           name="lastName"
//                           value={updatedUser.name.last}
//                           onChange={handleInputChange}
//                         />
//                         <input
//                           type="text"
//                           name="email"
//                           value={updatedUser.email}
//                           onChange={handleInputChange}
//                         />
//                         <input
//                           type="text"
//                           name="country"
//                           value={updatedUser.location.country}
//                           onChange={handleInputChange}
//                         />
//                         <input
//                           type="text"
//                           name="nat"
//                           value={updatedUser.nat}
//                           onChange={handleInputChange}
//                         />
//                         <input
//                           type="text"
//                           name="gender"
//                           value={updatedUser.gender}
//                           onChange={handleInputChange}
//                         />
//                         <input
//                           type="text"
//                           name="phone"
//                           value={updatedUser.phone}
//                           onChange={handleInputChange}
//                         />

//                         <button onClick={handleSave}>Save</button>
//                       </div>
//                     </div>
//                   ) : (
//                     <button onClick={() => handleEdit(index)}>Edit</button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={() => loadMore()}>Load More</button>
//       </div>
//     );
//   };
// };

// export default SecondII;
import React, { useState, useEffect } from "react";
const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editIndex, setEditIndex] = useState(null);
  const [editUserDetails, setEditUserDetails] = useState({});

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  console.log(users);
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
    switch (name) {
      case "firstName":
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          name: {
            ...prevDetails.name,
            first: value,
          },
        }));
        break;
      case "lastName":
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          name: {
            ...prevDetails.name,
            last: value,
          },
        }));
        break;
      case "country":
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          location: {
            ...prevDetails.location,
            country: value,
          },
        }));
        break;
      case "nat":
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          nat: value,
        }));
        break;
      case "phone":
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          phone: value,
        }));
        break;
      case "gender":
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          gender: value,
        }));
        break;
      default:
        setEditUserDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
    }
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <div className="parentOne">
                  <div className="imageWrapper">
                    <img src={user.picture.thumbnail} alt="thumbnail" />
                  </div>
                  <div className="info">
                    <p className="name">
                      {`${user.name.first} ${user.name.last}`}
                    </p>
                    <p className="email">{user.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <div className="parentTwo">
                  <p className="country"> {user.location.country}</p>
                  <p className="nationality"> {user.nat}</p>
                </div>
              </td>
              <td>
                <span>{user.gender}</span>
              </td>
              <td style={{ color: "#8895a0" }}>{user.phone}</td>

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
                        name="country"
                        value={editUserDetails.location.country}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="nat"
                        value={editUserDetails.nat}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="gender"
                        value={editUserDetails.gender}
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

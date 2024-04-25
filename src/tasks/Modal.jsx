import React, { useState, useEffect } from "react";import Modal from "react-modal";

const EditUserModal = ({ isOpen, onClose, user, onSave }) => {
  const [firstName, setFirstName] = useState(user.name.first);
  const [lastName, setLastName] = useState(user.name.last);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleSave = () => {
    onSave({
      ...user,
      name: { first: firstName, last: lastName },
      email,
      phone,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Edit User">
      <h2>Edit User Details</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save Changes
        </button>
      </form>
    </Modal>
  );
};
export default EditUserModal;

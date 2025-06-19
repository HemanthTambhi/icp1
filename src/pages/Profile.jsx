import React, { useState } from 'react';
import '../assets/css/profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Lark William',
    username: '',
    location: 'India',
    email: 'lark.william@email.com',
    phone: '1234567890',
    dob: '',
    wallet: '0xCdfeHT.......e0Hg',
    profileImage: 'https://via.placeholder.com/85',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData({ ...formData, profileImage: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Changes saved successfully!');
  };

  const handleDateClick = () => {
    const dobInput = document.getElementById('dob');
    dobInput.focus();
  };

  const handleCopyWallet = () => {
    const walletInput = document.getElementById('wallet');
    walletInput.select();
    document.execCommand('copy');
    alert('Wallet address copied to clipboard!');
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Personal Info</h2>
        <p className="subtitle">Update or change about yourself so everyone knows who you are.</p>
      </div>

      <form id="personalInfoForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Enter Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="profile-section">
          <div className="profile-picture">
            <img src={formData.profileImage} alt="Profile" id="profileImage" />
            <div
              className="edit-overlay"
              onClick={() => {
                const fileInput = document.createElement('input');
                fileInput.type = 'file';
                fileInput.accept = 'image/*';
                fileInput.onchange = (e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleImageUpload(e.target.files[0]);
                  }
                };
                fileInput.click();
              }}
            >
              edit
            </div>
          </div>

          <div className="username-location">
            <div className="form-group">
              <label htmlFor="username">Enter Username*</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="E.g. lark.william"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Where are you based?*</label>
              <div className="select-wrapper">
                <select
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="two-columns">
          <div className="form-group">
            <label htmlFor="email">Email Address*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <div className="phone-input">
              <div className="country-code">
                <span className="flag">🇺🇸</span>
                <span className="arrow">▼</span>
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <div className="date-input">
            <input
              type="text"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              placeholder="Enter Date (DD-MM-YYYY)"
            />
            <span className="calendar-icon" onClick={handleDateClick}>
              📅
            </span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="wallet">Wallet Address</label>
          <div className="wallet-input">
            <input
              type="text"
              id="wallet"
              name="wallet"
              value={formData.wallet}
              onChange={handleChange}
            />
            <span className="copy-icon" onClick={handleCopyWallet}>
              📋
            </span>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-primary">
            Save Changes
          </button>
          <button type="button" className="btn-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
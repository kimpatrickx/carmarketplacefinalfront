import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [contactnum, setContactnum] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [imgf, setImgf] = useState(null);
  const [imgb, setImgb] = useState(null);
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const saveForm = (event) => {
    event.preventDefault();

    if (password !== repassword) {
      alert("Passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("gender", gender);
    formData.append("birthdate", birthdate);
    formData.append("address", address);
    formData.append("contactnum", contactnum);
    formData.append("email", email);
    formData.append("role", role);
    formData.append("imgf", imgf);
    formData.append("imgb", imgb);
    formData.append("password", password);
    formData.append("password_confirmation", repassword);

    fetch("http://localhost:8000/api/registeruser", {
      method: "POST",
      body: formData,
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("API response:", data);
      if (data.status === "true") {
        alert("User registered successfully!");
      } else {
        console.error("Validation errors:", data.errors);
        alert("Registration failed: " + (data.message || "Validation error"));
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("An error occurred while registering");
    });
  };

  return (
    <div className="signup-container">
      <div className="left-section">
        {/* Image is set via CSS */}
      </div>
      <div className="right-section">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={saveForm}>
            <div className="input-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" value={fname} onChange={(e) => setFname(e.target.value)} placeholder="First name" required />
            </div>

            <div className="input-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Last name" required />
            </div>

            <div className="input-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="birthdate">Birthdate</label>
              <input type="date" id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} required />
            </div>

            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" required />
            </div>

            <div className="input-group">
              <label htmlFor="contact">Contact Number</label>
              <input type="tel" id="contact" value={contactnum} onChange={(e) => setContactnum(e.target.value)} placeholder="Contact number" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            </div>

            <div className="input-group">
              <label htmlFor="role">Role</label>
              <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="frontImage">Image Front</label>
              <input type="file" id="frontImage" onChange={(e) => setImgf(e.target.files[0])} accept="image/*" />
            </div>

            <div className="input-group">
              <label htmlFor="backImage">Image Back</label>
              <input type="file" id="backImage" onChange={(e) => setImgb(e.target.files[0])} accept="image/*" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            </div>

            <div className="input-group">
              <label htmlFor="rePassword">Re-enter Password</label>
              <input type="password" id="rePassword" value={repassword} onChange={(e) => setRepassword(e.target.value)} placeholder="Re-enter password" required />
            </div>

            <button type="submit" className="submit-btn">Sign Up</button>

            <p className="login-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
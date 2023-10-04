// import React, { useState } from "react";
// import Add from "../imgs/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [err, setErr] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//       //Create user
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       //Create a unique image name
//       const date = new Date().getTime();
//       const storageRef = ref(storage, `${displayName + date}`);

//       await uploadBytesResumable(storageRef, file).then(() => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           try {
//             //Update profile
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             //create user on firestore
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             //create empty user chats on firestore
//             await setDoc(doc(db, "userChats", res.user.uid), {});
//             navigate("/");
//           } catch (err) {
//             console.log(err);
//             setErr(true);
//             setLoading(false);
//           }
//         });
//       });
//     } catch (err) {
//       setErr(true);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Firebase Realtime Chat App</span>
//         <span className="title">Register</span>
//         <form onSubmit={handleSubmit}>
//           <input required type="text" placeholder="display name" />
//           <input required type="email" placeholder="email" />
//           <input required type="password" placeholder="password" />
//           <input required style={{ display: "none" }} type="file" id="file" />
//           <label htmlFor="file">
//             <img src={Add} alt="" />
//             <span>Add an avatar</span>
//           </label>
//           <button disabled={loading}>Sign up</button>
//           {loading && "Uploading and compressing the image please wait..."}
//           {err && <span>Something went wrong</span>}
//         </form>
//         <p>
//           You do have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;



// Import necessary modules from React and Firebase
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

// Import your avatar image
import Add from "../imgs/addAvatar.png";

// Define the Register component
const Register = () => {
  // State variables for error, loading, and navigation
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading state and clear any previous errors
    setLoading(true);
    setError(null);

    // Extract form input values
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user with email and password
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Generate a unique image name using the display name and timestamp
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      // Upload avatar image to Firebase Storage
      await uploadBytesResumable(storageRef, file);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      // Update user profile with display name and photo URL
      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
      });

      // Save user data to Firestore
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
      });

      // Create empty user chats document in Firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});

      // Navigate to the home page after successful registration
      navigate("/");
    } catch (err) {
      console.error("Registration Error:", err);
      // Set error state to display an error message
      setError("Something went wrong during registration");
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  // JSX structure for the Register component
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Firebase Realtime Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit} disabled={loading}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && <p>Uploading and compressing the image, please wait...</p>}
          {error && <p className="error">{error}</p>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

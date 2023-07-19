import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
     if (!file) {
      setErr(true);
      return;
    }
    try {
      setLoading(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, userName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          setErr(true);
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            try {
            await updateProfile(res.user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
              userName,
              email,
              photoURL: downloadURL,
            });
            } catch (err) {
              setErr(true);
            } finally {
              setLoading(false);
            }
          });
        }
      );
    } catch (err) {
      setErr(true);
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChattY</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="user name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input type="file" style={{ display: "none" }} id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>addAvatar</span>
          </label>
          <button>Sign Up</button>
          {err && <span className="err">Something went wrong!</span>}
        </form>
        <p>
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;

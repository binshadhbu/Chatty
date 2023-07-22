import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage,displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        // "state_changed",
        // (snapshot) => {
        //   const progress =
        //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   console.log("Upload is " + progress + "% done");
        //   switch (snapshot.state) {
        //     case "paused":
        //       console.log("Upload is paused");
        //       break;
        //     case "running":
        //       console.log("Upload is running");
        //       break;
        //   }
        // },
        (error) => {
          setErr(true);
        },
        () => { 
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            console.log("File available at", downloadURL);
            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            
            });

          });
        }
      );

      


    } catch (err) {
      setErr(true);
    }
  
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //   });
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

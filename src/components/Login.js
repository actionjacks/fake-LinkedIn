import React, { useState } from "react";
import "../styles/Login.css";
import logo from "../assets/linkEdinLogo.png";
//redux
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
//firebase
import { auth } from "../firebase";

function Login() {
  //redux
  const dispatch = useDispatch();
  //form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  //register/login functions
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter a full name !");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                //redux this is payload
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <img src={logo} alt="logoLinkedin" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="full name (required)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profil pic adres URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a meber?{" "}
        <span className="Login__register" onClick={register}>
          Registet now
        </span>
      </p>
    </div>
  );
}

export default Login;

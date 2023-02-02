import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Home from "./Home";
import GameOne from "./GameOne";
import GameTwo from "./GameTwo";
import GameThree from "./GameThree";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

   // keeping user logged in
  useEffect(() => {
    fetch("/me")
    .then((response) => {
      if (response.ok) { response.json()
    .then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  return (
    <>
       <NavBar
        user={user}
        setUser={setUser}
        handleLogoutClick={handleLogoutClick}
      />
      <main>
        {user ? (
  
          <Routes>
            <Route exact path="/" element={ <Home user={user} navigate={navigate} /> }></Route>
            <Route exact path="/contactus" element={<Contact />}></Route>
            <Route exact path="/gameone" element={<GameOne />}></Route>
            <Route exact path="/gametwo" element={<GameTwo />}></Route>
            <Route exact path="/gamethree" element={<GameThree />}></Route>
          </Routes>
        ) : (
          // if logged out
          <Routes>
            <Route exact path="/" element={ <Home user={user} navigate={navigate} />}></Route>
            <Route exact path="/login" element={<Login setUser={setUser} />}></Route>
            <Route exact path="/signup" element={<Signup setUser={setUser} />} ></Route>
            <Route exact path="/contactus" element={<Contact />}></Route>
          </Routes>
        )}
      </main>
    </>
  );
}

export default App;

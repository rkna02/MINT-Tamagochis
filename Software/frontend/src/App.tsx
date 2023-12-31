import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/main/Main";
import Pets from "./Components/pets/Pets";
import AddPets from "./Components/addPets/AddPets";
import PetPage from "./Components/petPage/PetPage";
import LoginPage from "./Components/login/Login";

const isLoggedIn = window.localStorage.getItem("isLoggedIn");

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/" element={isLoggedIn ? <Pets /> : <Main />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/addPets" element={<AddPets />} />
          <Route
            path="/pets/:id"
            element={
              <PetPage
                _id={"id"}
                name={"name"}
                birthDate={new Date()}
                focusLevel={0}
                tirednessLevel={0}
                happinessLevel={5}
                isSick={false}
                isDead={false}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

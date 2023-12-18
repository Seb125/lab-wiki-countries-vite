import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetails from "./pages/CountryDetailsPage";
import axios from "axios";
import { useState, useEffect } from "react";



function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {


    const fetchData = async () => {
      const {data} = await axios.get("https://ih-countries-api.herokuapp.com/countries");
      setCountries(data)
      console.log(data)
    }

    fetchData();

    console.log(countries)

  }, [])



  return (
    <div className="App">
      <Navbar />
      <Routes>

        <Route 
          path="/"
          element = {countries.length > 0 ? <HomePage countries={countries}></HomePage> : <p>...Loading</p>} >


        </Route>

        <Route path="/:countryId" element = {<CountryDetails/>}/>



      </Routes>
    </div>
  );
}

export default App;

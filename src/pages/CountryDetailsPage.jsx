import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CountryDetails() {

    const {countryId} = useParams();
    const [countryDetail, setCountryDetail] = useState(null);

    console.log(countryId)

    useEffect(() => {

      const getCountryDetails = async () => {

        try {
        const { data } = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${countryId}`);

        console.log(data.borders)
        setCountryDetail(data);
      } 
     catch (err) {
      console.log(err)
    }
  }

      getCountryDetails();

    }, [countryId])

     // Conditional rendering based on the state of countryDetail
     if (!countryDetail) {
      return <div>Loading...</div>; // Or any loading indicator while data is being fetched
  }

    return (

        <div className="container">
        <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

        <h1>{countryDetail.name.common}</h1>

        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{countryDetail.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetail.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>

                {countryDetail.borders.map((element) => {
                  return (
                  <li><Link to={`/${element}`}>{element}</Link></li>
                  )
                })}
                  
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    
    )
}

export default CountryDetails;

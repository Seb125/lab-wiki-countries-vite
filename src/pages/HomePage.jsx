import { Link } from "react-router-dom";


function HomePage({countries}) {

    return (
        <div>
           <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">

            {countries.map((element) => {
              return (
                <Link key={element._id} className="list-group-item list-group-item-action" to={element.alpha3Code}
            >{element.name.common} <img src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}/></Link>
              )
            })}
          <Link className="list-group-item list-group-item-action" to="/ABW"
            >🇦🇼 Aruba</Link>
          
        </div>
        </div>
        </div>
    )
}

export default HomePage;

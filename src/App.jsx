import {useEffect, useState} from "react";
import "./assets/style.css";
import {Card} from "./components/Card.jsx";
import {ErrorContent} from "./components/ErrorContent.jsx";
import loader from "./assets/loader.svg";

function App() {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/region/africa";
    fetch(URL)
      .then(data => data.json())
      .then(data => {
        // console.log(data);
        data.sort((a, b) => {
          return (a.name.common > b.name.common) ? 1 : (a.name.common < b.name.common) ? -1 : 0;
        });
        setTimeout(() => {
          console.log("Fin de l'attente de 10 secondes");
        }, 10000);
        setCountries(data);
      })
      .catch((err) => {
        console.dir(err);
        setError({msg: err.message})
      })
  }, [])

  return (
    <div className={"min-h-screen bg-slate-800"}>
      <div className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Africa Countries Data</h1>
        <p className="text-gray-100 text-[1.1em] mb-8">Click on the card to reveal Country's Informations</p>

        {!countries && !error && (
          <div className={"flex w-[10%] mx-auto"}>
            <img src={loader} alt="error icon"/>
          </div>
        )}
        {!countries && error && <ErrorContent err={error}/>}
        {countries && (
          <ul
            className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 auto-rows-auto"}>
            {
              countries.map((country, index) => (
                <Card key={index} country={country}/>
              ))
            }
          </ul>
        )}
      </div>
    </div>
  )
}

export default App

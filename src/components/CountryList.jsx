import Spinner from "./Spinner";
import styles from './CountryList.module.css'
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

function CountryList() {
    const {cities, isLoading} = useCities();
    if(isLoading) return <Spinner />;

    if(!cities.length) return <Message message="Add your first city by clicking on a city on the map"/>

    //(acc)accumulator will be an arr 
    //and (curr)current value will be a city
    const countries = cities.reduce((arr, city) => 
    // if the current country is not in the array then:
    {if(!arr.map(el => el.country).includes(city.country))
    //return a new array which has all the current el + a new one
    return [...arr, {country: city.country, emoji: city.emoji }];
    else return arr}
    , []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => <CountryItem country={country} key={country.id} />)}
        </ul>
    )
}

export default CountryList

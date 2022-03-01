import "./App.css"

import dataSource from "../../data/dataSource.js"

import Titlebar from "../Titlebar/Titlebar.jsx"
import LocationCard from "../LocationCard/LocationCard.jsx"

const locationCardArray = dataSource.map(val => val = <LocationCard key={val.id} {...val} />)

const App = () =>
    <div id="all-container">
        <Titlebar />
        <div id="locations-container">
            {locationCardArray}
        </div>
    </div>

export default App

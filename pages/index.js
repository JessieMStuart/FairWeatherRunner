// export default function Index() {
//   return (
//    <p>My location is: </p>
//   );
// }


import React, {Fragment} from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherData: undefined,
            error: undefined
        }
    }
    getWeatherScore(weatherID) {
        if((weatherID > 199) && (weatherID < 800)) {
            return 0
        } else {
            return 1
        }
    }
    async componentDidMount() {
       try {
        const locationInfo = await axios.get(`http://www.geoplugin.net/json.gp`);
        const city = locationInfo && locationInfo.data && locationInfo.data.geoplugin_city;
            if (city) {
                const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
                const weatherScore = this.getWeatherScore(result.data.weather[0].id)
                this.setState({weatherScore, weatherData: result.data})  
            } else {
                throw new Error('Could not obtain city information')
            }   
        } catch (e) {
           this.setState({error: `An error was thrown :( oh no : ${e.message})`})
        } finally {}
    }

    renderLoading() {
        return (
            <p>Oi, I'm loading..</p>
        )
    }

    renderWeatherTip() {
        return (
            <Fragment>
                <p>My location is: {this.state.weatherData.name}</p>
                <p>{this.state.weatherCheck ? "Weather looks alright! You can go for a run" : "Weather is rubbish, probably best to skip the run"}</p>
            </Fragment>
            
        )
    }

    render() {
        if (this.state.error) {
            return (
                <div>
                    <p>{this.state.error}</p>
                </div>
            )
        }

        return (
            <div>
               {this.state.weatherData ? this.renderWeatherTip() : this.renderLoading()}
            </div>
        );
    }
}

export default App
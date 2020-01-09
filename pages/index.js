// export default function Index() {
//   return (
//    <p>My location is: </p>
//   );
// }


import React from 'react'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherData: undefined,
            error: undefined
        }
    }

   async componentDidMount() {
       try {
        const result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=leeds&appid=${process.env.API_KEY}`)
        this.setState({weatherData: result.data})
    } catch (e) {
           this.setState({error: `An error was thrown :( oh no : ${e.message})`})
       } finally {}
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
               <p>{this.state.weatherData.name ? `My location is: ${this.state.weatherData.name}` : "Oi I'm loading..."}</p>
            </div>
        );
    }
}

export default App
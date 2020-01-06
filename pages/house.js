import React from 'React';
import Window from '../comps/house/window'
import Door from '../comps/house/door'
import Roof from '../comps/house/roof'

class House extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            doorOpen: false
        }
    }

    // Toggle door between open and closed
    toggleDoor = () => {
        const open = this.state.doorOpen
        this.setState({doorOpen: !open})
    }

    render() {
        return (
            <div className='house'>
                <Roof />
                <div>
                    <Window />
                    <Window />
                </div>
                <div>
                    <Window />
                    <Door toggleDoor={this.toggleDoor} open={this.state.doorOpen}/>
                </div>
            </div> 
        );
    }
}

export default House;
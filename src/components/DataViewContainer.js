import React from 'react';
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import _ from 'lodash';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2
    }

    onCountSliderChange = (value) => {
        this.setState({ minCount: value });
    }

    render() {
        return(
           <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount}/>
               <div className="filters">
                    <CountSlider
                        minCount={this.state.minCount}
                        onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
               </div>
           </div>
        );
    }
}
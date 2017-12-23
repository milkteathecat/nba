import React from 'react';
import { ShotChart } from "./ShotChart";
import { CountSlider } from "./CountSlider";
import _ from 'lodash';
import { Radio, Row, Col } from 'antd';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
    }

    onCountSliderChange = (value) => {
        this.setState({ minCount: value });
    }

    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value});
    }


    render() {
        return(
           <div className="data-view">
                <ShotChart playerId={this.props.playerId} minCount={this.state.minCount} chartType={this.state.chartType}/>
               <div className="filters">
                   { this.state.chartType === "hexbin" ? (
                       <CountSlider
                           minCount={this.state.minCount}
                           onCountSliderChange={_.debounce(this.onCountSliderChange, 500)}/>
                   ) : null}
                   <Row className="chart-type-radio">
                       <Col span={12} offset={3}>
                           <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                               <Radio value="hexbin">Hexbin</Radio>
                               <Radio value="scatter">Scatter</Radio>
                           </RadioGroup>
                       </Col>
                   </Row>

               </div>
           </div>
        );
    }
}
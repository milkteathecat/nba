import React from 'react';
import { PROFILE_PIC_URL_PREFIX } from "../constants";
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';

const Option = AutoComplete.Option;

function onSelect(value) {
    console.log('onSelect', value);
}

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(player => ({
                fullName: player.fullName,
                playerId: player.playerId
            })),
        });
    }

    onSelect = (value) => {
        this.props.loadPlayerInfo(value);
    }

    render() {
        const { dataSource } = this.state;
        const options = dataSource.map(player => (
            <Option key={player.fullName} text={player.fullName} className="player-option">
                <img src={`${PROFILE_PIC_URL_PREFIX}/${player.playerId}.png`} alt="Player" className="player-option-image"/>
                <span className="player-option-label">{player.fullName}</span>
            </Option>
        ));
        console.log(options);
        return (
            <AutoComplete
                className="search-bar"
                dataSource={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder="input here"
                optionLabelProp="value">
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
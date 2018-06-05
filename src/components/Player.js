import React, { Component } from 'react';
import './player.css';
import axios from 'axios';
import GenTitle from './GenTitle';
import GenCom from './GenCom';

class Player extends Component {
    state = {
        img: '',
    }
    
    

    getNote = (note) => {
        this.setState({ note: note });
    };
    componentWillMount() {
        this.refresh();
    }

    refresh = () => {
        axios.get('http://thecatapi.com/api/images/get?format=html&type=gif&size=small')
            .then(((response) => {
                console.log(response.data);
                this.setState({
                    img: response.data,
                })

            }))
    }

    render() {
        return (
            <div className="video">
                <div className="gif row dark">
                    <p dangerouslySetInnerHTML={{ __html: this.state.img }} />
            </div>
                <div className="row ">
                    <div className="col titre"><GenTitle /></div>
                    <div className="col vote"><i className="fas fa-thumbs-up"></i><div className="space"></div><i className="fas fa-thumbs-down"></i></div>
            </div>
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            <GenCom />
            </div>

        );
    }
}

export default Player;
import React, { Component } from 'react';
import './list.css';
import axios from 'axios';
import GenTitle from './GenTitle';

class List extends Component {
    state = {
        img: ''
    }

    getNote = (note) => {
        this.setState({ note: note });
    };
    componentWillMount() {
        this.refresh();
    }

    refresh = () => {
        axios.get('http://thecatapi.com/api/images/get?format=html&type=jpg&size=small')
            .then(((response) => {
                console.log(response.data);
                this.setState({
                    img: response.data,
                })

            }))
    }

    render() {
        return (
            <div class="row list">
                <div class="col-6 dark center">
                    <p dangerouslySetInnerHTML={{ __html: this.state.img }} />
                </div>
                <div class="col-6">
                    <GenTitle />
                    </div>
            </div>

        );
    }
}

export default List;
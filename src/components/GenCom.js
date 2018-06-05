import React, { Component } from 'react';
import './com.css';
import img01 from '../img/cats/01.jpg';
import img02 from '../img/cats/02.jpg';
import img03 from '../img/cats/03.jpg';
import img04 from '../img/cats/04.jpg';
import img05 from '../img/cats/05.jpg';
import img06 from '../img/cats/06.jpg';
import img07 from '../img/cats/07.jpg';
import img08 from '../img/cats/08.jpg';
import img09 from '../img/cats/09.jpg';
import img10 from '../img/cats/10.jpg';
import img11 from '../img/cats/11.jpg';
import img12 from '../img/cats/12.jpg';
import img13 from '../img/cats/13.jpg';
import img14 from '../img/cats/14.jpg';
import GenTitle from './GenTitle';

class GenCom extends Component {
    state = {  }

    chooseImage = () =>{
        var images = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14]

        var choix = Math.floor(Math.random() * (images.length - 0));
        var image = images[choix];
        return image;
    }

    render() {
        return (
            <div class="row comm">
                <div className="col-2"><img src={this.chooseImage()} alt="chat" /></div>
                <div className="col-10"><GenTitle /></div>
                
            </div>
        );
    }
}

export default GenCom;
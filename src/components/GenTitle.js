import React, { Component } from 'react';

class GenTitle extends Component {
    state = {  }

    generate = () =>{
        var finalText = '';
        var catTexts = ['Miaou', 'MIAOUUUUU', 'miiiaou', 'ronron', 'RONRONRONRON','Ron-ron', 'Ksss', 'Sshhh', 'meow', 'miaow', 'mew', 'meow', 'Miauw','Miaow', 'Mew', 'Meow', 'Miauw' ];
        var min = 1;
        var max = catTexts.length;
        var longueur = Math.floor(Math.random() * (3 - 1));
        for(var i=0; i<= longueur; i++){
        var word = Math.floor(Math.random() * (max - min +1)) + min;
        finalText += catTexts[word-1] + ' ';
        }
        return finalText;

    }
    render() {
        return (
            <div>
                {this.generate()}
            </div>
        );
    }
}

export default GenTitle;
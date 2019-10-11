import React, { Component } from 'react'

export default class Canvas extends Component {

    canVas = () => {
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 70;

        context.beginPath();
        context.arc(centerX, centerY, radius, 1.5, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = 'red';
        context.stroke();
    }

    render() {
        return (
            <div>
                {this.canVas()}
            </div>
        )
    }
}

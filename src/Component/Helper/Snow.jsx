import React, { Component } from 'react';
import bg1 from '../../Assests/images/snowfall1.png';
import bg2 from '../../Assests/images/snowfall2.png';
import bg3 from '../../Assests/images/snowfall3.png';


export default class Snow extends Component {
    render() {
        return (
            <div className="user--header__snow" style={{ backgroundImage: `url(${bg1}),url(${bg2}),url(${bg3})`}}>
                
            </div>
        )
    }
}

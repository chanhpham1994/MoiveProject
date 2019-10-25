import React, { Component } from 'react';
import UserCarousel from '../../Component/UserComponent/UserCarousel';
import UserSlider from '../../Component/UserComponent/UserSlider';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <UserCarousel />

                <UserSlider />
            </div>
        )
    }
}

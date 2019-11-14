import React, { Component } from 'react';
import UserCarousel from '../../Component/UserComponent/UserCarousel';
import UserSlider from '../../Component/UserComponent/UserSlider';
import {connect} from 'react-redux';
import { resetState } from '../../Redux/actions/QuanLyNguoiDungAction';

class HomePage extends Component {

    componentDidMount = () => {
        
        //reset state
        this.props.resetState();
    }


    render() {
        return (
            <div>
                <UserCarousel />
                <UserSlider />
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    resetState: () => {dispatch(resetState())}
})


export default connect(null, mapDispatchToProps)(HomePage)
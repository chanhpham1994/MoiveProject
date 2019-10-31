import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class UserTimeUp extends Component {
    render() {
        return (
            <div className="user--timeup">
                <h1>HẾT THỜI GIAN MUA VÉ</h1>
                <h3>
                    Rất tiếc, phiên giao dịch của bạn đã hết hạn. <br/>
                    Bạn có thể bắt đầu lại bằng cách nhấn vào nút bên dưới.
                </h3>

               <NavLink to="/"> <button className="btn btn-success">HOME</button></NavLink>

            </div>
        )
    }
}

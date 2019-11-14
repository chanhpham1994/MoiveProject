import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class AdminHeader extends Component {

    render() {

        return (
            <div className='header'>
                <nav className="header--navbar navbar navbar-expand-lg">

                    {/* <a className="navbar-brand" href="#">
                        <i className="fa fa-arrow-left" data-toggle="tooltip" data-placement="bottom" title="Về Trang Phim"></i>
                    </a> */}

                    <NavLink  to='/admin' >
                        ADMIN-PAGE
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse ml-3" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Từ Khóa" aria-label="Search" />
                            <button className="btn btn-light my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
                        </form>

                    <NavLink className='ml-2' to='/'>
                            --  Trang Chủ BHD --
                    </NavLink>
                    </div>



                    <div className='header--navbar__icon'>

                        <span className='icon--envelope'>
                            <i className="fa fa-envelope"></i>
                        </span>

                        <span className='icon--bell'>
                            <i className="fa fa-bell"></i>
                        </span>
                        <span className='icon--book'>
                            <i className="fa fa-address-book"></i>
                        </span>
                        <span className='icon--setting'>
                            <i className="fa fa-cog"></i>
                        </span>

                    </div>

                </nav>
            </div>


        )
    }
}


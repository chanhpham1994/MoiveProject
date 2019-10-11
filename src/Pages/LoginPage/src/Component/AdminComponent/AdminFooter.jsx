import React, { Component } from 'react'

export default class AdminFooter extends Component {
    render() {
        return (

            <div>
                <div className='admin--footer'>
                    <div className='admin--footer__content'>
                        <ul>
                            <li><a href="">Sáng Tạo</a></li>
                            <li><a href="">Chúng Tôi</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Chính Sách</a></li>
                        </ul>
                    </div>
                    <div className='admin--footer__design'>
                        <span>© 2019, made with favorite by Creative Chanh for a better web.</span>
                    </div>
                </div>
            </div>

        )
    }
}

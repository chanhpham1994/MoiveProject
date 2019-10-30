import React, { Component } from 'react'

export default class UserTheaterLocation extends Component {
    render() {
        return (
            <div className="modal fade" id="modelMap" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{maxWidth:'1102px'}}>

                <div className="modal-content">

                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d251637.95196238213!2d105.6189045!3d9.779349!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1572464206649!5m2!1svi!2s" width={1100} height={720} frameBorder={0} style={{border: 0}} allowFullScreen />

                        
                </div>
            </div>
        </div>
        )
    }
}

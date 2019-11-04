import React, { Component } from 'react'

export default class UserTrailer extends Component {



    render() {

        let { trailer } = this.props;

        return (
            <div className="modal fade" id="modelTrailer" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{maxWidth:'1102px'}}>

                    <div className="modal-content">

                            <iframe width={1100} height={720} src={trailer} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            
                    </div>
                </div>
            </div>

        )
    }
}



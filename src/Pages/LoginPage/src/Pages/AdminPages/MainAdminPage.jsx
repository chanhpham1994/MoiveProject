import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainAdminPage extends Component {

    componentDidMount = () => {

        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        // var centerX = canvas.width / 2;
        var centerY = canvas.height / 2;
        var radius = 45;

        context.beginPath();
        context.arc(55, centerY, radius, 1.5, 2 * Math.PI, false);
        context.fillStyle = 'transparent';
        context.fill();
        context.lineWidth = 5;
        context.strokeStyle = 'red';
        context.stroke();
    }


    render() {
        return (
            <div>
                {/* <div className='admin--content__header'>
                    <h3 className='my-2'>TRANG CHỦ ADMIN</h3>
                </div> */}

                <div className='container-fluid main--page__content'>
                    <div className='row '>

                        {/* PROGRESS BAR */}
                        <div className='col-md-3 p-2'>
                            <div className='progress-card p-4'>
                                <div className='card-box'>
                                    <h5 className='float-left'>Tổng Doanh Thu</h5>
                                    <span className='card-box__icon float-right'><i className="fa fa-ellipsis-v"></i></span>
                                </div>

                                <div className='chart'>
                                    <div className='widget-detail-right text-right'>
                                        <h4>256</h4>
                                        <p>Doanh Thu Trong Ngày</p>
                                    </div>

                                    <div className='widget-chart-box'>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CANVAS CIRCLE */}
                        <div className='col-md-3 p-2'>
                            <div className='canvas-card p-4'>

                                <div className='card-box'>
                                    <h5 className='float-left'>Phân Tích</h5>
                                    <span className='card-box__icon float-right'><i className="fa fa-ellipsis-v"></i></span>
                                </div>

                                <div className='chart'>
                                    <div className='widget-chart-box'>

                                        <canvas id="myCanvas" width={150} height={100} ></canvas>

                                        <input className='myCanvas--number' data-plugin="knob" data-width={80} data-height={80} data-fgcolor="#f05050 " data-bgcolor="#F9B9B9" defaultValue={58} data-skin="tron" data-angleoffset={180} data-readonly="true" data-thickness=".15" readOnly="readonly" />

                                    </div>

                                    <div className='widget-detail-right text-right'>
                                        <h4>2404</h4>
                                        <p>Doanh Thu Trong Ngày</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* PROGRESS BAR */}
                        <div className='col-md-3 p-2'>
                            <div className='progress-card p-4'>
                                <div className='card-box'>
                                    <h5 className='float-left'>Phân Tích</h5>
                                    <span className='card-box__icon float-right'><i className="fa fa-ellipsis-v"></i></span>
                                </div>

                                <div className='chart'>
                                    <div className='widget-detail-right text-right'>
                                        <h4>3010</h4>
                                        <p>Doanh Thu Trong Ngày</p>
                                    </div>

                                    <div className='widget-chart-box'>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: '55%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                         {/* PROGRESS BAR */}
                         <div className='col-md-3 p-2'>
                            <div className='progress-card p-4'>
                                <div className='card-box'>
                                    <h5 className='float-left'>Phân Tích</h5>
                                    <span className='card-box__icon float-right'><i className="fa fa-ellipsis-v"></i></span>
                                </div>

                                <div className='chart'>
                                    <div className='widget-detail-right text-right'>
                                        <h4>9430</h4>
                                        <p>Doanh Thu Trong Ngày</p>
                                    </div>

                                    <div className='widget-chart-box'>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" style={{ width: '45%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* AMIN__TOP_FILM */}
                <h4>~~~ TOP PHIM HAY TRONG TUẦN ~~~</h4>
                <div className='container-fluid main--page__film'>
                    <div className='row'>

                        <div className='col-4 p-2'>
                            <div className='card card-product top--film p-4'>
                                <div className='top--film__image'>
                                    <a href="#">
                                        <img src={require('../../Assests/images/joker--film.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="card-body top--film__content">
                                    <h4 className="card-title">JOKER</h4>
                                    <p className="card-text">Joker là một bộ phim giật gân tâm lý Mỹ năm 2019 dựa trên nhân vật cùng tên của DC Comics. Đây là bộ phim đầu tiên trong series phim dựa trên DC Comics mà không thuộc trong DC Extended Universe.</p>
                                    <div className='top--film__rank'>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 p-2'>
                            <div className='card card-product top--film p-4'>
                                <div className='top--film__image'>
                                    <a href="#">
                                        <img src={require('../../Assests/images/endGame.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="card-body top--film__content">
                                    <h4 className="card-title">Avengers: Hồi kết</h4>
                                    <p className="card-text">Avengers: Hồi kết là phim điện ảnh siêu anh hùng Mỹ ra mắt năm 2019, do Marvel Studios sản xuất và Walt Disney Studios Motion Pictures phân phối. Phim là phần thứ tư của loạt phim Avengers, sau Biệt đội siêu anh hùng, Avengers </p>
                                    <div className='top--film__rank'>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-4 p-2'>
                            <div className='card card-product top--film p-4'>
                                <div className='top--film__image'>
                                    <a href="#">
                                        <img src={require('../../Assests/images/Abominable__Large.jpg')} alt="" />
                                    </a>
                                </div>
                                <div className="card-body top--film__content">
                                    <h4 className="card-title">ABOMINABLE</h4>
                                    <p className="card-text">Trong một lần tình cờ, Yi bắt gặp một sinh vật lạ rất dễ thương là Yeti trên nóc tòa nhà chung cư của cô ở Thượng Hải. Yeti đến từ một vùng rất xa trên đỉnh dãy núi Himalaya, cậu nhóc này bị lạc đến đây và không biết làm cách nào để trở về.</p>
                                    <div className='top--film__rank'>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-half-alt"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*END AMIN__TOP_FILM */}


                {/* ADMIN__INFORMATION */}
                <div className='container-fluid main--page__information'>
                    <div className='row'>

                        <div className="col-3 p-2">
                            <div className='widget--user p-4'>
                                <div className='infor--image'>
                                    <img src={require('../../Assests/images/user-6.jpg')} alt="" />
                                </div>
                                <div className='infor-content'>
                                    <h6>Chadengle</h6>
                                    <p className='infor-email'>chanhphamnguyen@gmail.com</p>
                                    <p className='infor-text' >Admin</p>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </div>

                        <div className="col-3 p-2">
                            <div className='widget--user p-4'>
                                <div className='infor--image'>
                                    <img src={require('../../Assests/images/user-5.jpg')} alt="" />
                                </div>
                                <div className='infor-content'>
                                    <h6>Chadengle</h6>
                                    <p className='infor-email'>chanhphamnguyen@gmail.com</p>
                                    <p className='infor-text' >Admin</p>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </div>

                        <div className="col-3 p-2">
                            <div className='widget--user p-4'>
                                <div className='infor--image'>
                                    <img src={require('../../Assests/images/user-4.jpg')} alt="" />
                                </div>
                                <div className='infor-content'>
                                    <h6>Chadengle</h6>
                                    <p className='infor-email'>chanhphamnguyen@gmail.com</p>
                                    <p className='infor-text' >Admin</p>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </div>

                        <div className="col-3 p-2">
                            <div className='widget--user p-4'>
                                <div className='infor--image'>
                                    <img src={require('../../Assests/images/user-3.jpg')} alt="" />
                                </div>
                                <div className='infor-content'>
                                    <h6>Chadengle</h6>
                                    <p className='infor-email'>chanhphamnguyen@gmail.com</p>
                                    <p className='infor-text' >Admin</p>
                                </div>
                                <div style={{ clear: 'both' }}></div>
                            </div>
                        </div>


                    </div>
                </div>
                {/* END ADMIN__INFORMATION */}


                {/* ADMIN__PAGE__FOOTER */}
                <div className='container-fluid main--page__footer'>
                    <div className='row'>
                        {/* INBOX CARD */}
                        <div className='col-4 p-1'>
                            <div className='card-inbox'>
                                <div className='card-inbox__header'>
                                    <h4 className='float-left'>Inbox</h4>
                                    <span className='float-right'><i className="fa fa-ellipsis-v"></i></span>
                                </div>

                                {/* USER_1 */}

                                <div className='inbox--widget'>
                                    <div className='inbox--item'>
                                        <div className='inbox--item__img'>
                                            <img src={require('../../Assests/images/user-1.jpg')} alt="" />
                                        </div>
                                        <h5>Harry Potter</h5>
                                        <p className='inbox--item__text'>Hey! there I'am available</p>

                                        <div className='inbox--item__date'>
                                            <p>13:40 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* USER_2 */}

                                <div className='inbox--widget'>
                                    <div className='inbox--item'>
                                        <div className='inbox--item__img'>
                                            <img src={require('../../Assests/images/user-2.jpg')} alt="" />
                                        </div>
                                        <h5>Harry Potter</h5>
                                        <p className='inbox--item__text'>Hey! there I'am available</p>

                                        <div className='inbox--item__date'>
                                            <p>13:45 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* USER_3 */}

                                <div className='inbox--widget'>
                                    <div className='inbox--item'>
                                        <div className='inbox--item__img'>
                                            <img src={require('../../Assests/images/user-3.jpg')} alt="" />
                                        </div>
                                        <h5>Harry Potter</h5>
                                        <p className='inbox--item__text'>Hey! there I'am available</p>

                                        <div className='inbox--item__date'>
                                            <p>14:15 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* USER_4 */}

                                <div className='inbox--widget'>
                                    <div className='inbox--item'>
                                        <div className='inbox--item__img'>
                                            <img src={require('../../Assests/images/user-4.jpg')} alt="" />
                                        </div>
                                        <h5>Harry Potter</h5>
                                        <p className='inbox--item__text'>Hey! there I'am available</p>

                                        <div className='inbox--item__date'>
                                            <p>14:30 PM</p>
                                        </div>
                                    </div>
                                </div>

                                {/* USER_5 */}

                                <div className='inbox--widget'>
                                    <div className='inbox--item'>
                                        <div className='inbox--item__img'>
                                            <img src={require('../../Assests/images/user-5.jpg')} alt="" />
                                        </div>
                                        <h5>Harry Potter</h5>
                                        <p className='inbox--item__text'>Hey! there I'am available</p>

                                        <div className='inbox--item__date'>
                                            <p>14:45 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END INBOX CARD */}

                        {/* LASTEST PROPJECTS */}
                        <div className='col-8 p-1'>
                            <div className='card-projects'>

                                <div className='card-propjects__header'>
                                    <h4 className='float-left'>Lastest Projects</h4>
                                    <span className='float-right'><i className="fa fa-ellipsis-v"></i></span>
                                </div>

                                <div className='card-projects__table'>
                                    <table className="table">
                                        <thead className="thead-inverse">
                                            <tr>
                                                <th>#</th>
                                                <th>Project Name</th>
                                                <th>Start Date</th>
                                                <th>Due Date</th>
                                                <th>Status</th>
                                                <th>Assign</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Admin Potter</td>
                                                <td>10/09/2019</td>
                                                <td>12/12/2019</td>
                                                <td>Released</td>
                                                <td>Coderthemes</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* END LASTED PROPJECTS */}
                    </div>
                </div>
            </div>
        )
    }
}



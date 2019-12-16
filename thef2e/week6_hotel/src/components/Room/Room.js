import React, { Component } from 'react';
import icons from '../../assets/icons.js';
// import '../../assets/main.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AmenityItem = ({ icon, text, type, roomDetail }) => (
    <div className={`amenity_item ${(roomDetail.amenities[type]) ? 'true' : 'false'}`} id={type}>
        <div className="amenity_icon">
            <img src={icon} alt={text} />
        </div>
        <div className="amenity_text">{text}</div>
    </div>
)

export class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomDetail: [],
            bookingDate: [],
            imgModalUrl: '',
            roomImgModal: false,
            reserveModal: false,
            checkModal: false,
            reserveName: '',
            reserveTel: '',
            startDate: new Date(new Date().setHours(0, 0, 0, 0)),
            endDate: '',
            reserveLoad: false,
            reserveSuccess: '',
            errorMsg: ''
        }
        this._isMounted = false;
        this.modalClick = this.modalClick.bind(this);
        this.imgModalUrlSet = this.imgModalUrlSet.bind(this);
        this.reserveHandleChange = this.reserveHandleChange.bind(this);
        this.startDateChange = this.startDateChange.bind(this);
        this.endDateChange = this.endDateChange.bind(this);
        this.roomReserve = this.roomReserve.bind(this);
        this.reserveReload = this.reserveReload.bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.props.match.params.roomId}`, {
                    method: 'GET',
                    headers: {
                        "Authorization": 'Bearer 2DFIVAEETX2rZO2kZlmRvKDbnxX91xRpzzGzIoxkT0T2FjTEUYBzynvVKSAP'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        roomDetail: data.room[0],
                        bookingDate: data.booking.map(element => new Date(new Date(element.date).setHours(0, 0, 0, 0)).toString())
                    })
                })
        }
    }

    componentWillUnmount() {
       this._isMounted = false;
    }

    modalClick(targetModal, boolean) {
        this.setState({
            [targetModal]: boolean
        })
    }

    roomReserve() {
        const { reserveName, reserveTel, startDate, endDate } = this.state;

        let reserveYear, reserveMonth, reserveDate, reserveTime,
            reserveDateArr = [],
            formData = new FormData();
        for (var d = new Date(startDate.getTime()); d <= endDate; d.setDate(d.getDate() + 1)) {
            reserveYear = new Date(d).getFullYear();
            reserveMonth = new Date(d).getMonth() + 1;
            reserveDate = new Date(d).getDate();
            reserveTime = reserveYear + '-' + (reserveMonth < 10 ? '0' : '') + reserveMonth + '-' + (reserveDate < 10 ? '0' : '') + reserveDate;
            reserveDateArr.push(reserveTime);
        }
        formData.append('name', reserveName);
        formData.append('tel', reserveTel);
        for (var i = 0; i <= reserveDateArr.length - 1; i++) {
            formData.append(`date[${i}]`, reserveDateArr[i]);
        }
        fetch(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.props.match.params.roomId}`, {
                method: 'POST',
                body: formData,
                headers: {
                    "Authorization": 'Bearer 2DFIVAEETX2rZO2kZlmRvKDbnxX91xRpzzGzIoxkT0T2FjTEUYBzynvVKSAP',
                    "Accept": 'application/json'
                }
            })
            .then(res => res.json())
            .catch(error => console.log('Error:', error))
            .then(response => {
                if (response.success) {
                    this.setState({
                        reserveLoad: true,
                        reserveSuccess: true
                    })
                } else {
                    this.setState({
                        reserveLoad: true,
                        reserveSuccess: false,
                        errorMsg: response.message
                    })
                }
                console.log('Success:', response)
            })
        this.setState({
            reserveName: '',
            reserveTel: '',
            startDate: '',
            endDate: ''
        })
    }

    imgModalUrlSet(imgUrl) {
        this.setState({
            imgModalUrl: imgUrl
        })
    }

    reserveHandleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    reserveReload(e) {
        this.setState({
            reserveLoad: false
        })
    }

    startDateChange(date) {
        this.setState({
            startDate: date
        });
    };

    endDateChange(date) {
        this.setState({
            endDate: date
        });
    };

    render() {
        const {
            roomDetail,
            bookingDate,
            imgModalUrl,
            roomImgModal,
            reserveModal,
            checkModal,
            reserveName,
            reserveTel,
            startDate,
            endDate,
            reserveLoad,
            reserveSuccess,
            errorMsg
        } = this.state;
        return (
            <div id="content">
                {roomDetail.imageUrl && 
                    <div className="room_detail_img">
                        {/* logo */}
                        <Link className="sub_logo" to="/">
                            <img src={icons.logo_block} alt="logo" />
                        </Link>
                        {/* room_detail_img */}
                        <div className="img_bg">
                            <div className="img_item">
                                <img onClick={() => {this.modalClick('roomImgModal', true); this.imgModalUrlSet(roomDetail.imageUrl[0])}} src={roomDetail.imageUrl[0]} alt="" />
                            </div>
                        </div>
                        <div className="img_sm">
                            <div className="img_item">
                                <img onClick={() => {this.modalClick('roomImgModal', true); this.imgModalUrlSet(roomDetail.imageUrl[1])}} src={roomDetail.imageUrl[1]} alt="" />
                            </div>
                            <div className="img_item">
                                <img onClick={() => {this.modalClick('roomImgModal', true); this.imgModalUrlSet(roomDetail.imageUrl[2])}} src={roomDetail.imageUrl[2]} alt="" />
                            </div>
                        </div>
                    </div>
                }
                <div className="room_detail_info">
                    <Container>
                        <Row>
                            <Col lg={6} md={4} xs={10}>
                                {roomDetail.descriptionShort && roomDetail.checkInAndOut &&
                                    <div className="room_detail">
                                        <div className="room_name" id="room_name">{roomDetail.name}</div>
                                        <div className="room_spec">
                                            <div className="text" id="guest_num">房客人數限制： {roomDetail.descriptionShort.GuestMin} ~ {roomDetail.descriptionShort.GuestMax} 人</div>
                                            <div className="text" id="bed_type">床型：{roomDetail.descriptionShort.Bed[0]}</div>
                                            <div className="text" id="bath_num">衛浴數量： {roomDetail.descriptionShort['Private-Bath']} 間</div>
                                            <div className="text" id="room_size">房間大小： {roomDetail.descriptionShort.Footage} 平方公尺</div>
                                            <div className="text" id="description">{roomDetail.description}</div>
                                            <div className="separation">＼＼＼</div>
                                            <div className="checkin check_time">
                                                <div className="text">Check In</div>
                                                <div className="time" id="checkin_time">{roomDetail.checkInAndOut.checkInEarly}－{roomDetail.checkInAndOut.checkInLate}</div>
                                            </div>
                                            <div className="checkout check_time">
                                                <div className="text">Check Out</div>
                                                <div className="time" id="checkout_time">{roomDetail.checkInAndOut.checkOut}</div>
                                            </div>
                                        </div>
                                        {roomDetail.amenities && 
                                            <div className="room_amenities">
                                                <AmenityItem icon={icons.info_iconWifi} text="Wi-Fi" type="Wi-Fi" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconBreakfast} text="早餐" type="Breakfast" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconBar} text="Mini-Bar" type="Mini-Bar" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconRoom_service} text="Room-Service" type="Room-Service" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconPhone} text="電視" type="Television" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconBreeze} text="空調" type="Air-Conditioner" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconBreakfast} text="冰箱" type="Refrigerator" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconBreeze} text="沙發" type="Sofa" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconMountainRange} text="漂亮的視野" type="Great-View" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconNoSmokeSymbol} text="禁止吸菸" type="Smoke-Free" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconCrawlingBabySilhouette} text="適合兒童" type="Child-Friendly" roomDetail={roomDetail} />
                                                <AmenityItem icon={icons.info_iconDog} text="寵物攜帶" type="Pet-Friendly" roomDetail={roomDetail} />
                                            </div>
                                        }
                                    </div>
                                }
                            </Col>
                            <Col lg={2} md={3} xs={2}>
                                <div className="room_price">
                                    <div className="weekday date_price">
                                        <div className="price" id="weekday_price">NT.{roomDetail.normalDayPrice}</div>
                                        <div className="date_type">平日(一~四)</div>
                                    </div>
                                    <div className="holiday date_price">
                                        <div className="price" id="holiday_price">NT.{roomDetail.holidayPrice}</div>
                                        <div className="date_type">假日(五~日)</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={5} xs={12}>
                                <div className="reserve_date">
                                    <DatePicker selected={this.state.startDate} inline dayClassName={date => (bookingDate.includes(date.toString()) ? "reserved" : '')} />
                                    <div className="datepicker" id="datepicker"></div>
                                    <Button className="reserve" onClick={() => this.modalClick('reserveModal', true)}>預約時段</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* Modal room_img */}
                <Modal show={roomImgModal} onHide={() => this.modalClick('roomImgModal', false)} size="lg" id="roomImgModal">
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="img_modal" id="img_modal">
                            <img src={imgModalUrl} alt="" style={{'maxHeight': (window.innerHeight * 0.8)}} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.modalClick('roomImgModal', false)}>Close</Button>
                    </Modal.Footer>
                </Modal>
                {/* Modal room_reserve */}
                <Modal show={reserveModal} onHide={() => this.modalClick('reserveModal', false)} size="lg" id="reserveModal">
                    <Modal.Header closeButton>
                        <Modal.Title>預約時段</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                           <div className="form-group">
                               <label htmlFor="name">姓名</label>
                               <input type="text" className="form-control" id="reserveName" value={reserveName} onChange={this.reserveHandleChange} />
                           </div>
                           <div className="form-group">
                               <label htmlFor="tel">電話</label>
                               <input type="text" className="form-control" id="reserveTel" value={reserveTel} onChange={this.reserveHandleChange} />
                           </div>
                           <div className="form-group">
                               <label htmlFor="time_start">預約起訖</label>
                               <div className="inline">
                                    <DatePicker
                                        selected={startDate}
                                        id="startDate"
                                        onChange={this.startDateChange}
                                        dateFormat="yyyy-MM-dd"
                                        minDate={new Date()}
                                        maxDate={endDate}
                                        customInput={<input type="text" className="form-control" />}
                                        dayClassName={date => (bookingDate.includes(date.toString()) ? "reserved" : '')}
                                        showDisabledMonthNavigation
                                    />
                                   <label htmlFor="time_end">~</label>
                                    <DatePicker
                                        selected={endDate}
                                        id="endDate"
                                        onChange={this.endDateChange}
                                        dateFormat="yyyy-MM-dd"
                                        minDate={startDate}
                                        customInput={<input type="text" className="form-control" />}
                                        dayClassName={date => (bookingDate.includes(date.toString()) ? "reserved" : '')}
                                        showDisabledMonthNavigation
                                    />
                               </div>
                           </div>
                       </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.modalClick('reserveModal', false)}>取消</Button>
                        <Button variant="primary" onClick={() => {this.modalClick('reserveModal', false); this.roomReserve(); this.modalClick('checkModal', true)}} id="reserve_check">確定預約</Button>
                    </Modal.Footer>
                </Modal>
                {/* Modal room_reserve_check */}
                <Modal show={checkModal} onHide={() => this.modalClick('checkModal', false)} size="lg" id="reserveCheckModal">
                    <Modal.Header closeButton>
                        <Modal.Title>{(reserveLoad ? (reserveSuccess ? '預約成功' : '預約失敗') : '')}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form style={{'display': (reserveLoad ? 'block' : 'none')}}>
                            <div id="reserve_success" style={{'display': (reserveSuccess ? 'block' : 'none')}}>
                                <img src={icons.info_iconTickInsideCircle} alt="預約成功" />
                            </div>
                            <div id="reserve_error" style={{'display': (reserveSuccess ? 'none' : 'block')}}>
                                <p>{errorMsg}</p>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={() => {this.modalClick('checkModal', false); this.reserveReload()}}>回頁面</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Room;
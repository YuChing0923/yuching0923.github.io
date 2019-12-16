import React, { Component } from 'react';
import icons from '../../assets/icons.js';
// import '../../assets/main.scss';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const ContactInfo = ({ icon, type, text }) => (
    <div className="contact_info">
        <div className="contact_icon">
            <img src={icon} className="" alt={type} />
        </div>
        <div className="contact_text">{text}</div>
    </div>
)

export class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            roomInfo: [],
            roomImg: ['height_auto', 'width_auto', 'height_auto', 'height_auto', 'width_auto', 'height_auto'],
            backgroundImageIndex: 0,
            backgroundImage: '',
            intervalId: ''
        }
        window.onresize = () => {
            this.setState({
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth
            })
        }
    }

    componentDidMount() {
        fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', {
                method: 'GET',
                headers: {
                    "Authorization": 'Bearer 2DFIVAEETX2rZO2kZlmRvKDbnxX91xRpzzGzIoxkT0T2FjTEUYBzynvVKSAP'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    roomInfo: data.items
                })
                const intervalId = setInterval(this.coverBg.bind(this), 5000);
                this.setState({
                    intervalId: intervalId
                });
            })
    }

    componentWillUnmount() {
        const { intervalId } = this.state;
        clearInterval(intervalId);
    }

    // imgResize = (e) => {
    //     const { roomImg } = this.state;
    //     const img = e.target;
    //     let roomImgSize = [];
    //     const imgStyleH = {
    //         'height': 'auto',
    //         'width': '100%'
    //     };
    //     const imgStyleW = {
    //         'height': '100%',
    //         'width': 'auto'
    //     };
    //     if (img.naturalHeight >= img.naturalWidth) {
    //      roomImgSize = [ ...roomImg, imgStyleH]
    //     } else {
    //      roomImgSize = [ ...roomImg, imgStyleW]
    //     }
    //     this.setState({
    //         roomImg: roomImgSize
    //     })
    // }

    coverBg = () => {
        const { roomInfo, backgroundImageIndex } = this.state;
        let index = backgroundImageIndex;
        if (index < roomInfo.length - 1) {
            index++;
        } else {
            index = 0;
        }
        this.setState({
            backgroundImageIndex: index,
            backgroundImage: `'${roomInfo[index].imageUrl}'`
        })
    }

    render() {
        const { windowHeight, windowWidth, roomInfo, roomImg, backgroundImage } = this.state;
        const roomName_ch = ['單人房', '豪華單人房', '雙人房', '豪華雙人房', '四人房', '豪華四人房'];
        return (
            <div id="content">
                {/*banner*/}
                <div className="cover" style={{height: (((windowWidth < 768) || (windowHeight < 650)) ? `650px` : `${windowHeight}px`), backgroundImage: `url(${backgroundImage})`}}></div>
                <div className="main" style={{height: (((windowWidth < 768) || (windowHeight < 650)) ? `650px` : `${windowHeight}px`)}}>
                    <Container style={{height: '100%'}}>
                        <Row style={{height: '100%'}}>
                            <Col style={{height: '100%'}}>
                                {/*logo*/}
                                <div className="logo">
                                    <img src={icons.logo_white} alt="logo" />
                                </div>
                                {/*hotel_info*/}
                                <div className="hotel_info">
                                    {/*social_icon 社群連結*/}
                                    <div className="social_icon">
                                        <img src={icons.instagramBrands} className="" alt="instagram" />
                                        <img src={icons.facebookSquareBrands} className="" alt="facebook" />
                                    </div>
                                    {/*contact 聯絡資訊*/}
                                    <div className="contact">
                                        <ContactInfo icon={icons.phoneAltSolid} type="phone" text="02-17264937" />
                                        <ContactInfo icon={icons.envelopeSolid} type="mail" text="whitespace@whitespace.com.tw" />
                                        <ContactInfo icon={icons.homeSolid} type="address" text="台北市羅斯福路十段30號" />
                                    </div>
                                </div>
                            </Col>
                       </Row>
                   </Container>
               </div>
                {/*room_list 房型列表*/}
               <div className="items">
                    <Container>
                        <Row>
                            {
                                roomInfo.map((room, index) => (
                                    <Col lg={4} sm={6} xs={12} key={room.id}>
                                        <Link className="room_block" to={`/room/${room.id}`}>
                                            <img className={`room_img ${roomImg[index]}`} src={room.imageUrl} alt={room.name} />
                                            <div className="room_info">
                                                <div className="room_name">{room.name}</div>
                                                <div className="room_name sub_text detail">{roomName_ch[index]}</div>
                                                <div className="normal_day_price detail">
                                                    <span className="price">NT.{room.normalDayPrice}</span>
                                                    <span className="weekday sub_text">平日</span>
                                                </div>
                                                <div className="holiday_price sub_text detail">NT.{room.holidayPrice} 假日</div>
                                            </div>
                                        </Link>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
               </div>
            </div>
        );
    }
}

export default Main;



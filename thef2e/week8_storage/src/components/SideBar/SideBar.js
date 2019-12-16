import React, { Component } from 'react';
import Icons from '../../assets/icons.js';
import { Dropdown, Modal, Button } from 'react-bootstrap';

const User = ({ userImg, userName, storageSize, storageUsage, storageSizePercent }) => (
    <div className="user">
      <div className="user_img">
        <img src={userImg} alt="user" />
      </div>
      <div className="user_info">
        <div className="user_name">{userName}</div>
        <div className="user_text">User</div>
      </div>
    <div className="progress_size">
      <div className="progress">
        <div className="progress_bar" style={{'width': storageSizePercent}}>
          <div className="progress_bar_container"></div>
        </div>
      </div>
      <div className="size">容量 {storageUsage} / {storageSize}</div>
    </div>
    </div>
)

const ControlItem = ({ icon, text, onClick }) => (
    <li onClick={onClick}>
      {icon}
      <span>{text}</span>
    </li>
)

export class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            folderName: '',
            newFolderModal: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.folderNameReset = this.folderNameReset.bind(this);
        this.breadClick = this.breadClick.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.addFolder = this.addFolder.bind(this);
        this.modalClick = this.modalClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            folderName: e.target.value
        })
    }

    handleKeyPress(target) {
        if (target.charCode === 13) {
            document.getElementById('submitBtn').click();
        }
    }

    folderNameReset() {
        this.setState({
            folderName: ''
        })
    }

    breadClick(e) {
        const text = (e.target.tagName === 'LI' ? (
            e.target.querySelector('span').innerHTML
        ) : (
            e.target.closest('li').querySelector('span').innerHTML
        ))
        const { breadChange } = this.props;
        breadChange([text])
    }

    uploadFile(e) {
        const { addFile } = this.props;
        document.getElementById("upload").click();
        addFile();
    }

    addFolder(newFolderName) {
        const { addFolder } = this.props;
        addFolder(newFolderName);
    }

    modalClick(targetModal, boolean) {
        this.setState({
            [targetModal]: boolean
        })
    }

    render() {
        const { user, storageSize, storageUsage, storageSizePercent } = this.props;
        const { folderName, newFolderModal } = this.state;
        return (
            <div id="sidebar">
              <div className="logo">
                <Icons.Cloud_24px />
                <span>MCloud.</span>
              </div>
              <div className="upload">
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    <Icons.Upload />
                    <span>上傳檔案</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.uploadFile}>
                      <span className="upload_icon">
                        <img src={Icons.UploadFile} alt=""/>
                      </span>
                      <span>上傳檔案</span>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <span className="upload_icon">
                        <img src={Icons.UploadFolder} alt=""/>
                      </span>
                      <span>上傳資料夾</span>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => {this.modalClick('newFolderModal', true); this.folderNameReset()}}>
                      <span className="upload_icon">
                        <img src={Icons.UploadAddFolder} alt=""/>
                      </span>
                      <span>新資料夾</span>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <input type="file" id="upload" style={{display:'none'}} multiple="multiple" />
              </div>
              <div className="control_list">
                <ul>
                  <ControlItem icon={<Icons.AddFolder />} text="我的檔案" onClick={this.breadClick} />
                  <ControlItem icon={<Icons.Star />} text="已加星號" onClick={this.breadClick} />
                  <ControlItem icon={<Icons.SharingContent />} text="檔案共享" onClick={this.breadClick} />
                  <ControlItem icon={<Icons.Garbage />} text="垃圾桶" onClick={this.breadClick} />
                </ul>
              </div>
              <User userImg={Icons.AfterglowBack} userName={user} storageSize={storageSize} storageUsage={storageUsage} storageSizePercent={storageSizePercent} />
              {/* Modal room_reserve_check */}
              <Modal show={newFolderModal} onHide={() => this.modalClick('newFolderModal', false)}>
                <Modal.Header closeButton>
                  <Modal.Title>新資料夾</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <input type="text" className="form-control" id="folderName" value={folderName} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button type="button" variant="secondary" onClick={() => {this.modalClick('newFolderModal', false)}}>取消</Button>
                  <Button type="button" id="submitBtn" variant="primary" onClick={() => {this.modalClick('newFolderModal', false); this.addFolder(folderName)}}>確定</Button>
                </Modal.Footer>
              </Modal>
            </div>
        );
    }
}

export default SideBar;
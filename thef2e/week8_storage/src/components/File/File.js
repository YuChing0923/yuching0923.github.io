import React, { Component } from 'react';
import Icons from '../../assets/icons.js';
import { Dropdown, Modal, Button } from 'react-bootstrap';

export class File extends Component {
    constructor(props) {
        super(props);
        const { file } = this.props;
        this.state = {
            rename: (file.type === 'folder') ? file.name : file.name.split('.', file.name.split('.').length - 1).join('.'),
            checkModal: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.renameReset = this.renameReset.bind(this);
        this.copyDeleteFile = this.copyDeleteFile.bind(this);
        this.stateClick = this.stateClick.bind(this);
        this.breadClick = this.breadClick.bind(this);
        this.modalClick = this.modalClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            rename: e.target.value
        })
    }

    handleKeyPress(target) {
        if (target.charCode === 13) {
          document.getElementById('submitBtn').click();
        }
    }

    renameReset(e) {
        const { file } = this.props;
        this.setState({
            rename: (file.type === 'folder') ? file.name : file.name.split('.', file.name.split('.').length - 1).join('.')
        })
    }

    copyDeleteFile(id, type) {
        const { copyDeleteFile } = this.props;
        copyDeleteFile(id, type);
    }

    stateClick(state, name) {
        const { file, stateChange } = this.props;
        stateChange(file.id, state, name);
    }

    breadClick(e) {
        const { bread, breadChange } = this.props;
        const text = [...bread, e.target.innerHTML];
        breadChange(text);
    }

    modalClick(targetModal, boolean) {
        this.setState({
            [targetModal]: boolean
        })
    }

    fileDropdown() {
        const { file, user } = this.props;
        switch (true) {
            case (file.trash):
                return (
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => this.copyDeleteFile(file.id, 'delete')}>永久刪除</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.stateClick('trash')}>還原</Dropdown.Item>
                    </Dropdown.Menu>
                )
            case (file.author !== user):
                return (
                    <Dropdown.Menu>
                      <Dropdown.Item>下載</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.stateClick('star')}>{file.star ? '移除星號' : '標示星號'}</Dropdown.Item>
                      {/* <Dropdown.Item>移動</Dropdown.Item> */}
                      <Dropdown.Item>移除</Dropdown.Item>
                    </Dropdown.Menu>
                )
            default:
                return (
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => this.stateClick('shared')}>{file.shared ? '取消共享' : '共享'}</Dropdown.Item>
                      <Dropdown.Item>下載</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.stateClick('star')}>{file.star ? '移除星號' : '標示星號'}</Dropdown.Item>
                      <Dropdown.Item onClick={() => {this.modalClick('checkModal', true); this.renameReset()}}>重新命名</Dropdown.Item>
                      {/* <Dropdown.Item>移動</Dropdown.Item> */}
                      <Dropdown.Item onClick={() => this.copyDeleteFile(file.id, 'copy')}>複製</Dropdown.Item>
                      <Dropdown.Item onClick={() => this.stateClick('trash')}>刪除</Dropdown.Item>
                    </Dropdown.Menu>
                )
        }
    }

    render() {
        const { file } = this.props;
        const { rename, checkModal } = this.state;
        return (
            <tr>
              <td>
                <span className="icon">
                  {(file.type === 'folder') ? <img src={Icons.Folder} alt=""/> : <Icons.Pdf type={file.type} />}
                </span>
                
                <span className="name" onClick={(file.type === 'folder') ? this.breadClick : undefined}>{file.name}</span>
                <span className={file.star ? 'icon star active' : 'icon star'} onClick={() => this.stateClick('star')}>
                  {file.star ? <Icons.Star_1 /> : <Icons.Star />}
                </span>
              </td>
              <td>{file.modified}</td>
              <td>{file.size}</td>
              <td>{file.author}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success">
                    <i className="fas fa-ellipsis-h"></i>
                  </Dropdown.Toggle>
                  {this.fileDropdown()}
                </Dropdown>
              </td>
              {/* Modal room_reserve_check */}
              <Modal show={checkModal} onHide={() => this.modalClick('checkModal', false)}>
                <Modal.Header closeButton>
                  <Modal.Title>重新命名</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <input type="text" className="form-control" id="rename" value={rename} onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button type="button" variant="secondary" onClick={() => {this.modalClick('checkModal', false)}}>取消</Button>
                  <Button type="button" id="submitBtn" variant="primary" onClick={() => {this.modalClick('checkModal', false); this.stateClick('name', (file.type === 'folder') ? rename : `${rename}.${file.name.split('.')[file.name.split('.').length - 1]}`)}}>確定</Button>
                </Modal.Footer>
              </Modal>
            </tr>
        );
    }
}
export default File;
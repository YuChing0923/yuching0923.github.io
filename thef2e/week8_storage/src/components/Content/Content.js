import React, { Component } from 'react';
import Icons from '../../assets/icons.js';
import { Table } from 'react-bootstrap';
import File from '../File/File';

export class Content extends Component {
    constructor(props) {
        super(props);
        const { files, user } = this.props;
        this.state = {
            files: files.filter(file => file.author === user && !file.trash)
        }
        this.copyDeleteFile = this.copyDeleteFile.bind(this);
        this.stateClick = this.stateClick.bind(this);
        this.breadClick = this.breadClick.bind(this);
        this.breadTitleClick = this.breadTitleClick.bind(this);
        this.fileTableRender = this.fileTableRender.bind(this);
    }

    // componentDidUpdate(prerProps, prevState) {
    //     const { files, user, bread } = this.props;
    //     console.log(prerProps);
    //     console.log(files);
    // }

    copyDeleteFile(id, type) {
        const { copyDeleteFile } = this.props;
        copyDeleteFile(id, type);
    }

    stateClick(id, state, name) {
        const { stateChange } = this.props;
        stateChange(id, state, name);
    }

    breadClick(text) {
        const { breadChange } = this.props;
        breadChange(text)
    }

    breadTitleClick(e) {
        const { bread, breadChange } = this.props;
        const elmIndex = Array.prototype.indexOf.call(e.target.parentNode.childNodes, e.target),
            text = bread.filter((file, index) => index <= elmIndex);
        breadChange(text)
    }

    fileTableRender(bread) {
        const { files, user } = this.props;
        let i = 0;
        const findFile = (arr) => {
            i++;
            let item = arr.filter(file => file.name === bread[i])[0];
            if (bread.length === i + 1) return item.subFile;
            else return findFile(item.subFile);
        }
        const filesFilter = () => {
            if (bread.length === 1) return files;
            else return findFile(files);
        };
        switch (bread[0]) {
            case '我的檔案':
                return (
                    filesFilter().filter(file => file.author === user && !file.trash).map(file =>
                        <File file={file} user={user} bread={bread} key={file.id} copyDeleteFile={this.copyDeleteFile} stateChange={this.stateClick} breadChange={this.breadClick} />)
                )
            case '已加星號':
                return (
                    filesFilter().filter(file => file.author === user && file.star && !file.trash).map(file =>
                        <File file={file} user={user} bread={bread} key={file.id} copyDeleteFile={this.copyDeleteFile} stateChange={this.stateClick} breadChange={this.breadClick} />)
                )
            case '檔案共享':
                return (
                    filesFilter().filter(file => file.shared && !file.trash).map(file =>
                        <File file={file} user={user} bread={bread} key={file.id} copyDeleteFile={this.copyDeleteFile} stateChange={this.stateClick} breadChange={this.breadClick} />)
                )
            case '垃圾桶':
                return (
                    filesFilter().filter(file => file.author === user && file.trash).map(file =>
                        <File file={file} user={user} bread={bread} key={file.id} copyDeleteFile={this.copyDeleteFile} stateChange={this.stateClick} breadChange={this.breadClick} />)
                )
            default:
                return (
                    filesFilter().filter(file => file.author === user && !file.trash).map(file =>
                        <File file={file} user={user} bread={bread} key={file.id} copyDeleteFile={this.copyDeleteFile} stateChange={this.stateClick} breadChange={this.breadClick} />)
                )
        }
    }

    render() {
        const { bread } = this.props;
        return (
            <div id="content" className="scroll">
              <div className="search">
                <button>
                  <Icons.Search_24px />
                </button>
                <input type="text" placeholder="搜尋您的檔案" />
              </div>
              <div className="data_block">
                <span className="title">
                  <ul>
                    {bread.map((item, index) =>
                      (index + 1 === bread.length) ? (
                        <li className="active" key={index}>{item}</li>
                      ) : (
                        <li onClick={this.breadTitleClick} key={index}>{item}</li>
                      )
                    )}
                  </ul>
                </span>
                <button className="more">看更多</button>
                <div className="data_table">
                  <Table hover responsive="md">
                    <thead>
                      <tr>
                        <th scope="col">名稱</th>
                        <th scope="col">上次修改</th>
                        <th scope="col">檔案大小</th>
                        <th scope="col">擁有者</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody className="table-borderless">
                      {this.fileTableRender(bread)}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
        );
    }
}

export default Content;
import React, { Component } from 'react';
import '../../assets/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/SideBar';
import Content from '../Content/Content';
import '../../assets/fontawesome-free-5.9.0-web/css/all.min.css';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Jennifer',
            bread: ['我的檔案'],
            storageSize: '10 MB',
            storageUsage: '5.47 KB',
            storageSizePercent: '',
            files: [{
                id: 'file1',
                type: 'MP4',
                name: '走吧！一起用日語去旅行.mp4',
                modified: '2019/06/10',
                size: '6.5 MB',
                author: 'Jennifer',
                star: true,
                shared: false,
                trash: false
            }, {
                id: 'file2',
                type: 'PDF',
                name: '東京都內案內自由行.pdf',
                modified: '2019/06/25',
                size: '2.3 MB',
                author: 'Jennifer',
                star: false,
                shared: true,
                trash: false
            }, {
                id: 'file3',
                type: 'DOC',
                name: '20191011-日本東京自由行.doc',
                modified: '2019/07/05',
                size: '4.6 MB',
                author: 'Jennifer',
                star: true,
                shared: true,
                trash: false
            }, {
                id: 'file4',
                type: 'DOC',
                name: '20191011-日本東京自由行-2.doc',
                modified: '2019/07/05',
                size: '4.6 MB',
                author: 'Jennifer',
                star: false,
                shared: true,
                trash: true
            }, {
                id: 'file5',
                type: 'DOC',
                name: '20191011-日本東京自由行-胎死腹中ver.doc',
                modified: '2019/07/05',
                size: '4.6 MB',
                author: 'Jennifer',
                star: false,
                shared: true,
                trash: true
            }, {
                id: 'file6',
                type: 'MP4',
                name: 'lalalalalala.mp4',
                modified: '2019/06/10',
                size: '6.5 MB',
                author: 'Levi',
                star: true,
                shared: true,
                trash: false
            }, {
                id: 'file7',
                type: 'PDF',
                name: '耶耶.pdf',
                modified: '2019/06/25',
                size: '2.3 MB',
                author: 'Levi',
                star: false,
                shared: true,
                trash: false
            }, {
                id: 'file8',
                type: 'folder',
                name: '工作相關',
                modified: '2019/06/25',
                size: '-',
                author: 'Jennifer',
                star: false,
                shared: true,
                trash: false,
                subFile: [{
                    id: 'file1',
                    type: 'PDF',
                    name: '東京都內案內自由行.pdf',
                    modified: '2019/06/25',
                    size: '2.3 MB',
                    author: 'Jennifer',
                    star: false,
                    shared: true,
                    trash: false
                }, {
                    id: 'file2',
                    type: 'MP4',
                    name: '走吧！一起用日語去旅行.mp4',
                    modified: '2019/06/10',
                    size: '6.5 MB',
                    author: 'Jennifer',
                    star: true,
                    shared: false,
                    trash: false
                }, {
                    id: 'file3',
                    type: 'DOC',
                    name: '20191011-日本東京自由行.doc',
                    modified: '2019/07/05',
                    size: '4.6 MB',
                    author: 'Jennifer',
                    star: true,
                    shared: true,
                    trash: false
                }, {
                    id: 'file4',
                    type: 'folder',
                    name: '工作相關_sub',
                    modified: '2019/06/25',
                    size: '-',
                    author: 'Jennifer',
                    star: false,
                    shared: true,
                    trash: false,
                    subFile: [{
                        id: 'file1',
                        type: 'MP4',
                        name: '走吧！一起用日語去旅行.mp4',
                        modified: '2019/06/10',
                        size: '6.5 MB',
                        author: 'Jennifer',
                        star: true,
                        shared: false,
                        trash: false
                    }, {
                        id: 'file2',
                        type: 'DOC',
                        name: '20191011-日本東京自由行.doc',
                        modified: '2019/07/05',
                        size: '4.6 MB',
                        author: 'Jennifer',
                        star: true,
                        shared: true,
                        trash: false
                    }, {
                        id: 'file3',
                        type: 'folder',
                        name: '工作相關_sub_sub',
                        modified: '2019/06/25',
                        size: '-',
                        author: 'Jennifer',
                        star: false,
                        shared: true,
                        trash: false,
                        subFile: [{
                            id: 'file1',
                            type: 'MP4',
                            name: '走吧！一起用日語去旅行.mp4',
                            modified: '2019/06/10',
                            size: '6.5 MB',
                            author: 'Jennifer',
                            star: true,
                            shared: false,
                            trash: false
                        }, {
                            id: 'file2',
                            type: 'PDF',
                            name: '東京都內案內自由行.pdf',
                            modified: '2019/06/25',
                            size: '2.3 MB',
                            author: 'Jennifer',
                            star: false,
                            shared: true,
                            trash: false
                        }, {
                            id: 'file3',
                            type: 'DOC',
                            name: '20191011-日本東京自由行.doc',
                            modified: '2019/07/05',
                            size: '4.6 MB',
                            author: 'Jennifer',
                            star: true,
                            shared: true,
                            trash: false
                        }]
                    }]
                }]
            }]
        }
        this.setStorageSize = this.setStorageSize.bind(this);
        this.breadChange = this.breadChange.bind(this);
        this.addFile = this.addFile.bind(this);
        this.addFolder = this.addFolder.bind(this);
        this.copyDeleteFile = this.copyDeleteFile.bind(this);
        this.stateChange = this.stateChange.bind(this);
    }

    // DOM初始化
    componentDidMount() {
        const filesData = window.localStorage.getItem('filesApp');
        if (filesData) {
            const oldFiles = JSON.parse(filesData)
            this.setState({
                files: oldFiles
            })
        };
        this.setStorageSize();
    }

    componentDidUpdate(prerProps, prevState) {
        if (prevState.files !== this.state.files) {
            window.localStorage.setItem('filesApp', JSON.stringify(this.state.files));
            this.setStorageSize();
        }
    }

    setStorageSize() {
        const filesData = window.localStorage.getItem('filesApp');
        const _filesAppLen = (filesData) ? ((localStorage['filesApp'].length + 'filesApp'.length) * 2) : 5600;
        function formatBytes(bytes, decimals = 2) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024,
                dm = decimals < 0 ? 0 : decimals,
                sizes = ['Bytes', 'KB', 'MB'],
                i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        };
        this.setState({
            storageUsage: formatBytes(_filesAppLen),
            storageSizePercent: (_filesAppLen / 10000000).toFixed(5) * 100 + '%'
        })
    }

    breadChange(text) {
        this.setState({
            bread: text
        })
    }

    addFile() {
        const { user, files, bread } = this.state;
        document.getElementById("upload").addEventListener('change', (e) => {
            function formatBytes(bytes, decimals = 2) {
                if (bytes === 0) return '0 Bytes';
                const k = 1024,
                    dm = decimals < 0 ? 0 : decimals,
                    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
            };
            const filesArray = (arr) => (
                [...arr, ...uploadFiles]
            )
            let i = 0;
            const findFile = (arr) => {
                i++;
                return (
                    arr.map(file => {
                        if (file.name !== bread[i]) {
                            return file
                        } else {
                            return {
                                ...file,
                                subFile: (bread.length === i + 1) ? filesArray(file.subFile) : findFile(file.subFile)
                            }
                        }
                    })
                )
            };
            const newfilesArray = () => {
                if (bread.length === 1) return filesArray(files);
                else return findFile(files);
            };
            const fileList = e.target.files;
            const uploadFiles = Object.keys(fileList).map(index => {
                let j = 0;
                const uploadFile = fileList[index],
                    fileName = uploadFile.name,
                    fileType = fileName.split('.')[fileName.split('.').length - 1].substr(0, 3).toUpperCase(),
                    date = new Date(),
                    fileModified = `${date.getFullYear()}/${((date.getMonth() + 1)>9 ? '' : '0')}${(date.getMonth() + 1)}/${((date.getDate())>9 ? '' : '0')}${(date.getDate())}`,
                    fileSize = formatBytes(uploadFile.size),
                    findSubFile = (arr) => {
                        j++;
                        let item = arr.filter(file => file.name === bread[j])[0];
                        if (bread.length === j + 1) return item.subFile;
                        else return findSubFile(item.subFile);
                    },
                    filesFilter = () => {
                        if (bread.length === 1) return files;
                        else return findSubFile(files);
                    };
                return ({
                    id: `file${((+filesFilter().length) + (+index) + (+1))}`,
                    type: fileType,
                    name: fileName,
                    modified: fileModified,
                    size: fileSize,
                    author: user,
                    star: false,
                    shared: false,
                    trash: false
                })
            });
            this.setState({
                files: newfilesArray()
            })
        });
    }

    addFolder(newFolderName) {
        const { user, files, bread } = this.state;
        const filesArray = (arr) => {
            let k = 0;
            const findSubFile = (array) => {
                k++;
                let item = array.filter(file => file.name === bread[k])[0];
                if (bread.length === k + 1) return item.subFile;
                else return findSubFile(item.subFile);
            };
            const filesFilter = () => {
                if (bread.length === 1) return files;
                else return findSubFile(files);
            };
            const filesSubFile = filesFilter(),
                date = new Date(),
                fileModified = `${date.getFullYear()}/${((date.getMonth() + 1)>9 ? '' : '0')}${(date.getMonth() + 1)}/${((date.getDate())>9 ? '' : '0')}${(date.getDate())}`;
            const newFolderArray = [{
                id: `file${((+filesSubFile.length) + (+1))}`,
                type: 'folder',
                name: newFolderName,
                modified: fileModified,
                size: '-',
                author: user,
                star: false,
                shared: false,
                trash: false,
                subFile: []
            }];
            return [...arr, ...newFolderArray]
        }
        let i = 0;
        const findFile = (arr) => {
            i++;
            return (
                arr.map(file => {
                    if (file.name !== bread[i]) {
                        return file
                    } else {
                        return {
                            ...file,
                            subFile: (bread.length === i + 1) ? filesArray(file.subFile) : findFile(file.subFile)
                        }
                    }
                })
            )
        };
        const newfilesArray = () => {
            if (bread.length === 1) return filesArray(files);
            else return findFile(files);
        };
        this.setState({
            files: newfilesArray()
        })
    }

    copyDeleteFile(id, type) {
        const { user, files, bread } = this.state;
        let k = 0;
        const filesArray = (arr) => {
            const findSubFile = (array) => {
                k++;
                let item = array.filter(file => file.name === bread[k])[0];
                if (bread.length === k + 1) return item.subFile;
                else return findSubFile(item.subFile);
            };
            const filesFilter = () => {
                if (bread.length === 1) return files;
                else return findSubFile(files);
            };
            const filesSubFile = filesFilter(),
                cloneFile = filesSubFile.filter(file => file.id === id)[0],
                date = new Date(),
                fileModified = `${date.getFullYear()}/${((date.getMonth() + 1)>9 ? '' : '0')}${(date.getMonth() + 1)}/${((date.getDate())>9 ? '' : '0')}${(date.getDate())}`;
            if (type === 'copy') {
                return (
                    [...arr,
                        { ...cloneFile,
                            name: `${cloneFile.name.split('.', cloneFile.name.split('.').length - 1).join('.')}_複製.${cloneFile.name.split('.')[cloneFile.name.split('.').length - 1]}`,
                            id: `file${((+filesSubFile.length) + (+1))}`,
                            modified: fileModified,
                            author: user,
                            star: false,
                            shared: false,
                            trash: false
                        }
                    ]
                )
            } else if (type === 'delete') {
                return (
                    [...arr.filter(file => file.id !== id)]
                )
            }
        };
        let i = 0;
        const findFile = (arr) => {
            i++;
            return (
                arr.map(file => {
                    if (file.name !== bread[i]) {
                        return file
                    } else {
                        return {
                            ...file,
                            subFile: (bread.length === i + 1) ? filesArray(file.subFile) : findFile(file.subFile)
                        }
                    }
                })
            )
        };
        const newfilesArray = () => {
            if (bread.length === 1) return filesArray(files);
            else return findFile(files);
        };
        this.setState({
            files: newfilesArray()
        })
    }

    stateChange(id, state, name) {
        const { files, bread } = this.state;
        const filesMap = (arr) => (
            arr.map(file => {
                if (file.id !== id) {
                    return file
                } else {
                    if (state === 'name') {
                        return {
                            ...file,
                            name: name
                        }
                    } else {
                        return {
                            ...file,
                            [state]: !file[state]
                        }
                    }
                }
            })
        )
        let i = 0;
        const findFile = (arr) => {
            i++;
            return (
                arr.map(file => {
                    if (file.name !== bread[i]) {
                        return file
                    } else {
                        return {
                            ...file,
                            subFile: (bread.length === i + 1) ? filesMap(file.subFile) : findFile(file.subFile)
                        }
                    }
                })
            )
        }
        const filesFilter = () => {
            if (bread.length === 1) return filesMap(files);
            else return findFile(files);
        };
        this.setState({
            files: filesFilter()
        })
    }

    render() {
        const { user, bread, files, storageSize, storageUsage, storageSizePercent } = this.state;
        return (
            <div className="main_container">
              <SideBar user={user} breadChange={this.breadChange} addFile={this.addFile} addFolder={this.addFolder} storageSize={storageSize} storageUsage={storageUsage} storageSizePercent={storageSizePercent} />
              <Content user={user} files={files} bread={bread} copyDeleteFile={this.copyDeleteFile} breadChange={this.breadChange} stateChange={this.stateChange} />
            </div>
        );
    }
}
export default App;
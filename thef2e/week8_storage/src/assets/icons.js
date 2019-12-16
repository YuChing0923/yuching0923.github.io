import React from 'react';
import {ReactComponent as AddFolder} from './images/add-folder.svg';
import AfterglowBack from './images/afterglow-back-view-dawn-2825791.png';
import AfterglowBack_2x from './images/afterglow-back-view-dawn-2825791@2x.png';
import {ReactComponent as Cloud_24px} from './images/cloud_24px.svg';
import {ReactComponent as Garbage} from './images/garbage.svg';
import {ReactComponent as OutlineSearch_24px} from './images/outline-search-24px.svg';
// import {ReactComponent as Pdf} from './images/pdf.svg';
import {ReactComponent as Search_24px} from './images/search_24px.svg';
import {ReactComponent as SharingContent} from './images/sharing-content.svg';
import {ReactComponent as Star} from './images/star.svg';
import {ReactComponent as Star_1} from './images/star-1.svg';
import {ReactComponent as Upload} from './images/upload.svg';
import UploadFile from './images/upload-file.png';
import UploadFolder from './images/upload-folder.png';
import UploadAddFolder from './images/add-folder.png';
import Folder from './images/folder.png';

const Pdf = ({ type }) => (
    <svg width="26" height="24.429" viewBox="0 0 26 24.429" className={type}>
        {/* <defs>
        <style>.a{fill:#e2574c;}.b{fill:#b53629;}.c{fill:#fff;font-size:10px;font-family:HelveticaNeue-Bold, Helvetica Neue;font-weight:700;}</style>
        </defs> */}
        <g transform="translate(2)">
            <path className="a" d="M19.043,0H35.609l7.72,7.69V22.714a1.714,1.714,0,0,1-1.714,1.714H19.043a1.714,1.714,0,0,1-1.714-1.714v-21A1.714,1.714,0,0,1,19.043,0Z" transform="translate(-19.329)"/>
            <path className="b" d="M210.646,7.89h-5.975a1.715,1.715,0,0,1-1.714-1.714V.193Z" transform="translate(-186.671 -0.176)"/>
            <text className="c" transform="translate(1.01 18.359)">
                <tspan x="0" y="0">{type}</tspan>
            </text>
        </g>
    </svg>
    )

export default {
    AddFolder,
    AfterglowBack,
    AfterglowBack_2x,
    Cloud_24px,
    Garbage,
    OutlineSearch_24px,
    Pdf,
    Search_24px,
    SharingContent,
    Star,
    Star_1,
    Upload,
    UploadFile,
    UploadFolder,
    UploadAddFolder,
    Folder
};
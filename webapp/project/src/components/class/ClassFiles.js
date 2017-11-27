import React, {Component} from 'react'
import { connect } from 'react-redux'
import UserProfileInfo from "../commons/views/UserProfileInfo";
import FileInput from '@ranyefet/react-file-input'

class ClassFiles extends Component{

    renderFile = (file, index) => {
        const defaultImageDocument = "/images/basic-document.png"
        return(
            <div key={index} className="file clearfix">
                <div className="preview-file clearfix">
                    {
                        (file.type && file.type.startsWith("image/")) ?
                            <div className="preview-image">
                                <img src={file.source}/>
                            </div> :
                            <div className="document">
                                <img src={defaultImageDocument}/>
                            </div>
                    }
                </div>
                <div className="file-content">
                    <div className="file-file-name">{file.name}</div>
                </div>
                <div className="file-content">
                    <div className="file-type">{file.type}</div>
                </div>
                <div className="file-content">
                    {
                        (file.from && file.from.user) ?
                            (
                                <div className="file-user-full-name">
                                    <UserProfileInfo user={file.from.user}/>
                                </div>
                            ) : ''
                    }
                    <div className="file-create-time">{file.createDate}</div>
                </div>
                <div className="dropdown pull-right action-with-file">
                    <a data-toggle="dropdown" className="btn dropdown-toggle" href="javascript:;">
                        <button className="btn btn-white">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                        <span className="sr-only">Toggle Dropdown</span>
                    </a>
                    <ul role="menu" className="dropdown-menu">
                        <li><a href={file.source} target="_blank" download="proposed_file_name">Download</a></li>
                    </ul>
                </div>
            </div>
        )
    }

    render(){
        const {files, onUploadFile} = this.props
        return(
            <div className="class-files files">
                <div className="class-files-headline clearfix">
                    <h2 className="clearfix">
                        <span>Files</span>

                        <FileInput name="classFile" onChange={(event) => onUploadFile(event.target.files[0])}>
                            <button className="btn btn-white pull-right">
                                <i className="fa fa-upload"></i>
                                Upload file
                            </button>
                        </FileInput>
                    </h2>
                </div>
                {
                    files && files.length > 0 ?
                        (
                            files.map((file, index) => this.renderFile(file, index))
                        ) :
                        (
                            <p>No files upload</p>
                        )
                }
            </div>
        )
    }
}

export default ClassFiles;
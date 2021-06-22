import React from 'react';
import {Link} from 'react-router-dom';

class UploadPage2 extends React.Component {

    render(){
        return(
            <div className="upload__main-section">
                <div className="upload__heading__container">
                    <div className="upload__title">
                        <h1 className="heading--1">
                            Intern development demo
                        </h1>
                    </div>
                    <div className="upload__heading--paragraph">
                        <p className="paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    
                </div>                

                <div className="upload__section">
                    <div className="upload__section__inner-block">
                        <div className="progress-bar__container">
                            <div className="progress-bar">
                                <div className="progress-bar__fill">
                                    <span className="progress-bar__text">
                                        File name
                                    </span>
                                </div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-bar__fill progress-bar__image">
                                    <span className="progress-bar__text">
                                        File 2.png
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="drag-drop__heading">Drag and drop files or click upload</h2>
                            <div className="upload__browse__btn--container">
                                <Link to="/" className="upload__browse__btn">
                                    Upload
                                </Link>
                            </div>
                        </div>                       
                    
                        
                        <div className="upload__instructions">
                            <p>
                                Supported File Formats: pdf,jpg,png.
                            </p>
                            <p>
                                Max file size: 50MB
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        )
    }

}


export default UploadPage2
import React from 'react'


class UploadPage2 extends React.Component {

    render(){
        return(
            <div className="upload__main-section">
                <div className="upload__heading__container">
                    <h1 className="heading--1">
                        Intern development demo
                    </h1>
                    <div className="upload__heading--paragraph">
                        <p className="paragraph">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        </p>
                    </div>
                    
                </div>                

                <div className="upload__section">
                    <div className="upload__section__inner-block">
                        <h2 className="drag-drop__heading">Drag and drop files or click upload</h2>
                        <div className="upload__browse__btn--container">
                            <button className="upload__browse__btn">
                                Upload
                            </button>
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
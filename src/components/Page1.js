import React from 'react'


class UploadPage2 extends React.Component {

    render(){
        return(
            <div>
                <h1>
                    Intern development demo
                </h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>

                <div className="upload__section">
                    <h2>Drag and drop files or click upload</h2>
                    <button>
                        Upload
                    </button>
                    <p>
                        Supported File Formats: pdf,jpg,png.
                    </p>
                    <p>
                        Max file size: 50MB
                    </p>
                </div>


            </div>
        )
    }

}


export default UploadPage2
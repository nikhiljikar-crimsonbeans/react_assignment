import React from "react";
import "./uiassign1.css";
import file from "./file.png";
import jpgicon from "./jpgicon.png";
import { useDropzone } from "react-dropzone";


const UiAssign1 = () => {
  const changeHandler = (event) => {};

  const handleSubmission = () => {};

  const { getRootProps, getInputProps } = useDropzone();
  return (
    <div className="main_div">
      <main className="main">
        <div className="item1">
          <h2>File Upload</h2>
        </div>

        <div className="item2">
          <div className="drop-message">
            <center>
              <div className="upload-icon" {...getRootProps()}>
                <input {...getInputProps()} onChange={changeHandler} />
                <img
                  className="main_img"
                  src={file}
                  alt="img"
                  width="50"
                  height="50"
                />
                <br />
                Drag and Drop or <span className="link">browse</span> your files
              </div>
            </center>
          </div>
        </div>

        <div className="item3">
        <div>
            <img src={jpgicon} alt="img" width="50" height="50"/>
        </div>
        <div>
            <div>
                Image.jpg
            </div>
            <div>
            <progress className="prog" value={60} max={100} />
            </div>
            <div className="upprogress_div">
                <div>
                    <h className='data1'>4mb of 7mb</h>
                    <h className='data2'>uploading...%</h>
                </div>
            </div>
        </div>
        </div>

        <div className="item4">
          <button className="btn" type="submit" onClick={handleSubmission}>
            Done
          </button>
        </div>
      </main>
    </div>
  );
};

export default UiAssign1;

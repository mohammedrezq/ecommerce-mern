import React, { useState } from "react";
import Dropzone from "react-dropzone";

import AddIcon from "@material-ui/icons/Add";
import Axios from "axios";

const FileUpload = (props) => {

    const [Images, setImages] = useState([])

    const onDrop = (files) =>{
        let formData = new FormData();
        const config  = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }

        formData.append("file", files[0] );

        // Save the image we choose inside Node Server
        Axios.post('http://localhost:5000/api/uploads/uploadImage', formData , config)
        .then(response => {
            if(response.data.success) {
                setImages([ ...Images, response.data.image]);
                props.refreshFunction([ ...Images, response.data.image])
            } else {
                alert("Failed to save the Image in server")
            }
        })




    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);
        console.log(currentIndex);

        let newImages = [...Images];
        newImages.splice(currentIndex, 1);

        setImages(newImages);
        
        props.refreshFunction(newImages)
    }


  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={120000000}>
        {({ getRootProps, getInputProps }) => {

            return(
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid #ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <AddIcon style={{ fontSize: "3rem" }} />
          </div>
            )
        }}
      </Dropzone>


        <div style={{ display: "flex", width: "350px", height: "240px", overflowX:"scroll" }} >

            {Images.map((image, index) => {
                return(
            <div key={index} onClick={() => onDelete(image)}>
                <img style={{ minWidth:"300px", width:"300px", height: "240px" }} src={image} alt={`productImage-${index}`} />
            </div>
                )
            })}

        </div>


    </div>
  );
};

export default FileUpload;

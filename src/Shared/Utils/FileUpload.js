import React, { useState } from "react";
import { useSelector } from "react-redux";
import Dropzone from "react-dropzone";
import Axios from "axios";

import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

import * as classes from "./FileUpload.module.css";

const FileUpload = (props) => {

    const [Images, setImages] = useState([])


    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;


    const onDrop = (files) =>{
        let formData = new FormData();
        const config  = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${userInfo.token}`,
            }
        }

        formData.append("file", files[0] );

        // Save the image we choose inside Node Server
        Axios.post(process.env.REACT_APP_BACKEND_URL+'/uploads/uploadImage', formData , config)
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

        let newImages = [...Images];
        newImages.splice(currentIndex, 1);

        setImages(newImages);
        
        props.refreshFunction(newImages)
    }


  return (
    <div className={classes.images_upload_area}>
      <h3 style={{display: "flex", justifyContent:"center" , alignItems:"center"}}>Upload one image at a time</h3>
      <Dropzone onDrop={onDrop} multiple maxSize={120000000}>
        {({ getRootProps, getInputProps }) => {

            return(
          <div className={classes.drop_zone_area}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <CloudUploadOutlinedIcon style={{fontSize: "7rem"}} className={classes.upload_Icon} />
          </div>
            )
        }}
      </Dropzone>


        <div className={classes.images_display_area} >

            {Images.map((image, index) => {
                return(
            <div className={classes.image_container} key={index} onDoubleClick={() => onDelete(image)}> {/* Remove Image by double click on the image */}
                <img className={classes.displayed_Images} src={image} alt={`productImage-${index}`} />
            </div>
                )
            })}

        </div>


    </div>
  );
};

export default FileUpload;

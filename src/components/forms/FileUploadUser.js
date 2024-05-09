import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useSelector } from "react-redux";
import { Badge } from "antd";
import 'antd/dist/antd.css';
import { toast } from "react-toastify";
import { CloudUploadOutlined, PaperClipOutlined } from "@ant-design/icons";

const FileUploadUser = ({ values, setValues, setLoading }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const tenthUpload = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = values.tenthImage;
    let fileKey = `${user._id}tenthImage.jpg`;
    console.log(files);

    for(var i=0; i<files.length;i++){
      if(files[i].type.slice(0, 5)!="image"){
        toast.error(`File Type Not Supported. Please Upload An Image.`);
        return;
      }
    }

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri, key:fileKey },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                // console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                res.data['fileName']=files[i].name;
                console.log("IMAGE UPLOAD RES DATA", res);
                allUploadedFiles.push(res.data);
                allUploadedFiles=(allUploadedFiles.slice(allUploadedFiles.length-1,allUploadedFiles.length));

                setValues({ ...values, tenthImage: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("IMAGE UPLOAD ERR", err);
                toast.error(`${err.message}`);
              });
          },
          "base64"
        )
        // .catch((err)=>{
        //   setLoading(false);
        //   toast.error(`${err.message}`);
        // });
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const tenthImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { key:public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { tenthImage } = values;
        let filteredImages = tenthImage.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, tenthImage: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const tewlUpload = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = values.tewlImage;
    let fileKey = `${user._id}tewlImage.jpg`;
    console.log(files);

    for(var i=0; i<files.length;i++){
      if(files[i].type.slice(0, 5)!="image"){
        toast.error(`File Type Not Supported. Please Upload An Image.`);
        return;
      }
    }

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri, key:fileKey },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                res.data['fileName']=files[i].name;
                allUploadedFiles.push(res.data);
                allUploadedFiles=(allUploadedFiles.slice(allUploadedFiles.length-1,allUploadedFiles.length));

                setValues({ ...values, tewlImage: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("IMAGE UPLOAD ERR", err);
                toast.error(`${err.message}`);
              });
          },
          "base64"
        )
        // .catch((err)=>{
        //   setLoading(false);
        //   toast.error(`${err.message}`);
        // });
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const tewlImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { key:public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { tewlImage } = values;
        let filteredImages = tewlImage.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, tewlImage: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const aadharUpload = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = values.aadharImage;
    let fileKey = `${user._id}aadharImage.jpg`;
    console.log(files);

    for(var i=0; i<files.length;i++){
      if(files[i].type.slice(0, 5)!="image"){
        toast.error(`File Type Not Supported. Please Upload An Image.`);
        return;
      }
    }

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri, key:fileKey },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                res.data['fileName']=files[i].name;
                allUploadedFiles.push(res.data);
                allUploadedFiles=(allUploadedFiles.slice(allUploadedFiles.length-1,allUploadedFiles.length));

                setValues({ ...values, aadharImage: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("IMAGE UPLOAD ERR", err);
                toast.error(`${err.message}`);
              });
          },
          "base64"
        )
        // .catch((err)=>{
        //   setLoading(false);
        //   toast.error(`${err.message}`);
        // });
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const aadharImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { key:public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { aadharImage } = values;
        let filteredImages = aadharImage.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, aadharImage: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const migrationCertUpload = (e) => {
    // console.log(e.target.files);
    // resize
    let files = e.target.files; // 3
    let allUploadedFiles = values.migrationCertImage;
    let fileKey = `${user._id}migrationCertImage.jpg`;
    console.log(files);

    for(var i=0; i<files.length;i++){
      if(files[i].type.slice(0, 5)!="image"){
        toast.error(`File Type Not Supported. Please Upload An Image.`);
        return;
      }
    }

    if (files) {
      setLoading(true);
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPEG",
          100,
          0,
          (uri) => {
            // console.log(uri);
            axios
              .post(
                `${process.env.REACT_APP_API}/uploadimages`,
                { image: uri, key:fileKey },
                {
                  headers: {
                    authtoken: user ? user.token : "",
                  },
                }
              )
              .then((res) => {
                console.log("IMAGE UPLOAD RES DATA", res);
                setLoading(false);
                res.data['fileName']=files[i].name;
                allUploadedFiles.push(res.data);
                allUploadedFiles=(allUploadedFiles.slice(allUploadedFiles.length-1,allUploadedFiles.length));

                setValues({ ...values, migrationCertImage: allUploadedFiles });
              })
              .catch((err) => {
                setLoading(false);
                console.log("IMAGE UPLOAD ERR", err);
                toast.error(`${err.message}`);
              });
          },
          "base64"
        )
        // .catch((err)=>{
        //   setLoading(false);
        //   toast.error(`${err.message}`);
        // });
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  };

  const migrationCertImageRemove = (public_id) => {
    setLoading(true);
    // console.log("remove image", public_id);
    axios
      .post(
        `${process.env.REACT_APP_API}/removeimage`,
        { key:public_id },
        {
          headers: {
            authtoken: user ? user.token : "",
          },
        }
      )
      .then((res) => {
        setLoading(false);
        const { migrationCertImage } = values;
        let filteredImages = migrationCertImage.filter((item) => {
          return item.public_id !== public_id;
        });
        setValues({ ...values, migrationCertImage: filteredImages });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };


  return (
    <>
      <div className="row mt-2 p-3">
        {values.aadharImage &&
          values.aadharImage.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => aadharImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <p><PaperClipOutlined/>{image.fileName}</p>
              {/* <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
              /> */}
            </Badge>
          ))}
      </div>
      <div className="row form-group mt-2">
        <label>Upload Aadhar Card(Image(.jpg,.png,.jpeg,etc))</label>
        <label className="btn btn-outline-info col-md-6 ml-2 mt-2"><CloudUploadOutlined style={{ fontSize: '20px'}}/> Choose File
          <input
            type="file"
            hidden
            accept="images/*"
            onChange={aadharUpload}
          />
        </label>
      </div>
      <div className="row">
        {values.tenthImage &&
          values.tenthImage.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => tenthImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <p><PaperClipOutlined/>{image.fileName}</p>
              {/* <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
              /> */}
            </Badge>
          ))}
      </div>
      <div className="row form-group mt-2">
      <label>Upload 10th Marks Card(Image(.jpg,.png,.jpeg,etc))</label>
        <label className="btn btn-outline-info col-md-6 ml-2 mt-2"><CloudUploadOutlined style={{ fontSize: '20px'}}/> Choose File
          <input
            type="file"
            hidden
            accept="images/*"
            onChange={tenthUpload}
          />
        </label>
      </div>
      <div className="row">
        {values.tewlImage &&
          values.tewlImage.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => tewlImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <p><PaperClipOutlined/>{image.fileName}</p>
              {/* <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
              /> */}
            </Badge>
          ))}
      </div>
      <div className="row form-group mt-2">
        <label>Upload 12th Marks Card(Image(.jpg,.png,.jpeg,etc))</label>
        <label className="btn btn-outline-info col-md-6 ml-2 mt-2"><CloudUploadOutlined style={{ fontSize: '20px'}}/> Choose File
          <input
            type="file"
            hidden
            accept="images/*"
            onChange={tewlUpload}
          />
        </label>
      </div>
      <div className="row">
        {values.migrationCertImage &&
          values.migrationCertImage.map((image) => (
            <Badge
              count="X"
              key={image.public_id}
              onClick={() => migrationCertImageRemove(image.public_id)}
              style={{ cursor: "pointer" }}
            >
              <p><PaperClipOutlined/>{image.fileName}</p>
              {/* <Avatar
                src={image.url}
                size={100}
                shape="square"
                className="ml-3"
              /> */}
            </Badge>
          ))}
      </div>
      <div className="row form-group mt-2">
        <label>Upload Migration/Transfer Certificate(Image(.jpg,.png,.jpeg,etc))</label>
        <label className="btn btn-outline-info col-md-6 ml-2 mt-2"><CloudUploadOutlined style={{ fontSize: '20px'}}/> Choose File
          <input
            type="file"
            hidden
            accept="images/*"
            onChange={migrationCertUpload}
          />
        </label>
      </div>
    </>
  );
};

export default FileUploadUser;

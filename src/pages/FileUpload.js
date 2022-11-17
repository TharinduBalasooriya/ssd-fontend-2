import React, { useState } from "react";
import { styles } from "./styles.css";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import axios from "axios";
import { FileDrop } from "react-file-drop";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export default function FileUpload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  let imageName ;
  const [title, settitle] = useState(" ");

  const [date, setdate] = useState(" ");
  const [file, setFile] = useState([]);
  // const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
    const handle = (files) => {
      let arr = Object.values(files);

      const dd = file.concat(arr);
      setFile(dd);
      console.log("onDrop!", file);
    };

  function sendData(e) {
    e.preventDefault();
    let imageName ;

    let newUser = {
      title,
      file:"",
      date,
    };

    if (imageUpload == null) return;
    imageName = v4() + imageUpload.name;
    const imageRef = ref(storage, `files/${imageName}`);
    console.log( `files/${imageName}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        newUser.file = url;
      }).then(()=>{
        console.log("url here",newUser);
        axios
        .post("http://localhost:8070/file", newUser)
        .then(() => {
          settitle("");
          setdate("");
          alert("File added");
          window.location.reload();
        })
        .catch((err) => {
          alert("error");
        });
      });
    });

  }

  return (
    <div style={{ paddingTop: "7vh" }}>
      <Row>
        <Col>
          <div
            style={{
              paddingLeft: "7vh",
              paddingTop: "2vh",
              paddingBottom: "2vh",
            }}
          >
            <Card style={{ width: "40rem" }}>
              <Card.Img
                variant="top"
                src="https://miro.medium.com/max/1400/1*Ap-r8Y44kTiqD-OzmWB1_A.gif"
              />
            </Card>
          </div>
        </Col>
        <Col>
          <div
            style={{
              paddingRight: "2vh",
              paddingTop: "2vh",
              paddingBottom: "2vh",
            }}
          >
            <Card>
              <div
                style={{
                  paddingLeft: "2vh",
                  paddingRight: "2vh",
                  paddingTop: "2vh",
                  paddingBottom: "2vh",
                }}
              >
                <Card>
                  <Card.Body>
                    <div style={{ paddingLeft: "4vh" }}>
                      <h6> File Upload</h6>
                    </div>

                    <Form onSubmit={sendData}>
                      <br />
                      <div style={{ paddingLeft: "5vh", paddingRight: "5vh" }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: "white" }}>
                            Title :{" "}
                          </Form.Label>
                          <Form.Control
                            type="text"
                            onChange={(e) => settitle(e.target.value)}
                            placeholder=" Enter Title"
                          />
                        </Form.Group>
                        <div className="upload-file-wrapper" style={styles}>
                          <FileDrop onDrop={(files, event) => handle(files)}>
                         
                              <div className="form-group">
                                <label for="exampleFormControlFile1">
                             
                                </label>
                                <input
                                  type="file"
                                  className="form-control-file fileuploader"
                                  id="exampleFormControlFile1"
                                  onChange={(event) => {
                                    setImageUpload(event.target.files[0]);
                                  }}
                                />
                              </div>
                         
                          </FileDrop>
                          <button
                            className="btn btn-outline-info btnprimary"
                            // onClick={uploadFile}
                          >
                            {" "}
                            Upload{" "}
                          </button>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label style={{ color: "white" }}>
                            Date :
                          </Form.Label>
                          <Form.Control
                            type="date"
                            onChange={(e) => setdate(e.target.value)}
                            placeholder="Select Date"
                          />
                        </Form.Group>
                      </div>

                      <br />

                      <div style={{ paddingLeft: "85%" }}>
                        <Button type="submit" variant="outline-dark">
                          ADD
                        </Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from "axios";
import { loadFirebase } from '../firebase/firedatabase.js';

function StickerCalc() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [qty, setQty] = useState(0);
    const [shape, setShape] = useState("Please Select A Shape");
    const userId = 1
    const fileInput = React.createRef()

    const handleInputChange = event => {
        const { name, value } = event.target
        switch (name) {
            case "width":
                setWidth(value)
                break
            case "height":
                setHeight(value)
                break
            case "qty":
                setQty(value)
                break
            case "shape":
                setShape(value)
                break
            default:
        }
    }

    function resetBase(totalArea) {
        switch (true) {
            case (totalArea < 2500):
                return 0.0381;
            case (totalArea < 5000):
                return 0.0335;
            case (totalArea < 7500):
                return 0.0231;
            case (totalArea < 10000):
                return 0.0208;
            case (totalArea < 15000):
                return 0.0196;
            case (totalArea < 18000):
                return 0.0185;
            case (totalArea < 21000):
                return 0.0173;
            case (totalArea <= 25000):
                return 0.0168;
            default:
                return 0;
        }
    };

    function shapeMulti(cost) {
        switch (true) {
            case (shape === "Rectangle"):
                return 1;
            case (shape === "Simple Shape"):
                return 1.2;
            case (shape === "Custom Cut"):
                return 1.4;
            case (shape === "Select Shape"):
                return 0;
            case (shape === "Please Select A Shape"):
                return 0;
            default:
                return 0;
        }
    };

    function over25k(totalArea) {
        if (totalArea > 25000)
            return "Please email us for a quote"
        else
            return Math.ceil(cost)
    }

    function jobdata() {
        var data = {
            width: width,
            height: height,
            shape: shape,
            quantity: qty,
            totalCost: totalCost,
            userId: userId
        }

        console.log(data);

        axios.post("/api/jobPost", data, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } }, function (err, res) {

            if (err)
                throw err;

            console.log(res);


        })
    }

    const area = width * height;
    const totalArea = area * qty;
    const base = resetBase(totalArea);
    const cost = totalArea * base;
    const totalCost = cost * shapeMulti(cost);


    const upload = (e) => {
        // const uploader = fileInput.current.focus()
        var file = e.target.files[0];
        console.log(file);

        //Create a storage ref
        var storageRef = loadFirebase().storage().ref("nighthawk_uploads/" + file.name);

        //Upload file 
        var task = storageRef.put(file);

        //Update progress bar
        task.on("state_changed",
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;
            },

            function error(err) {

            },

            function complete() {

            }
        )

        console.log(upload);
    }


    //Get Elements
    // var uploader = document.getElementById("uploader");
    // var fileButton = document.getElementById("fileButton");

    //Listen for file selection
    // fileButton.addEventListener("change", function (e) {

    //     //Get file
    //     var file = e.target.files[0];

    //     //Create a storage ref
    //     var storageRef = firebase.storage().ref("nighthawk_uploads/" + file.name);

    //     //Upload file 
    //     var task = storageRef.put(file);

    //     //Update progress bar
    //     task.on("state_changed",
    //         function progress(snapshot) {
    //             var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //             uploader.value = percentage;
    //         },

    //         function error(err) {

    //         },

    //         function complete() {

    //         }
    //     )

    // });




    return (
        <div className="row">
            <div className="p-3 m-3 bg-light col-lg-6 col-md-10 mx-auto rounded-lg shadow-lg">
                <div> Width </div>
                <div className="">
                    <Form className="form">
                        <input value={width}
                            className="shadow rounded"
                            name="width"
                            onChange={handleInputChange}
                            type="number"
                            placeholder="0.0" />
                        <br /> <br />
                        <div>Height</div>
                        <input value={height}
                            className="shadow rounded"
                            name="height"
                            onChange={handleInputChange}
                            type="number"
                            placeholder="0.0" />
                        <br /> <br />

                        <select name="shape" onChange={handleInputChange} className="shadow rounded">
                            <option value={shape} >Select Shape</option>
                            <option name="Rectangle" >Rectangle</option>
                            <option name="Simple Shape" >Simple Shape</option>
                            <option name="Custom Cut" >Custom Cut</option>
                        </select><br></br><br></br>

                        <div> Quantity </div>
                        <input value={qty}
                            className="shadow rounded-lg"
                            name="qty"
                            onChange={handleInputChange}
                            type="number"
                            placeholder="100" />
                        <br /> <br />


                        <progress value="0" max="100" id="uploader">0%</progress>
                        <input id="fileButton" onChange={upload} type="file" value="upload" className="shadow rounded" />< br />< br />

                        <div> Shape - {shape}</div>
                        <div> Sticker Area - {area} inches</div>
                        <div> Total Area - {totalArea} inches</div>
                        <div><strong> Total Cost - ${over25k(totalArea)} </strong></div>

                        <button type="submit" onClick={jobdata} >Submit</button>

                    </Form>
                </div>
            </div>
        </div>
    )
}

export default StickerCalc

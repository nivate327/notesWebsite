import React, { useState } from 'react'
import { useEffect } from 'react';
import AllNotes from './Allnotes';
//import { InfinitySpin } from 'react-loader-spinner';



const Note = () => {

    const [data, setData] = useState({
        title: "",
        note: ""
    });

   // const [loading, setLoading] = useState(false);

    const [toggle, setToggle] = useState(false);


    //const [color, setColor] = useState("");

    const getItem = () => {
        let list = localStorage.getItem("notesData");

        if (list) {
            return JSON.parse(localStorage.getItem("notesData"));
        }
        else {
            return [];
        }
    }

    const [arr, setArr] = useState(getItem());

    const change = (e) => {
        let { name, value } = e.target;

        setData({ ...data, [name]: value })
    }

   

    const btnChange = () => {
     //   localStorage.setItem("notesData", JSON.stringify(arr));
    
        setArr((old) => {
            return [...old, data];
        });


    }

    useEffect(() => {

        localStorage.setItem("notesData", JSON.stringify(arr));

    }, [arr]);

    const deleteData = (id) => {
        setArr((old) => {
            return old.filter((val, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>

            

                

                    <div className="notesApp">

                        <div className="home">
                            <div className="addnote">

                                <div class="form-group">
                                    <input type="email" class="form-control" onClick={() => {
                                        setToggle(true);

                                    }} value={data.title} name="title" onDoubleClick={() => {
                                        setToggle(false);
                                    }} onChange={change} placeholder="Title" />
                                </div>

                                {toggle ?
                                    <div class="form-group">
                                        <textarea class="form-control" value={data.note} name="note" onChange={change} rows="3" placeholder='Note Here..'></textarea>
                                    </div>
                                    : null}

                                <button className='btn add' onClick={btnChange}> + </button>
                            </div>
                        </div>

                        <div className="allData container">
                            <div className="row">

                                {arr.map((val, index) => {
                                    return (
                                        <>
                                            <AllNotes note={val.note} title={val.title} id={index} deleteData={deleteData} />

                                        </>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>

        </>
    )
}

export default Note

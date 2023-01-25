import React from 'react'

const AllNotes = (props) => {

    const deleteNote=()=>
    {
        props.deleteData(props.id);
    }

    console.log(props.color);

    return (
        <>
            <div className="col-xl-3 col-lg-3 col-sm-6 col-md-4 col-12 items">
                <div className="notesBox">
                    <h3 className="title">{props.title}</h3>
                    <div className="textNotes">
                        <textarea class="form-control" value={props.note} id="" cols="20" rows="4" ></textarea>
                    </div>

                    <i class="fa-solid fa-xmark delete" onClick={deleteNote}></i>

                </div>
            </div>

        </>
    )
}

export default AllNotes

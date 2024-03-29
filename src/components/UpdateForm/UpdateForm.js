import React from "react";

const UpdateForm = ({updateData,changeTask,updateTask,cancelUpdate }) =>{
    return(
        <>
            <div className="row">
                <div className="col">
                    <input
                        value={ updateData && updateData.name}
                        onChange={ (e) => changeTask(e)}
                        className='mt-5 form-control form-control-lg'
                    />
                </div>
                <div className="col-auto">
                    <button
                        onClick={updateTask}
                        className="mt-5 btn btn-lg btn-success mr-20"
                    >Update</button>
                    <button
                        onClick={cancelUpdate}
                        className="mt-5 btn btn-lg btn-warning"
                    >Cancel</button>
                </div>
            </div>
            <br/>
            </>
    )
}

export default UpdateForm
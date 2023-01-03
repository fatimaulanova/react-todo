import React from "react";
import {AiFillCheckSquare, AiTwotoneDelete} from "react-icons/ai";
import {BsPencilSquare} from "react-icons/bs";

const ToDo = ({toDo, markDone, setUpdateData,deleteTask}) =>{
    return(
        <>
        {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1: -1)
            .map( (task, index) => {
                return(
                    <React.Fragment key={task.id}>
                        <div className="col taskBg">
                            <div className={task.status ? 'done' : ''}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.title}</span>
                            </div>
                            <div className="iconsWrap">
                                <span title="Completed / Not Completed"
                                      onClick={ (e) => markDone(task.id) }>
                                    <AiFillCheckSquare />
                                </span>

                                {task.status ? null : (
                                    <span title="Edit"
                                          onClick={ () => setUpdateData({
                                              id: task.id,
                                              title:task.title,
                                              status: task.status ? true : false
                                          })}>
                                    <BsPencilSquare/>
                                </span>
                                )}



                                <span title='Delete'
                                      onClick={() => deleteTask(task.id)}>
                                    <AiTwotoneDelete/>
                                </span>
                            </div>
                        </div>
                    </React.Fragment>
                )
            })
}
        </>
    )
}

export default ToDo
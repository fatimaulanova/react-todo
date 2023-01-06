import React, {useState} from "react";
import Modal from '../Modal/Modal'

const AddTaskForm = ({newTask,setNewTask,addTask}) =>{
    const [modalActive, setModalActive] = useState([])

    return(
        <>
            {/*ADD TASK*/}
            <div className="row">
                <div className="col">
                    {/*<button*/}
                    {/*    onClick={addTask}*/}
                    {/*    className="btn btn-lg  add-btn">*/}
                    {/*    ADD NEW STUDENT*/}
                    {/*</button>*/}
                    <main>
                        <button className="btn btn-lg  add-btn" onClick={() => setModalActive(true)}>
                            ADD NEW STUDENT</button>


                    </main>
                    <Modal active={modalActive} setAktive={setModalActive}>
                        <span className='x'><h1>X</h1></span>
                        <span>
                                <input type='name' placeholder='name'
                                    value={newTask}
                                    onChange={ (e) => setNewTask(e.target.value) }
                                    className="form-control form-control-lg task input1"
                                />
                            <input type='email' placeholder='email'
                                value={newTask}
                                onChange={ (e) => setNewTask(e.target.value) }
                                className="form-control form-control-lg task input1"
                            />
                            <input type='phone' placeholder='phone'
                                value={newTask}
                                onChange={ (e) => setNewTask(e.target.value) }
                                className="form-control form-control-lg task input1"
                            />
                            <input type='enroll number' placeholder='enroll number'
                                value={newTask}
                                onChange={ (e) => setNewTask(e.target.value) }
                                className="form-control form-control-lg task input1"
                            />
                            <input type='date of admission' placeholder='date of admission'
                                value={newTask}
                                onChange={ (e) => setNewTask(e.target.value) }
                                className="form-control form-control-lg task input1"
                            />
                            <button    onClick={addTask}
                                       className="btn btn-lg  add-btn">    ADD NEW STUDENT
                            </button>
                        </span>
                    </Modal>
                    <hr/>
                    <div className=" title">
                        <p>Name</p>
                        <p>Email</p>
                        <p>Phone</p>
                        <p>Enroll Number</p>
                        <p>Date of admission</p>
                    </div>

                </div>
            </div>
            <br/>
        </>
    )
}

export default AddTaskForm
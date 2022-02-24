// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// import { getListTodos, updateTodos } from "../../actions/todosAction";
// import todos from "../../reducers/todos";

// function UpdateTodos({ modal, toggle, save }) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [id, setId] = useState("");

//   const { detailTodosResult, updateTodosResult } = useSelector(
//     (state) => state.TodosReducer
//   );
//   const dispatch = useDispatch();

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     let taskObj = {};
//     dispatch(updateTodos({ id: id, title: title, description: description }));
//     save(taskObj);
//   };

//   useEffect(() => {
//     if (detailTodosResult) {
//       setTitle(detailTodosResult.title);
//       setDescription(detailTodosResult.description);
//       setId(detailTodosResult.id);
//     }
//   }, [detailTodosResult, dispatch]);

//   useEffect(() => {
//     if (updateTodosResult) {
//       dispatch(getListTodos());
//       setTitle("");
//       setDescription("");
//     }
//   }, [updateTodosResult, dispatch]);

//   return (
//     <div>
//       <Modal isOpen={modal} toggle={toggle}>
//         <ModalHeader toggle={toggle}>Update Task</ModalHeader>
//         <ModalBody>
//           <form>
//             <div className="form-group mb-3">
//               <label>Title</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 name="title"
//               />
//             </div>
//             <div className="form-group mb-3">
//               <label>Description</label>
//               <textarea
//                 rows="5"
//                 className="form-control"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 name="description"
//               ></textarea>
//             </div>
//           </form>
//         </ModalBody>
//         <ModalFooter>
//           <Button color="primary" type="submit" onClick={handleUpdate}>
//             Update
//           </Button>{" "}
//           <Button color="secondary" onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// }

// export default UpdateTodos;

import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
const ModalTodo = ({ show, setShow, handleDown }) => {
  const [msjTitle, setMsjeTitle] = useState(false);
  const [msjdescription, setMsjedescription] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  useEffect(() => {
    setTitle("");
    setDescription("");
  }, [handleDown]);
  const handleTitle = () => {
    const title = document.getElementById("title").value;

    setTitle(title);
    setMsjeTitle(false);
  };
  const handledescription = () => {
    const description = document.getElementById("description").value;
    setDescription(description);
    setMsjedescription(false);
  };
  /* Validacion de camposs */
  const handleValidate = () => {
    if (title === "") {
      setMsjeTitle(true);
    }
    if (description === "") {
      setMsjedescription(true);
    }
    if (title !== "" && description !== "") {
      console.log(title, description);
      handleDown(title, description);
      setShow(false);
    }
  };
  /* cierra modal */
  const handleClose = () => {
    setShow(false);

    setMsjeTitle(false);
    setMsjedescription(false);
  };
  return (
    <div className="modalData">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nueva tarea</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p >
            <b>Titulo</b>
            <b className="ast">*</b>{" "}
            <input
              id="title"
              onChange={() => handleTitle()}
              className="iname"
            ></input>
          </p>

          {msjTitle === false ? null : <p className="err">Ingrese un titulo</p>}
          <p className="descr">
            <b>description</b> <b className="ast">*</b>{" "}
            <textarea
              id="description"
              onChange={() => handledescription()}
              className="idesc"
            ></textarea>
          </p>

          {msjdescription === false ? null : (
            <p className="err">Ingrese una descripcion</p>
          )}
          <button
            className="guardar"
            onClick={() => {
              handleValidate();
            }}
          >
            Guardar
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalTodo;

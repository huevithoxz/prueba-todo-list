import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setList } from "../actions";
import { Button } from "react-bootstrap";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalTodo from "./ModalTodo";
import "../assets/sass/components/ModalView.scss";

const AddTodo = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleDown = (title, description) => {
    const data = { title: title, description: description };
    dispatch(setList(data));
    console.log(title, description);
  };
  return (
    <div>
      <h6>
        Agregar Tarea{" "}
        <Button onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faPlusCircle} value="Agregar Tarea" />
        </Button>{" "}
      </h6>
      <ModalTodo
        show={show}
        setShow={() => setShow()}
        handleDown={handleDown}
      />
    </div>
  );
};

export default AddTodo;

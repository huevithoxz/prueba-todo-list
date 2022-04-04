import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../actions";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  console.log(tasks, "taks");
  const handleDelete = (i) => {
    dispatch(deleteTask(i));
  };

  return (
    <>
      {tasks.map((content, i) => {
        return (
          <div key={i}>
            <Card border="primary" style={{ margin: "3%" }}>
              <Card.Header>{content.title}</Card.Header>
              <Card.Body>
                <Card.Title>
                  {content.description}{" "}
                  <Button onClick={() => handleDelete(content.title)}>
                    Eliminar
                  </Button>
                </Card.Title>
              </Card.Body>
            </Card>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default TodoList;

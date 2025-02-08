import React from "react";
import { Alert } from "react-bootstrap";

const AlertMessage = (props) => {
  return (
    <>
      <Alert variant={props.variant} key={props.variant}>
        <i className="bi bi-exclamation-diamond-fill"> {props.message}</i>
      </Alert>
    </>
  );
};

export default AlertMessage;

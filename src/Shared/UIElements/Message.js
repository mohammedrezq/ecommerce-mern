import React from "react";

import { Alert, AlertTitle } from "@material-ui/lab";

const Message = ({ variant, children, severity, title }) => {
  return (
    <Alert variant={variant} severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  );
};

Message.defaultProps = {
  severity: "error",
};

export default Message;

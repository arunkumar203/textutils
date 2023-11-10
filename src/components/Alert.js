import React from 'react';

function Alert(props) {
  return (
    props.alert && ( // Check if props.alert is defined
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        {props.alert.type}:{props.alert.msg}
      </div>
    )
  );
}

export default Alert;

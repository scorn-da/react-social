import React, { useEffect, useState } from 'react';

export const Status = (props) => {
  const [ editMode, setEditMode ] = useState(false);
  const [ status, setStatus ] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
      setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (evt) => {
    setStatus(evt.currentTarget.value);
  };

  return(
    <>
      { !editMode ?
        <div onClick={activateEditMode}>
          <span>{props.status ?? '–'}</span>
        </div> :
        <div>
          <input onChange={onStatusChange} autoFocus={true} type="text" value={status} onBlur={deactivateEditMode} />
        </div>
      }
    </>
  );
}

export default Status;

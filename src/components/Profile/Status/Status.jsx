import React from 'react';

class Status extends React.Component {
  statusInputRef =  React.createRef();

  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState( {
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState( {
      editMode: false
    })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (evt) => {
    this.setState({
      status: evt.currentTarget.value,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      })
    }
  }

  render() {
    return(
      <>
        { !this.state.editMode ?
          <div onClick={this.activateEditMode}>
            <span>{this.props.status ?? '–'}</span>
          </div> :
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status} onBlur={this.deactivateEditMode} />
          </div>
        }
      </>
    );
  }
}

export default Status;

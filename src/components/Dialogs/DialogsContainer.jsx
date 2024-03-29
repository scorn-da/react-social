import { connect } from "react-redux";
import { sendMessage } from "src/redux/dialogsReducer";
import React from "react";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";
import Dialogs from "src/components/Dialogs/Dialogs/Dialogs";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
}

const DialogsContainer = compose(
  connect(mapStateToProps, { sendMessage }),
  withAuthRedirect,
)(Dialogs);

export default DialogsContainer;

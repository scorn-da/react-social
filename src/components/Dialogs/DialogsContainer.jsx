import { connect } from "react-redux";
import { sendMessage, updateNewMessage } from "src/redux/dialogsReducer";
import React from "react";
import { withAuthRedirect } from "src/hoc/withAuthRedirect";
import Dialogs from "src/components/Dialogs/Dialogs/Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
}

const AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessage })(AuthRedirectComponent);

export default DialogsContainer;

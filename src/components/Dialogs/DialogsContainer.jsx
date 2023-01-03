import { connect } from "react-redux";
import Dialogs from "src/components/Dialogs/Dialogs/Dialogs";
import { sendMessage, updateNewMessage } from "src/redux/dialogsReducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
}

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessage })(Dialogs);

export default DialogsContainer;

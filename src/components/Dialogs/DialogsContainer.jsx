import { connect } from "react-redux";
import Dialogs from "src/components/Dialogs/Dialogs/Dialogs";
import { sendMessageCreator, updateNewMessageCreator } from "src/redux/dialogsReducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageCreator(text));
    },
  };
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

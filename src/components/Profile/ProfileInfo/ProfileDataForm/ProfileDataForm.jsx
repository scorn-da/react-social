import React from 'react';
import { createFormElement } from "src/components/common/FormControls/FormControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  const getContact = (key, value) => {
    return <div key={key}>
      <b>{key}</b>: {createFormElement('input', key, [], { type: 'text', name: `contacts.${key}`, value })}
    </div>
  }

  return <form onSubmit={handleSubmit}>
    <p>
      <button>Save</button>
      {error && <i>{error}</i>}
    </p>
    <div>
      <b>Full name:</b>
      {createFormElement('input', 'Full name', [], { type: 'text', name: 'fullName' })}
    </div>
    <div>
      <b>Looking for a job:</b>
      {createFormElement('input', '', [], { type: 'checkbox', name: 'lookingForAJob' })}
    </div>
    <div>
      <b>Professional skills:</b>
      {createFormElement('textarea', 'Professional skills', [], { name: 'lookingForAJobDescription' })}
    </div>
    <div>
      <p><b>Contacts:</b></p>
      <div>
        {Object.keys(profile.contacts).map(key => getContact(key, profile.contacts[key]))}
      </div>
    </div>
    <div>
      {createFormElement('textarea', 'About me', [], { name: 'aboutMe' })}
    </div>
  </form>
};

const ProfileDataReduxForm = reduxForm({ form: 'profileEditForm' })(ProfileDataForm);

export default ProfileDataReduxForm;

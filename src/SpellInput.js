import React from "react";
import firebase from "./firebase";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

export const SpellInput = ({ jsonSpellData }) => {
  const [name, setName] = React.useState(jsonSpellData.name);
  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("jsonSpellData")
      .doc(jsonSpellData.id)
      .set({ ...jsonSpellData, name });
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("jsonSpellData")
      .doc(jsonSpellData.id)
      .delete();
  };
  const style = {
    margin: 12
  };
  return (
    <>
      <TextField
        //hintText="Hint Text"
        Value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      {/* <button onClick={onUpdate}>update</button> */}
      {/* <button onClick={onDelete}>Delete</button> */}
      <RaisedButton
        label="Update"
        primary={true}
        onClick={onUpdate}
        style={style}
      />
      <RaisedButton
        label="Delete"
        //primary={true}
        onClick={onDelete}
        backgroundColor="#311B92"
        style={style}
        labelColor="white"
      />
    </>
  );
};

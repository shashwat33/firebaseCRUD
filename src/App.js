import React from "react";
import "./App.css";
import firebase from "./firebase";
import { SpellInput } from "./SpellInput";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBarExampleIcon from "./Appbar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

function App() {
  const [jsonSpellData, setjsonSpellData] = React.useState([]);
  const [newjsonSpellData, setnewjsonSpellData] = React.useState();
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db
        .collection("jsonSpellData")
        .onSnapshot(function(data) {
          setjsonSpellData(
            data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          );
        });
    };
    fetchData();
  }, []);
  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("jsonSpellData").add({ name: newjsonSpellData });
    alert("Your Data is being created  Refresh Your page !");
  };
  const style = {
    margin: 12
  };

  return (
    <MuiThemeProvider>
      <div>
        <AppBarExampleIcon />
        <div className="main">
          <h1>Create.Update.Delete</h1>

          <ul>
            <TextField
              hintText="Enter Data Here"
              value={newjsonSpellData}
              onChange={e => setnewjsonSpellData(e.target.value)}
            />

            <RaisedButton
              label="Create"
              onClick={onCreate}
              style={style}
              backgroundColor="#212121"
              labelColor="white"
            />

            {jsonSpellData.map(jsonSpellData => (
              <li key={jsonSpellData.name}>
                <SpellInput jsonSpellData={jsonSpellData} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;

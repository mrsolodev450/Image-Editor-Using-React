import { useState } from "react";
import "./App.css";
import UplaodImage from "./components/UplaodImage";
import Editor from "./components/Editor";

function App() {
  
  const [visiblity, setVisiblity] = useState(true)
  const [editorVisiblity, setEditorVisiblity] = useState(false)
  const [imagePath, setImagePath] = useState('')

  return (
    <div className="App">

      <UplaodImage visible={visiblity} saveFile={(event)=>{
        
        if (event.target.files && event.target.files[0]) {
          setImagePath(URL.createObjectURL(event.target.files[0]));
        }

        setVisiblity(false)
        setEditorVisiblity(true)
      }}/>

      <Editor visible={editorVisiblity} path={imagePath}/>
      
    </div>
  );
}

export default App;

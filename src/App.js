import React, { useRef, useState,useEffect } from "react";
import "./App.css";
import { uploadFile } from "./services/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  
  const [file, setfile] = useState("")
  const [result,setresult]=useState('') 

  const fileInputRef = useRef();

  const textToCopyRef = useRef();

  const onUploadClick = () => {
    fileInputRef.current.click();
  };


  // const logo ="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg";

  const logo ="https://i.pinimg.com/originals/16/3d/e5/163de547be5c1be946d0558bf027790c.jpg";

 // jab file ka value update hoga tab call hoga automatically.

  useEffect(() => {
    const getImage=async ()=>{
      if(file){
       const data=new FormData();
       data.append("name",file.name);
       data.append("file",file);
      let response= await uploadFile(data);
      setresult(response.path);
      }
    }
  getImage();
    
  }, [file])
  
console.log(file);

const copyToClipboard = () => {
  const textToCopy = textToCopyRef.current;

  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy.innerText).then(() => {
      // Use react-toastify instead of window.alert
      toast.success('Text copied to clipboard!');
    }, (error) => {
      console.error('Unable to copy text to clipboard', error);
      toast.error('Error copying text to clipboard');
    });
  }
};


  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="nav">
        <h1>∭File🔗Linker∭</h1>
      </div>
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload And Share The Download Link.</p>
        <button
          className="btn"
          onClick={() => {
            onUploadClick();
          }}
        >
          Upload
        </button>
        <input type="file" ref={fileInputRef} 
          onChange={(e)=>{setfile(e.target.files[0])}}
        />
        
        
        <a className="links" href={result} target="_blank" rel="noopener noreferrer"  ref={textToCopyRef}>{result.length>1 && result}</a>
        <button className="btn" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;

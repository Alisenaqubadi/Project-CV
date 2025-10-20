import { useState } from "react";
import "./App.css";

function Header() {
  return(
    <>
      <div className="header"> <h1>The CV Maker</h1> </div>
    </>
  )
}

function GeneralInfo(){
  return(
    <div className="GeneralInfo input-form">
      <input type="text" id="Name"className="nice-input" placeholder="Name"/>
      <input type="email" id="Email" className="nice-input" placeholder="Email"/>
      <input type="tel" id="Phone" className="nice-input" placeholder="Phone"/>
      <input type="text" id="Linkedin" className="nice-input" placeholder="Linkedin"/>
    </div>
  )
}

function Education(){
  return(
    <div className="Education input-form">
      <input type="text" id="Institution" className="nice-input" placeholder="Institution"/>
      <div className="date-parent">
        <input type="date" id="Institution-start" className="nice-input"/>
      </div>
    </div>
  )
}


function Current(props){
  if(props.show == 1){
    return(<GeneralInfo />)
  } else if (props.show == 2) {
    return(<Education />)
  }
}

function Body(){
  const [show, setShow] = useState(1)

  return(
    <>
      <div className="body">
        <div className="form">
          <h2>Make you CV</h2>
          <Current show={show}/>
          <div className="center-btn">
            <button className="nice-btn" onClick={() => setShow(prev => prev + 1)}>Next</button>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;

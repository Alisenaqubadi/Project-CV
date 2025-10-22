import { useState, useEffect } from "react";
import "./App.css";
import {
  GeneralInfo,
  Education,
  WorkExperience,
  YourSkills,
  isFormValid,
  saveTheData,
  data,
} from "./cvs-forms";
import { makeThePDF, saveThePDF, previewPDF } from "./pdfGenerator";

function Header() {
  return (
    <>
      <div className="header">
        {" "}
        <h1>The CV Maker</h1>{" "}
      </div>
    </>
  );
}

function Current(props) {
  if (props.show == 1) {
    return <GeneralInfo />;
  } else if (props.show == 2) {
    return <Education />;
  } else if (props.show == 3) {
    return <WorkExperience />;
  } else if (props.show == 4) {
    return <YourSkills />;
  }
}

function Body({ setPdfUrl }) {
  const [show, setShow] = useState(1);
  const [back, setBack] = useState(false);
  const [next, setNext] = useState(true);

  useEffect(() => {
    if (show === 1 && back) setBack(false);
  }, [show, back]);
  useEffect(() => {
    if (show === 4) {
      setNext(false);
    } else {
      setNext(true);
    }
  }, [show]);

  return (
    <>
      <div className="body">
        <div className="form">
          <Current show={show} />
          <div className="center-btn">
            {back && (
              <button
                className="nice-btn"
                onClick={() => setShow((prev) => prev - 1)}
              >
                Back
              </button>
            )}
            {next && (
              <button
                className="nice-btn"
                onClick={() => {
                  if (!isFormValid()) return;
                  saveTheData(show);
                  setShow((prev) => prev + 1);
                  setBack(true);
                }}
              >
                Next
              </button>
            )}
            {!next && (
              <button
                className="nice-btn"
                onClick={() => {
                  saveTheData(4); // Save form data first
                  const doc = makeThePDF(data);
                  previewPDF(doc, setPdfUrl); // Preview PDF
                }}
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [pdfUrl, setPdfUrl] = useState(null);

  if (pdfUrl === null) {
    return (
      <>
        <Header />
        <Body setPdfUrl={setPdfUrl} />
      </>
    );
  } else {
    return (
      <div className="pdfPreview">
        <Header />
        {pdfUrl && (
          <>
            <iframe className="iframe" title="PDF Preview" src={pdfUrl} />
            <div className="center-btn center-btn-for-final ">
              <button
                className="nice-btn"
                onClick={() => {
                  // Clean up the previous URL
                  URL.revokeObjectURL(pdfUrl);
                  setPdfUrl(null);
                }}
              >
                Back to Form
              </button>
              <button
                className="nice-btn"
                onClick={() => {
                  const doc = makeThePDF(data);
                  saveThePDF(doc);
                }}
              >
                Download PDF
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;

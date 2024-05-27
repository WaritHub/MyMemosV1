import "./App.css";
import React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMemos from "./pages/MyMemos";
import MyMemosDetailApprove from "./pages/MyMemosDetailApprove"
import MyMemosDetailPending from "./pages/MyMemosDetailPending"
import MyMemosDetailReject from "./pages/MyMemosDetailReject"
import { FluentProvider, webLightTheme } from "@fluentui/react-components";


function App() {
  
  return (
    <FluentProvider theme={webLightTheme}>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MyMemos />}/>
          <Route path='/MyMemosDetailApprove' element={<MyMemosDetailApprove />} />
          <Route path='/MyMemosDetailPending' element={<MyMemosDetailPending />} />
          <Route path='/MyMemosDetailReject' element={<MyMemosDetailReject />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </FluentProvider>
  );
}

export default App;

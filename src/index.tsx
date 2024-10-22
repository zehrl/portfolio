import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import './output.css' // Tailwind CSS
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkExperiencePage from './pages/WorkExperiencePage';
import ProjectsPage from './pages/ProjectsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<WorkExperiencePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* Handle 404 */}
          {/* <Route path='*' element={<NoPage />}></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
);

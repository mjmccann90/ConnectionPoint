import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "../src/components/Header"
import { JobProvider } from './providers/JobProvider';
import { ApplicationProvider } from './providers/ApplicationProvider';
import { CompatibilityProvider } from './providers/CompatibilityProvider';

function App() {
  return (
    <Router>
      <UserProfileProvider>
        <JobProvider>
          <ApplicationProvider>
            <CompatibilityProvider>
                <Header/>
                <ApplicationViews />
            </CompatibilityProvider>
          </ApplicationProvider>
        </JobProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;

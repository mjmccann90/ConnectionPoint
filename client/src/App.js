import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { UserProfileProvider } from "./providers/UserProfileProvider";
import ApplicationViews from "./components/ApplicationViews";
import Header from "../src/components/Header"
import { JobProvider } from './providers/JobProvider';
import { CompatibilityProvider } from './providers/CompatibilityProvider';
import { UserTypeProvider } from './providers/UserTypeProvider'
import { PersonalityTypeProvider } from './providers/PersonalityTypeProvider'
import { ManagerViewProvider } from './providers/ManagerViewProvider';


function App() {
  return (
    <Router>
      <UserProfileProvider>
        <UserTypeProvider>
          <PersonalityTypeProvider>
            <JobProvider>
              <ManagerViewProvider>
                  <CompatibilityProvider>
                      <Header/>
                      <ApplicationViews />
                  </CompatibilityProvider>
              </ManagerViewProvider>
            </JobProvider>
          </PersonalityTypeProvider>
        </UserTypeProvider>
      </UserProfileProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './component/Header';
import ProfilName from './component/ProfilName';
import EducationalBackground from './component/EducationalBackground';
import Project from './component/Project';
import Sertificate from './component/Sertificate';
import Contact from './component/Contact';
import ThreeBackground from './component/ThreeBackground';



class App extends React.Component {
  render() {
    return (
      <div>
        <ThreeBackground />
        <Header />
        <ProfilName />
        <EducationalBackground />
        <Project />
        <Sertificate />
        <Contact />
      </div>
    );
  }
}

export default App;

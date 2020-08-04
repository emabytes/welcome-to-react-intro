import React from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import TopNav from './Components/Top-nav';
import GalleryItem from './Components/GalleryItem';
import TitleDescription from './Components/TitleDescription';

function App() {
  return (
    <div className="App">
      <Welcome />
      <TopNav />
      <div className="flex-wrap">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
      <div className="flex-wrap">
       <TitleDescription />
      </div>
      <div className="flex-wrap">
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
      </div>
      <div className="bg-img"></div>
      <div className="flex-wrap">
       <TitleDescription />
      </div>
      {/* <div className="grid-wrap">
      <TitleDescription />
      <GalleryItem />
      </div> */}
    </div>
  );
}

export default App;

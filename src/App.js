import './App.css';
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import Interaction from './components/Interaction';
import VideoPlayer from './components/VideoPlayer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <SideNavbar/>
      <TopNavbar/>
      <Interaction/>
      <VideoPlayer/>
    </div>
  );
}

export default App;

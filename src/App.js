import './App.css';
import SideNavbar from './components/SideNavbar';
import TopNavbar from './components/TopNavbar';
import Interaction from './components/Interaction';
import VideoPlayer from './components/VideoPlayer';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="flex gap-5 " >
      <SideNavbar/>
      <Content/>
    </div>
  );
}

export default App;

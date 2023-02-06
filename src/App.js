
import './App.css';
import './ldrp.css'
import FooterMain from './Components/FooterMain';
import Ncc from './Components/Ncc/Ncc';
import Placementp from './Components/Placement/Placementp';
import Svm from './Components/Svm';
import AboutUs from './Components/About/AboutUs';
import Features from './Components/About/Features';
import CoursesTable from './Components/About/CoursesTable';
import McaCourses from './Components/About/McaCourses';

function App() {
  const pageSize = 4;
  return (
    <>
      <AboutUs />
      <Features />
      <CoursesTable />
      <McaCourses/>
      <Svm />
      <Placementp />
      <Ncc />
      <FooterMain />
    </>

  );
}

export default App;

import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>

         <Container customClass='min-height'>
            <Routes>
                <Route exact path="/" element={<Home />} > </Route>
                <Route exact path="/company" element={<Company />} > </Route>
                <Route exact path="/contact" element={<Contact />} > </Route>
                <Route exact path="/newproject" element={<NewProject />} > </Route>
                <Route exact path="/projects" element={<Projects />} > </Route>
            </Routes>
         </Container>

       <Footer/>
     </Router>
    </div>
  );
}

export default App;

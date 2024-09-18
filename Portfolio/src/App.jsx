
import Profile from "./pages/Profile"
import Project from "./pages/Project"
import Contact from "./pages/Contact"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import WebLayout from "./Layouts/WebLayout"
const App=()=>{
    return(
        <>
        
        <BrowserRouter>
            <Routes>
                <Route element={<WebLayout/>}>
                    <Route path="/" element={<Profile/>} />
                    <Route path="Project" element={<Project/>} />
                    <Route path="/Contact" element={<Contact/>} />
                </Route>
            </Routes>
                
        </BrowserRouter>
        </>
        
    )
}
export default App

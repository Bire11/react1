
// create cliant router
//npm install --save-dev react-router-dom
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ViewApp from './ViewApp';
import ApplicationForm from './ApplicationForm';
import EditApplicant from './EditApplicant';
import AddCourse from './AddCourse';
import GetDetail from './GetDetail';
import Login from '../Login/Login';
import UseToken from '../Login/UseToken';
function Dashboard(){

    const {token, setToken}=UseToken();
if(!token){
    return <Login setToken={setToken}/>
}
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='/' exact element={<ViewApp/>}/>
                
                    <Route path='/new-applicant' element={<ApplicationForm/>}/>
                    <Route path='/edit-applicant/:id' element={<EditApplicant/>}/>
                    <Route path='/addCourse/:id' element={<AddCourse/>}/>
                    <Route path='/getDetail/:id' element={<GetDetail/>}/>
                    {/* <Route path='/useToken/:id' element={<UseToken/>}/> */}
                    <Route path='/login'element={<Login/>}/>
                </Routes>
            </div>
        </Router>
    )
}
export default Dashboard;       
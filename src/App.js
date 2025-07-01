import {BrowserRouter,Route, Routes} from 'react-router-dom';
import TabMenu from './pages/components/common/TabMenu';
import Food from './pages/Food';


function App() {
  return (
      <BrowserRouter>
          <div className="card mx-auto my-4 overflow-x-hidden" style={{width: '830px'}}>
              <div className="card-body">
                  <TabMenu />
                  <Routes>
                      <Route path="/food" element={<Food/>} />
                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;

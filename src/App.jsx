import Menu from './modules/Menu/Menu';
import UserRoutes from './UserRoutes';
// import Header from 'modules/Header/Header';
import './shared/styles/style.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Menu />

      <UserRoutes />
    </div>
  );
}

export default App;

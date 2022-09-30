import Router from './router'
import Header from '../src/components/shared/header/header'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div className="main-container">

        <Header />
        <Router />
      </div>
    </>
  );
}

export default App;


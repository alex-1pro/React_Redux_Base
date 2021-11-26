import { useSelector } from 'react-redux';
import './App.css';
import CommentsCommponent from './Components/CommentsComponent/CommentsCommponent';
import LikesComponent from './Components/LikesComponent/LikesComponent';
import SpinComponent from './Components/SpinComponent/SpinComponent';
import TitleComponent from './Components/TitleComponent/TitleComponent';


function App() {
  const error = useSelector(state => state.appReducer.error);

  console.log("error >>>",error);
  return (
    <div className="App">
      <div className="wrap">
        <SpinComponent />
        <div className="card">
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <TitleComponent />
            <LikesComponent/>
          </div>
          <CommentsCommponent />
        </div>
      </div>
    </div>
  );
}

export default App;

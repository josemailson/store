import GlobalStyle from './globalStyles';
import Header from './components/Header';
import './styles/App.css'
import { Card } from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle>
        <Header />
        <div className="mainDiv">
          <Card                 
            title={'Ttle'}
            price={25.00}
            description={'Description'}
            key={1}
            image={'image'}
          />
        </div>
      </GlobalStyle>
    </>
  );
}

export default App;

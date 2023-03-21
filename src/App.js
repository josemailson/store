import GlobalStyle from './globalStyles';
import Header from './components/Header';
import './styles/App.css'

function App() {
  return (
    <>
      <GlobalStyle>
        <Header />
        <div className="mainDiv"></div>
      </GlobalStyle>
    </>
  );
}

export default App;

//import '../styles/App.css';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';

function App() {
  return (
    <div 
      // className="App"
      style={{
        textAlign:"center",
        minHeight:"100vh",
        overflow:"hidden",
        display:"block",
        position:"relative",
        paddingBottom:"5px",
      }}
      >
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;

import "./styles/App.css";
import RepoList from "./components/RepList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="content">
          <RepoList />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

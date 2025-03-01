import "./styles/App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import RepoList from "./components/RepList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Search />
      <RepoList />
      <Footer />
    </div>
  );
}

export default App;

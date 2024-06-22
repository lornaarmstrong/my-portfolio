import Header from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import ContentBlock from "./components/ContentBlock/ContentBlock";
import Footer from "./components/Footer/Footer";
import "./App.css";

// Variables
const introduction =
  "Hi, I'm Lorna! I'm a Software Engineer with a particular passion for solving hard problems and collaborating with interesting people!";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
      <ContentBlock header={"About Me"} paragraph={introduction} />
      <ContentBlock header={"Experience"} paragraph={""} />
      <ContentBlock header={"Projects"} paragraph={""} />
      <Footer />
    </div>
  );
}

export default App;

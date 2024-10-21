import './App.css';
import Buttons from './Dashboard/Components/Buttons';
import Footer from './Dashboard/Components/Footer';
import QuotesAuthor from './Dashboard/Components/QuotesAuthor';
import QuotesText from './Dashboard/Components/QuotesText';
import Quotes from './Dashboard/Quotes/Quotes';

function App() {
  return (
    <div className="App">
      <Quotes/>
      <Buttons/>
      <Footer/>
      <QuotesAuthor/>
      <QuotesText/>
    </div>
  );
}

export default App;

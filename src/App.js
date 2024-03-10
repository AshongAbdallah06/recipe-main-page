import './App.css';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import PreparationTime from './PreparationTime';
import Nutrition from './Nutrition';
import Footer from './Footer';



function App() {
    return (
        <main className="App">
            <Header />

            <PreparationTime />

            <Ingredients />

            <Instructions />

             <Nutrition />

             <Footer />

        </main>
    );
}

export default App;

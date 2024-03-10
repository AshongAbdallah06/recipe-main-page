import './App.css';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import PreparationTime from './PreparationTime';
import Nutrition from './Nutrition';
import Footer from './Footer';



function App() {
    return (
        <div className="App">

            <main>
                <Header />

                <PreparationTime />

                <Ingredients />

                <Instructions />

                <Nutrition />     
            </main>
             <Footer />
        </div>
    );
}

export default App;

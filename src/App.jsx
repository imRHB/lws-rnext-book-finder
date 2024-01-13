import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <main className="my-10 lg:my-14">
                <Header />
                <Books />
            </main>
            <Footer />
        </>
    );
}

export default App;

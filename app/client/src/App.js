import './App.css';
import Home from './pages/home/Home';


function App() {
  return (
    <>

      <section className="bg-gray-200 h-screen w-screen">
        <div className="w-72 h-56 rounded-full bg-blue-200 blur-2xl absolute my-80"></div>
        <div className="w-80 h-72 rounded-full bg-blue-200 blur-2xl absolute inset-y-0 right-0"> </div>
        <Home />
      </section>
    </>
  );
}

export default App;

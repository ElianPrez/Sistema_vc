import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-full bg-gray-100 overflow-hidden">
    <header className=" ">
      
    </header>
    <main className="flex flex-col items-center p-6 bg-gray-200 border-b border-gray-300 flex-shrink-0">
    <img src={logo} className="App-logo mb-4" alt="logo" />
      <p className="text-center text-gray-700">
        Aplicacion en React
      </p>
      <a
        className="mt-4 text-blue-500 hover:underline"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </main>
    
  </div>
  );
}

export default App;

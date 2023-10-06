import './App.css';
import Logo from './componentes/Logo'
import Opcoes_header from './componentes/Opcoes_header'
import Icones_header from './componentes/Icones_header';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <Opcoes_header></Opcoes_header>
        <Icones_header></Icones_header>
      </header>
    </div>
  );
}

export default App;

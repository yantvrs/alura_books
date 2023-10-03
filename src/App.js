import './App.css';
import Logo from './componentes/Logo'
import Perfil from './imagens/perfil.svg'
import Sacola from './imagens/sacola.svg'

const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icones = [Perfil, Sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          { textOpcoes.map( (texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>

        <ul className='icones-header'>
            { icones.map( (icone) => (<li className='icone'><img src={icone}></img></li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;

import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'

const icones = [Perfil, Sacola]

function Icones_header() {
    return (
        <ul className='icones-header'>
                { icones.map( (icone) => (<li className='icone'><img src={icone}></img></li>
            ))}
        </ul>
    )
}

export default Icones_header 
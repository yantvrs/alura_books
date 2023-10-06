import './estilo.css'

const textOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function Opcoes_header() {
    return (
        <ul className='opcoes'>
            { textOpcoes.map( (texto) => (
                <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
    )
}

export default Opcoes_header
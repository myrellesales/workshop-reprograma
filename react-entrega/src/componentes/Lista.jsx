import dados from './dados'

function Lista() {
  return(
    <ul>
    {dados.map(info => (
      <li>
        <div>
        <p>{info.id}</p>
        <h2>{info.nome}</h2>
        <p>{info.descricao}</p>
        </div>
        <img src={info.imagem} alt={info.nome}/>
      </li>

    ))}
  </ul>
    
  )
}

export default Lista;
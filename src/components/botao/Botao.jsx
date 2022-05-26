const Botao = (props) => {

    return (
       
        <button
        style={{ backgroundColor:` ${props.cor}` }}>
        {props.texto}
        </button>
     

    )
}
export default Botao

import './Time.css'

const Time = (props) => {

    return (
        <section className='time' style={{backgroundColor: props.corSecundaria, borderBottom:props.corPrimaria} }>
            <h3>{props.nome}</h3>
        </section>
    )
}

export default Time
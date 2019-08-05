import Evento from './Evento';
const Eventos = (props) => {
    return (
        <div className="list-group">
            {props.eventos.map( evento => (
                <Evento key={evento.url} evento={evento} />
            ))}
        </div>
    );
};

export default Eventos;
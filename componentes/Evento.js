const Evento = (props) => {
    const {name,url,description} = props.evento;
    let desc = description.text;
    let titulo = name.text;
    if(titulo.length > 100){
        titulo = titulo.substr(0,100)+"...";
    }
    if(desc){
        desc = desc.substr(0,250)+"...";
    }
    return (
        <a href={url} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{titulo}</h3>
            <p className="mb-1">{desc}</p>
        </a>
    );
};

export default Evento;
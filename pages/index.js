import Master from '../componentes/Master';
import Precio from '../componentes/Precio';
import Noticias from '../componentes/Noticias';
import Eventos from '../componentes/Eventos';
import fetch from 'isomorphic-unfetch';


const Index = (props) => (
    <Master>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio precio={props.precioBitcoin} />
            </div>
            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre bitcoin</h2>
                <Noticias noticias={props.noticias} />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Eventos sobre bitcoin</h2>
                <Eventos eventos={props.eventos} />
            </div>
        </div>
    </Master>
)

Index.getInitialProps = async () =>{
    const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
    const noticias = await fetch('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=b51197de514b40b59b23ff75ab04f4d9&language=es');
    const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&location.address=Colombia&location.within=60km&location.latitude=-22.902781&location.longitude=-43.2075&token=22VYO52P4X6NRDCL5GL3');
    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();
    return{
        precioBitcoin   :   resPrecio.data.quotes.USD,
        noticias        :   resNoticias.articles,
        eventos         :   resEventos.events
    }
}

export default Index;
import Head from 'next/head';
import Navegacion from './Navegacion';


const Master = (props) => (
    <div>
        <Head>
            <title>Bitcoion App</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/yeti/bootstrap.min.css" />
        </Head>
        <Navegacion />
        <div className="container mt-4">
            {props.children}
        </div>
        
    </div>
);

export default Master;
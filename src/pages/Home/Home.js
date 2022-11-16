import styles from './Home.module.css';
import Word from '../../components/Lottie/Word/WordAnimation';
import TypeWriter from '../../components/TypeWriter/TypeWriter';
import {Link} from 'react-router-dom';
function Home(){
    return (
            <div className={styles.elements}>
                <div className={styles.svg}>
                    <Word />
                </div>
                <div className={styles.content}>
                    <h1>Seja bem vindo!</h1>
                    <span><TypeWriter text="Para começar clique no botão abaixo"/></span>
                    <Link to="/cep" as="button">Buscar cep</Link>
                </div>
            </div>
    );
}

export default Home;
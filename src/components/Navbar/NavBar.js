import styles from './NavBar.module.css';
import {MdOutlineLocationOn} from 'react-icons/md';
import {Link} from 'react-router-dom';
function Nav(){
    return (
        <nav className={styles.nav_container}>
                <h2><Link to="/">Cep</Link></h2>
                <MdOutlineLocationOn  className={styles.icon}/>
        </nav>
    );
}

export default Nav;
import styles from './Footer.module.css';
import {AiOutlineFacebook, AiFillGithub, AiOutlineInstagram} from 'react-icons/ai';

function Footer(){
    return (
        <footer className={styles.footer_container}>
            <div className={styles.element}>
                <h4>&copy; Desenvolvido por Vitor Falcão</h4>
                <div className={styles.icons}>
                    <a href="https://www.facebook.com/vitor.falcao.980" target="about_blanbk"><AiOutlineFacebook/></a>
                    <a href="https://github.com/falcaovitor" target="about_blanbk"><AiFillGithub/></a>
                    <a href="https://github.com/falcaovitor"><AiOutlineInstagram/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
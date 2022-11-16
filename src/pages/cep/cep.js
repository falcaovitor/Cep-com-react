import styles from './cep.module.css';
import Input from '../../components/form/input';
import InputResults from '../../components/form/inputResults';
function cep(){

    function handleChange(){
        let input = document.querySelector('input');
        let span = document.querySelector('span');
        if(input.value.length === 0 || input.value.length < 8 || input.value.length > 8){
            span.textContent = "Não foi possivel realizar a busca"
        }else{
            span.textContent = "Carregando...";
            fetch(`https://viacep.com.br/ws/${input.value}/json/`, {
                method: 'GET',
            }).then((resp) => resp.json())
              .then((json) => {
               for(let data in json){
                    
                    setTimeout(() => {
                        span.textContent = "Busca realizada com sucesso!";
                        if(json.erro){
                            span.textContent = "Cep não encontrado";
                        }
                        if(document.querySelector('#'+data)){
                            document.querySelector("#"+data).value = json[data];
                        }
                    }, 1000);
                       
               }
              }).catch(err => {
                console.log(err);
              })
        }
    }
    return (
        <section className={styles.container}>
            <h2>Buscar cep:</h2> 
            <div className={styles.content}>
                <div className={styles.search}>
                    <Input
                        type="number"
                        placeholder="Buscar"
                    />
                    <button onClick={handleChange}>Pesquisar</button>
                </div>
            </div>  
            <span className={styles.result}>Resultado</span>
                <div className={styles.fields}>
                    <div>
                    <span>Logadouro:</span> 
                    <InputResults
                        id="logradouro"
                    />
                    <span>Bairro:</span>
                    <InputResults
                        id="bairro"
                    />
                    <span>localidade:</span>
                    <InputResults
                        id="localidade"
                    />
                    <span>Uf:</span>
                    <InputResults
                        id="uf"
                    />
                    
                    </div>
                </div> 
        </section>
    );
}

export default cep;
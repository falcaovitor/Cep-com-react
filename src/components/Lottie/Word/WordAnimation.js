import word from './word.json';
import Lottie from 'react-lottie';
function Word(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: word
    }
    return <Lottie 
            options={defaultOptions}
            width={400}
            height={400}
          />
}

export default Word;
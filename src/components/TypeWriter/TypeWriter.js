import Typewriter from 'typewriter-effect';

function TypeWriter({text}){
    return(
        <Typewriter
            options={{
            loop: true,
        }}
            onInit={(typewriter) => {
            typewriter.typeString(text)
            .pauseFor(2500)
            .deleteAll()
            .start();
        }}
/>
    );
}

export default TypeWriter;
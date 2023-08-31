import { useState } from 'react';
import { PropTypes } from 'prop-types';
function Teste(props) {
    Teste.propTypes = {
        projetos: PropTypes.array.isRequired
    };
    const { projetos } = props;
    const [teste, setTeste] = useState(Array(projetos.length).fill(false));
    const handleTeste = (id) => {
        setTeste((prevTeste) => {
            const newTeste = [...prevTeste];
            newTeste[id] = !newTeste[id];
            return newTeste;
        });
    };
    return (
        <div>
            {projetos.map((projeto) => (
                <div key={projeto.id}>
                    <h1
                        onMouseEnter={() => handleTeste(projeto.id)}
                        onMouseLeave={() => handleTeste(projeto.id)}
                        className={`font-mono ${
                            teste[projeto.id] ? ' text-fuchsia-700' : 'text-black'
                        }`}>
                        {projeto.name}
                    </h1>
                    <p>{projeto.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Teste;

import { PropTypes } from 'prop-types';
import { AiFillHome, AiFillPhone, AiFillMail } from 'react-icons/ai';
function Resume(props) {
    const { darkMode } = props;

    Resume.propTypes = {
        darkMode: PropTypes.bool.isRequired
    };
    return (
        <section className={`min-h-screen pl-0 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
            <div
                className={`pt-8 pb-6 flex-col ${
                    darkMode ? 'bg-gray-600' : 'bg-gray-200'
                } `}>
                <h1
                    className={`text-4xl text-center ${
                        darkMode ? 'text-white' : 'text-black'
                    } `}>
                    Resume
                </h1>
            </div>
            <article
                className={`shadow-lg border-solid border-[1px] mt-10 ml-4 mr-3 mb-10 md:ml-96 md:mr-24 ${
                    darkMode
                        ? ' bg-gray-600 border-gray-600 text-white'
                        : 'border-slate-200 text-black '
                } `}>
                <section className="flex">
                    <section className={`pt-6 pl-9 flex flex-col`}>
                        <h1
                            className={`font-mono font-semibold tracking-widest uppercase text-blue-500 text-3xl`}>
                            Vinícius Barbosa Mourão
                        </h1>
                        <h2 className="">Desenvolvedor de Software Junior</h2>
                    </section>
                    <section className=" ml-7 mt-3 border-l">
                        <div className="flex flex-col pl-2 mr-2">
                            <div className="flex ">
                                <AiFillPhone className="h-5 w-5" />
                                <a className=" ml-2 text-xs">67 99874 4076</a>
                            </div>
                            <div className="flex mt-2">
                                <AiFillMail className="h-5 w-5" />
                                <a className=" ml-2 text-xs">vini.barbmourao@gmail.com</a>
                            </div>
                            <div className="flex mt-2">
                                <AiFillHome className="h-5 w-5" />
                                <a className=" ml-2 text-xs">Goiânia</a>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="mt-3 pt-3 ml-9 mr-9 border-t flex">
                    <img
                        src="https://avatars.githubusercontent.com/u/34627836?s=400&u=18cd785e3f29a626518499bc4442cda74943a370&v=4"
                        alt="logo"
                        className={`max-h-[150px]  rounded-full select-none`}
                    />
                    <p className=" ml-8">
                        Sou Vinícius Barbosa Mourão, um profissional dedicado que possui
                        uma sólida formação em Engenharia da Computação. Com uma paixão
                        pela tecnologia e inovação, adquiri habilidades essenciais em
                        programação, design de sistemas e resolução de problemas
                        complexos. Durante meu curso, destaquei-me em projetos práticos,
                        onde pude aplicar meu conhecimento teórico de maneira eficaz.
                        Minha experiência inclui a resolução de desafios práticos em
                        programação, a implementação de soluções eficientes e a
                        colaboração em equipe para atingir metas comuns. Possuo uma
                        abordagem analítica e orientada a resultados, buscando
                        constantemente aprimorar minhas habilidades e permanecer
                        atualizado com as tendências tecnológicas. Estou confiante em
                        minha capacidade de contribuir para equipes dinâmicas e projetos
                        desafiadores, trazendo uma combinação única de conhecimento
                        técnico e habilidades interpessoais. Procuro oportunidades que me
                        permitam aplicar minha paixão pela tecnologia para impulsionar a
                        inovação e o desenvolvimento de soluções que impactam
                        positivamente o cenário tecnológico. Estou entusiasmado para
                        enfrentar novos desafios e contribuir para o sucesso da sua
                        equipe.
                    </p>
                </section>
                <section className="mr-9">
                    <h1 className="font-semibold ml-9 mt-3 pt-3 border-t text-2xl uppercase text-blue-500">
                        Projetos
                    </h1>
                    <div className="ml-9 mt-3">
                        <h2 className="font-semibold text-lg">
                            Trabalho de conclusão de curso - Site para ensino aprendizagem
                            de Algoritmos de Exclusão Mútua Utilizando Explorable
                            Explanations para Sistemas Distribuídos
                        </h2>
                        <p className="mt-2 text-sm">
                            Desenvolvimento de uma página web para ensino aprendizagem de
                            algoritmos de exclusão mutua, utilizando a técnica de
                            explorable explanations. Foi utilizado HTML, CSS e JavaScript
                            para o desenvolvimento da página. O site permite que o usuário
                            intereja com o algoritmo, podendo alterar os valores de
                            entrada e observar o comportamento do algoritmo. Link do
                            projeto: {''}
                            <a href="https://misterdoom4.github.io/TCC/"
                                className={`underline ${darkMode ? 'text-red-500' : ' text-blue-600'}`}>
                                Página Web para Ensino-Aprendizagem de Algoritmos de
                                Exclusão Mútua Utilizando Explorable Explanations para
                                Sistemas Distribuídos
                            </a>
                        </p>
                    </div>
                </section>
                <section className="mr-9">
                    <h1 className="font-semibold ml-9 mt-3 pt-3 border-t text-2xl uppercase text-blue-500">
                        Habilidades
                    </h1>
                    <div className="ml-9 mt-3">
                        <h2 className="font-semibold text-lg">Hard Skills</h2>
                        <ul className="mt-2 text-sm">
                            <li className="mb-2">Java/Spring</li>
                            <li className="mb-2">HTML/CSS/Tailwind</li>
                            <li className="mb-2">JavaScript/React/Next</li>
                            <li className="mb-2">Python</li>
                            <li className="mb-2">C#</li>
                            <li className="mb-2">Git</li>
                            <li className="mb-2">Kotlin/Flutter/Dart</li>
                            <li>SQL/MongoDb</li>
                        </ul>
                    </div>
                    <div className="ml-9 mt-3">
                        <h2 className="font-semibold text-lg">Soft Skills</h2>
                        <ul className="mt-2 text-sm">
                            <li>Trabalho em equipe</li>
                        </ul>
                    </div>
                </section>
                <section className="mb-8 mr-9">
                    <h1 className="font-semibold ml-9 mt-3 pt-3 border-t text-2xl uppercase text-blue-500">
                        Formação
                    </h1>
                    <ul className="ml-9 mt-2 text-sm">
                        <li className="mb-2">
                            <h2>Bacharelado em Engenharia da Computação</h2>
                            <p className=" text-xs">
                                Universidade da Grande Dourados - UFGD (2017 - 2023)
                            </p>
                        </li>
                    </ul>
                </section>
            </article>
        </section>
    );
}

export default Resume;

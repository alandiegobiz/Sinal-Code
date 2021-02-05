import React from 'react'
import CardStudy from '../../assets/components/CardStudy/index';

import './style.css';

import mercado from '../../assets/images/Study/mercado.png';
import salario from '../../assets/images/Study/salario.png';
import adaptacao from '../../assets/images/Study/adaptacao.png';


const Home = () => {
    return (
        <>
            <div className="section-1">
                <div className="container">
                    <main>
                        <section>
                            <h1>Curso de programação para surdos</h1>
                            <p>
                                A sinal Code desenvolveu uma plataforma digital de cursos na área de <br />
                                programação elaborados para atender exclusivamente a comunidade surda.
                            </p>
                            <p>
                                Todas as aulas são adaptadas com a língua de sinais (libras) e legenda, <br />
                                para um melhor desenvolvimento no ensino-aprendizagem.<br />
                            </p>
                            <p>
                                O curso ofertado é 100% gratuito. Contamos com o patrocínio de empresas <br />
                                parceiras nesta empreitada de cunho social.<br />
                            </p>
                        </section>
                    </main>
                </div>
                <div className="container-2">
                    <h1>Por que estudar programação?</h1>
                    <section className="card-study">
                        <CardStudy image={mercado} description="Alta demanda por profissionais no mercado de trabalho">
                            Alta demanda por profissionais <br /> no mercado de trabalho
                        </CardStudy>
                        <CardStudy image={salario} description="média salarial de R$ 5.000,00">
                            Média salarial de R$ 5.000,00
                        </CardStudy>
                        <CardStudy image={adaptacao} description="Fácil adaptação do surdo nos processos de trabalho">
                            Fácil adaptação do surdo <br />nos processos de trabalho
                        </CardStudy>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Home;

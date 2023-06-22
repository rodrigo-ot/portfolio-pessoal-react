import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'Formulário de Pesquisa',
    description: 'Este é um formulário de pesquisa simples e intuitivo que foi desenvolvido em HTML. É uma ferramenta eficiente para coletar informações valiosas e opiniões dos usuários.',
    image: 'https://legislacaoemercados.capitalaberto.com.br/wp-content/uploads/2022/11/Novo-formulario-de-referencia-demanda-atencao-01.png',
    link: 'https://github.com/rodrigo-ot/ProjetoJavaScript/tree/main/Formul%C3%A1rio%20de%20pesquisa'
  },
  {
    title: 'Porfólio Pessoal HTML',
    description: 'Este é um portfólio pessoal, criado em HTML, que destaca habilidades, experiências e projetos relevantes de um profissional ',
    image: 'https://guia.dev/assets/img/pictures/tech-documentation-min.png ',
    link: 'https://github.com/rodrigo-ot/ProjetoJavaScript/tree/main/Portf%C3%B3lio%20Pessoal'
  },
  {
    title: 'Página de Documentação Técnica',
    description: 'Esta página foi projetada para fornecer informações detalhadas sobre a linguagem de programação Java, suas funções e orientação a objetos',
    image: 'https://i.imgur.com/7Mj4uk5.png',
    link: 'https://github.com/Hiligh/Projeto-HTML--CSS/tree/main/Pagina%20de%20documenta%C3%A7%C3%A3o%20tecnica'
  }
];

const App = () => {
  return (
    <div>
      <section id="home" className="text-center">
        <h1>Bem-vindo ao meu Portfólio</h1>
      </section>

      <section id="projects" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Meus Projetos</h2>
          <Row>
            {projects.map((project, index) => (
              <Col key={index} md={4} className="mb-4">
                <div className="card">
                  <a href={project.link} target="_blank">
                  <img src={project.image} alt="Imagem do Projeto" className="card-img-top imagem" />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <footer className="bg-dark text-light text-center py-3">
        <p>Desenvolvido por Rodrigo</p>
      </footer>
    </div>
  );
};

export default App;

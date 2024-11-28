import React from 'react';

const projetos = [
  {
    nome: 'Projeto 1',
    descricao: 'Uma aplicação incrível.',
    imagem: '/assets/projeto1.png',
    link: 'https://github.com/meu-usuario/projeto1',
  },
  {
    nome: 'Projeto 2',
    descricao: 'Outra aplicação interessante.',
    imagem: '/assets/projeto2.png',
    link: 'https://github.com/meu-usuario/projeto2',
  },
];

function Portfolio() {
  return (
    <div>
      <h1>Meus Projetos</h1>
      {projetos.map((projeto, index) => (
        <div key={index}>
          <h2>{projeto.nome}</h2>
          <p>{projeto.descricao}</p>
          <img src={projeto.imagem} alt={projeto.nome} width="300" />
          <a href={projeto.link} target="_blank" rel="noopener noreferrer">
            Ver no GitHub
          </a>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;

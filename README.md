Nome do projeto: Cursos e Oficinas
Grupo 8: João Victor; Lucas; Joatan; Hugo

O intuito desse projeto é exibir uma lista acessível, com interface intuitiva, de cursos e oficinas disponíveis para alunos realizarem, facilitando o acesso a seus dados, bem como sua carga horária e vagas disponíveis.
O projeto, portanto, instiga os alunos à participarem mais e evita que os cursos e oficinas sejam desconhecidos por parte do grupo acadêmico.

Entidade principal: publicacao

Tecnologias utilizadas: 
    JavaScript, 
    Node.js, 
    Express, 
    Handlebars, 
    HTML, 
    CSS, 
    SQLite, 
    Sequelize, 
    npm

Pré-requisitos:
    Instalar projeto
    Instalar o node.js (que normalmente trás consigo o npm),
    Instalar dependências. No Git bash, o mínimo a se fazer é:
        npm install
        npm test (para verificar se está tudo funcionando)
        npm start
        Acessar o link http://localhost:3000 no navegador

Rotas disponíveis:
    /               exibe página inicial
    /saude          retorna o estado de aplicação do JSON
    /publicacoes         lista os publicacoes e oficinas
    /publicacoes/:id     exibe detalhes do registro por meio da id

Organização dos diretórios:
    database/ — armazena o banco de dados SQLite.
    
    models/ — define os modelos e a conexão com o banco.
    
    public/ — arquivos estáticos servidos ao navegador, como imagens e CSS.
    
        public/images/ — imagens usadas na interface.

        public/stylesheets/ — folhas de estilo.

    routes/ — define as rotas da aplicação: página inicial, saúde e publicações.

    test/ — contém os testes automatizados.

    views/ — páginas e componentes Handlebars.

        views/layouts/ — estrutura compartilhada das páginas.

        views/partials/ — componentes reutilizáveis, como os cartões.

        views/publicacoes/ — templates para listar e detalhar publicações.

Correspondência entre aplicação e os wireframes:
    GET /                   Página inicial
    GET /publicacoes             Listagem de publicacoes
    GET /publicacoes/:id    Destalhes de uma publicacao
    erro na rota            Tela de erro
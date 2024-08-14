Desenvolvi uma API RESTful seguindo o padrão CRUD (Create, Read, Update, Delete) com integração ao MongoDB e testes de integração.

1. Configuração Inicial do Projeto
Inicialização do Projeto: Criei uma pasta para o projeto e o inicializei com Node.js. Isso gerou o arquivo package.json, que gerenciou as dependências e scripts do projeto.
Instalação de Dependências: Instalei bibliotecas essenciais como Express para criar a API, Mongoose para interagir com o MongoDB, e dotenv para gerenciar variáveis de ambiente. Também instalei bibliotecas de desenvolvimento para testes, como Jest e Supertest.
2. Estruturação do Projeto
Organização das Pastas: Estruturei o projeto em pastas, incluindo pastas para modelos (models), controladores (controllers), rotas (routes) e testes (tests). Isso ajudou a manter o código organizado e modular.
3. Conexão com MongoDB
Configuração de Variáveis de Ambiente: Usei um arquivo .env para armazenar informações sensíveis como a URL do MongoDB e a porta em que o servidor rodou.
Configuração do Mongoose: Conectei o projeto ao MongoDB utilizando Mongoose, o que facilitou a manipulação de dados no banco de dados.
4. Criação dos Modelos (Models)
Definição dos Modelos: Criei modelos que representaram a estrutura dos dados no MongoDB. Por exemplo, um modelo de produto incluiu campos como preço, descrição e imagem.
5. Desenvolvimento dos Controladores (Controllers)
Implementação da Lógica CRUD: Nos controladores, implementei as funções que manipularam os dados no banco de dados, como criar, ler, atualizar e deletar registros. Cada função lidou com uma operação específica, como criar um novo produto ou obter uma lista de todos os produtos.
6. Configuração das Rotas (Routes)
Definição das Rotas: As rotas ligaram as solicitações HTTP às funções nos controladores. Por exemplo, uma rota POST /products foi ligada à função de criar um novo produto. Organizar as rotas ajudou a definir claramente quais URLs a API expôs e quais operações foram permitidas.
7. Configuração da Aplicação (App)
Configuração do Express: Configurei o Express, um framework que facilitou a criação de APIs, para gerenciar as rotas e conectar ao MongoDB. Isso envolveu criar um arquivo de configuração que importou todas as rotas e definiu a forma como a aplicação respondeu às solicitações HTTP.
8. Criação de Testes de Integração
Configuração de Testes: Para garantir que a API funcionasse corretamente em diferentes cenários, criei testes de integração. Esses testes simularam chamadas reais à API e verificaram se as respostas e os dados manipulados estavam corretos.
Automação de Testes: Utilizei Jest para automatizar a execução dos testes e Supertest para facilitar a criação de testes para as rotas da API.
9. Execução e Testes
Testes e Desenvolvimento: Durante o desenvolvimento, usei ferramentas como Nodemon para reiniciar automaticamente o servidor sempre que o código fosse alterado. Executei os testes regularmente para garantir que novas mudanças não quebrassem a API.

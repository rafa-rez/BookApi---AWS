# Avaliação Sprint 2 - 3

Avaliação da segunda e terceira sprints do programa de bolsas Compass UOL para formação em machine learning para AWS.

***

## Descrição do projeto

O projeto consiste em consumir rotas de uma API, utilizando parâmetros fornecidos pelo usuário ou não, utilizando da tecnologia Docker para rodar o projeto e o mesmo deve ter sido passado para uma EC2 dos serviços AWS.

***

## 📁 Estrutura do projeto

```plaintext
sprints-2-3-pb-aws-abril/
│
├── node_modules/           # Dependências do projeto gerenciadas pelo npm
│
├── public/                 # Arquivos públicos e estáticos
│   ├── css/
│   │   └── styles.css      # Estilos CSS
│   ├── js/
│   │   └── script.js       # Scripts JavaScript para o front-end
│   └── index.html          # Página HTML principal
│
├── src/                    # Código-fonte da aplicação
│   ├── controller/
│   │   └── bestSellers.js  # Controlador da rota bestSellers
│   │   └── names.js        # Controlador da rota names
│   │   └── overview.js     # Controlador da rota overview
│   │   └── reviews.js      # Controlador da rota review
│   ├── routes/             # Definições de rotas da aplicação
│   │   ├── best-sellers.js # Rota para best-sellers
│   │   ├── names.js        # Rota para nomes
│   │   ├── overview.js     # Rota para overview
│   │   └── reviews.js      # Rota para reviews
│   └── services/
│       └── service.js      # Serviços utilizados pelos controladores
├── .dockerignore           # Arquivo para ignorar arquivos e pastas no docker
├── .env                    # Arquivo de configuração de variáveis de ambiente
├── .gitignore              # Arquivo para ignorar arquivos e pastas no git
├── Dockerfile              # Arquivo de configuração do docker
├── package-lock.json       # Arquivo de bloqueio de versão gerado pelo npm
├── package.json            # Arquivo de configuração do npm com metadados do projeto
├── README.md               # Documentação do projeto (este arquivo)
└── server.js               # Ponto de entrada da aplicação
```
***

## 🧠 Lógica do projeto

1. Ao acessar a porta hosteando o projeto, o usuário se depara com um formulário onde o mesmo pode utilizar de uma box de opções para selecionar qual das rotas da API deseja consumir.

2. O usuário informa os parâmetros necessários para a API selecionada e clica no botão de enviar, o botão irá ativar um 'eventListener' que consumirá a API.

3. Os dados retornados pela API são apresentados na partição ao lado. 

***

## 🛠️ Como utilizar o sistema

1. Clone o repositório: 'git clone https://github.com/Compass-pb-aws-2024-ABRIL/sprints-2-3-pb-aws-abril.git'
2. Construa sua imagem: 'docker build -t nome-desejado'
3. Construa o contâiner: 'docker run -p 5000:5000 nome-desejado'
4. Após seguir os passos acima, você pode acessar o sistema em 'http://localhost:5000'

***

## ❌ Dificuldades no projeto

- Dificuldades ainda sendo encontradas..

## 👨‍💻 Developers do projeto.

- Rafael Alves Silva Rezende
- José Acerbi Almeida Neto
- Guilherme Padilha Jacon
- João Victor de Morais Reis

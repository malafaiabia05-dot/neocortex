# 🧠 Plataforma Cognitiva NeoCórtex

Este projeto foi desenvolvido utilizando as tecnologias fundamentais da Web, aplicando os conceitos estruturais, visuais e lógicos ministrados em sala de aula de forma integrada.

### 📁 Estrutura de Arquivos e Organização do Sistema:

- **`index.html` (Página Principal):** É a porta de entrada e a recepção do nosso site. Apresenta o NeoCórtex ao usuário, explica os pilares da avaliação e traz as recomendações e diretrizes de ambiente antes de iniciar o desafio. Conta também com uma central síncrona de suporte ao usuário.
- **`home.html` (Tela de Cadastro e Login):** Embora a criação de contas e validação de senhas não fossem itens obrigatórios pelo enunciado, foram desenvolvidas telas dinâmicas de Login e Cadastro para simular a segurança de um ambiente real de usuário.
- **`perfil.html` (Painel do Usuário):** É a tela que recebe o usuário após o cadastro realizado na `home.html`. Exibe os dados do participante (Nome e E-mail) de forma dinâmica, traz o histórico local de avaliações e oferece um widget interativo para a escolha de avatares/fotos de perfil padrão.
- **`teste.html` (O Questionário de QI):** O núcleo lógico do sistema. Contém o formulário com 3 questões de raciocínio e verificação progressiva. O script gerencia a paginação manual de telas (Questão Atual, botões *Back* e *Next*) e calcula os acertos.
- **`historico.html` (Mural de Resultados e Compartilhamento):** É a página responsável por consolidar a avaliação. Ela exibe uma tabela estatística detalhada explicando o significado clínico de cada faixa de QI. Através de persistência local, exibe os dados do último teste e gera o botão inteligente para o envio e compartilhamento do resultado com amigos via WhatsApp.
- **`style.css` (Onde está a boniteza da coisa!):** O arquivo de folha de estilos unificado que gerencia toda a identidade visual da plataforma. Ele padroniza a paleta de cores cinza moderna, transforma os formulários em cartões brancos flutuantes elegantes (Box Model), centraliza os layouts e aplica efeitos interativos avançados de transição de cores (`:hover`) nos botões.

### 🛠️ Habilidades Técnicas Aplicadas:

- **HTML5 Semântico:** Uso correto de tags estruturais (`<header>`, `<main>`), tabelas estruturadas (`<table>`), listas ordenadas/não-ordenadas (`<ul>`, `<ol>`), links internos/externos (`<a>`) e formulários inteligentes com validações nativas (`type="email"`, `type="password"`).
- **CSS3 Customizado:** Centralização em arquivo único externo, manipulação de Box Model (`padding`, `margin`, `border`), e estilização avançada de pseudo-classes (`:hover`).
- **JavaScript e DOM:** Lógica síncrona para ocultar/exibir blocos (`style.display`), alternância de classes no menu hambúrguer (`classList.toggle`) e injeção dinâmica de dados de strings na interface (`innerHTML`).
- **Web Storage (`localStorage`):** Persistência de dados local para gravação síncrona do nome do participante, pontuação estimada de QI e data automatizada de execução diretamente na memória do navegador.
- **Integração com APIs Externas:** Codificação de strings através do método HTTP GET (`encodeURIComponent`) para comunicação direta e envio de mensagens parametrizadas para a API oficial do WhatsApp.

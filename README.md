# POC: Implementação de WebSocket para Comunicação em Tempo Real

Este repositório contém uma prova de conceito (POC) para a implementação de WebSocket, uma tecnologia que permite comunicação bidirecional em tempo real entre clientes e servidores. Utilizando WebSocket, é possível criar aplicações web dinâmicas que requerem atualizações instantâneas sem a necessidade de recarregar a página, tornando a experiência do usuário mais fluida e responsiva.

## Objetivos da POC

- **Demonstrar a integração do WebSocket entre dois clientes e um servido Web Socket.**
- **Implementar um sistema de comunicação em tempo real, ideal para casos como notificações instantâneas, chats ou sistemas de monitoramento.**
- **Testar a eficiência e escalabilidade da comunicação via WebSocket em comparação com métodos tradicionais de requisições HTTP.**

## Tecnologias Utilizadas

- **Node**: Um ambiente de execução JavaScript do lado do servidor que permite a criação de aplicações web escaláveis e de alto desempenho. Node utiliza um modelo de I/O assíncrono e orientado a eventos, o que o torna ideal para aplicações que requerem comunicação em tempo real.
- **Express**: Um framework minimalista para Node.js que facilita a construção de aplicações web e APIs. Express oferece um conjunto robusto de recursos para gerenciar rotas, middleware e manipulação de requisições e respostas, tornando o desenvolvimento mais rápido e organizado.
- **ws**: Uma biblioteca leve e eficiente para WebSocket em Node.js. O ws fornece uma interface simples para criar servidores e clientes WebSocket, permitindo comunicação em tempo real entre o cliente e o servidor com facilidade.

## Como Executar

1. Clone este repositório.
2. Instale as dependências necessárias.
3. Execute o arquivo index.js.
4. Utilize a rota localhost em um cliente para observar a comunicação.

## Contribuições

Contribuições são bem-vindas! Se você tiver ideias para melhorar esta POC, sinta-se à vontade para abrir um issue ou enviar um pull request.
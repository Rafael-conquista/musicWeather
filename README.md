# musicWeather

Neste projeto, desenvolvi uma API que fornece recomendações de playlists baseadas na temperatura de uma cidade específica!

<h3>Funcionamento do Código:</h3>

- Recepção da Requisição: O usuário faz uma requisição à API informando a cidade desejada.
- Busca de Dados Meteorológicos: A API consulta o OpenWeather para obter a temperatura atual da cidade informada.
- Determinação do Gênero Musical: Baseado na temperatura recebida, a aplicação determina o gênero musical apropriado usando uma lógica predefinida.
- Recomendação de Playlist: A API consulta o Spotify para obter uma playlist recomendada para o gênero musical determinado.
- Resposta ao Usuário: A API retorna ao usuário uma mensagem personalizada junto com a URL da playlist recomendada.

<h3>Técnologias utilizadas:</h3>

<b>TypeScript</b>
<details>
  
- Segurança de Tipos: Aumenta a confiabilidade do código ao detectar erros de tipo durante o desenvolvimento.
  
- Melhor Manutenibilidade: Facilita a leitura e manutenção do código, especialmente em projetos maiores.

- Ferramentas de Desenvolvimento: Oferece recursos avançados de IDE, como autocompletar e navegação de código, que aumentam a produtividade.
</details>

<b>Axios</b>
<details>

- Facilidade de Uso: Simplifica a realização de requisições HTTP com uma API clara e intuitiva.
- Suporte a Promessas: Integrado com promessas, facilita o gerenciamento de operações assíncronas.
- Interceptores: Permite adicionar lógica de pré-processamento para todas as requisições ou respostas, útil para adicionar autenticação ou tratamento de erros centralizado.
  
</details>
<b>Jest</b>

<details>

- Simples e Completo: Framework de testes robusto que cobre testes unitários, de integração e de snapshot.
- Mocks e Espionagem: Facilidade em criar mocks e espiões, essencial para testar componentes isoladamente.
- Performance: Executa testes rapidamente e em paralelo, otimizando o tempo de feedback durante o desenvolvimento.
  
</details>

<b>Express</b>
<details>

- Minimalista e Flexível: Framework web minimalista que permite construir rapidamente APIs RESTful.
- Middleware: Sistema de middleware robusto que permite adicionar facilmente funcionalidades como autenticação, log, etc.
- Comunidade Ativa: Grande ecossistema de plugins e middlewares disponíveis, com extensa documentação e suporte comunitário.
  
</details>

**EXEMPLO DE REQUISIÇÃO:**

[http://18.229.118.160:3000/api/music/Salvador](http://18.229.132.1:3000/api/music/sao%20paulo)

obs: essa rota está disponível para o acesso a partir da ec2 da aws

{

    "message": "Olá! em Sao Paulo está 17.69°, um ótimo clima para ouvir playlists de rock, recomendo ouvir a playlist abaixo ⬇️",
    "playlist": "https://open.spotify.com/playlist/37i9dQZF1DXcmaoFmN75bi"

}

**Integração com APIs Externas:**
- OpenWeather API: Uma API com diversas utilidades, principalmente focada na avaliação do clima.
- Spotify API: Uma API muito útil, disponibilizando várias features para aplicações.

**O código foi estruturado seguindo as melhores práticas de desenvolvimento de software:**

- Modularidade: Cada funcionalidade principal (buscar temperatura, recomendar playlists) foi separada em módulos distintos, facilitando a manutenção e a escalabilidade.
- Tratamento de Erros: Implementamos um robusto tratamento de erros para garantir que falhas nas APIs externas ou outras partes do sistema não comprometam a experiência do usuário.
- Teste Automatizado: testes automatizados para validar as principais funcionalidades do sistema, garantindo a qualidade do código e facilitando a detecção de bugs.

**Um pouco mais sobre os testes automatizados:**
- Testes focados em cada requisição que podemos vir a realizar para nossa API externa e verificando se o seu funcionamento está satisfatório.
- Testes visando avaliar todas as possibilidades, sendo abrangente para cada possível playslist a ser retornada(uma para cada gênero musical)

Para ser possível manter conceitos como Latência, Resiliência, Segurança e Escalabilidade, Acredito que uma ótima escolha seja a utilização dos serviços da AWS.
**Citando um pouco mais a fundo sobre cada um destes tópicos:**

- Latência: AWS possui uma rede global de data centers, permitindo selecionar regiões próximas aos usuários finais, resultando em baixa latência e rápida resposta.

- Resiliência: A infraestrutura da AWS é altamente disponível, com suporte para múltiplas zonas de disponibilidade (AZs) e Auto Scaling, garantindo que suas aplicações permaneçam operacionais mesmo durante falhas.

- Segurança: AWS oferece ferramentas robustas de segurança e conformidade, incluindo gerenciamento granular de acesso, criptografia de dados e auditorias de segurança, protegendo suas informações sensíveis.

- Escalabilidade: Com a capacidade de escalar recursos quase ilimitadamente, AWS permite que suas aplicações se adaptem automaticamente às variações de demanda, assegurando desempenho consistente durante picos de tráfego.

Optei por utilizar o Amazon EC2 para hospedar a API porque ele oferece um grande controle e flexibilidade sobre a configuração do servidor, o que é essencial para atender às necessidades específicas da aplicação. Com o EC2, posso escolher o tipo de instância ideal, ajustar a capacidade de acordo com a demanda e configurar o ambiente de execução exatamente como necessário. Além disso, o EC2 permite fácil integração com outros serviços da AWS, garantindo alta disponibilidade, segurança robusta e escalabilidade automática. Essa abordagem garante que a API possa operar de forma eficiente e segura

**Mas existem algumas outras possibilidades como:**
- Amazon API Gateway: Facilita a criação, publicação, manutenção, monitoramento e proteção de APIs em qualquer escala.
- AWS Elastic Beanstalk: Simplifica o processo de implantação e escalonamento de aplicações web, suportando várias linguagens e plataformas, com gerenciamento automático de recursos subjacentes.

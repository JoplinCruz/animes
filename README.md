# Projeto Mundo Anime
Projeto Imersão Dev com Google Gemini.

## Descrição

Este projeto é um buscador de animes desenvolvido em HTML, CSS e JavaScript. Ele permite que os usuários busquem animes por título, gênero, autor, entre outros critérios, e exibe os resultados de forma organizada e intuitiva.

## Funcionalidades

* **Busca:** Permite buscar animes por título, sinopse e outros critérios.
* **Filtragem:** Filtra os resultados por gênero, autor, ano e estúdio.
* **Destaque de termos:** Destaca os termos de busca nos resultados para facilitar a leitura.
* **Detalhes do anime:** Exibe informações detalhadas sobre cada anime, como sinopse, personagens, etc.
* **Favoritos:** (A ser implementado) Permite adicionar animes aos favoritos.

## Tecnologias Utilizadas

* **HTML:** Estrutura da página.
* **CSS:** Estilização da página.
* **JavaScript:** Lógica da aplicação.
* **API Jikan:** Fonte de dados sobre animes.

Jikan é uma API PHP & REST de código aberto para a “comunidade e banco de dados de anime + mangá online mais ativa” — MyAnimeList.net. Ela analisa o site para satisfazer a necessidade de uma API.

Apesar do projeto oferecer a alternativa de busca pela API Jikan, está configurado para busca local.

## Estrutura

Animes:

* buscarAnime: Realiza a busca nos dados locais (se houver) com base nos critérios definidos (autor, gênero, etc.).
* buscarAnimeAPI: Faz uma requisição à API Jikan para buscar animes, filtrando os resultados e exibindo-os.
* filtrar: Filtra os animes com base nos critérios definidos pelo usuário.
* relevancia: Calcula a relevância de cada resultado de busca com base na ocorrência das palavras-chave no título e na sinopse.
* destacarTermos: Destaca os termos de busca (como nomes de personagens) dentro do texto da sinopse.
* adicionarFavorito/removerFavorito: Adiciona ou remove animes aos favoritos (implementação ainda não detalhada).
* resultadoBusca: Exibe os resultados da busca na interface.
* resultadoNulo: Exibe uma mensagem quando não há resultados.

Principal:

* iniciar: Inicializa a aplicação, adicionando eventos aos elementos da interface.
* buscar: Inicia a busca ao clicar no botão, validando a entrada do usuário e chamando as funções da classe Animes.

## Fluxo

1. O usuário digita um termo de busca e clica no botão.
2. A função buscar da classe Principal é chamada.
3. A função buscarAnimeAPI da classe Animes faz a requisição à API e filtra os resultados.
4. Os resultados filtrados são passados para a função resultadoBusca que atualiza a interface.

## Como Usar

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Digite o nome do anime que você deseja buscar no campo de pesquisa e clique no botão "Procurar".

## Deploy

* https://animes-psi.vercel.app/ - versão arquivo local.
* https://animes-api.vercel.app/ - versão API Jikan

## Contribuições

Contribuições são bem-vindas! Para contribuir com este projeto, siga estes passos:

1. Fork este repositório.
2. Crie um novo branch para sua feature.
3. Faça suas alterações.
4. Crie um pull request.

## Próximos Passos

* **Implementar a funcionalidade de favoritos:** Permitir que os usuários adicionem animes à sua lista de favoritos.
* **Melhorar a interface do usuário:** Tornar a interface mais intuitiva e visualmente agradável.
* **Adicionar mais funcionalidades:** Implementar funcionalidades como ordenação dos resultados, sugestões de busca e integração com outras APIs.

## Licença

Este projeto está licenciado sob a licença MIT.

## Autores

* **Joplin Cruz** - Desenvolvedor principal

## Agradecimentos

Agradeço à @AluraOnline e ao @GoogleBrasil pela motivação e repasse de conhecimento nessa Imersão Dev com Google Gemini, em especial à Rafaella Ballerini - Instrutora front-end @Alura, Guilherme Lima - Tech Educator e Professor na Alura e na USP, e Luciano Martins - Developer Advocate, Google IA. À comunidade open source pelas diversas bibliotecas e ferramentas e por todo o trabalho para o desenvolvimento de um mundo livre.




class Animes {

    constructor(autor, genero, ano, estudio) {

        // Definições do construtor
        this.resultadosPesquisa = document.getElementById("resultados-pesquisa");
        this.autor = autor;
        this.genero = genero;
        this.ano = ano;
        this.estudio = estudio;
        // Inicializa a variável criterios com indicações dos filtros de busca
        this.criterios = {
            genero: this.genero,
            autor: this.autor,
            estudio: this.estudio,
            ano: this.ano,
        };

        // Variável que recebe o texto da campo de entreda
        this.minhaBusca = "";
    }

    // Função inicial da busca dos animes
    buscarAnime(minhaBusca) {

        // registra a variável minhaBusca no construtor da classe
        this.minhaBusca = minhaBusca;

        //filtragem
        let animesCriterios = this.filtrar(animes);

        // declara a variável pesquisa com o resultado da busca dos títulos e das sinopses
        const pesquisa = animesCriterios.filter(anime => anime.titulo.toLowerCase().includes(minhaBusca) || anime.sinopse.toLowerCase().includes(this.minhaBusca));

        // Vereifica se a pesquisa é válida
        if (pesquisa.length) {
            // Encaminha os dados válidos
            this.resultadoBusca(pesquisa);
        } else {
            // Direciona para tratamento inválido
            this.resultadoNulo(404);
        }
    }

    // Função de busca através da api
    // Função assíncrona para espera do resultado
    async buscarAnimeAPI(minhaBusca) {

        this.minhaBusca = minhaBusca;

        // Inicializa variável api linkando com a url base
        const api = await axios.get(`https://api.jikan.moe/v4/anime?q=${minhaBusca}&swf`);
        // Variável para armazenamento do resultado da busca pela api
        let buscaAPI = [];

        // Decompondo a API
        api.data.data.forEach(jikan => {

            // registrar os dados da array genero
            let generos = [];
            jikan.genres.forEach(genre => {
                generos.push(genre.name);
            });

            // Registrar os licencciadores
            let autor = "";
            // Verifica se existe conteúdo
            if (jikan.licensors.length != 0) {
                autor = jikan.licensors[0].name;
            }

            // Registra a produtora do anime
            let estudio = "";
            if (jikan.studios.length != 0) {
                estudio = jikan.studios[0].name;
            }

            // Registra na variável anime as informações exfiltradas
            let anime = {
                titulo: jikan.title_english,
                ano: jikan.year,
                imagem: jikan.images.jpg.image_url,
                video: jikan.trailer.url,
                autor: autor, // array[0].name
                estudio: estudio, // array[0].name
                genero: generos, //array.name
                status: jikan.status,
                personagens: [],
                sinopse: jikan.synopsis,
                link: jikan.url
            };

            // Finalmente adiciona à lista previamente criada
            buscaAPI.push(anime);
        });

        // chama a função de filtragem segundo os critérios definidos
        let pesquisa = this.filtrar(buscaAPI);

        // Envia para a função de exibição dos resultados
        // Antes, porém, verifica se os dados são válidos
        if (pesquisa.length) {
            this.resultadoBusca(pesquisa);
        } else {
            this.resultadoNulo(404);
        }
    }

    filtrar(meusAnimes) {

        // retorna lista animes filtrada segundp a ordem dos criterios admitidos: genero, autor, estudio e ano.
        return meusAnimes.filter(anime => {
            return (
                (!this.criterios.genero || anime.genero.includes(this.criterios.genero)) &&
                (!this.criterios.autor || anime.autor.toLowerCase().includes(this.criterios.autor.toLowerCase())) &&
                (!this.criterios.estudio || anime.estudio.toLowerCase().includes(this.criterios.estudio.toLowerCase())) &&
                (!this.criterios.ano || anime.ano === this.criterios.ano)
            );
        });
    }

    relevancia(pesquisa) {

        // calcula pontuação de relevância
        pesquisa.forEach(anime => {
            anime.score = (anime.titulo.toLowerCase().match(new RegExp(this.minhaBusca, "gi")) || []).length +
                (anime.sinopse.toLowerCase().match(new RegExp(this.minhaBusca, "gi")) || []).length
        });

        // ordena os resultados por pontuação decrescente
        pesquisa.sort((a, b) => b.score - a.score);

        // retorna o resultado da pesquisa em ordem decrescente
        return pesquisa;
    }

    // Função para destacar palavras chaves dentro do texto: usado principalmente para destacar os nomes de alguns personagens
    destacarTermos(texto, termos) {

        // itera os termos a destacar (nome de personagem, autor, estudio...) na variável termo
        termos.forEach(termo => {
            // função RegExp para elaborar expressão de busca dentro do texto, atribuída à variável destacarTexto
            let destacarTexto = new RegExp(termo.name, "gi");
            // busca no texto todas as ocorrências contida em destacarTexto substituindo pelo mesmo termo evidenciado pela tag <b>
            let textoDestacado = `<b>${termo.name}</b>`
            texto = texto.replace(destacarTexto, textoDestacado);
        });

        //retorna o texto com os termos destacados
        return texto;
    }

    adicionarFavorito(anime) {

        // adicionar um anime aos favoritos ( precisa implementar o ícone favoritos )
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        favoritos.push(anime);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    removerFavorito(anime) {

        // remover um anime dos ítens favoritos
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        favoritos = favoritos.filter(favorito => favorito.titulo != anime.titulo);
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }

    // Função para mostrar os resultados obtidos da pesquisa
    resultadoBusca(pesquisa) {

        // Reset dos valores do elemento resultados pesquisa
        this.resultadosPesquisa.innerHTML = "";
        this.resultadosPesquisa.classList.add("resultados-pesquisa");

        // Decomposiç~ao dos ítens da pesquisa
        pesquisa.forEach(anime => {

            // Atribui à variável sinopse o rsultado do destacameto do texto com os nomes dos personagens
            let sinopse = this.destacarTermos(anime.sinopse, anime.personagens);

            // Escreve os elementos da lista de gêneros numa linha de parágrafo
            let genero = "";
            for (let i = 0; i < anime.genero.length; i++) {
                genero += anime.genero[i];
                if (i < anime.genero.length - 1) {
                    genero += ", ";
                }
            }

            // lista os personagens e suas devidas descrições em elementos de parágrafo dentro de uma tag <div> para serem exibidos.
            let personagens = "";
            anime.personagens.forEach(personagem => {
                personagens += `<p><b>${personagem.name}</b>: ${personagem.description}</p>`
            });

            // Composição final dos elementos dentro da variável blocoPesquisa
            let blocoPesquisa = `
                <div class="item-resultado">
                    <div class="row">
                        <div class="capa">
                            <img class="imagem-capa" src="${anime.imagem}" alt="${anime.titulo}">
                        </div>
                        <div class="conteudo">
                            <div>
                                <h2>
                                    <a href="${anime.link}" target="_blank">${anime.titulo}</a>
                                </h2>
                            </div>
                            <div>
                                <div class="credito">
                                    <p>autor: ${anime.autor}.</p>
                                    <p>ano de lançmento: ${anime.ano}.</p>
                                    <p>gênero: ${genero}</p>
                                    <p>estudio: ${anime.estudio}.</p>
                                    <p>situação: ${anime.status}.</p>
                                </div>
                                <p class="descricao-meta">
                                    ${sinopse}.
                                </p>
                                <div class="personagens">
                                    ${personagens}
                                </div>
                                <a href="${anime.link}" target="_blank">Mais informações</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Inserção do bloco dentro do elemento de exibição da página
            this.resultadosPesquisa.innerHTML += blocoPesquisa;
        })
    }

    // Função para exibir mensagens caso obtenha valores nulos na pesquisa.
    resultadoNulo(codigo) {

        // Inicialização das variáveis para exibir a mensagem
        let div = document.createElement("div");
        let p = document.createElement("p");
        let mensagem = "";

        // Verificação do código sugerido para cada situação
        switch (codigo) {
            // clique no logotipo retornando o reset das informações e estado original da página
            case 0:
                this.resultadosPesquisa.innerHTML = "";
                this.resultadosPesquisa.classList.remove("resultados-pesquisa");
                return;
            // campo vazio: retorna mensagem informativa com indicação do que fazer
            case 500:
                mensagem = "Campo vazio. Favor digite algo para realizar a busca.";
                break;
            // ítem não encontrado: retorna mensagem procurando incentivar a continuar a busca
            case 404:
                mensagem = "Ítem nào encontrado. Tente com outra palavra, talvez você consiga!";
                break;
        }

        // Inicialização do elemento de exibição
        this.resultadosPesquisa.innerHTML = "";
        this.resultadosPesquisa.classList.add("resultados-pesquisa");

        // Atribuição da mensagem ao elemento exibidor
        p.textContent = mensagem;
        this.resultadosPesquisa.appendChild(div).appendChild(p);

        // this.resultadosPesquisa.innerHTML = `
        //     <div>
        //         <p>${mensagem}</p>
        //     </div>`
        ;
    }
}

class Principal {

    // Definição do construtor
    constructor() {

        // Variáveis iniciais
        this.logotipo = document.getElementById("titulo");
        this.botaoProcurar = document.getElementById("botao-procurar");
        this.campoPesquisa = document.getElementById("campo-pesquisa");

        // Instanciamento da classe Animes
        this.animes = new Animes();

        // Declaração da variável de busca
        this.minhaBusca = "";
    }

    // Função inicial do processo
    iniciar() {

        //Adicionar evento de click do boão do mouse no botão de busca
        this.botaoProcurar.addEventListener("click", () => {
            this.buscar();
        });

        // Adiciona evento de click do botão do mouse no logotipo do site para retornar estado original
        this.logotipo.addEventListener("click", () => {
            this.campoPesquisa.value = "";
            this.minhaBusca = "";
            this.animes.resultadoNulo(0);
        });
    }

    // Função para iniciar a busca
    buscar() {

        // Verifica se o campo é válido
        let palavraChave = this.campoPesquisa.value;
        if (!palavraChave) {
            this.animes.resultadoNulo(500);
            return;
        }

        // Converte todas as letras em caixa baixa
        this.minhaBusca = palavraChave.toLowerCase();
        // Inicializa a busca
        this.animes.buscarAnimeAPI(this.minhaBusca);
    }
}

// Instanciamento da classe Principal
let principal = new Principal()
// Rodando a aplicação
principal.iniciar();



const animes = [
    {
        titulo: "Chainsaw Man",
        ano: 2020,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/4/49/Chainsaw_Man_-_Capa_-_Volume_1.jpg",
        autor: "Tatsuki Fujimoto",
        estudio: "Mappa",
        genero: ["ação", "aventura", "fantasia sombria", "sobrenatural", "comédia de terror"],
        status: "finalizado",
        personagens: [
            { name: "Denji", description: "Quando menino, herda a dívida de seu pai da yakuza após sua morte. Depois de conhecer o Demônio da Motoserra, Pochita, torna-se um Caçador de demônios para a yakuza numa tentativa de quitar sua dívida. Após a yakuza, que estava sob o controle do Demônio dos Zumbis, traí-lo, ele morre, e Pochita se torna seu coração, cumprindo um contrato com Denji - ao tornar-se seu coração, o garoto mostra a Pochita seus sonhos duma vida normal. Depois disso, pode-se transformar no híbrido demônio-humano conhecido como Chainsaw Man (ou Homem-Motosserra em português) puxando a corda em seu peito. Depois de conhecer Makima, torna-se um Caçador de Demônios da Segurança Pública para viver como um humano. Sua principal motivação é sua atração romântica e sexual por Makima." },
            { name: "Makima", description: "Uma mulher misteriosa que parece ter por volta de vinte anos. É uma Caçadora de Demônios da Segurança Pública, que tomou Denji como seu animal de estimação humano. Makima é astuta, inteligente e manipuladora, controlando Denji tirando proveito de sua atração por ela com promessas dum relacionamento romântico e sexual, enquanto o ameaça de extermínio se ele lhe desobedecer, embora Denji realmente a ame, Makima é apenas cativada pelo Chainsaw Man no corpo de Denji, para ser mais preciso, em seu coração. Em grande parte da história, seus objetivos são desconhecidos e sua lealdade à humanidade é um tanto ambígua. Mais tarde, é revelada como o Demônio do Controle, que encarna o medo do controle e busca usar o poder do Chainsaw Man para criar um mundo sem sofrimento. Também revela-se que Makima foi o cérebro por trás dos infortúnios que aconteceram a Denji durante a série. Depois de ser morta por Denji, renasceu como uma criança chamada Nayuta, e colocada aos cuidados de Denji para que ele a possa criar para ser uma pessoa melhor do que ela era em sua vida passada." },
            { name: "Aki Hayakawa", description: "Um Caçador de Demônios de Segurança Pública, trabalhando sob o esquadrão especial da Divisão 4 de Makima. Tem um contrato com o Demônio da Maldição e o Demônio do Futuro, permitindo-lhe usar um poderoso espadim em troca de sua vida e ver alguns segundos no futuro. Tivera um contrato anterior com o Demônio da Raposa, permitindo-lhe evocar sua cabeça gigante por partes de seu corpo. Aki é geralmente uma pessoa muito estoica, agindo de forma madura e confiável quando está com seus companheiros caçadores de demônios, mas é bastante emotivo e compassivo, extravasando seus sentimentos quando está sozinho. Apesar de seus confrontos com eles, realmente se preocupa com Denji e Power vendo-os como amigos queridos, e está disposto a sacrificar-se por eles. É morto enquanto protegia Makima e estava possuído pelo Demônio das Armas de Fogo, tornando-se assim o Infernal das Armas de Fogo, que Denji é forçado a matar. Mais tarde, é revelado que Makima planejava matá-lo como parte de seu plano para destruir a vida de Denji." },
            { name: "Power", description: "Uma infernal de sangue e uma Caçadora de Demônios da Segurança Pública que faz parte do esquadrão especial de Makima. Power parece uma jovem com cabelos loiros que desce até o meio das costas. Como um demônio, tem chifres vermelhos claros projetando-se do topo de sua cabeça. Adora violência e é infantil, gananciosa, quase totalmente automotivada e disposta a prejudicar os outros para sua própria satisfação. Power preocupa -se profundamente com seu gato, Miauzinho, em um ponto disposto a sacrificar a vida de Denji para salvá-lo do Demônio do Morcego. Ela preocupa-se profundamente com Denji e Aki, seus primeiros amigos verdadeiros. Mais tarde, é morta por Makima na frente de Denji, como parte de seu plano para acabar com Denji, dando-lhe felicidade e, em seguida, tirando-lhe. A Power revive como o Demônio de Sangue do sangue de Denji, mas é mortalmente ferida por Makima novamente. Antes que ela morra, Power faz um contrato com Denji - em troca de seu sangue, pede a Denji para encontrar o Demônio de Sangue renascido e transformá-la de volta em Power para que possam ser amigos novamente." }
        ],
        sinopse: "Chainsaw Man é um anime que tece uma narrativa visceral e impactante mesclando elementos de ação, horror e drama psicológico. A história gira em torno de Denji, um jovem que vive em condições miseráveis, aterrorizado por dívidas e pela vida. Seu único companheiro é Pochita, um demônio motosserra com quem ele forma uma parceria única. Chainsaw Man é uma obra que desafia os limites do anime, com uma estética visual impactante e uma narrativa que não tem medo de chocar. Se você busca uma experiência anime intensa e memorável, essa série é imperdível.",
        link: "https://pt.wikipedia.org/wiki/Chainsaw_Man"
    },
    {
        titulo: "Ataque dos Titãs",
        nao: 2013,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/e/e7/SnK_Volume1.png",
        autor: "Hajime Isayama",
        estudio: "Wit Studio",
        genero: ["ação", "fantasia sombria", "pós-apocalíptico"],
        status: "finalizado",
        personagens: [
            { name: "Eren Yeager", description: 'Eren é um adolescente que jura vingança contra enormes criaturas humanoides devoradoras de homens conhecidas como Titãs, que forçaram o que resta da raça humana a viver em cidades muradas e devoraram sua mãe enquanto destruíam sua cidade natal no distrito de Shiganshina, em Wall Maria. Para derrotar os Titãs, Eren se alista no Exército e se junta ao Survey Corps — um grupo de elite de soldados que lutam contra Titãs fora dos muros e também estudam a fisiologia dos Titãs para saber o que eles estão lutando. Conforme a história avança, Eren ganha o poder de se tornar um Titã mais tarde identificado como "Titã de Ataque".' },
            { name: "Mikasa Ackerman", description: 'Mikasa é apresentada como uma cidadã da Ilha Paradis que vive com o protagonista, Eren Yeager , e sua família, que a acolheu após a morte de seus pais em uma tentativa de sequestro. Quando criaturas gigantes conhecidas como Titãs invadem a área e comem a mãe de Eren, Mikasa e Eren se tornam membros do Exército e se juntam ao Survey Corps — um grupo de elite de soldados que lutam contra Titãs fora dos muros e também estudam a fisiologia dos Titãs para saber o que eles estão lutando. A principal motivação de Mikasa para lutar é seu amor por Eren, de quem ela é extremamente protetora.' },
            { name: "Armin Arlert", description: 'Armin é o outro amigo de infância de Eren e Mikasa. Seus pais tentaram se aventurar além da Muralha criando um balão de ar quente , mas foram descobertos e mortos pelo Primeiro Esquadrão Interior da Polícia Militar, deixando Armin para ser criado por seu avô . O avô de Armin possuía secretamente um livro ilegal contendo informações sobre o mundo além das Muralhas, pelo qual Armin ficou fascinado e mostrou a Eren, acendendo seu desejo de ver o mundo exterior. Após a queda da Muralha Maria, o avô de Armin foi enviado junto com 1/5 da população (principalmente refugiados da Muralha Maria) em uma operação de alto risco para "recuperar a Muralha Maria" e morreu, deixando Armin órfão. Depois de se juntar ao Corpo de Treinamento com Eren e Mikasa, Armin inicialmente teve um complexo de inferioridade sobre como ele ficou para trás de seus companheiros em combate e resistência, mas sua confiança cresceu lentamente quando ele percebeu que poderia usar seu cérebro e habilidades estratégicas para ajudá-los. Durante uma batalha em Shiganshina, Armin surge com um plano para capturar Bertolt, mas é mortalmente ferido pelas queimaduras graves que sofreu. Levi salva Armin injetando-lhe soro de Titã em vez de Erwin, e Armin então adquire o poder do Titã Colossal comendo Bertolt.' }
        ],
        sinopse: "Em um mundo onde a humanidade vive confinada dentro de grandes muros para se proteger de titãs gigantescos, Eren Yeager jura exterminar todos eles após uma tragédia. Acompanhe a jornada de Eren e seus amigos em busca de liberdade e vingança em uma história épica repleta de ação, mistério e drama.",
        link: "https://pt.wikipedia.org/wiki/Ataque_dos_Titãs"
    },
    {
        titulo: "Demon Slayer",
        ano: 2019, // Ano de lançamento do anime
        imagem: "https://upload.wikimedia.org/wikipedia/pt/4/45/Kimetsu_no_Yaiba_%28capa_do_volume_1%29.png",
        autor: "Koyoharu Gotouge",
        estudio: "Ufotable",
        genero: ["ação", "aventura", "sobrenatural"],
        status: "finalizado",
        personagens: [
            { name: "Tanjiro Kamado", description: "Protagonista que se torna um caçador de demônios para salvar sua irmã Nezuko." },
            { name: "Nezuko Kamado", description: "Irmã de Tanjiro, transformada em demônio, mas mantém sua humanidade." },
            { name: "Zenitsu Agatsuma", description: "Um caçador de demônios covarde e inseguro, mas com um grande potencial." },
            { name: "Inosuke Hashibira", description: "Um caçador de demônios selvagem e impulsivo, criado por javalis." }
        ],
        sinopse: "Em uma época de demônios, Tanjiro Kamado, um jovem carvoeiro, encontra sua família massacrada e sua irmã mais nova transformada em um demônio. Determinado a reverter a maldição de sua irmã e vingar sua família, Tanjiro se torna um caçador de demônios, empunhando uma espada especial para derrotar as criaturas das trevas.",
        link: "https://pt.wikipedia.org/wiki/Kimetsu_no_Yaiba"
    },
    {
        titulo: "My Hero Academia",
        ano: 2016,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/5/5a/Boku_no_Hero_Academia_Volume_1.png",
        autor: "Kohei Horikoshi",
        estudio: "Bones",
        genero: ["ação", "fantasia científica", "comédia drmática", "super-herói"],
        status: "exibindo",
        personagens: [
            { name: "Izuku Midoriya", description: "Um jovem sem poderes que sonha em se tornar um herói." },
            { name: "Katsuki Bakugo", description: "Um rival de Izuku com um forte poder explosivo." },
            { name: "All Might", description: "O maior herói do mundo e mentor de Izuku." }
        ],
        sinopse: "Em um mundo onde a maioria das pessoas possui superpoderes, Izuku Midoriya sonha em se tornar um herói. Após um encontro com o maior herói, All Might, Izuku ganha a chance de realizar seu sonho.",
        link: "https://pt.wikipedia.org/wiki/My_Hero_Academia"
    },
    {
        titulo: "Naruto",
        ano: 2002,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/d/d2/Naruto_vol._01.jpg",
        autor: "Masashi Kishimoto",
        estudio: "Pierrot",
        genero: ["aventura", "comédia dramática", "fantasia"],
        status: "finalizado",
        personagens: [
            { name: "Naruto Uzumaki", description: "Um ninja órfão que busca reconhecimento e sonha em se tornar Hokage." },
            { name: "Sasuke Uchiha", description: "Rival de Naruto e membro do clã Uchiha." },
            { name: "Sakura Haruno", description: "Companheira de equipe de Naruto e Sasuke, com habilidades médicas." }
        ],
        sinopse: "Naruto Uzumaki, um jovem ninja, busca reconhecimento e sonha em se tornar o Hokage, o líder de sua vila. Acompanhe sua jornada em um mundo ninja cheio de aventuras e batalhas épicas.",
        link: "https://pt.wikipedia.org/wiki/Naruto"
    },
    {
        titulo: "Fullmetal Alchemist: Brotherhood",
        ano: 2009,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9f/Fullmetal_Alchemist.jpg",
        autor: "Hiromu Arakawa",
        estudio: "Bones",
        genero: ["ação", "aventura", "fantasia"],
        status: "finalizado",
        personagens: [
            { name: "Edward Elric", description: "Um alquimista que perdeu um braço e uma perna em um experimento para ressuscitar sua mãe." },
            { name: "Alphonse Elric", description: "O irmão mais novo de Edward, cuja alma foi presa em uma armadura." }
        ],
        sinopse: "Em um mundo onde a alquimia é uma ciência, os irmãos Elric tentam reverter um ritual proibido que deu errado, resultando na perda de seus corpos. Acompanhe sua jornada em busca da Pedra Filosofal, um artefato lendário que pode restaurar o que foi perdido.",
        link: "https://pt.wikipedia.org/wiki/Fullmetal_Alchemist:_Brotherhood"
    },
    {
        titulo: "Neon Genesis Evangelion",
        ano: 1995,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/3/3f/Neon-Genesis-Evangelion-Logo.jpg",
        autor: "Hideaki Anno",
        estudio: "Gainax",
        genero: ["mecha", "psicológico", "sci-fi"],
        status: "finalizado",
        cpersonagens: [
            { name: "Shinji Ikari", description: "Um adolescente introvertido que é recrutado para pilotar um Eva." },
            { name: "Rei Ayanami", description: "Uma piloto misteriosa e enigmática." }
        ],
        sinopse: "Em um futuro próximo, a humanidade enfrenta a ameaça de criaturas gigantescas conhecidas como Anjos. Shinji Ikari é recrutado para pilotar um Eva, uma máquina gigante criada para combater os Anjos, enquanto lida com seus próprios traumas e questionamentos sobre a existência.",
        link: "https://pt.wikipedia.org/wiki/Neon_Genesis_Evangelion"
    }
];

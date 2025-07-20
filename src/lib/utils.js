import london from "@/assets/committees/london.jpg";
import csh from "@/assets/committees/csh.jpg";
import war from "@/assets/committees/war.png";
import cij from "@/assets/committees/cij.jpg";
import senado from "@/assets/committees/senado.jpeg";
import oit from "@/assets/committees/oit.jpg";
import imprensa from "@/assets/committees/imprensa.jpg";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const events = {
    14: {
        title: "Simulação da ONU em destaque",
        description: "Participe da simulação da ONU com foco em mudanças climáticas.",
    },
    15: {
        title: "Palestra sobre Energias Renováveis",
        description: "Descubra as últimas tendências em energias renováveis com especialistas da área.",
    },
    16: {
        title: "Oficina de Reciclagem Criativa",
        description: "Aprenda técnicas inovadoras para reciclar materiais do dia a dia.",
    },
    17: {
        title: "Mesa Redonda: Futuro Sustentável",
        description: "Debata soluções para um futuro mais sustentável com convidados especiais.",
    },
    18: {
        title: "Feira de Inovação Ambiental",
        description: "Conheça startups e projetos inovadores voltados ao meio ambiente.",
    },
    19: {
        title: "Sessão de Cinema Ecológico",
        description: "Assista a documentários e filmes sobre questões ambientais globais.",
    },
    20: {
        title: "Workshop de Agricultura Urbana",
        description: "Descubra como cultivar alimentos em pequenos espaços urbanos.",
    },
    21: {
        title: "Caminhada Ecológica",
        description: "Participe de uma caminhada guiada por trilhas ecológicas locais.",
    },
    22: {
        title: "Competição de Ideias Verdes",
        description: "Apresente sua ideia inovadora para um mundo mais verde e concorra a prêmios.",
    },
    23: {
        title: "Painel sobre Políticas Ambientais",
        description: "Especialistas discutem políticas públicas para preservação ambiental.",
    },
    24: {
        title: "Aula Aberta: Mudanças Climáticas",
        description: "Entenda os impactos das mudanças climáticas em uma aula interativa.",
    },
    25: {
        title: "Mutirão de Limpeza",
        description: "Junte-se ao mutirão para limpar áreas públicas e conscientizar a comunidade.",
    },
    26: {
        title: "Exposição de Arte Sustentável",
        description: "Veja obras de arte feitas com materiais reciclados e sustentáveis.",
    },
    27: {
        title: "Encontro de Voluntários Ambientais",
        description: "Conecte-se com outros voluntários e saiba como ajudar o meio ambiente.",
    },
    28: {
        title: "Piquenique Orgânico",
        description: "Desfrute de um piquenique com alimentos orgânicos e atividades ao ar livre.",
    },
    29: {
        title: "Curso de Compostagem Doméstica",
        description: "Aprenda a transformar resíduos orgânicos em adubo para plantas.",
    },
    30: {
        title: "Festival da Sustentabilidade",
        description: "Participe de um festival com música, palestras e atividades ecológicas.",
    }
}

export const committees = [
    {
        title: " UNITED KINGDOM PARLIAMENT — THE 1984 MINER’S STRIKE",
        img: london,
        description: "Em 1984, os trabalhadores das minas de carvão do Reino Unido iniciaram a maior greve industrial do pós-Segunda Guerra Mundial, em protesto contra o governo de Margaret Thatcher e o fechamento planejado de 20 minas. A mobilização resultou em confrontos intensos entre grevistas e o governo, marcados por repressão policial. O comitê propõe aos delegados o desafio de debater políticas trabalhistas e os direitos dos trabalhadores frente às decisões governamentais. Os participantes deverão se posicionar entre o governo conservador ou os sindicatos e trabalhadores, defendendo seus interesses políticos e econômicos.",
        bulletPoints: [
            "Comitê de delegações individuais",
            "Realizado em língua inglesa",
        ]
    },
    {
        title: "CONSELHO DE SEGURANÇA HISTÓRICO — GUERRA DA BÓSNIA | 1993",
        img: csh,
        description: "Em meio à dissolução da Iugoslávia, a Guerra da Bósnia emergiu como um dos conflitos mais brutais da Europa. Sérvios, croatas e bósnios disputavam o controle do território sob liderança de figuras como Radovan Karadzic e Ratko Mladic. O comitê desafia os delegados a buscar soluções rápidas e eficazes para conter os massacres e atrocidades, debatendo o papel da comunidade internacional diante de crimes de guerra e violações de direitos humanos.",
        bulletPoints: [
            "Comitê em duplas"
        ]
    },
    {
        title: "GABINETE DE GUERRA — GUERRA IRÃ-IRAQUE | 1980",
        img: war,
        description: "O Oriente Médio foi palco de uma das guerras mais sangrentas da história: o conflito entre Irã e Iraque, iniciado em 1980 sob a liderança de Saddam Hussein. Em um contexto de instabilidade após a Revolução Iraniana e por disputas pelo controle do petróleo, o gabinete de guerra reunirá as mentes militares estratégicas de ambos os lados. Os delegados deverão traçar planos militares, formular alianças e definir estratégias para alcançar a vitória neste cenário de tensão geopolítica.",
        bulletPoints: [
            "Comitê de inscrição individual",
        ]
    },
    {
        title: "CORTE INTERNACIONAL DE JUSTIÇA — CONFLITO ARMADO NA REPÚBLICA DEMOCRÁTICA DO CONGO | 1999",
        img: cij,
        description: "Em 1999, a República Democrática do Congo denunciou Uganda na Corte Internacional de Justiça por violação de soberania, invasão territorial e exploração ilegal de recursos naturais. O comitê jurídico desafia os delegados a representarem a acusação, a defesa ou o corpo de juízes, construindo argumentos embasados no direito internacional. O julgamento envolverá discussões profundas sobre o uso da força, responsabilidade internacional e os limites do direito em contextos de guerra.",
        bulletPoints: [
            "Comitê de inscrição individual",
        ]
    },
    {
        title: "GABINETE DE CRISE & SENADO FEDERAL — PARALISAÇÃO NACIONAL DOS CAMINHONEIROS | 2018",
        img: senado,
        description: "Em 2018, a alta no preço do diesel após mudanças na política de preços da Petrobrás desencadeou uma greve nacional dos caminhoneiros, paralisando o Brasil e provocando desabastecimento generalizado. O comitê simula o Gabinete de Crise, liderado pelo Presidente da República, e o Senado Federal, que deverá propor soluções legislativas e executivas para conter a crise. Os delegados enfrentarão o desafio de restaurar a estabilidade política e econômica do país diante de uma paralisação sem precedentes.",
        bulletPoints: [
            "Comitê de inscrição individual",
        ]
    },
    {
        title: "ORGANIZAÇÃO INTERNACIONAL DO TRABALHO — TRABALHO ANÁLOGO À ESCRAVIDÃO NA INDÚSTRIA DA MODA | 2019",
        img: oit,
        description: "A globalização e o fast fashion expuseram uma realidade brutal na indústria da moda: trabalho análogo à escravidão, jornadas exaustivas e violações de direitos fundamentais em diversas etapas produtivas. O comitê da OIT reúne delegados para discutir mecanismos internacionais que garantam condições de trabalho decente e enfrentem a exploração na indústria têxtil. Caberá aos participantes formular soluções que conciliem direitos trabalhistas, interesses econômicos e responsabilidade social das grandes marcas.",
        bulletPoints: [
            "Comitê de inscrição individual",
        ]
    },
    {
        title: "IMPRENSA — COBERTURA DOS COMITÊS",
        img: imprensa,
        description: "A Imprensa no XIX MIRIN terá o papel de registrar e divulgar o andamento dos comitês, influenciando a opinião pública e interferindo indiretamente nas decisões políticas e diplomáticas. Além da cobertura jornalística, os delegados de imprensa também serão responsáveis pela divulgação do evento nas redes sociais oficiais do MIRIN. Este comitê proporciona aos participantes a experiência de atuar como o “quarto poder”, simulando o impacto dos meios de comunicação nos rumos da política e da diplomacia.",
        bulletPoints: [
            "Comitê de inscrição individual",
        ]
    },
];
export const faq = [
{ question: "O que é o MIRIN?", answer: "O MIRIN (Modelo Intercolegial de Relações Internacionais) é uma simulação acadêmica organizada por alunos da PUC-Rio, que reúne estudantes do Ensino Médio e Superior para representar países ou instituições em debates diplomáticos sobre temas internacionais. O objetivo é desenvolver habilidades como negociação, oratória, pensamento crítico e conhecimento sobre política global."},
{ question: " Quem pode participar do MIRIN?", answer: "Podem participar estudantes do Ensino Médio e do Ensino Superior de qualquer instituição, que tenham interesse em relações internacionais, política, direito ou áreas afins."},
{ question: "Como faço para me inscrever no MIRIN?", answer: "A inscrição é feita por meio das redes sociais do MIRIN. É necessário preencher um formulário, escolher um comitê e pagar a taxa de inscrição!"},
{ question: "O MIRIN é um evento pago?", answer: "Sim, há uma taxa de inscrição. Essa taxa ajuda a custear a organização, materiais, infraestrutura e premiações do evento. Informações detalhadas sobre valores e formas de pagamento são disponibilizadas no edital oficial."},
{ question: "Preciso ter conhecimento prévio sobre o tema do comitê para participar?", answer: "Ter conhecimento prévio é importante, mas não obrigatório. A organização disponibiliza materiais de estudo e guias para ajudar na preparação. Durante o evento, os participantes também aprendem muito com os debates e a interação com outros delegados."},
{ question: "Onde o evento acontece?", answer: "O MIRIN é realizado presencialmente no campus da PUC-Rio, no Rio de Janeiro, proporcionando uma experiência de imersão acadêmica e social aos participantes."},
{ question: "Posso escolher o comitê que quero participar?", answer: "Sim, durante a inscrição você poderá indicar sua preferência por comitê, mas a alocação final depende da disponibilidade."},
{ question: "O MIRIN oferece certificado de participação?", answer: "Sim, todos os participantes recebem certificado oficial emitido pela PUC-Rio, que pode ser útil para o currículo acadêmico e profissional."},
{ question: "Como posso me preparar para o MIRIN?", answer: "Estude o guia do seu comitê, pesquise sobre o tema e o país ou instituição que irá representar, pratique sua oratória e negociação, e participe de grupos de estudo ou simulados se possível."},
{ question: "Quais habilidades são desenvolvidas no MIRIN?", answer: "No MIRIN, você desenvolve habilidades de comunicação, negociação, pesquisa, pensamento crítico, trabalho em equipe e liderança. Além disso, ganha experiência prática em diplomacia e conhecimento aprofundado sobre temas internacionais atuais e históricos."}

]
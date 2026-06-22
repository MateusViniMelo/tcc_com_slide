# Roteiro de Apresentação — Defesa de TCC

**Trabalho:** Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade  
**Autor:** Mateus Vinicius Santiago Melo  
**Orientadora:** Marcelle Pereira Mota | **Coorientador:** André Avelino da Silva Neto  
**Instituição:** UFPA — Faculdade de Computação — Bacharelado em Sistemas de Informação

**Duração total:** 20 minutos | **19 slides** | **~63 s por slide** (média)

> Cada seção corresponde a um arquivo em `slides/` (`pagina1.html` a `pagina13.html` e `pagina15.html` a `pagina20.html` — o slide 14 foi removido). Cada slide traz duas versões: **Texto (20 min)** — versão calibrada para a apresentação oral — e **Texto expandido** — versão mais detalhada para estudo, ensaio e aprofundamento na defesa.

---

## Slide 1 — Capa ⏱ ~30 s

**Texto (20 min)**

Boa tarde, membros da banca, orientadora e coorientador. Sou Mateus Vinicius Santiago Melo, aluno de Sistemas de Informação da UFPA. Apresento o trabalho *Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade*, em coautoria com André Avelino da Silva Neto e Marcelle Pereira Mota. Trata-se de uma pesquisa em andamento que integra desenvolvimento de sistema, fundamentação em IHC e avaliação empírica com especialistas.

**Texto expandido**

Boa tarde, membros da banca, professora Marcelle, professor André e a todos presentes. Meu nome é Mateus Vinicius Santiago Melo, aluno do curso de Sistemas de Informação da Universidade Federal do Pará. Apresento hoje o trabalho intitulado *Mapa Cidadão: Uma Aplicação de Crowdsourcing com Ênfase em Espaciabilidade*, desenvolvido em coautoria com André Avelino da Silva Neto e Marcelle Pereira Mota, sob orientação da professora Marcelle e coorientação do professor André. O trabalho situa-se na interface entre Interação Humano-Computador, tecnologias cívicas e mapeamento urbano colaborativo. A fundamentação teórica e metodológica baseia-se no artigo *Caminhos para a Espaciabilidade* (IHC 2025), que propõe o critério de espaciabilidade e o MIE — Método de Inspeção da Espaciabilidade. Este TCC operacionaliza esses conceitos no Mapa Cidadão e estende a validação empírica do método, originalmente demonstrada no Google Maps, com três especialistas. Ao longo desta apresentação, percorro a fundamentação teórica, o problema investigado, o sistema desenvolvido, a metodologia de avaliação, os resultados obtidos e as contribuições e limitações do estudo.

---

## Slide 2 — Interação Humano-Computador (IHC) ⏱ ~40 s

**Texto (20 min)**

A IHC estuda o design e a avaliação de sistemas interativos, buscando torná-los usáveis e significativos. Critérios clássicos — usabilidade, experiência do usuário, acessibilidade e comunicabilidade — orientam a maior parte das avaliações. Porém, quando o sistema é um mapa interativo, nenhum deles responde de forma explícita se o design apoia o pensamento espacial. Instrumentos como o STAT medem habilidades do usuário, não qualidade do sistema. É nessa lacuna que se insere o conceito central deste trabalho.

**Texto expandido**

Para situar o trabalho, começo pela área de Interação Humano-Computador. A IHC estuda o design, a avaliação e a implementação de sistemas interativos, com o objetivo de tornar a tecnologia mais usável, acessível e significativa para as pessoas. Critérios clássicos de qualidade — usabilidade, experiência do usuário, acessibilidade e comunicabilidade — orientam a maior parte das avaliações de interface. A usabilidade relaciona-se à eficácia e eficiência na realização de tarefas; a UX incorpora dimensões subjetivas; a acessibilidade garante inclusão; a comunicabilidade investiga se a intenção do designer se transmite pelos signos da interface. Embora complementares e fundamentais, nenhum desses critérios aborda diretamente se o design favorece a análise, a interpretação e o raciocínio espacial sobre o território. Por outro lado, instrumentos como o STAT — *Spatial Thinking Ability Test* — medem habilidades cognitivas do usuário, não a qualidade do design do sistema. Quando o sistema em questão é cartográfico, é necessário perguntar não só se o usuário consegue completar tarefas, mas se a interface o ajuda a compreender, orientar-se e interpretar dados georreferenciados. É nessa lacuna que o conceito central deste trabalho — a espaciabilidade — se insere.

---

## Slide 3 — O Conceito de Espaciabilidade ⏱ ~45 s

**Texto (20 min)**

A espaciabilidade é proposta como critério de qualidade em IHC: o grau em que uma interface facilita a compreensão, a orientação e a interpretação das informações espaciais, apoiando o pensamento espacial do usuário. Ela complementa — e não substitui — os critérios clássicos. Formulada por Neto e Mota a partir do STAT, orienta o desenvolvimento e a avaliação do Mapa Cidadão.

**Texto expandido**

A espaciabilidade é proposta como um novo critério de qualidade em IHC. Ela designa o grau em que uma interface facilita a compreensão, a orientação e a interpretação das informações espaciais por parte do usuário, apoiando o pensamento espacial e a tomada de decisão informada a partir de dados georreferenciados. Diferente da usabilidade, da UX, da acessibilidade e da comunicabilidade — úteis, mas sem diretrizes explícitas para clareza espacial —, a espaciabilidade foca em como decisões de design, interação e representação cartográfica influenciam a interpretação do território. O conceito foi formulado por Neto e Mota como resposta à lacuna entre critérios de IHC e instrumentos como o STAT, que avaliam habilidades do usuário, não qualidade do sistema. A espaciabilidade complementa os critérios clássicos e se alinha aos Grandes Desafios da IHC-BR — especialmente GC1 e GC5, sobre novas abordagens teóricas e literacia de dados espaciais. Neste trabalho, ela orienta tanto o desenvolvimento do Mapa Cidadão quanto a aplicação do MIE.

---

## Slide 4 — Dimensões da Espaciabilidade (D1 a D3) ⏱ ~40 s

**Texto (20 min)**

Derivadas do STAT, o MIE organiza a análise em seis dimensões. As três primeiras: D1, compreensão de orientação e direção — interpretar posicionamento e rotas no território; D2, detecção de padrões espaciais — identificar concentrações e dispersões; D3, decisão sobre localização ideal — escolher locais com base em múltiplos critérios espaciais. No Mapa Cidadão, D1 e D2 foram priorizadas por estarem ligadas à compreensão de ocorrências urbanas.

**Texto expandido**

Para operacionalizar a espaciabilidade, Neto e Mota traduzem habilidades do STAT em seis dimensões analíticas de inspeção de interface. As três primeiras são: D1, compreensão de orientação e direção — interpretar direção, posicionamento e rotas no mapa; D2, detecção de padrões espaciais — identificar agrupamentos, dispersões e concentrações geográficas, como áreas com maior número de ocorrências; e D3, decisão sobre localização ideal — escolher locais com base em múltiplos critérios espaciais, útil para gestores que precisam priorizar intervenções. O avaliador prioriza dimensões conforme o contexto da aplicação — nem todo mapa exige todas as seis. No Mapa Cidadão, D1 e D2 foram priorizadas na avaliação, por estarem diretamente ligadas ao objetivo de compreender ocorrências urbanas distribuídas no espaço. A D3 permaneceu como referência para evoluções futuras do sistema.

---

## Slide 5 — Dimensões da Espaciabilidade (D4 a D6) ⏱ ~40 s

**Texto (20 min)**

Completando o quadro: D4, identificação de associações espaciais — detectar correlações entre fenômenos no território, como alagamentos e falta de pavimentação; D5, compreensão de sobreposição de camadas — raciocinar com múltiplas camadas geográficas, relevante para evoluções futuras; D6, interpretação de tipos espaciais — diferenciar pontos, linhas, polígonos e seus significados; no Mapa Cidadão, isso se traduz na legibilidade de ícones e marcadores por categoria. D4 e D6 também foram selecionadas, por refletirem decisões concretas de design do sistema.

**Texto expandido**

As demais dimensões completam o quadro analítico do MIE. A D4 trata da identificação de associações espaciais — detectar correlações ou relações entre fenômenos no mapa, como alagamentos e falta de pavimentação no mesmo bairro. A D5 refere-se à compreensão de sobreposição de camadas — raciocinar com múltiplas camadas e cruzamentos úteis, relevante quando o sistema incorporar, por exemplo, dados de escolas, postos de saúde ou infraestrutura de drenagem. A D6 aborda a interpretação de tipos espaciais — diferenciar pontos, linhas, polígonos e seus significados cartográficos; no contexto do Mapa Cidadão, essa dimensão se manifesta na clareza de ícones, cores e marcadores que distinguem categorias de ocorrência — alagamento, iluminação, lixo, pavimentação. No estudo, D4 e D6 também foram selecionadas para a avaliação, por refletirem decisões concretas de design: legenda e simbologia são elementos centrais da interface avaliada. D3 e D5 permaneceram como referência para evoluções futuras.

---

## Slide 6 — Método de Inspeção da Espaciabilidade (MIE) ⏱ ~50 s

**Texto (20 min)**

Para avaliar a espaciabilidade, adotamos o MIE — Método de Inspeção da Espaciabilidade. Trata-se de um método por inspeção, inspirado no Percurso Cognitivo e ancorado nas dimensões D1 a D6. Especialistas em IHC ou design simulam tarefas no sistema e identificam barreiras ao raciocínio espacial — com vantagens de agilidade e baixo custo. O método possui três etapas: definir objetivos e dimensões prioritárias; elaborar persona e tarefas concretas; e conduzir a inspeção, registrando achados em fichas com problema, severidade e recomendações.

**Texto expandido**

Para avaliar a espaciabilidade de forma sistemática, adotamos o Método de Inspeção da Espaciabilidade — o MIE. Trata-se de um método por inspeção, inspirado no Percurso Cognitivo e ancorado nas dimensões D1 a D6 derivadas do STAT. Especialistas em IHC ou design simulam tarefas no sistema e identificam barreiras ao raciocínio espacial — verificando se o design apoia a compreensão, a orientação e a interpretação das informações georreferenciadas. Entre suas vantagens práticas estão a agilidade — pois não exige recrutamento de usuários leigos — e o baixo custo — adequado a fases iniciais de projeto. O MIE é estruturado em três etapas, conforme Neto e Mota (IHC 2025). **Etapa 1 — Definição de objetivos:** descrever o contexto da aplicação, análises possíveis e decisões suportadas; selecionar dimensões prioritárias entre D1 e D6. **Etapa 2 — Formulação de tarefas:** criar uma persona representativa do contexto de uso e, para cada dimensão selecionada, propor tarefas concretas no sistema. **Etapa 3 — Inspeção da espaciabilidade:** simular as tarefas percorrendo a interface e registrar achados em fichas de inspeção — problema, severidade, recomendações. Neto e Mota validaram a viabilidade do método em estudo de caso com o Google Maps; este trabalho estende essa validação ao Mapa Cidadão — na Etapa 1 priorizamos D1, D2, D4 e D6; na Etapa 2, definimos João e Ana com quatro tarefas; na Etapa 3, três especialistas produziram relatórios de inspeção — complementados por entrevistas semiestruturadas e análise temática dos dados.

---

## Slide 7 — Crowdsourcing e Georreferenciamento ⏱ ~40 s

**Texto (20 min)**

O crowdsourcing distribui atividades para um grande número de indivíduos, com plataformas digitais como mediadoras da participação cidadã. No contexto urbano, associado ao georreferenciamento, o usuário torna-se produtor voluntário de dados espaciais — prática conhecida como VGI. O impacto inclui escalabilidade territorial, atualização de dados sobre a infraestrutura da cidade, transparência pública e apoio à governança urbana.

**Texto expandido**

Antes de apresentar o sistema, contextualizo o cenário tecnológico em que ele se insere. O crowdsourcing caracteriza-se como abordagem na qual atividades tradicionalmente atribuídas a especialistas passam a ser realizadas de forma distribuída por um grande número de indivíduos, mediados por plataformas digitais que viabilizam a participação cidadã. No contexto urbano, associado ao georreferenciamento, essa prática possibilita a coleta colaborativa de informações sobre infraestrutura, mobilidade e serviços públicos. Essa produção é conhecida como VGI, *Volunteered Geographic Information*, na qual o usuário é produtor voluntário de dados espaciais. Iniciativas como OpenStreetMap e Ushahidi exemplificam o potencial dessas plataformas. O impacto urbano inclui escalabilidade — cobertura de grandes áreas territoriais —, atualização frequente dos dados sobre a infraestrutura da cidade, transparência pública e fortalecimento da governança urbana e das tecnologias cívicas.

---

## Slide 8 — O Problema: Lacuna no Raciocínio Espacial ⏱ ~40 s

**Texto (20 min)**

Apesar desse potencial, a maior parte das aplicações ainda se concentra no registro e na visualização de ocorrências, usando o mapa apenas como recurso de localização básica. Isso cria uma lacuna: dificuldade em identificar padrões e áreas críticas; a disponibilidade de dados não garante compreensão territorial; e falta apoio efetivo ao raciocínio espacial do usuário. Este é o problema que motiva o Mapa Cidadão.

**Texto expandido**

Apesar do potencial do crowdsourcing urbano, a maior parte das aplicações ainda se concentra no registro e na visualização de ocorrências, utilizando o mapa principalmente como recurso de localização básica. Esse enfoque limita a interpretação dos dados espaciais. A lacuna identificada neste trabalho refere-se à dificuldade em identificar padrões e áreas críticas; ao fato de que a disponibilidade de dados não garante compreensão territorial; e à falta de apoio efetivo ao raciocínio espacial do usuário. Critérios clássicos de IHC — usabilidade, UX, acessibilidade, comunicabilidade — são complementares, mas nenhum avalia diretamente se o design favorece análise e interpretação de relações geográficas; o STAT, por sua vez, mede habilidades do usuário, não qualidade do sistema. Estudos em geovisualização e cognição espacial indicam que a simples disponibilização de dados em mapas não garante compreensão territorial. Este é o problema que motiva o desenvolvimento do Mapa Cidadão, concebido para ir além do "pin no mapa".

---

## Slide 9 — Mapa Cidadão ⏱ ~50 s

**Texto (20 min)**

A solução é o Mapa Cidadão: sistema colaborativo de registro e visualização de ocorrências urbanas, guiado pela espaciabilidade e integrando crowdsourcing, georreferenciamento e IHC. O mapa é tratado como artefato cognitivo para apoiar o raciocínio espacial do cidadão. As principais funções incluem navegação interativa com legenda para interpretação de tipos — D6 —, registro colaborativo com validação social por "likes", e construção coletiva do conhecimento urbano com engajamento cívico.

**Texto expandido**

A solução proposta é o Mapa Cidadão, concebido com a espaciabilidade como diretriz central de projeto. Trata-se de um sistema colaborativo de registro e visualização de ocorrências urbanas, integrando três eixos: crowdsourcing para coleta colaborativa, georreferenciamento para ancoragem territorial dos dados e IHC para garantir qualidade na interação. Diferenciando-se de plataformas que tratam o mapa apenas como suporte visual ao registro, o Mapa Cidadão busca apoiá-lo como artefato cognitivo — favorecendo orientação, identificação de padrões e interpretação de relações territoriais. Entre as principais funções estão a navegação interativa com legenda integrada, diretamente ligada à dimensão D6; o registro colaborativo de ocorrências com validação social por "likes"; e a construção coletiva do conhecimento urbano, fortalecendo tecnologias cívicas e engajamento cidadão. O sistema foi desenvolvido e avaliado em estudo exploratório e qualitativo, com aplicação do MIE para verificar empiricamente se o design apoia o raciocínio espacial.

---

## Slide 10 — Interface do Mapa Cidadão: Detalhamento ⏱ ~35 s

**Texto (20 min)**

Este slide detalha os sete elementos da interface: mapa interativo central; navegação com zoom e deslocamento; marcadores com ícones e cores por categoria; legenda para interpretação de tipos espaciais — D6 —; detalhes da ocorrência ao clicar no marcador; colaboração com registro, validação por "like" e encerramento; e menu de perfil com histórico de contribuições. O design foi alinhado às dimensões do MIE priorizadas: D1, D2, D4 e D6.

**Texto expandido**

Neste slide detalho os sete elementos principais da interface, numerados na figura. (1) O mapa interativo ocupa a região central para navegação. (2) Ferramentas de zoom e deslocamento permitem a navegação. (3) Os marcadores usam ícones e cores por categoria — alagamento, lixo, iluminação, pavimentação. (4) A legenda integrada apoia a interpretação de tipos espaciais, conforme a D6. (5) Ao clicar no marcador, abrem-se informações da ocorrência. (6) As funcionalidades colaborativas — registro, validação por "like" e encerramento — exigem autenticação. (7) O menu de perfil reúne dados do usuário e o histórico de contribuições. O design foi alinhado às dimensões do MIE priorizadas neste estudo — D1, D2, D4 e D6. Vale notar que a versão avaliada não incorporava mecanismos avançados de filtragem, agregação ou visualização analítica, o que influenciou as percepções dos especialistas quanto ao suporte ao raciocínio espacial nas dimensões D2 e D4.

---

## Slide 11 — Metodologia: Personas e Tarefas ⏱ ~45 s

**Texto (20 min)**

A avaliação usou duas personas e quatro tarefas. João, 40 anos, morador de bairro periférico, foca em registrar iluminação e buracos e acompanhar resoluções. Ana, 27 anos, estudante universitária, consulta ocorrências existentes e analisa o impacto na mobilidade. As tarefas: D1 — João localiza iluminação no bairro; D2 — Ana identifica áreas com alagamentos; D4 — João relaciona falta de pavimentação com alagamentos; D6 — Ana compreende a representação de cada marcador.

**Texto expandido**

A avaliação foi planejada com duas personas e quatro tarefas, alinhadas às dimensões selecionadas do MIE. João, 40 anos, morador de bairro periférico, foca em registrar iluminação e buracos e acompanhar resoluções. Ana, 27 anos, estudante universitária, consulta ocorrências existentes e analisa o impacto na mobilidade. As tarefas foram: D1 — João localiza todas as ocorrências de iluminação no bairro; D2 — Ana identifica áreas com maior número de alagamentos; D4 — João relaciona falta de pavimentação com alagamentos; e D6 — Ana compreende a representação de cada marcador no mapa.

---

## Slide 12 — Coleta de Dados ⏱ ~50 s

**Texto (20 min)**

Três especialistas em IHC — P1, P2 e P3 — do laboratório de pesquisa da UFPA, com três a seis anos de experiência, em estudo qualitativo exploratório com n igual a três. A avaliação foi remota e independente, sem comunicação entre avaliadores. Cada um conduziu inspeção MIE simulando João e Ana, com verbalização de pensamentos, produziu relatório individual e participou de entrevista semiestruturada remota. Os dados foram analisados por análise temática dedutiva — espaciabilidade, usabilidade, UX e MIE — com triangulação de achados entre os três avaliadores.

**Texto expandido**

Foram convidados três especialistas em IHC, identificados como P1, P2 e P3, vinculados ao laboratório de pesquisa em IHC da UFPA. P1 é mestranda com três anos de experiência; P2 é doutorando com seis anos de experiência e vivência em crowdsourcing georreferenciado; P3 é doutorando com quatro anos de experiência. Nenhum possuía familiaridade prévia com espaciabilidade, MIE ou Mapa Cidadão. A escolha por três participantes fundamenta-se no caráter qualitativo e exploratório do estudo — análise aprofundada e verificação de consistência, não generalização estatística. A avaliação foi remota e independente, sem comunicação entre avaliadores. Cada especialista executou inspeção MIE simulando João e Ana, com verbalização de pensamentos (*Thinking Aloud*), produziu relatório individual e participou de entrevista semiestruturada remota pós-inspeção. Os dados foram examinados por análise temática dedutiva, com categorias predefinidas — espaciabilidade, usabilidade, experiência do usuário e avaliação do MIE — e triangulação de achados entre os três avaliadores.

---

## Slide 13 — Entrevista Semiestruturada ⏱ ~40 s

**Texto (20 min)**

Após a inspeção, conduzi entrevistas semiestruturadas por videoconferência remota — cerca de 50 a 60 minutos cada. Dois objetivos: avaliar se o Mapa Cidadão apoia o raciocínio espacial e a interpretação de dados geográficos; e validar o MIE — adequação de tarefas, personas e cenários. A estrutura percorreu abertura e primeira impressão; design e espaciabilidade — visualizador ou ferramenta analítica; aspectos positivos, negativos e melhorias de uso; e avaliação do método.

**Texto expandido**

Complementando os relatórios de inspeção, apliquei entrevista semiestruturada em videoconferência remota pós-inspeção, com duração aproximada de 50 a 60 minutos por especialista, gravada mediante consentimento. O instrumento tinha dois objetivos: (1) avaliar se o Mapa Cidadão apoia o raciocínio espacial e a interpretação de dados geográficos; e (2) validar o MIE — adequação de tarefas, personas e cenários de inspeção. A estrutura seguiu quatro blocos: abertura — perfil e primeira impressão; design e espaciabilidade — visualizador ou ferramenta analítica; uso — aspectos positivos, negativos e melhorias; e avaliação do método — adequação das tarefas e do instrumento. Perguntas sobre uso alimentaram as categorias de usabilidade e UX; as perguntas sobre o MIE fundamentaram achados sobre clareza das tarefas e formato de relatório. Roteiro completo em `leituras/entrevistas/avaliação/entrevista-semiestruturada.md`.

---

## Slide 15 — Resultados: Espaciabilidade (D1–D6) ⏱ ~55 s

**Texto (20 min)**

Passo aos resultados. Em espaciabilidade, o slide contrasta aspectos favoráveis e limitações por dimensão. Em D1, P3 avaliou as ocorrências como de fácil entendimento e o cenário da persona João foi concluído com desempenho satisfatório. Em D2, P2 identificou concentrações e P3 considerou o ícone de alagamento eficaz; P1 pediu filtros ou agrupamentos. Em D4, P2 percebeu conjuntos de problemas no mesmo bairro e P3 reconheceu potencial analítico; P1 e P2 sugeriram recorrência e filtros temporais. Em D6, a legenda lateral e o clique no marcador apoiaram a distinção, mas P2 e P3 apontaram cores semelhantes e ícones pouco distintos à distância.

**Texto expandido**

Na espaciabilidade, os resultados organizam-se em aspectos favoráveis e limitações por dimensão. **D1 — Orientação e direção:** P3 avaliou as ocorrências como de fácil entendimento e o cenário da persona João foi concluído com desempenho satisfatório — sem limitações registradas nesta dimensão. **D2 — Padrões espaciais:** P2 identificou concentrações em área específica e P3 considerou o ícone de alagamento eficaz para áreas de risco; P1 recomendou incluir filtros ou agrupamentos para comparar intensidade entre regiões. **D4 — Associações espaciais:** P2 percebeu conjuntos de problemas no mesmo bairro e P3 reconheceu o potencial analítico da ferramenta; P1 e P2 sugeriram indicar recorrência nos pontos e adicionar filtros temporais para sustentar hipóteses espaciais. **D6 — Tipos espaciais:** P2 destacou a legenda lateral e o clique no marcador como apoio à distinção entre categorias; P2 e P3 apontaram cores semelhantes e ícones de iluminação e pavimentação pouco distintos à distância. D3 e D5 não foram priorizadas nesta avaliação.

---

## Slide 16 — Resultados: Usabilidade ⏱ ~50 s

**Texto (20 min)**

Em usabilidade, o slide contrasta aspectos favoráveis e limitações. O fluxo de login e cadastro é completo e funcional, mas dois participantes não perceberam de imediato a exigência de login. O formulário de registro tem endereço pré-preenchido e confirmação de salvamento, porém não indica o ID da ocorrência criada. O menu reúne "Minhas ocorrências", mas sua localização é pouco evidente. Os mecanismos de like e encerrar estão presentes e apoiam a validação colaborativa.

**Texto expandido**

As evidências de usabilidade organizam-se em aspectos favoráveis e limitações. **Login e cadastro:** o fluxo de criação de conta é completo e funcional; após autenticação, o registro de ocorrências segue sem impedimentos. Dois participantes não perceberam de imediato a exigência de login — a mensagem surgiu ao tentar informar o problema. **Registro de ocorrências:** o formulário oferece endereço pré-preenchido, categoria e descrição, com confirmação de salvamento na tela; porém, após salvar, o sistema não indica o ID ou nome da ocorrência criada (P1). **Histórico pessoal:** o menu de perfil reúne "Minhas ocorrências", permitindo acompanhar contribuições individuais; contudo, sua localização é pouco evidente na arquitetura da informação. **Ações nos marcadores:** mecanismos de like e encerrar estão presentes, apoiando validação colaborativa e gestão dos registros. Melhorias na simbologia — D6 — beneficiariam usabilidade e espaciabilidade simultaneamente.

---

## Slide 17 — Resultados: Experiência do Usuário ⏱ ~50 s

**Texto (20 min)**

Em experiência do usuário, os especialistas reconheceram o Mapa Cidadão como proposta inovadora e cívica, distinta de apps de navegação — embora a aplicação possa apresentar melhor sua potencialidade no primeiro contato. O anonimato foi avaliado positivamente por P2, tornando o relato mais seguro. O mecanismo de likes fortalece a confiabilidade coletiva, mas seu significado como validação social pode ser mais evidente. P1 observou que falta vivência para interpretar os dados urbanos e sugeriu padrões visuais de apps consolidados e tutoriais.

**Texto expandido**

No âmbito da experiência do usuário, os resultados organizam-se em aspectos favoráveis e limitações. **Proposta social e participativa:** os especialistas reconheceram o Mapa Cidadão como proposta inovadora e cívica, distinta de aplicativos tradicionais de navegação; contudo, a aplicação pode apresentar melhor sua potencialidade logo no primeiro contato. **Anonimato:** não exibir quem registrou o problema foi avaliado como ponto positivo por P2, tornando o relato mais seguro e acessível. **Validação coletiva:** o mecanismo de likes fortalece a confiabilidade coletiva e transmite senso de participação; porém, o significado do like como validação social pode ser mais evidente na interface. **Interpretação dos dados:** o mapa estimula a interpretação ativa de dados urbanos colaborativos; P1 observou que ainda falta vivência para interpretar os dados mostrados e sugeriu padrões visuais de apps consolidados e tutoriais breves.

---

## Slide 18 — Resultados: Avaliação do MIE ⏱ ~50 s

**Texto (20 min)**

O MIE foi considerado aplicável e eficaz, capaz de gerar evidências consistentes — com recomendação de reforçar a centralidade do critério espacial sem desconsiderar usabilidade e UX. Personas e cenários aproximaram a avaliação do uso real; P1 e P3 sugeriram tarefas mais claras e analíticas. O método captou múltiplas dimensões de qualidade, sem que evidências de usabilidade e UX invalidem o instrumento.

**Texto expandido**

Os especialistas consideraram o MIE aplicável e eficaz, capaz de gerar evidências relevantes e consistentes sobre espaciabilidade — com recomendação de reforçar a centralidade do critério espacial sem desconsiderar usabilidade e UX. **Formulação de tarefas:** personas e cenários aproximaram a avaliação de uso real, orientando decisões ao longo das tarefas D1–D6; P1 e P3 sugeriram descrições mais claras e maior número de tarefas analíticas. **Categorização de evidências:** o método captou múltiplas dimensões de qualidade; evidências de usabilidade e UX não invalidam o MIE. Para aprofundamento em defesa, vale mencionar que P1 adotou relatório narrativo e P2/P3 organizaram por dimensões — ponto levantado nas entrevistas, embora não conste no slide.

---

## Slide 19 — Considerações Finais: Síntese ⏱ ~55 s

**Texto (20 min)**

Em síntese, o slide organiza três blocos. Em **Proposta**: investigamos a espaciabilidade como orientação para mapeamento urbano colaborativo; o Mapa Cidadão foi concebido como artefato cognitivo voltado à interpretação espacial; e busca ir além do simples registro georreferenciado. Em **Resultados**: o sistema apoia orientação e localização e a identificação inicial de padrões espaciais; a ausência de filtragem, agregação e visualização analítica limita associações mais complexas; e escolhas de simbologia impactam diretamente a legibilidade espacial. Em **Implicações**: emergiram evidências de usabilidade e UX, mesmo com foco na espaciabilidade; isso reforça a interdependência entre critérios de qualidade em IHC; e o MIE é aplicável, mas precisa ser mais direcionado, explicitando o foco analítico.

**Texto expandido**

Este slide sintetiza as considerações finais do trabalho em três blocos, alinhados ao `main.tex`.

**Proposta:** este trabalho investigou o uso do conceito de espaciabilidade como orientação para o desenvolvimento e a avaliação de sistemas colaborativos de mapeamento urbano. O Mapa Cidadão foi concebido como artefato cognitivo voltado à interpretação espacial das ocorrências, buscando ir além do simples registro georreferenciado.

**Resultados:** o sistema apoia adequadamente operações básicas de orientação e localização e permite a identificação inicial de padrões espaciais. No entanto, a ausência de mecanismos de filtragem, agregação e visualização analítica mais elaborados limita o apoio a associações espaciais mais complexas. Questões relacionadas à simbologia também evidenciaram o impacto direto das escolhas visuais na legibilidade espacial.

**Implicações:** observou-se a emergência significativa de evidências relacionadas à usabilidade e à experiência do usuário, mesmo com o foco explícito na espaciabilidade. Esse achado reforça a interdependência entre critérios de qualidade em IHC, uma vez que problemas de usabilidade podem comprometer a construção do raciocínio espacial. Além disso, os resultados indicam a necessidade de tornar o MIE mais direcionado, de modo a explicitar seu foco analítico e reduzir ambiguidades durante a avaliação. Em termos gerais, o estudo evidencia que a simples disponibilização de dados georreferenciados não é suficiente para promover compreensão territorial — sendo necessário avançar no desenvolvimento de ferramentas analíticas em plataformas de mapeamento colaborativo urbano.

---

## Slide 20 — Considerações Finais: Limitações e Contribuições ⏱ ~55 s

**Texto (20 min)**

Quanto às **limitações**: amostra reduzida de três especialistas pertencentes ao mesmo laboratório, restringindo a generalização; sistema em estágio inicial de desenvolvimento, sem funcionalidades analíticas avançadas; e avaliação concentrada na perspectiva de especialistas, sem usuários finais ou gestores públicos. Quanto às **contribuições**: consolidação da espaciabilidade como critério aplicável ao design de sistemas colaborativos urbanos; aplicação empírica e refinamento do MIE, com recomendações estruturadas de aprimoramento; desenvolvimento do Mapa Cidadão voltado à interpretação espacial das ocorrências; e evidências qualitativas sobre a relação entre espaciabilidade, usabilidade e experiência do usuário. Agradeço à orientadora Marcelle, ao coorientador André, aos membros da banca e a todos que contribuíram. Estou à disposição para perguntas.

**Texto expandido**

**Limitações:** a pesquisa apresenta limitações relacionadas ao tamanho reduzido da amostra, composta por três especialistas pertencentes ao mesmo laboratório, o que restringe a generalização dos resultados. Além disso, o sistema avaliado encontra-se em estágio inicial de desenvolvimento, sem funcionalidades analíticas avançadas, e a avaliação concentrou-se exclusivamente na perspectiva de especialistas, não contemplando usuários finais ou gestores públicos. Essas limitações não invalidam os achados, mas delimitam seu escopo e orientam investigações futuras — com amostras maiores, funcionalidades analíticas e múltiplos perfis de usuário.

**Contribuições:** as principais contribuições incluem: a consolidação da espaciabilidade como critério aplicável ao design de sistemas colaborativos urbanos; a aplicação empírica e o refinamento do MIE, com recomendações estruturadas de aprimoramento; o desenvolvimento de um sistema concebido explicitamente para apoiar a interpretação espacial; e evidências qualitativas sobre a relação entre espaciabilidade, usabilidade e experiência do usuário. O estudo reforça que, em tecnologias cívicas baseadas em mapas, a qualidade da representação espacial é fundamental para transformar dados colaborativos em compreensão territorial e suporte à tomada de decisão.

Agradeço à orientadora Marcelle Pereira Mota, ao coorientador André Avelino da Silva Neto, aos membros da banca e a todos que contribuíram para este trabalho. Estou à disposição para perguntas.

---

## Distribuição do tempo (20 min)

| Bloco | Slides | Tempo |
|-------|--------|-------|
| Abertura | 1 | ~30 s |
| Fundamentação (IHC, espaciabilidade, MIE) | 2–6 | ~4 min |
| Contexto e problema | 7–8 | ~1,5 min |
| Sistema Mapa Cidadão | 9–10 | ~1,5 min |
| Metodologia | 11–13 | ~3 min |
| Resultados | 15–18 | ~3,5 min |
| Considerações finais | 19–20 | ~2 min |
| **Reserva** | — | **~2,5 min** |

A reserva absorve transições, pausas naturais e slides que você enfatizar um pouco mais — especialmente os de resultados (15–18).

## Como usar as duas versões

- **Texto (20 min):** use na apresentação oral — versão calibrada para caber em 20 minutos.
- **Texto expandido:** use para ensaio prévio, aprofundamento de argumentos e resposta a perguntas da banca; contém mais detalhes, citações de participantes e conexões com o artigo.

## Dicas rápidas

- **Slide 6:** o MIE tem **três etapas** (objetivos → tarefas → inspeção); entrevistas e análise temática são extensões deste TCC, não etapas do método.
- **Slide 10:** percorra os sete elementos numerados; cite o alinhamento com D1, D2, D4 e D6 — não repita o conteúdo do slide 9.
- **Slide 12:** bloco mais enxuto no slide — detalhes de perfil dos participantes ficam no texto expandido para perguntas da banca.
- **Slide 13:** a estrutura da entrevista tem **quatro blocos** (abertura, design/espaciabilidade, uso, avaliação do método).
- **Slide 15:** abra o bloco de resultados com uma frase de transição; em D1 há apenas aspecto favorável — não force limitação inexistente no slide.
- **Slides 15–18:** cada slide contrasta **aspectos favoráveis** e **limitações/recomendações** — percorra os pares por tema ou dimensão; alguns temas têm só um lado (ex.: D1 no 15, ações nos marcadores no 16).
- **Slide 19:** percorra as três colunas — **Proposta**, **Resultados** e **Implicações** — lendo os três itens de cada bloco; mantenha ritmo firme para não estourar o tempo.
- **Slide 20:** apresente primeiro as **três limitações** (coluna esquerda) e depois as **quatro contribuições** (coluna direita); encerre verbalmente com os agradecimentos.
- **Metodologia (11–13):** bloco denso — mantenha ritmo firme para não estourar o tempo.
- **Perguntas sobre n = 3:** estudo exploratório que estende o artigo original (1 avaliador no Google Maps); ampliação com usuários leigos é trabalho futuro previsto pelos autores.

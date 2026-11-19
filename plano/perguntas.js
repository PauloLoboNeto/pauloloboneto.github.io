/* Perguntas de cada capítulo do Fundamentos que não mudam, para a revisão espaçada do app. As respostas estão no livro. */
window.PLANO_PERGUNTAS = {
"1": [
"Por que a média de latência não serve para um SLO, e o que ela ainda mede bem?",
"Num fan-out para 50 serviços, cada um lento em 1% das vezes, que fração das requisições esbarra num lento?",
"O que é coordinated omission, e como reconhecer um teste de carga que sofre dela?",
"Por que não se tira a média dos p99s de várias instâncias, e como calcular o p99 do conjunto?",
"Qual a diferença entre o perfil de CPU e o de bloqueio no Go, e quando cada um engana?",
"Por que o LCP de laboratório e o de campo divergem, e qual deles define a meta?",
"Em que partes se dividem o LCP e o INP, e que tipo de mudança ataca cada parte?"
],
"2": [
"Quais métodos HTTP são seguros e quais são idempotentes, e por que isso importa para retry e cache?",
"Quando REST, gRPC e GraphQL são a melhor escolha? Defenda um caso do app para cada um.",
"Por que o cache HTTP funciona naturalmente com REST e mal com GraphQL?",
"Quais mudanças num contrato são compatíveis, e qual o processo para remover um campo com segurança?",
"Por que a paginação por offset fica lenta e instável em páginas fundas, e como o cursor resolve?",
"Como um webhook deve ser enviado e recebido para que um reenvio não processe a assinatura duas vezes?",
"Quando usar SSE e quando usar WebSocket?",
"O que um BFF resolve que uma API genérica não resolve, e qual o custo?"
],
"3": [
"Por que o CSS bloqueia a renderização e um script com defer não bloqueia?",
"O que o preload scanner faz, e o que o impede de achar a imagem principal?",
"Qual a ordem da cascata, e onde as camadas entram nela?",
"Por que ler offsetHeight logo depois de mudar uma classe pode custar caro?",
"Por que animar transform é fluido e animar top não é?",
"O que é um contexto de empilhamento, e por que um z-index: 9999 às vezes não funciona?",
"O que o streaming de HTML muda no TTFB e no LCP, e o que a hidratação faz?",
"O que o content-visibility: auto evita, e qual o risco dele?",
"Por que um botão feito de div precisa de papel, nome, tabindex e tratamento de teclado, e um button não precisa de nada disso?",
"Para onde vai o foco quando um modal abre e quando ele fecha, e o que um leitor de tela anuncia numa troca de rota da SPA?"
],
"4": [
"Por que quatro booleanos de salvamento são piores que uma máquina com quatro estados? Quantas combinações cada um permite?",
"Como garantir no banco que um pagamento só passe de PENDENTE para PAGO, com o webhook e o job de renovação tentando ao mesmo tempo?",
"O que significa \"o estado é um fold dos eventos\", e o que se ganha e se perde guardando eventos?",
"Por que o React não re-renderiza quando você muta um objeto do estado?",
"O que acontece com o estado dos itens quando a key é o índice e um item sai do meio da lista?",
"Como os signals atualizam a tela sem comparar árvores?",
"Onde deve morar o filtro de grupo muscular: no componente, num store global ou na URL? Por quê?",
"O que é compartilhamento estrutural, e por que ele torna a imutabilidade barata?"
],
"5": [
"O que acontece numa troca de contexto, e por que trocar de processo custa mais que trocar de thread?",
"O que é uma page fault, e por que a primeira escrita num slice grande é mais lenta que as seguintes?",
"Por que um write com sucesso não garante que o dado está no disco?",
"Como o epoll permite que poucas threads atendam 10 mil conexões?",
"O que o runtime do Go faz quando uma goroutine lê de um socket vazio, e quando lê de um arquivo em disco?",
"Por que o container foi morto por falta de memória se o heap do Go era pequeno?",
"Por que o Chrome separa sites em processos diferentes, e o que isso custa?",
"Por que o localStorage pode travar a página e o IndexedDB não?"
],
"6": [
"O que precisa estar no disco quando o COMMIT retorna, e por quê?",
"Por que uma B-tree com milhões de linhas acha uma chave lendo três ou quatro páginas?",
"Por que uma LSM-tree escreve mais rápido e lê mais devagar que uma B-tree, e para que serve o bloom filter?",
"Por que cada índice novo deixa os inserts mais lentos?",
"Como o MVCC evita que leitores e escritores se bloqueiem, e qual é o preço?",
"Que anomalia o snapshot isolation permite, e como o SERIALIZABLE do Postgres a detecta?",
"Por que o planner escolheria um nested loop sobre 2 milhões de linhas, e como provar que a estimativa errou?",
"Por que um await fetch() dentro de uma transação do IndexedDB quebra a transação?"
],
"7": [
"Por que ordenar tudo para pegar os dez maiores é desperdício, e quanto custa fazer com um heap?",
"Em que situação uma busca num slice ganha de um map?",
"O que acontece com uma hash table quando ela passa do fator de carga, e por que o custo continua O(1) amortizado?",
"Por que o Go usa uma semente aleatória no hash de cada map e embaralha a ordem de iteração?",
"Por que uma ordenação não estável quebra a paginação por popularidade, e como a chave (popularidade, id) resolve?",
"Como o Postgres descobre um deadlock?",
"Um bloom filter pode dar falso negativo? Para que serve um \"talvez\"?",
"Por que hash % n esfria o cache inteiro quando entra um servidor novo, e o que o hashing consistente muda?",
"Por que usar o índice como key numa lista que reordena troca o estado entre itens?"
],
"8": [
"Por que 0,1 + 0,2 não dá 0,3 em float64 , e que tipo usar para dinheiro?",
"Como dividir R$ 100,00 em três parcelas sem perder nem criar um centavo?",
"Qual a diferença entre byte, code point e grafema? Quanto vale len(\"é\") no Go em cada normalização?",
"Por que cortar um nome em 20 bytes pode gerar texto inválido?",
"Por que um ID int64 do Go pode chegar errado no JavaScript, e como evitar?",
"Qual a diferença entre relógio de parede e monotônico, e qual usar para medir duração?",
"Como guardar \"lembrar da ceia às 23h\" para um aluno que viaja, de um jeito que continue certo?",
"O que o Protobuf faz para aceitar campos novos sem quebrar leitores antigos?"
],
"9": [
"Por que somar a carga num slice de structs grandes é mais lento que num slice só de cargas, com as mesmas somas?",
"O que é uma linha de cache, e o que acontece quando duas goroutines escrevem em variáveis vizinhas?",
"Por que um if sobre dados aleatórios custa mais que o mesmo if sobre dados ordenados?",
"Como o compilador do Go decide inlinar uma função, e o que o PGO muda nessa decisão?",
"O que é uma shape no V8, e por que um campo a mais em alguns objetos pode deixar uma função mais lenta?",
"Qual a diferença entre um inline cache monomórfico e um megamórfico?",
"Por que 100 KB de JavaScript custam mais que 100 KB de imagem num celular?"
],
"10": [
"Como a escape analysis decide entre pilha e heap? Dê três exemplos de valores que escapam.",
"O que significa GOGC=100, e o que acontece com memória e CPU ao dobrar ou dividir esse valor?",
"Por que o GC do Go não é geracional nem move objetos, e o que ele ganha e perde com isso?",
"O que é uma write barrier, e por que um coletor concorrente precisa dela?",
"O que são GC assists, e por que uma rota que aloca muito sofre mais latência durante a marcação?",
"Por que a hipótese geracional torna o Scavenger do V8 barato?",
"Como uma SPA vaza memória com nós do DOM destacados, e como achar a causa num heap snapshot?",
"Por que um sub-slice de 10 bytes pode manter 100 MB vivos?"
],
"11": [
"Qual a diferença entre data race e race condition? Dê um exemplo do app para cada uma.",
"Pelo modelo de memória do Go, por que uma goroutine pode nunca ver uma flag bool que outra mudou?",
"Quais operações criam uma relação happens-before no Go?",
"Quais as quatro condições de um deadlock, e qual delas a ordem fixa de locks quebra?",
"Como o scheduler do Go distribui goroutines entre threads, e o que é work stealing?",
"Em que ordem rodam um setTimeout(0) , um Promise.resolve().then e um requestAnimationFrame agendados juntos?",
"Por que a grade mostrou o resultado antigo, e quais duas correções resolvem?",
"O que o SharedArrayBuffer exige do servidor, e por quê?"
],
"12": [
"Por que subir o acerto de 90% para 99% divide por dez a carga na origem?",
"Qual a diferença entre cache-aside e write-through, e qual deixa dado velho por mais tempo?",
"O que causa um cache stampede, e como single-flight, TTL com variação e expiração antecipada ajudam?",
"Como uma leitura lenta pode regravar um valor velho logo depois da invalidação, e como leases evitam isso?",
"Por que o LRU sofre com varreduras, e o que o TinyLFU faz de diferente?",
"O que significam no-cache , no-store , max-age , s-maxage e immutable ?",
"Por que arquivos com hash no nome podem ter cache de um ano e o HTML não?",
"O que o bfcache guarda, e o que impede uma página de entrar nele?"
],
"13": [
"O que cada camada (enlace, IP, transporte, aplicação) garante, e o que não garante?",
"Por que um servidor na nuvem não consegue abrir uma conexão com o celular do aluno?",
"O que é MTU, e por que respostas grandes somem atrás de algumas VPNs?",
"O que o UDP acrescenta ao IP, e quando a falta de garantias é vantagem?",
"Qual a diferença entre controle de fluxo e controle de congestionamento?",
"O que é slow start, e por que os primeiros 14 KB da resposta importam?",
"O que é head-of-line blocking, e como HTTP/2 e HTTP/3 lidam com ele em camadas diferentes?",
"Quantas idas e voltas há até o primeiro byte, com DNS frio, TCP, TLS 1.3 e um redirecionamento? E com QUIC?",
"Por que existe o TIME_WAIT , e por que um http.Client por requisição esgota portas sob carga?",
"Por que o DNS usa UDP, e quando ele passa para TCP?",
"Que timeouts um servidor e um cliente HTTP em Go precisam ter, e o que acontece sem eles?",
"Por que uma conexão HTTP/2 longa pode desbalancear um balanceador de camada 4?",
"Quando usar WebSocket, Server-Sent Events ou WebRTC?"
],
"14": [
"Pela Lei de Little, quantas requisições estão em andamento numa API com 2.000 req/s e 50 ms de latência? O que isso diz sobre o pool de conexões?",
"Por que a latência dobra entre 80% e 90% de utilização, se a CPU só subiu dez pontos?",
"Por que uma fila sem limite não resolve sobrecarga, só a adia?",
"Quais as estratégias quando uma fila enche, e qual serve para cobrança, resumo de treino e analytics?",
"Por que a idade da mensagem mais antiga é uma métrica melhor que o tamanho da fila?",
"Por que, em sobrecarga, atender primeiro as requisições mais novas pode ser melhor?",
"Como o pipeTo de um ReadableStream propaga backpressure?",
"O que o scheduler.yield faz com a fila de tarefas da thread principal?"
],
"15": [
"Por que uma dependência lenta é mais perigosa que uma dependência fora do ar?",
"Como escolher o timeout de uma chamada, e por que ele deve diminuir ao longo da cadeia?",
"Três camadas com três tentativas cada: quantas chamadas a dependência recebe? Como um retry budget evita isso?",
"Quais são os três estados de um circuit breaker, e o que dispara cada transição?",
"O que é bulkhead, e como ele teria salvado a tela do treino no cenário?",
"Por que um fallback mal testado pode ser pior que nenhum, e o que é estabilidade estática?",
"Qual a diferença entre liveness e readiness, e como um readiness mal feito derruba todas as réplicas?",
"Como um error boundary e um bloco opcional fazem a tela degradar em vez de quebrar?"
],
"16": [
"O gateway não respondeu à cobrança da assinatura: o que você sabe, o que não sabe, e como descobrir o que aconteceu?",
"Por que entrega exatamente uma vez é impossível, e como se obtém efeito exatamente uma vez?",
"Por que horários de relógio de parede não ordenam eventos entre máquinas, e o que o relógio de Lamport garante?",
"Qual a diferença entre linearizabilidade e serializabilidade?",
"O que o CAP afirma de fato, e o que o PACELC acrescenta?",
"Como o Raft elege um líder e decide que uma entrada está confirmada? Quantas falhas 5 nós toleram?",
"Por que o two-phase commit bloqueia quando o coordenador cai, e o que a saga da assinatura ( DIS-02 ) faz no lugar? Orquestrar ou coreografar muda o quê na falha?",
"Como um CRDT de conjunto resolve \"adicionou o exercício no celular, removeu no tablet\" sem perder edição?"
],
"17": [
"Por que a consulta parametrizada impede SQL injection e escapar aspas não basta?",
"O que a política de mesma origem protege, e por que o CORS não protege o servidor?",
"Como um XSS armazenado numa observação de treino rouba dados de saúde do painel do treinador, e quais três camadas o impedem?",
"O que HttpOnly , Secure e SameSite=Lax fazem cada um, e o que nenhum deles impede?",
"Por que trocar o número na URL expôs a bioimpedância de outro aluno, e onde a checagem deveria estar?",
"Por que senha se guarda com Argon2id ou bcrypt e não com SHA-256?",
"Sessão no servidor ou JWT: o que cada um ganha e perde em revogação e escala?",
"Por que comparar a assinatura de um webhook com == é um risco?"
],
"18": [
"O que é o caminho crítico de uma requisição, e por que otimizar fora dele não muda a latência?",
"Se a consulta das séries é 10% do tempo do \"Finalizar treino\", quanto ele melhora se ela ficar instantânea?",
"Quais alavancas se repetem em toda camada? Dê um exemplo no servidor e um no navegador para cada.",
"Por que processar em lote pode aumentar a vazão e piorar a latência?",
"O que dá para tirar do caminho crítico do \"Finalizar treino\" sem mudar o que o aluno precisa saber?",
"Que otimizações trocam correção por velocidade, e como documentar essa troca num ADR e vigiá-la com uma fitness function?",
"Como provar que uma otimização funcionou, e o que pode ter piorado sem você ver?",
"Por que um feedback em menos de 100 ms melhora a experiência mesmo sem servidor mais rápido?"
]
};

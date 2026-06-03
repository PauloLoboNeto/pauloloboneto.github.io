# pauloloboneto.github.io

Site estático de artigos sobre engenharia de software, hospedado no GitHub Pages.

---

## Estrutura de arquivos

```
/
├── index.html                        ← página inicial com listagem por categoria
├── assets/
│   ├── css/
│   │   ├── base.css                  ← design system compartilhado por todos os artigos
│   │   └── heart.css                 ← botão flutuante de feedback
│   └── js/
│       └── heart.js                  ← lógica do botão de like (parametrizado via data-article)
└── articles/
    ├── virtual-dom-react.html
    └── IA/
        ├── llm-101 - o que é uma LLM.html
        └── llm-101 - como sao treinadas.html
```

---

## Design system (`base.css`)

### Tokens (variáveis CSS)

| Token | Light | Dark | Uso |
|---|---|---|---|
| `--bg` | `#ffffff` | `#1c1c1a` | fundo da página |
| `--bg2` | `#f5f5f3` | `#242422` | widgets, code blocks |
| `--bg3` | `#ebebe8` | `#2e2e2b` | hover states |
| `--text` | `#1a1a18` | `#e8e8e2` | texto principal |
| `--text2` | `#5c5c58` | `#a8a8a0` | parágrafos |
| `--text3` | `#8a8a84` | `#6a6a62` | labels, metadados |
| `--border` | `rgba(0,0,0,0.1)` | `rgba(255,255,255,0.1)` | bordas sutis |
| `--border2` | `rgba(0,0,0,0.22)` | `rgba(255,255,255,0.22)` | bordas mais visíveis |
| `--info-*` | azul `#185fa5` | `#85b7eb` | callouts info, links, refs |
| `--warn-*` | âmbar `#854f0b` | `#fac775` | alertas, pipeline ativo |
| `--success-*` | verde `#3b6d11` | `#97c459` | estados positivos |
| `--danger-*` | vermelho `#a32d2d` | `#f09595` | reflows, erros |
| `--radius` | `8px` | — | border-radius padrão |
| `--radius-lg` | `12px` | — | cards, widgets |

### Tipografia

| Família | Uso |
|---|---|
| Inter | corpo de texto, UI |
| Lora | títulos (`article-title`), lede |
| JetBrains Mono | code, labels monospace |

### Componentes compartilhados

- **`.article-header`** — kicker + título + lede + meta
- **`.section` + `.section-label`** — bloco de seção com label uppercase
- **`.callout`** — destaque com borda lateral azul; `.callout-warn` para variante âmbar
- **`.widget`** — container de componente interativo (fundo `--bg2`, borda sutil)
- **`.widget-row`** — linha com título e botão de ação
- **`.code-block`** — bloco de código monospace com scroll horizontal
- **`.ref`** — badge de referência bibliográfica sobrescrito
- **`.refs-list`** — lista de referências numeradas com badge azul
- **`.home-link`** — link `← home` no topo de cada artigo

---

## Convenções de artigos

### Nomenclatura de séries

Artigos sequenciais usam `Parte 1`, `Parte 2` no kicker, e o título inclui o número da parte:

```
LLM 101 — O que é uma Large Language Model - Parte 1
LLM 101 — Como as LLMs são treinadas - Parte 2
```

### Estrutura HTML de um artigo

```html
<link rel="stylesheet" href="[path]/assets/css/base.css">
<link rel="stylesheet" href="[path]/assets/css/heart.css">

<!-- estilos específicos do artigo ficam inline em <style> -->

<div class="page">
  <a href="[path]/index.html" class="home-link">← home</a>

  <header class="article-header">
    <p class="article-kicker">Série · Parte N</p>
    <h1 class="article-title">Título</h1>
    <p class="article-lede">Subtítulo/resumo</p>
    <div class="article-meta">...</div>
  </header>

  <section class="section">
    <p class="section-label">Nome da seção</p>
    <!-- conteúdo -->
  </section>

  <hr>

  <section class="section">
    <p class="section-label">Referências</p>
    <ul class="refs-list">
      <li data-n="1">...</li>
    </ul>
  </section>
</div>

<button id="heart-btn" data-article="[article-id]" ...>🤍</button>
<div id="heart-toast">Obrigado pelo feedback! ❤️</div>
<script src="[path]/assets/js/heart.js"></script>
```

### Profundidade de paths

| Local do arquivo | Prefixo dos assets | Link para home |
|---|---|---|
| `articles/*.html` | `../assets/` | `../index.html` |
| `articles/IA/*.html` | `../../assets/` | `../../index.html` |

---

## Analytics (GA4)

ID: `G-SM44B38PW8`

### Eventos customizados implementados

| Evento | Onde | Parâmetros |
|---|---|---|
| `widget_click` | clique em botão de widget | `widget_name`, `article` |
| `widget_interact` | hover no widget de hierarquia da IA | `widget_name`, `layer`, `article` |
| `article_like` | clique no botão de coração | `article`, `action: 'like'` |

### IDs de artigo usados nos eventos

| Arquivo | `article` |
|---|---|
| `virtual-dom-react.html` | `virtual-dom-react` |
| `llm-101 - o que é uma LLM.html` | `llm-101-o-que-e` |
| `llm-101 - como sao treinadas.html` | `llm-101-como-treinadas` |

---

## Categorias do index

| Categoria | Cor | Status |
|---|---|---|
| Frontend | `#185fa5` (azul) | 1 artigo |
| Inteligência Artificial | `#7c6af7` (roxo) | 2 artigos |
| Design System | `#2db4a4` (teal) | em breve |

---

## Como adicionar um novo artigo

1. Criar o arquivo HTML na pasta da categoria (`articles/` ou `articles/IA/` etc.)
2. Usar a estrutura padrão acima com os links corretos para `base.css`, `heart.css` e `heart.js`
3. Definir um `data-article` único no `#heart-btn`
4. Adicionar o card correspondente no `index.html` na categoria correta e atualizar o contador de artigos

# Máquina em Foco

Assistente técnico para consulta de manuais, com modelo de IA local via WebLLM, recuperação de trechos documentais e referências por página.

## Publicação

O projeto está ligado à Vercel pelo repositório GitHub. O comando `npm run build` reconstrói `dist/index.html` a partir do arquivo de fonte comprimido em `source/`, e copia o manifesto, ícone e service worker.

## Edição local da aplicação

1. Clone o repositório.
2. Execute `npm install` (não há dependências de runtime adicionais).
3. Execute `npm run unpack` para reconstruir a fonte em `index.html`.
4. Edite `index.html` e teste localmente.
5. Para publicar mudanças na fonte, gere os novos blocos gzip/base64 de 2.000 caracteres em `source/index.html.gz.b64.01` a `source/index.html.gz.b64.12` e atualize os arquivos no GitHub. A próxima publicação da Vercel executará o build automaticamente.

## Limitações a validar

- A IA local requer navegador e dispositivo compatíveis com WebGPU.
- O modelo precisa ser baixado na primeira utilização.
- PDF.js e WebLLM dependem de recursos externos na primeira carga; o modo offline precisa ser validado em navegador real.
- Não use respostas geradas como substituto do manual SANY específico para valores críticos, segurança ou procedimentos de manutenção.

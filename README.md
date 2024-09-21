# API com Node.js, Prisma e MongoDB

## Pré Requisitos

- Node.js
- MongoDB
- Prisma CLI

## Instalação

### Clone o repositório
```
git clone <url>
```

### Instale as dependencias
```
npm install
```

## Configuração

### Crie um arquivo .env na raiz do projeto com as seguintes variáveis
```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority"
PORT=3000

(substitua <usuairo>, <senha> e <nome_do_banco> pelos valores corretos do seu Banco MongoDB)
```

### Gere os artefatos Prisma
```
npx prisma init
```
```
npx prisma db push
```

### Abrir Prisma Studio
```
npx prisma studio
```

### Execute a Aplicação
```
node server.js
```



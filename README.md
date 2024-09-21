# 📡 API with Node.js, Prisma, and MongoDB

## ⚙️ Prerequisites

- Node.js
- MongoDB
- Prisma CLI

## 🚀 Installation

1. Clone the repository:
```
git clone <url>
```

2. Install the dependencies:
```
npm install
```

## ⚙️ Configuration

1. Create a `.env` file at the root of the project with the following variables:
```
DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster.mongodb.net/<nome_do_banco>?retryWrites=true&w=majority"
PORT=3000

(Replace <username>, <password>, and <database_name> with the correct values for your MongoDB database.)
```

2. Generate Prisma artifacts:
```
npx prisma init
```
```
npx prisma db push
```

3. Open Prisma Studio:
```
npx prisma studio
```

4. Run the Application
```
node server.js
```



# Server backend scaffold (Express + MongoDB)

## Run Mongo locally (Docker)
```bash
docker compose up -d
# Mongo at mongodb://localhost:27017 (container name: mongo)
# Mongo Express UI at http://localhost:8081
```

## Run API
```bash
npm i
cp .env.example .env
npm run dev
# http://localhost:4000/api/health
```

# Text Chat User Service

This is a messenger/WhatsApp clone

# Getting Started

## Database in Docker

Go to `database` directory and then:

```bash
docker-compose up
```

## Prisma

```bash
pnpm prisma generate
pnpm prisma migrate dev
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```bash
PORT="3030"
DATABASE_URL="postgresql://username:password@localhost:5432/user_db"
```

## Running the server

```bash
pnpm start
```

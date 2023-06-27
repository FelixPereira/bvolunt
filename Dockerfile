FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npx prisma generate
# RUN npm run build

EXPOSE 3000

# Set environment variables for Prisma
# ENV DATABASE_URL=env("DATABASE_URL")

CMD ["npm", "run", "dev"]
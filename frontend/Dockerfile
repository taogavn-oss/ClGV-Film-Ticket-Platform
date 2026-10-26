FROM node:20-alpine

WORKDIR /app

# Copy package configuration
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy source code
COPY . .

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["npm", "run", "dev", "--", "-H", "0.0.0.0"]

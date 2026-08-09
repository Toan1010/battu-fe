FROM node:20-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code and build project
COPY . .
RUN npm run build

# Expose port (Vite preview default port 4173)
EXPOSE 4173

# Start preview server on 0.0.0.0
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]


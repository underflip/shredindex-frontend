FROM node:16 as build

WORKDIR /shredindex-frontend

# Add these lines at the beginning
ARG REACT_APP_MAPBOX_API_KEY
ENV REACT_APP_MAPBOX_API_KEY=$REACT_APP_MAPBOX_API_KEY

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:16-alpine

WORKDIR /shredindex-frontend/public

RUN npm install -g serve

# Use PORT environment variable, default to 3000 if not set
ENV PORT=${PORT:-3000}

EXPOSE ${PORT}

# Use the -s flag to redirect all requests to index.html for SPA
CMD ["sh", "-c", "serve -s -l $PORT"]

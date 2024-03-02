# Add the base image for the Node.js app
# FROM node:20.0-bullseye-slim    - vulnerable
# FROM node:20.4-bullseye-slim    - vulnerable
# FROM node:20.5.1-bullseye-slim  - vulnerable
# FROM node:21.6.2-bullseye-slim  - vulnerable
# FROM node:20.11.1-bullseye-slim - vulnerable
FROM node:20.11.1-alpine3.19
# Create a working folder for running the application inside the Docker container 
WORKDIR /src/app
# Copy dependencies to the above working folder
COPY package.json ./
# Copy dependencies loom file to the working folder
COPY package-lock.json .
# Install the dependencies based on the above json files
RUN npm install
# Copy every code to the Docker working directory
COPY ./codes ./
# Tell Docker the container will listen on port 3000
EXPOSE 3000
# Run the the Node.js application
CMD ["node", "index.js"]

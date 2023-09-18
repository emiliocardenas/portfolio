FROM node:latest

# Set the working directory inside the container to /app
WORKDIR /app

# Copy all files from the host machine's current directory (.) to the /app directory inside the container
COPY . /app

# Run the npm install command inside the container to install dependencies for the Node.js application
RUN npm install

# Expose port 3000 from the container to the host machine, allowing external access to the application
EXPOSE 3000

# Define the command that will be executed when the container starts, which is 'npm start' for this Node.js application
CMD ["npm", "start"]




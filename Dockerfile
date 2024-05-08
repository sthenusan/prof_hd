# Use official Node.js image as base
FROM node:14

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy source code to the container
COPY . .

# Expose port on which the application will run
EXPOSE 3000

# Command to run the application
CMD ["node", "src/app.js"]

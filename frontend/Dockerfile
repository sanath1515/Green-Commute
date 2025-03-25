# Pull official base image
FROM node:13-alpine  
# Set working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./  
RUN npm install --silent

# Copy app files
COPY . .

# Set environment variable for port
ENV PORT=8084  
# Expose the desired port
EXPOSE 8084

# Start app
CMD ["npm", "start"]

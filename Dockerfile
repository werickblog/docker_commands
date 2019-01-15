# Define the image we will use
FROM node:8

# Create an app directory to hold the application code
WORKDIR /usr/src/app

# Install app depedencies
COPY package*.json ./

RUN npm install

# Bundle app source inside the docker image
COPY . .

# Expose our app port
EXPOSE 8080

# Define apps that will enable running of the app
CMD ["npm", "start"]

# 


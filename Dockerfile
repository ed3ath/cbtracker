# Set the base image
FROM keymetrics/pm2:latest

# Define working directory
VOLUME /opt/cbtracker
WORKDIR /opt/cbtracker

ADD . .

# Install app dependencies
RUN npm install --production

# Expose port
EXPOSE 3200

# Run app
CMD [ "pm2-docker", "start", "pm2.json" ]

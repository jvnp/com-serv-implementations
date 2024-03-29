# pull the official base image
FROM node:alpine
# set working direction
WORKDIR ./
# add `/app/node_modules/.bin` to $PATH
ENV PATH ./node_modules/.bin:$PATH
# add app
COPY ./ ./
# install application dependencies
RUN npm i
# start app
CMD ["npm", "start"]
# Expose the service over PORT 8000
EXPOSE 8000
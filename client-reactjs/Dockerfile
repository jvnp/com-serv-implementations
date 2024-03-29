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
RUN npm run build
# start app
CMD ["npm", "run", "preview"]
# Expose the service over PORT 3000
EXPOSE 3000
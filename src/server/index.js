const path = require('path');


// const fastify = require('fastify')({
//   logger: true
// });
// const fastifyStatic = require('fastify-static');

// fastify.register(fastifyStatic, {
//   root: path.join(__dirname, 'dist'),
//   prefix: '/public/'
// })

// fastify.listen({ port: 4000, host: '0.0.0.0' }, function (err, address) {
//   if (err) {
//     fastify.log.error(err)
//     process.exit(1)
//   }
//   fastify.log.info(`server listening on ${address}`)
// })




// // Declare a route
// fastify.get('/', function (request, reply) {
//   reply.send({ hello: 'world' })
// })

// fastify.get('/chin-test', function (req, reply) {
//   // reply.send({ hello: 'world' })
//   // return reply.sendFile('chin-test.js'); // serving path.join(__dirname, 'public', 'myHtml.html') directly
//   return reply.sendFile('./public/chin-test.js') 
// })

// fastify.get('/another/path', function (req, reply) {
//   return reply.sendFile('myHtml.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
// })


const express = require('express')
const app = express()
var serveStatic = require('serve-static')

// app.use(serveStatic(path.join(__dirname, 'dist')))
// app.use(express.static('dist'))

app.use('/static', express.static('dist'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)


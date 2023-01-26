const userlist=["worstUser","semiUser"]

// NPM NODE PACKAGE MANAGER

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Welcome!</title><head>')
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Submit</button></form></body>'
    )
    res.write('</html>')
    return res.end()
  }

  if (url === '/create-user' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      console.log('chunk:', chunk)
      body.push(chunk)
    })

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const user = parsedBody.split('=')[1]
      userlist.push(user)
      if (user === 'realUser') {
        res.statusCode = 302
        res.setHeader('Location', '/users')
        return res.end()
      }
      res.statusCode = 302
      res.setHeader('Location', '/')
      return res.end()
    })
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Userlist</title></head>')
    res.write('<body><h1>Users:</h1></body>')
    res.write('<body><ul>')
    userlist.map(user=>{
      res.write(`<li><a>${user}</a></li>`)
    })
    res.write('</ul></body>')
    res.write('</html>')
    res.end()
  }
}
module.exports = requestHandler

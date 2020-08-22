const jsonServer = require('json-server')
const auth = require('json-server-auth')
const app = jsonServer.create()
const router = jsonServer.router('server/db/db.json')
const { rewriter } = require('json-server-auth/dist/guards')
const rules = rewriter({
  user: 660
})
app.use(rules)
app.db = router.db
app.use(auth)
app.get('/user', (req, res, next) => {
  const { email } = req.claims
  const { db } = req.app
  const user = Object.assign({}, db.get('users').find({ email }).value())
  delete user.password
  res.json({ user })
})
app.use(router)
app.listen(3001)
console.log('Порт API сервера - 3001')
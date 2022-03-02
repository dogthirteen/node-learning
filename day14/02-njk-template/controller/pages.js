module.exports = {
  handleRenderIndex: (req, res) => {
    console.log(req.user);
    if (req.user) {
      console.log(req.user);
      res.render('index', { ...req.user })
    } else {
      res.redirect('/login')
    }

  },
  handleRenderLogin: (req, res) => {
    console.log(req.user);
    if (req.user) {
      console.log(req.user);
      res.render('index', { ...req.user })
    } else {
      res.render('login', { title: 'Hello World' })
    }

  }
}
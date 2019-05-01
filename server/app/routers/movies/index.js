
module.exports = api => {
  api.get('/movies', async (req, res, next) => {
    try {
      const user = await 'Una respuesta'
      res.json(user);
    } catch (e) {
      //this will eventually be handled by your error handling middleware
      next(e)
    }
  })
}

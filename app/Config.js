module.exports = {
  DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/todos',
  APP_PORT: process.env.PORT || 4000
}

const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose.set('strictQuery', true)
mongoose.connect(DB).then(() => console.log('DB connection successful🔥'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running on PORT ${PORT}`))
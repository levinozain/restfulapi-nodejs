const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

//File untuk koneksi ke database MONGODB

const MONGOURL = "mongodb+srv://zain:N02QCie5jz99Jvnd@cluster0.z6kus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

clientdb = new MongoClient(MONGOURL)
clientdb.connect()
const db = clientdb.db('Data')
const coll = db.collection('Data')

exports.coll = coll
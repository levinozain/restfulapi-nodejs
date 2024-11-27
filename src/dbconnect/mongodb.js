const { MongoClient } = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

//File untuk koneksi ke database MONGODB

const MONGOURL = process.env.MONGOURL

clientdb = new MongoClient(MONGOURL)
clientdb.connect()
const db = clientdb.db('Data')
const coll = db.collection('Data')

exports.coll = coll
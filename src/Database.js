import {
  MongoClient
} from 'mongodb'

const mongoUrl = 'mongodb://localhost:27017'

export default class Database {
  static async initialize () {
    console.log('Connecting to database')
    this.db = await MongoClient.connect(mongoUrl)
    console.log('Connected')
    this.amazon = this.db.collection('amazon')
  }

  static async setAmazonProducts (country, products) {
    await this.amazon.deleteMany({ country })
    this.amazon.insertMany(products)
  }
}

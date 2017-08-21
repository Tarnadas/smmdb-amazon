import { Set } from 'immutable'

import Database from './Database'
import { searches } from './searches'

const THROTTLE = 1450
const UPDATE_INTERVAL = 86400000; // 1h

(async () => {
  await Database.initialize()
  let amazonProducts = {}
  const updateAmazonProducts = async () => {
    try {
      await search(amazonProducts)
    } catch (err) {
    } finally {
      setTimeout(updateAmazonProducts, UPDATE_INTERVAL)
    }
  }
  updateAmazonProducts()
})()

const search = async amazonProducts => {
  for (let i in searches) {
    let res = Set()
    for (let j in searches[i].searches) {
      let a = []
      try {
        a = await new Promise((resolve, reject) => {
          setTimeout(async () => {
            try {
              resolve(await searches[i].client.itemSearch(Object.assign({
                includeReviewsSummary: 'False',
                responseGroup: 'ItemAttributes,SalesRank,Offers'
              }, searches[i].domain ? {
                domain: searches[i].domain
              } : {}, searches[i].searches[j])))
            } catch (err) {
              reject(err)
            }
          }, THROTTLE)
        })
      } catch (err) {
        console.error(err.Error[0])
      }
      res = res.union(a)
    }
    try {
      amazonProducts[i] = res.groupBy(x => x.ASIN[0]).map(x => x.first()).toList().map(x => {
        let price = {}
        let currency = {}
        let formattedPrice = {}
        if (x.ItemAttributes[0].ListPrice) {
          price = {price: x.ItemAttributes[0].ListPrice[0].Amount[0]}
          currency = {currency: x.ItemAttributes[0].ListPrice[0].CurrencyCode[0]}
          formattedPrice = {formattedPrice: x.ItemAttributes[0].ListPrice[0].FormattedPrice[0]}
        }
        let offerPrice = {}
        let offerCurrency = {}
        let formattedOfferPrice = {}
        if (x.Offers && x.Offers[0].Offer) {
          for (let k in x.Offers[0].Offer) {
            if (x.Offers[0].Offer[k].OfferAttributes && x.Offers[0].Offer[k].OfferAttributes[0].Condition && x.Offers[0].Offer[k].OfferAttributes[0].Condition[0] === 'New') {
              if (x.Offers[0].Offer[k].OfferListing && x.Offers[0].Offer[k].OfferListing[0].Price &&
                  x.Offers[0].Offer[k].OfferListing[0].IsEligibleForPrime && x.Offers[0].Offer[k].OfferListing[0].IsEligibleForPrime[0] === '1') {
                offerPrice = {offerPrice: x.Offers[0].Offer[k].OfferListing[0].Price[0].Amount[0]}
                offerCurrency = {offerCurrency: x.Offers[0].Offer[k].OfferListing[0].Price[0].CurrencyCode[0]}
                formattedOfferPrice = {formattedOfferPrice: x.Offers[0].Offer[k].OfferListing[0].Price[0].FormattedPrice[0]}
                break
              }
            }
          }
        }
        let productType = {}
        if (x.ItemAttributes[0].ProductTypeName) {
          productType = {productType: x.ItemAttributes[0].ProductTypeName[0]}
        }
        let features = {}
        if (x.ItemAttributes[0].Feature) {
          features = {features: x.ItemAttributes[0].Feature}
        }
        let salesRank = {}
        if (x.SalesRank) {
          salesRank = {salesRank: x.SalesRank[0]}
        }
        return Object.assign({
          country: i,
          asin: x.ASIN[0],
          detailPageURL: x.DetailPageURL[0],
          title: x.ItemAttributes[0].Title[0]
        }, price, currency, formattedPrice, offerPrice, offerCurrency, formattedOfferPrice, productType, features, salesRank)
      }).filter(x => x.price || x.offerPrice).toJS()
      Database.setAmazonProducts(i, amazonProducts[i])
      log(`Updated ${amazonProducts[i].length} Amazon products for ${i}`)
    } catch (err) {
      console.error(err)
    }
  }
}

const log = message => {
  console.log(`${new Date().toISOString().substr(0, 19)} ${message}`)
}

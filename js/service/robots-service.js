'use strict'

const STORAGE_KEY = 'users'
const gCache = loadFromStorage(STORAGE_KEY) || {}

function getUsers(count, onSuccess) {
    const cacheKey = `users_${count}`
    const url = `https://mrjson.com/api?rows=${count}&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}`

    get(url, rawData => {
        console.log('RAW DATA:', rawData)

        if (!rawData || rawData.length === 0) return onSuccess([])

        const users = rawData.map(user => ({
            name: `${user.fname} ${user.lname}`,
            phone: user.tel,
            city:`${user.city}`,
            state:`${user.state}`,
            zip:`${user.zip}`,
            address:`${user.address}`,
        }))

        gCache[cacheKey] = { ts: Date.now(), users }
        saveToStorage(STORAGE_KEY, gCache)
        onSuccess(users)
    })
}




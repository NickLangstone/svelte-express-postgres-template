import { addDays } from './helpers/time.js';
import { getRandomIntInclusive } from './helpers/number.js';
import { db } from  './_config/database.js';
import * as  time  from './helpers/time.js';


// this is a test harnes to verify the knex framework will allow us to complete the SQL queries needed
// to acheive the updates to the SpringSheep database. This is only proving the concept and minimising the
// number of DB interactions, in order to make an efficent and very scalable solution

// make some fake test data
export function makeData(farmID, animaleID, bailNumber, startTime, milkYield) {
    console.log('StartTime : ' + startTime)
    let isoDate = new Date(Date.parse(startTime))

    console.log('isoDate : ' + isoDate)
    console.log('AnimalID : ' + animaleID + ' Start Time: ' + startTime + ' bail Number: ' + bailNumber + ' Yeild: ' + milkYield + ' isoDate: ' + isoDate.toISOString())

    return {
        farmID: farmID,
        animalRFIDTag: animaleID,
        bailId: bailNumber,
        bailEventType: 'MilkingEnd',
        milkingStartIso: isoDate.toISOString(),
        milkingEndIso: isoDate.toISOString(),
        milkingVolume: milkYield,
        endOfMilkingReason: 'AutomaticNormal',
    }
}



// Store an item into the db
const storeItem = async function (item) {
    let numrowsupdated = await db('milkDataRaw').insert({
        itemID: item.ID,
        name: item.name,
        description: item.description,
        quantity: item.quantity
    })

    console.log('storeItem:  inserted = ' + numrowsupdated.rowCount)
}

// get the specific item by ID
export const getItem = async function (itemID) {
    // look up the animal in question for the current season
    const thisitem = await db('items').where(itemID).select();
    return thisitem
}


// get list of all available items
export const getItems = async function () {
    // look up the animal in question for the current season
    const allItems = await db('items').select();
    return allItems
}



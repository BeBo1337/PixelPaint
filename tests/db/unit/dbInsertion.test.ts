import { insertToCollectionAsync } from '../../../src/db/connection/ConnectionService'
import { RandomData, data } from '../data/DummyData'

test('Should insert users to db (classic collection)', () => {
    data.forEach((usr: RandomData) =>
        insertToCollectionAsync('ScoreClassic', {
            name: usr.name,
            score: usr.score,
            date: new Date()
        })
    )
})

test('Should insert users to db (paint collection)', () => {
    data.forEach((usr: RandomData) =>
        insertToCollectionAsync('ScorePaint', {
            name: usr.name,
            score: usr.score,
            date: new Date()
        })
    )
})

test('Should insert users to db (paint collection)', () => {
    data.forEach((usr: RandomData) =>
        insertToCollectionAsync('ScoreMemory', {
            name: usr.name,
            score: usr.score,
            date: new Date()
        })
    )
})

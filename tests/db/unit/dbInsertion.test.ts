import { insertToCollectionAsync } from '../../../src/db/connection/ConnectionService'

test('Should insert users to db (classic collection)', () => {
    insertToCollectionAsync('ScoreClassic', {
        name: 'Tomer',
        score: 100,
        date: new Date()
    })

    insertToCollectionAsync('ScoreClassic', {
        name: 'Ronen',
        score: 20,
        date: new Date()
    })

    insertToCollectionAsync('ScoreClassic', {
        name: 'Ori',
        score: 300,
        date: new Date()
    })

    insertToCollectionAsync('ScoreClassic', {
        name: 'Oren',
        score: 40,
        date: new Date()
    })

    insertToCollectionAsync('ScoreClassic', {
        name: 'Zach',
        score: 500,
        date: new Date()
    })

    insertToCollectionAsync('ScoreClassic', {
        name: 'Lebo',
        score: 60,
        date: new Date()
    })
})

test('Should insert users to db (paint collection)', () => {
    insertToCollectionAsync('ScorePaint', {
        name: 'Tomer',
        score: 150,
        date: new Date()
    })
})

import { getCollectionByNameAsync } from '../../../src/db/connection/ConnectionService'

test('Fetch 6 users from db', async () => {
    const collection = await getCollectionByNameAsync('ScoreClassic', {
        pageSize: 6,
        orderBy: 'score'
    })

    const data: string[] = []

    collection.forEach((doc) => data.push(doc.get('name')))

    expect(data).toStrictEqual([
        'Zach',
        'Ori',
        'Tomer',
        'Lebo',
        'Oren',
        'Ronen'
    ])
})

test('Fetch 3 users from db', async () => {
    const collection = await getCollectionByNameAsync('ScoreClassic', {
        pageSize: 3,
        orderBy: 'score'
    })

    const data: string[] = []

    collection.forEach((doc) => data.push(doc.get('name')))

    expect(data).toEqual(['Zach', 'Ori', 'Tomer'])
})

test('Fetch user from db (paint collection)', async () => {
    const collection = await getCollectionByNameAsync('ScorePaint', {
        pageSize: 1,
        orderBy: 'score'
    })

    const data: string[] = []

    collection.forEach((doc) => data.push(doc.get('name')))

    expect(data).toEqual(['Tomer'])
})

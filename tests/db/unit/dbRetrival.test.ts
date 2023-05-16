import { getCollectionByNameAsync } from '../../../src/db/connection/ConnectionService'

test('Fetch 6 users from db', async () => {
    const collection = await getCollectionByNameAsync('ScoreClassic', {
        pageSize: 100,
        orderBy: 'score'
    })

    const data: { name: string; score: number }[] = []

    collection.forEach((doc) =>
        data.push({ name: doc.get('name'), score: doc.get('score') })
    )

    console.log(data)
})

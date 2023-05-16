import { DocumentData } from 'firebase/firestore'
import { getCollectionByNameAsync } from '../../../src/db/connection/ConnectionService'

describe('getCollectionByNameAsync', () => {
    it('should retrieve a collection of documents from the database', async () => {
        // Mock the database connection or provide a test database
        // depending on your testing framework and setup

        // Define the expected data for the test
        const expectedData = [
            { name: 'Laith Cox', score: 9999 },
            { name: 'Armando Chambers', score: 9975 },
            { name: 'Dai Bowman', score: 9916 },
            { name: 'William Holder', score: 9910 },
            { name: 'Clio Elliott', score: 9891 },
            { name: 'Porter Evans', score: 9890 },
            { name: 'Warren Bryant', score: 9889 },
            { name: 'Aiko Diaz', score: 9861 },
            { name: 'Aline Sheppard', score: 9856 },
            { name: 'Brock Rhodes', score: 9829 },
            { name: 'Lucian Mosley', score: 9802 },
            { name: 'Flynn Dudley', score: 9768 },
            { name: 'Deanna Sanders', score: 9735 },
            { name: 'Lareina Armstrong', score: 9735 },
            { name: 'Nicholas Johns', score: 9715 },
            { name: 'Madeson Parks', score: 9670 },
            { name: 'Dieter Aguilar', score: 9667 },
            { name: 'Lars Vang', score: 9641 },
            { name: 'Beck Noel', score: 9624 },
            { name: 'Palmer Wheeler', score: 9614 },
            { name: 'Tanya Glass', score: 9606 },
            { name: 'Simon Soto', score: 9529 },
            { name: 'Madaline Porter', score: 9513 },
            { name: 'Clinton Carrillo', score: 9513 },
            { name: 'Hamish Carroll', score: 9454 },
            { name: 'Doris Marks', score: 9451 },
            { name: 'Hector Mercado', score: 9447 },
            { name: 'Haley Carney', score: 9416 },
            { name: 'Carolyn Murphy', score: 9367 },
            { name: 'Flynn Dyer', score: 9354 },
            { name: 'Russell Hampton', score: 9320 },
            { name: 'Hilda Mason', score: 9302 },
            { name: 'Fuller Short', score: 9298 },
            { name: 'Karen Hart', score: 9293 },
            { name: 'Mari Woodward', score: 9211 },
            { name: 'Genevieve Hawkins', score: 9186 },
            { name: 'Emerald Cochran', score: 9176 },
            { name: 'Lydia Watson', score: 9172 },
            { name: 'Quentin Walton', score: 9103 },
            { name: 'Courtney Mcknight', score: 9069 },
            { name: 'Audrey Pittman', score: 9064 },
            { name: 'Gavin Parsons', score: 9063 },
            { name: 'Alea Dyer', score: 9051 },
            { name: 'Hermione Mayer', score: 9045 },
            { name: 'Roanna Lynch', score: 9022 },
            { name: 'Avye Leach', score: 8977 },
            { name: 'Felicia Armstrong', score: 8961 },
            { name: 'Quemby Morris', score: 8944 },
            { name: 'Sophia Finley', score: 8929 },
            { name: 'Tatiana Mason', score: 8918 },
            { name: 'Ahmed Rivers', score: 8908 },
            { name: 'Salvador Riddle', score: 8907 },
            { name: 'Hamilton Neal', score: 8841 },
            { name: 'Lucius Hall', score: 8814 },
            { name: 'Lisandra Reynolds', score: 8810 },
            { name: 'Maia Wheeler', score: 8804 },
            { name: 'Nadine Flowers', score: 8800 },
            { name: 'Duncan Mitchell', score: 8791 },
            { name: 'Callum Ellis', score: 8791 },
            { name: 'Sharon Kelly', score: 8790 },
            { name: 'Jeanette Bartlett', score: 8778 },
            { name: 'Morgan Guy', score: 8769 },
            { name: 'Brenden Clemons', score: 8767 },
            { name: 'Rigel Young', score: 8754 },
            { name: 'Xandra Vazquez', score: 8749 },
            { name: 'Zoe Young', score: 8746 },
            { name: 'Lee Campbell', score: 8737 },
            { name: 'Trevor Mooney', score: 8735 },
            { name: 'Ishmael Vasquez', score: 8723 },
            { name: 'Ella Good', score: 8671 },
            { name: 'Warren Ratliff', score: 8624 },
            { name: 'Tanya Larsen', score: 8608 },
            { name: 'Indira Winters', score: 8603 },
            { name: 'Marshall Barnes', score: 8591 },
            { name: 'Damian Whitney', score: 8580 },
            { name: 'Yoko Johns', score: 8555 },
            { name: 'Teagan Webb', score: 8542 },
            { name: 'Shelley Welch', score: 8534 },
            { name: 'Abdul Cantu', score: 8523 },
            { name: 'Nina Hamilton', score: 8514 },
            { name: 'Damon Stuart', score: 8506 },
            { name: 'Halla Newton', score: 8456 },
            { name: 'Daryl Talley', score: 8444 },
            { name: 'Sophia Solis', score: 8387 },
            { name: 'Jescie Bartlett', score: 8367 },
            { name: 'Derek Fowler', score: 8358 },
            { name: 'Virginia Stewart', score: 8358 },
            { name: 'Gary Grant', score: 8321 },
            { name: 'Colt Sparks', score: 8316 },
            { name: 'Orli Mcclain', score: 8307 },
            { name: 'Edward Powell', score: 8297 },
            { name: 'Zenaida Graves', score: 8283 },
            { name: 'Simon Parker', score: 8219 },
            { name: 'Price Savage', score: 8213 },
            { name: 'Lois Reynolds', score: 8211 },
            { name: 'Hayes Casey', score: 8207 },
            { name: 'Sarah Huffman', score: 8188 },
            { name: 'Leonard Mccormick', score: 8183 },
            { name: 'Leigh Golden', score: 8176 },
            { name: 'Nicole Hodges', score: 8125 }
        ]

        // Call the function under test
        const collection: DocumentData = await getCollectionByNameAsync(
            'ScoreClassic',
            {
                pageSize: 100,
                orderBy: 'score'
            }
        )

        const data: { name: string; score: number }[] = []

        collection.forEach((doc: DocumentData) =>
            data.push({ name: doc.get('name'), score: doc.get('score') })
        )

        // Assert that the retrieved data matches the expected data
        expect(data).toEqual(expectedData)
    })

    it('should retrieve an empty collection when no documents match the criteria', async () => {
        // Mock the database connection or provide a test database
        // depending on your testing framework and setup

        // Call the function under test with parameters that won't match any documents
        const collection = await getCollectionByNameAsync(
            'NonExistentCollection',
            {
                pageSize: 100,
                orderBy: 'score'
            }
        )

        // Assert that the retrieved collection is empty
        expect(collection.empty).toBe(true)
    })

    it('should handle a type error (the res instance will be empty)', async () => {
        // Mock the database connection or provide a test database
        // depending on your testing framework and setup

        // Call the function under test with invalid parameters
        const res = await getCollectionByNameAsync('ScorePaint', {
            pageSize: 100,
            orderBy: 'scor'
        })

        expect(res.empty).toBe(true)
    })
})

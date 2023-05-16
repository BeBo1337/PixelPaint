import firebase from 'firebase/app'
import { FirebaseApp, initializeApp } from 'firebase/app'
import {
    collection,
    getFirestore,
    setDoc,
    doc,
    Query,
    limit,
    orderBy,
    startAfter,
    endBefore,
    query,
    getDocs,
    QuerySnapshot,
    DocumentData
} from 'firebase/firestore'
import firebaseConfig from './Config'
import IScoreModel from '../models/ScoreModel'
import IScoreOptions from '../models/ScoreOptions'
import { v4 as uuidv4 } from 'uuid'

// Initialize Firebase.
const app: FirebaseApp = initializeApp(firebaseConfig)

// Firestore db instance.
const db = getFirestore(app)

export const getCollectionByNameAsync = async (
    name: string,
    options: IScoreOptions
) => {
    const snapshot = await getDocs(
        query(
            collection(db, name),
            limit(options.pageSize),
            options.orderBy !== undefined
                ? orderBy(options.orderBy, 'desc')
                : orderBy('')
        )
    )
    return snapshot
}

export const insertToCollectionAsync = async (
    name: string,
    score: IScoreModel
) => {
    await setDoc(doc(db, name, uuidv4()), score).catch((err) => {
        console.log(err)
    })
}

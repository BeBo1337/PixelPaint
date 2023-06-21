import { NotFoundException } from '@nestjs/common'

export default class CollectionNotFound extends NotFoundException {
    constructor(collectionName: string) {
        super(`Collection ${collectionName} not found`)
    }
}

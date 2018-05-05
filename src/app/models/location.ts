/* tslint:disable:no-invalid-this */
import { Document, Schema, model } from 'mongoose'
import { placeSchema } from '../schemas/schemas'

export interface Location {
  uid: number
  latitude: number
  longitude: number
  locationName: string
  description: string
}

export interface LocationModel extends Location, Document {
  //custom methods for your model would be defined here
  sortMe()
  bananas: string
}
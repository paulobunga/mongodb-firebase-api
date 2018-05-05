/* tslint:disable:no-invalid-this */
import { Schema, model } from 'mongoose'

export const placeSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  id: Number,
  locationName: String,
  latitude: Number,
  longitude: Number,
  description: String
})

placeSchema.pre('save', function(next) {
  if (!this.createdAt) {
    this.createdAt = new Date()
  }
  this.updatedAt = new Date()
  console.log('this1', this)

  // if (!this.id) {
  //   Place.find({}, setId.bind(this)).exec((err, res) => next())
  // }
})

function setId(err, places) {
  console.log('this2', this)

  if (err) throw err

  places.sort((a, b) => a.id - b.id)

  const lastObj = places[places.length - 1]
  console.log(lastObj)

  const id = places[places.length - 1].id

  console.log('next id is:', id + 1)

  this.id = id + 1
}
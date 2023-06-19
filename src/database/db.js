import mongoose from 'mongoose'

async function connectDatabase() {
  await mongoose.connect(
    'mongodb+srv://acypriano:W26f6FcqJs0THDdk@clusterinstafeed.66edeiw.mongodb.net/?retryWrites=true&w=majority',
  )
}


export default connectDatabase
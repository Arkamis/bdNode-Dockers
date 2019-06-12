const mongoose = require('mongoose');

// Connect to MongoDB
// mongoose
//   .connect(
//     'mongodb://mongo:27017/docker-node-mongo',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

mongoose.connect("mongodb+srv://Arkamike:123test@cluster0-sijqk.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
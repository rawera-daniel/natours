const mongoose = require('mongoose');

const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

// To specify a schema for our data
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: { type: Number, default: 4.5 },
  price: { type: Number, require: [true, 'A tour must have a price'] },
});

const Tour = mongoose.model('Tour', tourSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}....`);
});

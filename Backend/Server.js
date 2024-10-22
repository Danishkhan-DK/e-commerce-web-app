// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/signup', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// // Define User Schema and Model
// const UserSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
// });
// const User = mongoose.model('User', UserSchema);

// // Signup Route
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const user = new User({ username, password });
//     await user.save();
//     res.status(201).send({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).send({ message: 'Error registering user', error });
//   }
// });

// // Root Route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Signup API');
// });

// // Start the Server
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/signup', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   const newUser = new User({ username, password });
//   await newUser.save();

//   res.send('User signed up successfully');
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ username, password: hashedPassword });
//     await newUser.save();

//     res.send('User signed up successfully');
//   } catch (error) {
//     res.status(500).send('Error signing up');
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const user = await User.findOne({ username });
//     if (user && await bcrypt.compare(password, user.password)) {
//       res.send({ username: user.username, message: 'Login successful' });
//     } else {
//       res.status(401).send('Invalid username or password');
//     }
//   } catch (error) {
//     res.status(500).send('Error logging in');
//   }
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });


app.get('/',(req,res)=>{
  res.send('Testing...!')
})
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.send('User signed up successfully');
  } catch (error) {
    res.status(500).send('Error signing up');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (isPasswordMatch) {
        res.send({ username: user.username, message: 'Login successful' });
      } else {
        res.status(401).send('Invalid username or password');
      }
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
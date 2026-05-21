const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/meals', async (req, res) => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken'
    );
    res.json({ meals: response.data.meals });
  } catch (error) {
    console.error('Error fetching meals:', error.message);
    res.status(500).send('Error fetching meals');
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

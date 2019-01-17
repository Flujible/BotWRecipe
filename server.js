const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.static('src/assets/fonts'));
app.use(cors());

const data = {
    "recipes": [
        {
          "name": "Monster Cake",
          "ingredients": [
            {
              "name": "Monster extract",
              "quantity": 1
            },
            {
              "name": "Tabantha wheat",
              "quantity": 1
            },
            {
              "name": "Cane sugar",
              "quantity": 1
            },
            {
              "name": "Goat butter",
              "quantity": 1
            }
          ],
          "img": "http://botw-recipes.com/assets/images/stuff/recipes/5.png",
          "effects": [
            {
              "name": "Health",
              "value": 2,
            },
          ]
        },
        {
          "name": "Meat-stuffed pumpkin",
          "ingredients": [
            {
              "name": "pumpkin",
              "quantity": 1
            },
            {
              "name": "Raw gourmet meat, Raw whole bird, Raw prime meat, Raw bird thigh, Raw Meat or Raw bird drumstick",
              "quantity": 1
            }
          ],
          "img": "http://botw-recipes.com/assets/images/stuff/recipes/65.png",
          "effects": [
            {
              "name": "Tough",
              "value": 1,
              "duration": "1:20"
            }
          ]
        },
      ]
}

app.get('/api/recipes', (req, res) => res.send(data));

app.listen(port, () => console.log(`Listening on port ${port}`));
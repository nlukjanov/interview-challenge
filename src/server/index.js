const express = require('express');
const items = require('./items');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static('dist'));

app.get('/api/items', (req, res) => {
  const searchedItems = items.filter((filteredItem) => {
    return filteredItem.name.toLowerCase().includes(req.query.search);
  });
  if (req.query.search === '') {
    return res.send({ items });
  }
  return res.send({ items: searchedItems });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

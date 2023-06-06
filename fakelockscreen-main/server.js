const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/api/capture', upload.single('image'), (req, res) => {
  console.log(req.file);
  res.json({ message: 'File uploaded successfully' });
});


app.listen(3001, () => console.log('Listening on port 3001'));

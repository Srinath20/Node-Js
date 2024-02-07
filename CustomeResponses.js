const call = require('http');

const app = call();

app.get('/home', (req, res) => {
    res.send('Welcome home');
});

app.get('/about', (req, res) => {
    res.send('Welcome to About Us page');
});

app.get('/node', (req, res) => {
    res.send('Welcome to my Node.js project');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/*
Based on the url the user hits , I want you to return custom responses.
When url = /home , return response ==> Welcome home
When url = /about, return response ==> Welcome to About Us page
When url =/node, return response ==> Welcome to my Node Js project

*/

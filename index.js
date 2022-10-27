const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const categories = require('./categories.json');
const courses = require('./courses.json');
const { response } = require('express');

app.use(cors())

app.get('/', (req, res) => {
    res.send('News Api Running')
});
app.get('/course_categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '04') {
        res.send(courses)
    } else {
        const category_course = courses.filter(c => c.category_id === id);
        res.send(category_course)
    }

})
app.get('/courses', (req, res ) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const Selectedcourse = courses.find(c => c._id === id);
    res.send(Selectedcourse);
    console.log(req.params.id);
})

app.listen(port, () => {
    console.log("SERVER RUNNING");
})
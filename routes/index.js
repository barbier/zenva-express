const express = require('express')
const router = express.Router()

let user = null

const profiles = [
    {
        name: 'Mike',
        city: 'Sydney',
        profession: 'Doctor',
    },
    {
        name: 'Cindy',
        city: 'Perth',
    },
    {
        name: 'Joe',
        city: 'Sydney',
        profession: 'Developer',
    },
]
router.get('/', (req, res, next) => {
    const data = {
        name: 'Index',
        date: req.timestamp,
        profiles,
        user,
    }
    res.render('index', data)
})

router.get('/login', (req, res, next) => {
    res.render('login', null)
})

router.post('/login', (req, res, next) => {
    let data = {
        username: req.body.username,
        password: req.body.password,
    }
    
    if (data.password === '123') {
        user = data.username
        res.redirect('/')
        return
    }

    data = {
        message: 'Please, check your password'
    }
    res.render('error', data)
})

router.post('/join', (req, res, next) => {
    const body = req.body
    profiles.push(body)
    res.redirect('/')
})

router.get('/json', (req, res, next) => {
    const data = {
        name: 'Gabriel',
        location: 'Rio',
    }
    res.json(data)
})

router.get('/html', (req, res, next) => {
    const html = ''
    res.send(html)
})

router.get('/query', (req, res, next) => {
    const query = req.query
    res.json(query)
})

router.get('/params/:name/:location/:occupation', (req, res, next) => {
    const params = req.params
    res.json(params)
})

module.exports = router

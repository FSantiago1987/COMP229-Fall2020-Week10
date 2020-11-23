let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let orderController = require('../controllers/order');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Order List Page -- READ Operation
router.get('/', orderController.displayOrderList);

// POST Route for processing order page
router.post('/add', orderController.processAddPage);

// POST Request - Update the database with data from the Edit Order Page
router.post('/edit/:id', passport.authenticate('jwt', {session: false}), orderController.processEditPage);

// GET Request - perform the delete order action
router.get('/delete/:id', passport.authenticate('jwt', {session: false}), orderController.performeDelete);

module.exports = router;
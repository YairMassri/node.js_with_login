module.exports = function (app, tigers) {
    // app.get('/', function(req, res){
    //     res.send(getTigers(tigers));
    // });
    app.get('/', function (req, res) {
        if (req.session.username) {
            res.render('index', { title: "Tigers", tigers: tigers, username: req.session.username });
        } else {
            res.redirect('/login');
        }
    });

    app.get('/add', function (req, res) {
        if (req.session.username) {
            res.render('add', { title: "Add a tiger", username: req.session.username });
        }
        else res.redirect('/login');
    });

    app.get('/add-submit', function (req, res) {
        tigers.push(req.query.name);
        res.redirect('/');
        // res.send(getTigers(tigers));
    });

    app.get('/update', function (req, res) {
        if(req.session.username) {
        res.render('update', { title: "Update a tiger", username: req.session.username });
    }
    else res.redirect('/login');
    });

    app.get('/update-submit', function (req, res) {
        tigers.splice(req.query.pos, 1, req.query.name);
        res.redirect('/');
        // res.send(getTigers(tigers));
    });

    app.get('/delete', function (req, res) {
        if(req.session.username) {
        res.render('delete', { title: "Delete a tiger", username: req.session.username });
    }
    else res.redirect('/login');
    });

    app.get('/delete-submit', function (req, res) {
        tigers.splice(req.query.pos, 1);
        res.redirect('/');
        // res.send(getTigers(tigers))
    });

    app.get('/login', function (req, res) {
        res.render('login', { title: "login", hideLogin: true });
    });

    app.get('/login-submit', function (req, res) {
        req.session.username = req.query.name;
        res.redirect('/');
        // res.send(getTigers(tigers));
    });

    app.get('/logout-submit', function(req, res){
        req.session.username = false;
        res.send('You ended your session correctly');
    });

    app.get('/get-tigers', function (req, res) {
        res.json({ tigers: tigers });
    });
}

// function getTigers(tigers) {
//     var tgs = "";
//     for(var i=0; i<tigers.length; i++){
//         tgs += '<li>'+tigers[i]+'</li>';
//     }
//     return '<ol>'+tgs+'</ol>';
// }

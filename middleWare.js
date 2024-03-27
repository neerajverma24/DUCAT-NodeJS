// exporting in file class21.js

module.exports = filterData = (req, resp, next) => {
    // console.log('filterData is working...')
    if (!req.query.age) {
        console.log('please enter your age...')
        resp.send('please enter your age...')
    } else if (req.query.age < 18) {
        console.log('You are not eligible...')
        resp.send('You are not eligible...')
    } else {
        console.log('Congrats! you are eligible...')
        resp.send('Congrats! you are eligible...')
        next();
    }
}
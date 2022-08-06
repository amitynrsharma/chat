// const express=require('express');

// app.set('view engine', 'ejs');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));     //static path


// app.use('/', studentRoute);

// app.listen(2500, () => {
//     console.log('server running on localhost:2500');
// })

// module.exports = app;
const studentController=require('../controller/studentController');

module.exports=function (app){
    app.route('/').get(studentController.getStudents); 
}
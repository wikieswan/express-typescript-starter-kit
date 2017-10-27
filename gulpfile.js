var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('default', function() {
  
});

gulp.watch('src/**/*.ts', function(event) {
    exe('tsc')
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

function exe(cmd,fn){
    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        console.log(err);
        if(fn){
            fn()
        }
    });
}

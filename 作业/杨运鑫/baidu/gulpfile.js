// ����gulp
var gulp = require('gulp');       // ������

// ����gulp���
var livereload = require('gulp-livereload'), // ��ҳ�Զ�ˢ�£����������ƿͻ���ͬ��ˢ�£�
    webserver = require('gulp-webserver'); // ���ط�����

// ע������
gulp.task('webserver', function() {
    gulp.src('app') // ������Ŀ¼��./�����Ŀ¼��
        .pipe(webserver({ // ����gulp-webserver
            livereload: true, // ����LiveReload
            open: true // ����������ʱ�Զ�����ҳ
        }));
});

// ��������
gulp.task('watch', function() {
    var server = livereload();

    gulp.watch(['dist/**']).on('change', function (file) {
        server.changed(file.path);
    });
});

// Ĭ������
gulp.task('default', ['webserver','watch']);
const gulp = require('gulp')

//A task default é a primeira que o programa irá procurar
gulp.task('default', () => {
   gulp.start('copiar', 'fim') //foram chamadas duas tasks nessa funcao
})

//Foi criado uma task copiar porém foi passado um array de tasks que deve ser executado antes da task copiar
gulp.task('copiar', ['antes1', 'antes2'], () => {
        //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) //pegando os arquivos
        //gulp.src(['pastaA/*.txt']) //pegando todos os arquivos txt
        gulp.src('pastaA/**/*.txt') //pegando todos os arquivos dentro da pasta A é suas subpastas
        // .pipe(transformacao1()) //é uma função filtro que serve para diversas coisas 
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))

    })

gulp.task('antes1', () => {
    console.log('antes1')
})

gulp.task('antes2', () => {
    console.log('antes2')
})

gulp.task('fim', () => {
    console.log('fim')
})
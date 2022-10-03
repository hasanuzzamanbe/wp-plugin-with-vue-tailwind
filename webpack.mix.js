let mix = require('laravel-mix');
mix.setPublicPath('assets');

mix.setResourceRoot('../');
mix
    .js('src/admin/start.js', 'assets/admin/js/start.js').vue({ version: 3 })
    .sass('src/scss/admin/app.scss', 'assets/css/element.css');

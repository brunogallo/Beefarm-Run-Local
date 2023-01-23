var host = '192.168.15.24';
var port = 9002;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    var cp = require('child_process');
    cp.spawn('cmd', ['/C', 'start cmd.exe /K gulp']);

    console.log('Rodando o CORS com sucesso! Iniciando o Sexy Bomb!');
});
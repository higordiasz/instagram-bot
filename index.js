const Instagram = require('instagram-web-api')
const { USERNAME, PASSWORD, HASHTAG, TIMER } = require('./json/config.json')
const username = USERNAME
const password = PASSWORD
let client = new Instagram({ username, password })

try {
    ; (async () => {
        if (!USERNAME) return;
        if (!PASSWORD) return;
        if (!TIMER) return;
        if (!HASHTAG) return;
        await client.login()
        const profile = await client.getProfile()
        console.log(`\u001b[32m`, `―――――――――――――――――― INSTAGRAM BOT ――――――――――――――――――`)
        console.log(`\u001b[37m`, `Bot criado por: Dias || Apenas com intuito de aprendizagem!!`)
        console.log(`\u001b[32m`, `―――――――――――――――――― INSTAGRAM BOT ――――――――――――――――――`)
        console.log(`\u001b[32m`, `Logado como: `, profile.username)
        console.log(`\u001b[32m`, 'Email: ', profile.email)
        console.log(`\u001b[32m`, 'Telefone: ', profile.phone_number)
        console.log(`\u001b[32m`, 'Timer: ', TIMER)
	console.log(`\u001b[32m`, 'Hashtag: ', HASHTAG)
        console.log(`\u001b[32m`, 'Usuario: ', USERNAME)
        console.log(`\u001b[32m`, 'Senha: ', PASSWORD)
        console.log(`\u001b[32m`, 'Discord para Suporte: https://discord.gg/fWHWRHD')
        console.log(`\u001b[32m`, 'Me adicione qualquer duvida: Dias#1869')
        Array.prototype.delayedForEach = function (callback, timeout, thisArg, done) {
            var i = 0,
                l = this.length,
                self = this;

            var caller = function () {
                callback.call(thisArg || self, self[i], i, self);
                if (++i < l) {
                    setTimeout(caller, timeout);
                } else if (done) {
                    setTimeout(done, timeout);
                }
            };

            caller();
        };
        let media = await client.getMediaFeedByHashtag({ hashtag: HASHTAG })
        let array = media.edge_hashtag_to_media.edges
        array.delayedForEach(function (num) {
            try {
                client.like({ mediaId: num.node.id })
                console.log('Like!!')
            } catch (err) {
                console.log('Erro ao dar Like!')
            }
        }, TIMER, null, function () {
            console.log("done!");
        });
        /*.forEach(Node => {
            try {
                client.like({ mediaId: Node.node.id })
            } catch (err) {
                console.log(err)
            }
            console.log('like')
        }, 20000);*/
    })()
} catch (err) {
    console.log(err)
}
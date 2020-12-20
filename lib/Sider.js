case '#sider':

            if (!isGroupMsg) return Client.reply(from, menuPriv, id)

            try {

                if (quotedMsg) {

                    Client.getMessageReaders(message.quotedMsgObj.id).then(a => {

                        let siderne = `Cieeee..... Ngeread:) ${a.length} \n`

                        for (let i = 0; i < a.length; i++){

                            const nomer = a[i].id.replace('@c.us','')

                            dia ngeread += `➣ @${nomer}\n`

                        }

                        Client.sendTextWithMentions(from, siderne, id)

                    })

                } else {

                    Client.reply(from, `Hanya tag pesan bot oke?!`, id)

                }

            } catch(e) {

                ERRLOG(e)

                hurtz.reply(from, `Pastikan anda tag pesan bot!`, id)

            }

            break

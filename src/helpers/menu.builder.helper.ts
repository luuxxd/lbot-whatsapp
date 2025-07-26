import { Bot } from "../interfaces/bot.interface.js"

// MENU PRINCIPAL
export const mainMenu  = (botInfo : Bot)=> { 
    let {name, prefix} = botInfo
    return `*${name?.trim()}*
؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 𝗠𝗘𝗡𝗨 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗢 𝗝𝗔𝗪𝗛𝗘𝗔𝗗 〆

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 ${prefix}menu 0   ❓ Informação
〆 ${prefix}menu 1   🖼️ Figurinhas
〆 ${prefix}menu 2   ⚒️ Utilidades
〆 ${prefix}menu 3   📥 Downloads
〆 ${prefix}menu 4   🧩 Jogos/Entretenimento
`
}

// MENU PRINCIPAL (GRUPO)
export const mainMenuGroup  = (botInfo : Bot)=> { 
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ MENU PRINCIPAL

〆 ${prefix}menu 0   ❓ Informação
〆 ${prefix}menu 1   🖼️ Figurinhas
〆 ${prefix}menu 2   ⚒️ Utilidades
〆 ${prefix}menu 3   📥 Downloads
〆 ${prefix}menu 4   🧩 Variado
〆 ${prefix}menu 5   👨‍👩‍👧‍👦 Grupo
`
}

// MENU - STICKER
export const stickerMenu = (botInfo : Bot)=>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

➲ FIGURINHAS

〆 ${prefix}s - Imagem/vídeo para sticker
〆 ${prefix}s 1 - Imagem para sticker (circular)
〆 ${prefix}s 2 - Imagem para sticker (sem corte)
〆 ${prefix}snome (pack, autor) - Renomeia sticker
〆 ${prefix}simg - Sticker para imagem
〆 ${prefix}ssf - Imagem para sticker (sem fundo)
〆 ${prefix}emojimix (💩+😀) - Emoji para sticker
`
}

// MENU - INFO
export const infoMenu = (botInfo : Bot)=>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

➲ INFO/SUPORTE

〆 ${prefix}info - Informações do bot
〆 ${prefix}reportar (texto) - Reporte um problema
〆 ${prefix}meusdados - Exibe seus dados de uso
`
}

// MENU - DOWNLOAD
export const downloadMenu = (botInfo : Bot)=>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

➲ DOWNLOADS

〆 ${prefix}play (nome ou link) - Áudio do Youtube
〆 ${prefix}yt (nome ou link) - Vídeo do Youtube
〆 ${prefix}fb (link) - Vídeo do Facebook
〆 ${prefix}ig (link) - Videos/imagens do Instagram
〆 ${prefix}x (link) - Videos/imagens do X
〆 ${prefix}tk (link) - Vídeo do Tiktok
〆 ${prefix}img (tema) - Imagens do Google
`
}

// MENU - UTILIDADE
export const utilityMenu = (botInfo : Bot)=>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 *UTILITÁRIOS* 〆

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ CONSULTAS/TEXTO

〆 ${prefix}steamverde (jogo) - Pesquisa de jogos "alternativos"
〆 ${prefix}brasileirao - Tabela do Brasileirão
〆 ${prefix}animes - Últimos lançamentos de animes
〆 ${prefix}mangas - Últimos lançamentos de mangás
〆 ${prefix}filmes - Tendências atuais de filmes
〆 ${prefix}series - Tendências atuais de séries
〆 ${prefix}encurtar (link) - Encurtador de link
〆 ${prefix}letra (música) - Letra de música
〆 ${prefix}traduz (idioma texto) - Tradutor de texto
〆 ${prefix}pesquisa (texto) - Pesquisa do Google
〆 ${prefix}clima (cidade) - Previsão do tempo
〆 ${prefix}noticias - Notícias atuais
〆 ${prefix}moeda (tipo valor) - Conversor de moeda
〆 ${prefix}calc (expressao) - Calculadora
〆 ${prefix}ddd - Informação do DDD
〆 ${prefix}tabela - Tabela de caracteres

➲ AUDIO

〆 ${prefix}ouvir - Áudio para texto
〆 ${prefix}audio - Extrai áudio de um video
〆 ${prefix}efeitoaudio (tipo) - Adiciona efeito no áudio
〆 ${prefix}voz pt texto - Texto para áudio

➲ IMAGENS

〆 ${prefix}upimg - Upload de imagem
〆 ${prefix}rbg - Removedor de fundo

➲ RECONHECIMENTO

〆 ${prefix}qualmusica - Reconhecimento de música
〆 ${prefix}qualanime - Reconhecimento de anime
`
}

// MENU - GRUPO
export const groupMenu = (botInfo : Bot) =>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 *GRUPO* 〆

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ GERAL

〆 ${prefix}grupo - Dados do grupo
〆 ${prefix}adms - Lista de administradores
〆 ${prefix}dono - Dono do grupo
`
}

// MENU - GRUPO (ADMINISTRADOR)
export const groupAdminMenu = (botInfo : Bot)=>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 *GRUPO* 〆

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ GERAL

〆 ${prefix}grupo - Dados do grupo
〆 ${prefix}adms - Lista de administradores
〆 ${prefix}fotogrupo - Altera foto do grupo
〆 ${prefix}mt (texto) - Marca membros/admins com uma mensagem
〆 ${prefix}mm (texto) - Marca membros com uma mensagem
〆 ${prefix}dono - Dono do grupo

➲ MEMBROS

〆 ${prefix}membro (@membro) - Mostra os dados do membro
〆 ${prefix}topativos - Marca os 10 membros mais ativos
〆 ${prefix}inativos (número) - Marca os membros com menos de um determinado número de mensagens

➲ ADMINISTRAÇÃO

〆 ${prefix}add (número do usuário) - Adiciona ao grupo
〆 ${prefix}ban (@membro) - Bane do grupo
〆 ${prefix}aviso (@membro) - Adiciona um aviso a um membro
〆 ${prefix}rmaviso (@membro) - Remove 1 aviso de um membro
〆 ${prefix}zeraravisos - Zera avisos de todos os membros
〆 ${prefix}restrito - Abre/feche o grupo só para admin
〆 ${prefix}promover (@membro) - Promove para administrador
〆 ${prefix}rebaixar (@admin) - Rebaixa para membro comum
〆 ${prefix}link - Link do grupo
〆 ${prefix}rlink - Redefine o link do grupo
〆 ${prefix}apg - Apaga mensagem

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 *RECURSOS* 〆 

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ BEM VINDO

〆 ${prefix}bemvindo - Ativa/desativa a mensagem de bem-vindo

➲ MUTAR GRUPO

〆 ${prefix}mutar - Ativa/desativa o uso de comandos somente para admins

➲ STICKER AUTOMATICO

〆 ${prefix}autosticker - Ativa/desativa a criação automática de stickers

➲ ANTI-LINK

〆 ${prefix}antilink - Ativa/desativa o anti-link
〆 ${prefix}addexlink - Adiciona links as exceções do anti-link
〆 ${prefix}rmexlink - Remove links das exceções do anti-link

➲ ANTI-FAKE

〆 ${prefix}antifake - Ativa/desativa o anti-fake
〆 ${prefix}addexfake - Adiciona prefixos/numeros as exceções do anti-fake
〆 ${prefix}rmexfake - Remove prefixos/numeros as exceções do anti-fake

➲ ANTI-FLOOD 

〆 ${prefix}antiflood - Ativa/desativa o anti-flood

➲ RESPOSTA AUTOMÁTICA

〆 ${prefix}autoresp - Ativa/desativa as respostas automáticas
〆 ${prefix}respostas - Exibe as respostas configuradas
〆 ${prefix}addresp (palavra resposta) - Adiciona uma resposta a palavra
〆 ${prefix}rmresp (palavra) - Remove a resposta para essa palavra

➲ BLOQUEIO DE COMANDOS

〆 ${prefix}bcmd (!cmd1 !cmd2) - Bloqueia os comandos
〆 ${prefix}dcmd (!cmd1 !cmd2) - Desbloqueia os comandos

➲ LISTA NEGRA

〆 ${prefix}listanegra - Exibe a lista negra
〆 ${prefix}addlista (número do usuário) - Adiciona a lista negra
〆 ${prefix}rmlista (número do usuário) - Remove da lista negra

➲ FILTRO DE PALAVRAS

〆 ${prefix}addfiltros (palavra) - Adiciona palavras ao filtro
〆 ${prefix}rmfiltros (palavra) - Remove palavras do filtro
`
}

// MENU - VARIADO
export const miscMenu = (botInfo : Bot) =>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ JOGOS

〆 ${prefix}ppt (opção) - Joga pedra, papel e tesoura
〆 ${prefix}caracoroa - Joga cara ou coroa
〆 ${prefix}roletarussa - Joga roleta russa

➲ SORTEIO

〆 ${prefix}sorteio numero - Sorteia um número até esse valor.

➲ ENTRETENIMENTO

〆 ${prefix}mascote - Onipotente e onipresente WhatsApp Jr
〆 ${prefix}frase - Frase dúvidosa do WhatsApp Jr
〆 ${prefix}chance (texto) - Chance de algo acontecer
`
}

// MENU - VARIADO (GRUPO)
export const miscGroupMenu = (botInfo : Bot) =>{
    let {name, prefix} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ JOGOS

〆 ${prefix}ppt (opcão) - Joga pedra, papel e tesoura
〆 ${prefix}caracoroa - Joga cara ou coroa
〆 ${prefix}roletarussa - Joga roleta russa

➲ SORTEIO

〆 ${prefix}sorteio (número) - Sorteia um número até esse valor.
〆 ${prefix}sorteiomembro - Sorteia um membro do grupo.

➲ ENTRETENIMENTO

〆 ${prefix}mascote - Onipotente e onipresente WhatsApp Jr
〆 ${prefix}frase - Frase dúvidosa do WhatsApp Jr
〆 ${prefix}viadometro - Nível de viadagem
〆 ${prefix}detector - Detector de mentira
〆 ${prefix}casal - Escolhe um casal
〆 ${prefix}gadometro - Nível de gado
〆 ${prefix}chance (texto) - Chance de algo acontecer
〆 ${prefix}bafometro - Nível de álcool
〆 ${prefix}top5 (tema) - Ranking de top 5
〆 ${prefix}par (@usuario1 @usuario2) - Nível de compatibilidade
`
}

// MENU - ADMIN
export const adminMenu = (botInfo : Bot)=>{
    let {prefix, name} = botInfo
    return `*${name?.trim()}*

< > Se quiser informações sobre algum comando, use ${prefix}comando guia

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 *ADMINISTRAÇÃO* 〆

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ GERAL

〆 ${prefix}info - Informação do bot
〆 ${prefix}ping - Informação do sistema
〆 ${prefix}bloquear (@usuario)  - Bloqueia o usuário
〆 ${prefix}desbloquear (@usuario)  - Desbloqueia o usuário
〆 ${prefix}listablock  - Lista de usuários bloqueados
〆 ${prefix}bcgrupos (texto) - Mensagem para todos os grupos
〆 ${prefix}desligar - Desliga o bot

➲ CUSTOMIZAÇÃO

〆 ${prefix}nomebot (nome) - Altera nome do bot
〆 ${prefix}prefixo (símbolo) - Altera o prefixo dos comandos
〆 ${prefix}fotobot - Altera foto do bot
〆 ${prefix}recado (texto) - Altera o texto do recado/status

➲ GRUPOS

〆 ${prefix}grupos - Dados dos grupos atuais
〆 ${prefix}entrargrupo (link) - Entra no grupo

➲ USUÁRIOS

〆 ${prefix}usuario (@usuario) - Dados do usuário

➲ ADMINS DO BOT

〆 ${prefix}admins - Administradores do bot
〆 ${prefix}addadmin - Promove a admin do bot
〆 ${prefix}rmadmin - Rebaixa a usuário do bot

؄؄؄؄؄؄؄؄؄؄؄؄؄

〆 *RECURSOS* 〆

؄؄؄؄؄؄؄؄؄؄؄؄؄

➲ AUTO-STICKER PRIVADO

〆 ${prefix}autostickerpv - Ativa/desativa a criação automática de stickers no privado

➲ BLOQUEIO DE COMANDOS

〆 ${prefix}bcmdglobal (!cmd1 !cmd2) - Bloqueia os comandos globalmente
〆 ${prefix}dcmdglobal (!cmd1 !cmd2) - Desbloqueia os comandos globalmente

➲ MODO ADMIN

〆 ${prefix}modoadmin - Ativa/desativa o modo para apenas admins do bot usarem comandos

➲ TAXA DE COMANDOS

〆 ${prefix}taxacomandos (número) - Ativa/desativa a taxa de comandos por minuto do usuário

➲ MENSAGENS PRIVADAS

〆 ${prefix}comandospv - Ativa/desativa os comandos em mensagens privadas
`
}


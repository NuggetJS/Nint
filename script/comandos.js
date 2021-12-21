const comandos = {
    verificar: (comando) => {
        if (comando !== "") {
            comandos.comandos(comando);
        };
    },
    comandos: (cmd)=> {
                    // -------------------------------
                    //buscar en diversas plataformas
                    // -------------------------------

                    if (cmd.includes('busca en google') || cmd.includes('buscar en google') || cmd.includes('busca en internet') || cmd.includes('buscar en internet') || cmd.includes('busca') && cmd.indexOf("en") < 13|| cmd.includes('buscar') && cmd.indexOf("en") < 13){
                        url = cmd;
                        url = url.replace("busca en google", "");
                        url = url.replace("busca en internet", "");
                        url = url.replace("buscar en internet", "");
                        url = url.replace("buscar en google", "");
                        url = url.replace("busca", "");
                        url = url.replace("buscar", "");
                        respuesta = "¡Ok! buscando en internet"+url;
                        window.open('https://www.google.com/search?q='+url);   
                    }
                    else if (cmd. indexOf('busca en youtube') > -1 || cmd. indexOf('busca') > -1 && cmd. indexOf('youtube') > -1){
                        url = cmd;
                        url = url.replace("en", ""); 
                        url = url.replace("busca", ""); 
                        url = url.replace("youtube", ""); 
                        respuesta = "¡Ok! buscando en Youtube"+url;
                        window.open('https://www.youtube.com/results?search_query='+url);   
                    }
                    else if (cmd.indexOf("busca en la pagina de los testigos de jehova") > -1){
                        url = cmd;
                        url = url.replace("busca en la pagina de los testigos de jehova", ""); 
                        url = url.replace(".", ""); 
                        respuesta = "¡Ok! buscando en la J doble v"+url;
                        window.open('https://www.jw.org/es/b%C3%BAsquedas/?q='+url);   
                    }
                    else if (cmd. indexOf('busca en la tienda de facebook') > -1){
                        url = cmd;
                        url = url.replace("busca en la tienda de facebook", ""); 
                        respuesta = "¡Ok! buscando en facebook market place"+url;
                        window.open('https://www.facebook.com/marketplace/103740209665322/search/?query='+url);   
                    }
                                    // -------------------------------
                                    //abrir aplicaciones y redes sociales
                                    // -------------------------------
                
                    else if (cmd.indexOf("abrir google") > -1 || cmd.indexOf('abre google') > -1 || cmd.indexOf('busca google') > -1 || cmd.indexOf('ir a google') > -1){
                        window.open('https://google.com/'); 
                        respuesta = "¡Ok! Abriendo google.";
                    }                
                    else if (cmd.indexOf("abrir youtube") > -1 || cmd.indexOf('abre youtube') > -1 || cmd.indexOf('busca youtube') > -1 || cmd.indexOf('ir a youtube') > -1 ){
                        window.open('https://www.youtube.com/'); 
                        respuesta = "¡Ok! Abriendo YouTube.";
                    }
                    else if (cmd.indexOf("abrir whatsapp") > -1 || cmd.indexOf('abre whatsapp') > -1 || cmd.indexOf('busca whatsapp') > -1 || cmd.indexOf('ir a whatsapp') > -1){
                        window.open('https://web.whatsapp.com/');
                        respuesta = "¡Ok! Abriendo Whatsapp Web.";
                    }
                    else if (cmd.indexOf("abrir facebook") > -1 || cmd.indexOf('abre facebook') > -1 || cmd.indexOf('busca facebook') > -1 || cmd.indexOf('ir a facebook') > -1){
                        window.open('https://www.facebook.com/'); 
                        respuesta = "¡Ok! Abriendo Facebook.";
                
                    }
                    else if (cmd.indexOf("abrir instagram") > -1 || cmd.indexOf('abre instagram') > -1 || cmd.indexOf('busca instagram') > -1 || cmd.indexOf('ir a instagram') > -1){
                        window.open('https://www.instagram.com/'); 
                        respuesta = "¡Ok"+username+"! Abriendo Instagram.";
                
                    }
                    else if (cmd.indexOf("abrir twitter") > -1 || cmd.indexOf('abre twitter') > -1 || cmd.indexOf('busca twitter') > -1 || cmd.indexOf('ir a twitter') > -1){
                        window.open('https://twitter.com/?lang=es'); 
                        respuesta = "¡Ok"+username+"! Abriendo Twitter.";
                
                    }
                    else if (cmd.indexOf("abrir discord") > -1 || cmd.indexOf('abre discord') > -1 || cmd.indexOf('busca discord') > -1 || cmd.indexOf('ir a discord') > -1) {
                        window.open('https://discord.com/app'); 
                        respuesta = "¡Ok"+username+"! Abriendo Discord.";
                    }
                    else if (cmd.indexOf("abre") > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('abrir') > -1 && cmd.indexOf("testigos de jehova") > -1 || cmd.indexOf('ir') > -1 && cmd.indexOf('testigos de jehova') > -1) {
                        window.open('https://www.jw.org/es/'); 
                        respuesta = "¡Ok"+username+"! Abriendo la página principal de los Testigos de Jehova.";
                    }
                    
                    else if (cmd.indexOf("modo escritura") > -1 || cmd.indexOf('modo escribir') > -1 || cmd.indexOf('modo voz a texto') > -1 ){
                        respuesta = "¡Ok"+username+"! inicíando el modo escritura.";
                        peticionCumplida = "si";
                
                    }
                    
    },
}
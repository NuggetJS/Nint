const comandos = {
    verificar: (comando) => {
        if (comando !== "") {
            comandos.comandos(comando);
        };
    },
    comandos: (cmd)=> {
                    
        // BUSQUEDA AVANZADA
        if (cmd == null) {
            
        }
        else if (cmd.indexOf('busca un video llamado') > -1 ){
            cmd = cmd.replace("busca un video llamado", "");
            respuesta = `De acuerdo, iniciando busqueda avanzada sobre ${cmd}`;
            window.open("https://www.google.com/search?q="+cmd+"+-inurl%3A%28htm%7Chtml%7Cphp%7Cpls%7Ctxt%29+intitle%3Aindex.of+%22last+modified%22+%28mp4%7Cwmv%7Caac%7Cavi%29&rlz=1C1CHBF_esVE969VE969&sxsrf=AOaemvK21bXbEbAEEB2Ihg6LBBI-1QACiw%3A1632405073724&ei=UYZMYdPFK5aNwbkPs5ilwAY&oq=avengers+-inurl%3A%28htm%7Chtml%7Cphp%7Cpls%7Ctxt%29+intitle%3Aindex.of+%22last+modified%22+%28mp4%7Cwmv%7Caac%7Cavi%29&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsAMyBwgAEEcQsANKBAhBGABQzq0OWLGuDmCKsg5oAXACeACAAQCIAQCSAQCYAQCgAQHIAQjAAQE&sclient=gws-wiz&ved=0ahUKEwiTsrHknpXzAhWWRjABHTNMCWgQ4dUDCA4&uact=5")
        }
        else if (cmd.includes('investiga sobre')|| cmd.includes("haz una busqueda avanzada sobre un archivo llamado") || cmd.includes("busca todo lo que hay sobre")){
            cmd = cmd.replace("investiga sobre", "");
            cmd = cmd.replace("haz una busqueda avanzada sobre un archivo llamado", "");
            cmd = cmd.replace("busca todo lo que hay sobre", "");
            // +-inurl:(php|pls) intitle:index.of "last modified" (html|iso|txt|avi|mp4|wav);
            respuesta = "de acuerdo, iniciando busqueda avanzada en multiples sitios web sobre"+cmd;
            window.open("https://www.google.com/search?q="+cmd+"+-inurl%3A%28php%7Cpls%29+intitle%3Aindex.of+%22last+modified%22+%28html%7Ciso%7Ctxt%7Cavi%7Cmp4%7Cwav%29%3B&rlz=1C1CHBF_esVE969VE969&sxsrf=AOaemvL2Tad3uanMcaL4k6NM39OD8TVLZg%3A1633319704023&ei=GHtaYfFyh4vBuQ_0152QCA&ved=0ahUKEwjx3oyG7q_zAhWHRTABHfRrB4IQ4dUDCA4&uact=5&oq=fast+os+-inurl%3A%28php%7Cpls%29+intitle%3Aindex.of+%22last+modified%22+%28html%7Ciso%7Ctxt%7Cavi%7Cmp4%7Cwav%29%3B&gs_lcp=Cgdnd3Mtd2l6EAM6BwgAEEcQsANKBAhBGABQroEBWK6BAWD9hgFoAXACeACAAYEBiAGBAZIBAzAuMZgBAKABAcgBCMABAQ&sclient=gws-wiz");
            setTimeout(() => {
            window.open("https://www.compucalitv.com/?s="+cmd);
            setTimeout(() => {
            window.open("https://www.youtube.com/results?search_query="+cmd);
            setTimeout(() => {
            window.open("https://www.amazon.com/s/ref=nb_sb_noss_2?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords="+cmd);
    
            setTimeout(() => {
            window.open("https://www.facebook.com/search/top/?q="+cmd);
            setTimeout(() => {
            window.open("https://listado.mercadolibre.com.ve/"+cmd);
            setTimeout(() => {
            window.open('https://www.facebook.com/marketplace/103740209665322/search/?query='+cmd);
            setTimeout(() => {
            window.open('https://www.gamestorrents.fm/?s='+cmd);
            setTimeout(() => {
            window.open('https://pivigames.blog/?s='+cmd);
            }, 900);
            }, 900);
            }, 900);
            }, 900);
            }, 900);
            }, 900);
            }, 900);
            }, 900);
            
            
        
        
        }

                    // -------------------------------
                    //buscar en diversas plataformas
                    // -------------------------------

                    else if (cmd.includes('busca en google') || cmd.includes('buscar en google') || cmd.includes('busca en internet') || cmd.includes('buscar en internet')){
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
                    
                    hablar(respuesta);
    },

}
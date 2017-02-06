(function () {
    var scriptTag = document.querySelector('#sme_cookie_script');
    var lang = (scriptTag.dataset.lang) ? scriptTag.dataset.lang : 'en';
    var accepted = readCookie('sme_cookie_' + lang);

    if (!accepted) {

        var position = (scriptTag.dataset.position) ? scriptTag.dataset.position : 'bottom';
        var scheme = (scriptTag.dataset.scheme && scriptTag.dataset.scheme === 'light') ? 'sme_cookie_scheme_light' : '';

        switch (lang) {
            // Danish
            case 'da':
                var title = 'Vi bruger cookies p&aring; dette website';
                var copyright_url = 'http://www.sonymusic.dk/personoplysninger/';
                var content = 'Vi anvender forskellige cookies bl.a. til forbedring af din browsingoplevelse, m&aring;ling af vores bes&oslash;gende og til at give dig tilpassede annoncer. Ved at bruge sitet accepterer du vores brug af cookies. <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">L&aelig;s mere</a>.';
                var accept_text = 'OK';
                break;
                // Dutch
            case 'nl':
                var title = 'Deze website maakt gebruik van cookies';
                var copyright_url = 'http://sonymusic.nl/nl/privacy/';
                var content = 'We maken gebruik van zowel onze eigen als van third party cookies op deze website om uw websurfervaring te verbeteren, om ons publiek te meten en om u te voorzien van op maat gemaakte advertenties. <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">Klik hier</a> voor meer informatie over ons gebruik van cookies. Door gebruik te blijven maken van deze website, door deze box te sluiten of door hier te <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klikken geeft</a> u aan uw toestemming te geven voor ons gebruik van die cookies.';
                var accept_text = 'Accepteer';
                break;
                // Finnish
            case 'fi':
                var title = 'T&auml;m&auml; verkkosivu k&auml;ytt&auml;&auml; ev&auml;steit&auml;';
                var copyright_url = 'http://www.sonymusic.fi/privacy-policy/';
                var content = 'K&auml;yt&auml;mme omia sek&auml; kolmansien osapuolten ev&auml;steit&auml; rikastaaksemme selailukokemustasi, mitataksemme yleis&ouml;&auml; sek&auml; tarjotaksemme r&auml;&auml;t&auml;l&ouml;ityj&auml; mainoksia. Jos haluat tiet&auml;&auml; lis&auml;&auml; miten k&auml;yt&auml;mme ev&auml;steit&auml;, <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klikkaa t&auml;st&auml;</a>. Jatkamalla verkkosivun k&auml;ytt&ouml;&auml; sulkemalla t&auml;m&auml;n boksin tai <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klikkaaamalla t&auml;st&auml;</a>, osoitat hyv&auml;ksyv&auml;si ev&auml;steiden k&auml;yt&ouml;n.';
                var accept_text = 'Hyv&auml;ksy ev&auml;steiden k&auml;ytt&ouml;';
                break;
                // Italian
            case 'it':
                var title = 'Questo Sito Usa I Cookies';
                var copyright_url = 'http://hub.sonymusic.com/privacy/?t=it&l=ita';
                var content = 'Su questo sito utilizziamo cookies sia nostri che di terze parti per migliorare la tua esperienza di navigazione, analizzare il nostro pubblico e proporti annunci pubblicitari personalizzati. Per maggiori informazioni sul nostro uso dei cookies <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">clicca qui</a>. Continuando a navigare su questo sito, chiudendo questo box, o <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">cliccando qui</a> esprimi il tuo consenso al nostro uso dei cookies.';
                var accept_text = 'Accetta I Cookies';
                break;
                // Norwegian
            case 'no':
                var title = 'Dette nettstedet bruker cookies';
                var copyright_url = 'https://sonymusic.no/privacy-cookie-policy/';
                var content = 'Vi bruker bÃ¥de egne og tredjeparts cookies pÃ¥ dette nettstedet for Ã¥ forbedre din brukeropplevelse, mÃ¥le antall besÃ¸kende og anpasse annonsering etter brukermÃ¸nsteret. For Ã¥ finne ut mer om hvordan vi bruker cookies <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">Klikk her</a>. Ved Ã¥ fortsette Ã¥ bruke dette nettstedet, ved Ã¥ lukke dette vinduet eller ved Ã¥ <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klikke her</a> aksepterer du bruken av slike cookies.';
                var accept_text = 'OK';
                break;
                // Polish
            case 'pl':
                var title = 'Ta Strona U&#380;ywa Plik&#243;w Cookie';
                var copyright_url = 'http://sonymusic.pl/polityka-prywatnosci';
                var content = 'Na tej stronie internetowej u&#380;ywamy w&#322;asnych oraz dostarczanych przez inne podmioty plik&#243;w cookie, kt&#243;re pomagaj&#261; nam usprawni&#263; Twoje korzystanie ze strony, liczenie naszych odbiorc&#243;w i zapewnienie dopasowanych do Twoich zainteresowa&#324; reklam. Aby dowiedzie&#263; si&#281; wi&#281;cej o tym, jak wykorzystujemy pliki cookie <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">kliknij tutaj</a>. Kontynuuj&#261;c korzystanie z tej strony, zamykaj&#261;c ten komunikat lub <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klikaj&#261;c tutaj</a> wyra&#380;asz zgod&#281; na korzystanie przez nas z plik&#243;w cookie.';
                var accept_text = 'OK';
                break;
                // Portuguese
            case 'pt':
                var title = 'Este Website Utiliza Cookies';
                var copyright_url = 'http://sonymusic.pt/politica-de-privacidade-e-cookies/';
                var content = 'Neste website usamos cookies nossos e de terceiros para melhorar a sua experi&ecirc;ncia de navega&ccedil;&atilde;o online, avaliar a nossa audi&ecirc;ncia e utilizadores e apresentar-lhe publicidade personalizada. Para saber mais sobre como utilizamos cookies <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">clique aqui</a>. Ao continuar a utilizar este website, ao fechar esta caixa de texto ou <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">clicar aqui</a>, est&aacute; a confirmar a sua permiss&atilde;o para utilizarmos estes cookies.';
                var accept_text = 'Aceitar Cookies';
                break;
                // Spanish    
            case 'es':
                var title = 'Este sitio web utiliza cookies';
                var copyright_url = 'http://www.sonymusic.es/politica-de-privacidad';
                var content = 'Utilizamos cookies propias y de terceros para mejorar su experiencia de navegaci&#243;n, medir nuestra audiencia y ofrecerle anuncios adaptados a sus preferencias. Para m&#225;s informaci&#243;n sobre c&#243;mo utilizamos las cookies, haga <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">click aqu&#237;</a>. Si contin&#250;a navegando por esta web, cierra este cuadro o hace <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">click aqu&#237;</a> est&#225; dando su consentimiento para que utilicemos dichas cookies.';
                var accept_text = 'Aceptar Cookies';
                break;
                // Swedish    
            case 'sv':
                var title = 'Den h&auml;r hemsidan anv&auml;nder cookies';
                var copyright_url = '';
                var content = 'Vi anv&auml;nder s&aring;v&auml;l egna cookies som cookies fr&aring;n tredje part p&aring; denna hemsida f&ouml;r att f&ouml;rb&auml;ttra din webbupplevelse, m&auml;ta antal bes&ouml;kare samt f&ouml;r att tillhandah&aring;lla dig med personligt anpassad marknadsf&ouml;ring. V&auml;nligen <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klicka hÃ¤r</a> fÃ¶r mer information om hur vi anv&auml;nder cookies. Genom att du forts&auml;tter anv&auml;nda denna hemsida, genom att st&auml;nga ner detta meddelande eller genom att <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">klicka h&auml;r</a> ger du ditt samtycke till v&aring;r anv&auml;ndning av dessa cookies.';
                var accept_text = 'Acceptera cookies';
                break;
                // English    
            case 'en':
            default:
                var title = 'This website uses cookies';
                var copyright_url = 'http://hub.sonymusic.com/privacy/?t=gb&l=eng';
                var content = 'We use both our own and third party cookies on this website to enhance your browsing experience, measure our audience and provide you with tailored ads. To find out more about how we use cookies <a id="sme_cookie_copyright_url" class="sme_cookie_content" href="' + copyright_url + '" target="_blank">click here</a>. By continuing to use this website, by closing this box or by <a class="sme_cookie_content" href="#">clicking here</a> you are indicating your consent to our use of those cookies.';
                var accept_text = 'Accept Cookies';
                break;
        }

        var styleTag = document.createElement("link");
        styleTag.rel = "stylesheet";
        styleTag.type = "text/css";
        styleTag.href = "//tools.sonymusiccreative.com/sme_cookie/sme_cookie.css";
        styleTag.media = "all";
        document.getElementsByTagName('head')[0].appendChild(styleTag);

        var div = document.createElement('div');
        div.id = 'sme_cookie';
        div.className = 'sme_cookie ' + position + ' ' + scheme;
        div.innerHTML = '<!--googleoff: all--><div class="sme_cookie_container"><h2 class="sme_cookie_title">' + title + '</h2><p class="sme_cookie_content">' + content + '</p><a href="#" id="sme_cookie_close">X</a><a href="#" id="sme_cookie_accept">' + accept_text + '</a></div><!--googleon: all>';

        document.body.appendChild(div);

        var sme_cookie_close = document.getElementById("sme_cookie_close");
        var sme_cookie_accept = document.getElementById("sme_cookie_accept");

        sme_cookie_close.addEventListener("click", function (e) {
            e.preventDefault();
            smeCookieClose();
        }, false);

        sme_cookie_accept.addEventListener("click", function (e) {
            e.preventDefault();
            smeCookieClose();
        }, false);

        document.addEventListener("click", function (e) {
            if (e.target.id !== 'sme_cookie_copyright_url') {
                smeCookieClose();
            }
        }, false);
    }

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else
            var expires = "";
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function smeCookieClose() {
        var popup = document.getElementById("sme_cookie");
        if (typeof popup !== 'undefined' && popup !== null) {
            createCookie('sme_cookie_' + lang, 'accepted', 30);
            popup.parentNode.removeChild(popup);
        }
    }

})();
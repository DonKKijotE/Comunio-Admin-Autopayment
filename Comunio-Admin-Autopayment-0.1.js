// ==UserScript==
// @name         Mi Comunio Script
// @namespace    CraZy-KijOtE.org
// @version      0.1
// @description  try to take over the world!
// @author       DonK KijotE
// @include        *://www.comunio.es/*
// @include        *://classic.comunio.es/*
// @include        *://www.comunioapp.com/*
// @include        *://comunioapp.com/*
// @exclude        *://*/undoTransactions.phtml
// @exclude        *://*/team_admin.phtml
// @exclude        *://*/external/*
// @exclude        *postMessage_x*
// @grant        none
// @require https://code.jquery.com/jquery-2.2.4.js
// ==/UserScript==

var $ = window.$;



 if (window.location.href.indexOf("administration.phtml?penalty_x=22") > -1 ) {

     console.log('Consola de pagos.');

        var encabezado = '<div class="spacer20px"></div><div class="titleboxcontent" id="encabezado"><div class="edgetitle"><b class="top"><b class="e1"></b><b class="e2"></b><b class="e3"></b><b class="e4"></b><b class="e5"></b><b class="e6"></b><b class="e7"></b><b class="e8"></b><b class="e9"></b><b class="e10"></b><b class="e11"></b></b></div><div class="titlecontent"><h2>Pago Automático</h2></div></div>';
        $('.boxcontentdown').after(encabezado);
        var tabla_inicio = '<table class="tablecontent03"><tr class="info_jugador"><td><b>Jugador</b></td><td><b>Puntos</b></td><td><b>Dinero</b></td><td></td></tr>';
        $('#encabezado').after(tabla_inicio);

        $.get('https://classic.comunio.es/standings.phtml?currentweekonly_x=22', function(response) {

            var participantes = $(response).find("#tablestandings tr:not(:first)");

            $(participantes).each(function() {


            var nombre = $(this).find("td").eq(1).text();
            var puntos = $(this).find("td").eq(2).text();
            var pasta = puntos * 50000;
            var jugador_id = $(this).find('a').attr('href').substring(21);
            var pago_url = "https://classic.comunio.es/administration.phtml?penalty_x=22&newsDis=messageDis&pid_to="+ jugador_id +"&amount="+ pasta +"&content=Pago&cancel=-1&send_x=33";
            //console.log(nombre + ' ' + puntos);
            var fila = '<tr class="info_jugador"><td>'+ nombre +'</td><td>'+ puntos +'</td><td>'+ pasta +'</td><td><a href="'+ pago_url +'" target="_blank">Pagar</a></td></tr>';
            $('.info_jugador').last().after(fila);


         });






        //console.log(response);
     });


 }

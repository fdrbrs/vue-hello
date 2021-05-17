/* Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

var app = new Vue (
    {
     el: '#app',
     data: {
         titolo: 'Questo è un titolo',
         testoImmagine: 'Questa è un\'immagine',
         pathImmagine: './assets/img/a.png'
     }
    }
   )
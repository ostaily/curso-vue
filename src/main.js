var app = new Vue({
  el:"#app",
  data: {
    respuesta: 0,
    numero1: null,
    numero2: null,
    nameButton : 'suma',
    arrayFrutas :['manzana','pera','melocoton'],
    info:[{"nombre":"Bastian","perfil":"Programador de Software","img":"./img1.jpg","hobby":['Juegos','Futbol']},
         {"nombre":"Jesus","perfil":"Estudiante de Software","img":"./img2.jpg","hobby":['Caminar','Nadar']}
  ],
  cocteles: []
  },

  methods : {
    sumar(){
      this.respuesta= this.numero1+this.numero2
    },
    restar(){
      this.respuesta= this.numero1-this.numero2

    },
    getDataCoktail(){
       const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
       fetch(url)
       .then(Response=>{
        return Response.json()
       })
       .then(data=>{
        this.cocteles=data.drinks || []
       })
       .catch(error=>{
        console.log('Error',error);
       })
    }
  }
})
var app = new Vue({
  el: '#app',
  data: {
    respuesta: 0,
    numero1: null,
    numero2: null,
    nameButton: 'Sumar'
  },
  methods: {
    sumar() {

      this.respuesta = this.numero1 + this.numero2
    }
  },
  computed: {
    colorRespuesta() {
      return this.respuesta>400 ?'text-success':this.respuesta>100?'text-danger':'text-primary'
      // if(this.respuesta>100 && this.respuesta<400){
      //  return 'text-success'
      //}else if(this.respuesta>400){
      //return 'text-danger'
      // }else{
      // return 'text-primary'
      // }
    }
  }
})

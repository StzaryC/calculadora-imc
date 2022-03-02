const app = new Vue ({
    el: '#app',
    data() {
        return {
            peso: 47,
            altura: 125,
            pesoIdeal: 0
        };
    },
    methods: {
        IMC() {
            this.pesoIdeal = (this.peso / (Math.pow(this.altura, 2) / 10000)).toFixed(2)

            if (this.peso === 0 || this.altura === 0 || this.pesoIdeal === 10000) {
                alert("Coloca tu peso y altura para poder calcular tu IMC");
                this.pesoIdeal = "No fue posible calcular tu IMC";
            } else {
                document.querySelectorAll("span").forEach((sp) => {
                sp.classList.remove("mark");
                });
    
                this.markObeso();
                this.markSobre();
                this.markNormal();
                this.markBajo();
            }
        },
        markObeso() {
            let obeso = document.querySelectorAll(".Obesidad");
            if (this.pesoIdeal > 30) {
            obeso.forEach((el) => {
            el.classList.add("mark");
            });
            }
        },
        markSobre() {
            let sobre = document.querySelectorAll(".sobrePeso");
            if (this.pesoIdeal >= 25 && this.pesoIdeal < 30) {
                sobre.forEach((el) => {
                el.classList.add("mark");
            });
            }
        },
        markNormal() {
            let normal = document.querySelectorAll(".normalPeso");
            if (this.pesoIdeal > 18.5 && this.pesoIdeal < 25) {
                normal.forEach((el) => {
                el.classList.add("mark");
                });
            }
        },
        markBajo() {
            let bajo = document.querySelectorAll(".bajoPeso");
            if (this.pesoIdeal < 18.5) {
                bajo.forEach((el) => {
                el.classList.add("mark");
            });
            }
        }
    }
})
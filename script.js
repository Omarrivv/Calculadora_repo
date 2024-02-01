document.addEventListener('DOMContentLoaded', function () {
            // Obtener referencia a la pantalla de la calculadora
            var pantalla = document.getElementById('pantalla');
            // Obtener referencia a todos los botones
            var botones = document.querySelectorAll('.calculadora input[type="button"]');
            // Manejar clics en los botones
            botones.forEach(function (boton) {
                boton.addEventListener('click', function () {
                    manejarClic(boton.value);
                });
            });

            // Función para manejar los clics en los botones
            function manejarClic(valor) {
                if (valor === '=') {
                    // Evaluar la expresión y mostrar el resultado
                    try {
                        pantalla.value = eval(pantalla.value);
                    } catch (error) {
                        pantalla.value = 'Error';
                    }
                } else if (valor === 'C') {
                    // Limpiar la pantalla
                    pantalla.value = '';
                } else {
                    // Agregar el valor al contenido de la pantalla
                    pantalla.value += valor;
                }
            }
        });
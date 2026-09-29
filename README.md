# Sigue la secuencia

Misión M1 · El Despertar del DOM — Web Development I.

## Funcionamiento
Al abrir el html, el juego ya empieza mostrando la primera secuencia. Cuando acabe, pulsa en el mismo orden.
Cada vez que completes la secuencia, se repite igual, pero añadiendo otra casilla al final

## Uso de IA
Usé chatGpt principalmente para las partes de css, ya que no estaba tan interesado en la parte de cómo se ve. 
Pensé en el funcinamiento y lógica que debía seguir para programar en JavaScript. Me ayudó con la función de Math
para generar un número aleatorio. También me ayudó a resolver dudas sobre las funciones TimeOut. Al parecer si quiero que una sección de código pase
explícitamente después de algo que va con timeOut, también debo usar un timeOut con el total de tiempo que haya gastado lo anterior.
Por último me ayudó a bloquear los botones. Le pedí : "Quiero que mientras la secuencia se esté mostrando, el usuario no pueda pulsar las casillas". Y me
dio como solución crear en css un estado "bloqueado" que anulase los eventos al pulsar.

## Autopsia
1. Cómo registrar si el usuario está acertando la secuencia. Mi primera idea fue crear un segundo
array que registrase las pulsaciones del jugador, y ya fuese a la vez o al final, comparar el array jugador y el solución. La segunda opción,
por la que me decanté era usar un índice que señalase que casilla de qué posición del array debería estar pulsando el jugador. Si es correcto, avanza el índice, si no, ya
se sabe que ha perdido y se reinicia la secuencia y el índice.
2. Cómo impedir que el usuario tocase las casillas durante la secuencia. La primera idea fue haciendo desaparecer los bloques y mostrar la secuencia de otra
forma (como mostrar solo una secuencia numérica). Gracias a la IA supe que podía simplemente activarlos y desactivarlos, así que me quedé con esta opción.
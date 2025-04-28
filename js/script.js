const data = `
1. ¿Qué es una VLAN?
2. ¿Qué es una VPN?
3. ¿Qué es una SAN?
4. Diferencias entre un Hub, Repetidor, Router y SWITCH.
5. ¿Qué es un protocolo de comunicaciones?
6. Explique TCP/IP y NetBios, resuma sus diferencias.
7. ¿Cómo está formado un paquete de datos en TCP/IP? ¿Qué es un “flag” en un paquete de TCP/IP?
8. Defina la red según su geografía. Explicar distintas variantes.
9. Defina una red según su topología. Explicar distintas variantes.
10. Explicar el servicio de DHCP.
11-   Explicar el servicio de DNS.
12-  Explicar las tecnologías Wireless, y sus estándares.
13-   ¿Qué es un Proxy?
14-   Explicar el protocolo Spanning tree.
15-   Explicar el protocolo de comunicaciones OSPF.
16-   Explicar el protocolo ARP.
17-   ¿Qué es un Firewall?
18-   ¿Qué es una DMZ?
19-  ¿Qué es un Gateway?
20-  Según Microsoft, ¿qué significa NBL?
21-   Tipos de enlace: MPLS, LAN to LAN, microonda, VSAT. a. Explique cada uno de estos tipos de enlace. b. Agregue dos tipos de enlaces, no mencionados anteriormente. c. Ranking de enlaces según lo pedido (de uno a seis, siendo uno el mejor): Por económico, performance, mayor capacidad, mayor o mejor configuración de restricciones, soporte a mayor distancia, menor esfuerzo de configuración. d. Elija un tipo de enlace para los siguientes escenarios: 1 d. Conectividad de varios de call centers con un data center central. 2 d. Conectar los datos de los pozos petroleros durante 15 minutos por día. 3 d. Comunicar dos edificios enfrentados en la misma calle.
22-   Describir la tecnología LTE.
23-   Explique la solución de Microsoft Teams. Si quieren describir otra solución de otra empresa es también válido.
24-  ¿Qué significa aplicar calidad en un enlace MPLS?
25-  ¿Qué diferencias puede encontrar entre una conexión Coaxial, UTP o Fibra?
26-  Según Cisco, ¿qué significa CCENT, CCNA y CCNP? Descripción breve del Track Routing & Switching y de algún otro a elección (ej. Wireless, Security, Cloud, etc).
27-  Explique el modelo OSI.
28-  Realizar cuestionario online y copiar el resultado: (1 por cada integrante) https://es.educaplay.com/es/recursoseducativos/706834/test_de_redes_y_comunicaciones.htm
29-   Explicar el estándar IEEE 802.3 regula la red. Cómo se implementa, ventajas y desventajas.
30-   Explicar el estándar IEEE 802.4 regula la red.
31-  ¿Qué protocolos se usan para enviar y recibir correo?
32-  ¿Qué protocolo puede usarse para leer correo recibido?
33-  Diferencias entre IPV4 e IPV6
34-  (Individual para cada integrante del grupo) ¿Qué experiencia tienen en redes? Ejemplos.: Accedo y configuro el router de mi casa como admin, en mi trabajo hago tareas relacionadas a networking, configuro una PAN hogareña para mi o mi familia, amigos/as etc (Personal Area Network, todo dispositivo Wireless o no), no tengo ninguna experiencia, etc.
`;

const answers = [
`Una VLAN (Virtual Local Area Network o Red de Área Local Virtual) es una forma de dividir una red física en varias redes lógicas, ayudando a mejorar el rendimiento y la seguridad en redes grandes. Permite agrupar dispositivos de acuerdo con sus necesidades, sin importar su ubicación física.

Ventajas principales:

- División de red: Crea múltiples redes dentro de una misma infraestructura.

- Mayor seguridad: Separa el tráfico de diferentes grupos de dispositivos.

- Flexibilidad: Los dispositivos pueden pertenecer a la misma VLAN aunque estén en diferentes lugares.

- Reducción de tráfico: Disminuye el tráfico innecesario entre dispositivos que no interactúan entre sí.`,
`Una VPN (Virtual Private Network o Red Privada Virtual) es una tecnología que crea una conexión segura y cifrada entre el dispositivo y una red a través de internet. Permite acceder a recursos de una red privada como si estuvieras físicamente allí, incluso si estás en otra ubicación.

Ventajas principales:

- Seguridad: Cifra el tráfico de datos, protegiéndolo de posibles interceptaciones.

- Acceso remoto: Permite acceder a redes privadas desde cualquier lugar, como si estuvieras en la oficina.

- Privacidad: Oculta tu dirección IP real y la reemplaza con la IP de la VPN, lo que mejora tu anonimato en línea.

- Elusión de bloqueos: Puede permitir el acceso a contenido restringido geográficamente o censurado.`,

`Una SAN (Storage Area Network o Red de Área de Almacenamiento) es una red especializada que conecta dispositivos de almacenamiento, como discos duros y bibliotecas de cintas, a servidores y otros dispositivos informáticos. Su objetivo es proporcionar acceso de alta velocidad y alta capacidad a los datos almacenados en estos dispositivos, de manera eficiente y centralizada.

Características principales:
- Alta disponibilidad: Permite que los datos estén siempre disponibles para los servidores conectados, reduciendo el tiempo de inactividad.

- Desempeño: Mejora el rendimiento al separar el almacenamiento de los datos del resto de la infraestructura de la red.

- Escalabilidad: Es fácil de expandir añadiendo más dispositivos de almacenamiento según sea necesario.

- Consolidación: Facilita la gestión centralizada del almacenamiento y reduce la redundancia de los dispositivos.`,
`<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th><strong>Dispositivo</strong></th>
      <th><strong>Función</strong></th>
      <th><strong>Cómo funciona</strong></th>
      <th><strong>Limitaciones</strong></th>
      <th><strong>Uso</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>HUB</strong></td>
      <td>Conecta varios dispositivos en una red local.</td>
      <td>Envía los datos a todos los dispositivos sin discriminar.</td>
      <td>Ineficiente, genera mucho tráfico innecesario.</td>
      <td>Redes pequeñas, pero reemplazado por Switch.</td>
    </tr>
    <tr>
      <td><strong>REPETIDOR</strong></td>
      <td>Amplifica o repite la señal para extender el alcance.</td>
      <td>Regenera la señal para que los datos viajen más lejos.</td>
      <td>No gestiona el tráfico, solo amplifica.</td>
      <td>Ampliar el alcance de redes cableadas o inalámbricas.</td>
    </tr>
    <tr>
      <td><strong>ROUTER</strong></td>
      <td>Conecta diferentes redes y dirige el tráfico de datos.</td>
      <td>Analiza direcciones IP y enruta los datos a su destino.</td>
      <td>No gestiona tráfico dentro de una sola red.</td>
      <td>Conectar redes (LAN a WAN) y permitir acceso a Internet.</td>
    </tr>
    <tr>
      <td><strong>SWITCH</strong></td>
      <td>Conecta dispositivos en una red local y gestiona el tráfico.</td>
      <td>Envía los datos solo al dispositivo correspondiente.</td>
      <td>No conecta redes diferentes.</td>
      <td>Redes LAN, optimiza el tráfico entre dispositivos.</td>
    </tr>
  </tbody>
</table>
`,
  "Un protocolo de comunicaciones es un conjunto de reglas y convenciones que definen cómo los dispositivos en una red deben comunicarse entre sí. Estas reglas especifican cómo se transmiten, reciben y procesan los datos para garantizar que la información se transfiera correctamente de un dispositivo a otro. Los protocolos aseguran que los dispositivos de diferentes fabricantes puedan entenderse y trabajar juntos en una red.",
  `TCP/IP y NetBios son dos protocolos utilizados en redes, pero tienen diferencias significativas en su funcionamiento y propósito.

TCP/IP (Transmission Control Protocol/Internet Protocol): 
Es el conjunto de protocolos principal para la comunicación en Internet, utilizado por servidores, routers, computadoras y otros dispositivos conectados a redes. Se encarga de definir cómo los datos se transmiten a través de redes y cómo se enrutan entre dispositivos en una red. TCP/IP divide los datos en paquetes, los transmite de forma fiable y se asegura de que lleguen a su destino sin errores. TCP se encarga del control de la transmisión, mientras que IP se encarga de dirigir los paquetes a través de la red.

NetBios (Network Basic Input/Output System): 
Es un conjunto de interfaces y protocolos de comunicación que permite la comunicación entre aplicaciones de computadoras en una red local. Originalmente fue diseñado para redes de área local (LAN) en sistemas operativos como MS-DOS y Windows. NetBios proporciona servicios de nombres y comunicación entre dispositivos dentro de una red local, permitiendo que los programas se comuniquen entre sí. Aunque no es un protocolo de enrutamiento, permite identificar y acceder a dispositivos por su nombre. Es utilizado en redes más pequeñas o locales, especialmente en sistemas Windows para compartir archivos o impresoras.

<table border="1">
  <thead>
    <tr>
      <th>Características</th>
      <th>TCP/IP</th>
      <th>NetBios</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Propósito</td>
      <td>Comunicación global y en Internet</td>
      <td>Comunicación en redes locales (LAN)</td>
    </tr>
    <tr>
      <td>Alcance</td>
      <td>Global (Internet y grandes redes)</td>
      <td>Local (Redes LAN pequeñas)</td>
    </tr>
    <tr>
      <td>Escalabilidad</td>
      <td>Escalable a grandes redes y el Internet</td>
      <td>Limitado a redes pequeñas</td>
    </tr>
    <tr>
      <td>Protocolo</td>
      <td>Conjunto de protocolos (TCP + IP)</td>
      <td>Protocolo para nombre y comunicación</td>
    </tr>
    <tr>
      <td>Fiabilidad</td>
      <td>Fiable (garantiza la entrega)</td>
      <td>No garantiza fiabilidad</td>
    </tr>
    <tr>
      <td>Uso común</td>
      <td>Enrutamiento de paquetes en Internet</td>
      <td>Comunicación en redes locales</td>
    </tr>
  </tbody>
</table>
`,
  `Un paquete de datos en TCP/IP se compone principalmente de dos secciones:

• Cabecera (Header):
Información de control: Incluye detalles como la dirección de origen y destino (direcciones IP), número de puerto de origen y destino, y el tipo de protocolo.

Número de secuencia: Es utilizado para organizar los datos que llegan en orden.

Número de acuse de recibo: Usado en las comunicaciones TCP para confirmar la recepción de los paquetes.

Longitud del paquete: Indica el tamaño total del paquete.

Tipo de servicio: Define la prioridad y el tipo de tráfico (por ejemplo, si es de baja o alta prioridad).

Verificación de errores (checksum): Es un valor que permite verificar si los datos han sido alterados durante la transmisión.

• Datos (Payload):
Es la sección que transporta la información real que se está enviando (por ejemplo, una solicitud HTTP, un archivo, etc.).

<img class="img" src="./imgs/paquete-datos.jpeg" alt="">

En el contexto de TCP, un "flag" es un campo dentro de la cabecera que indica el estado o tipo de mensaje dentro de la conexión. Los flags son bits que se utilizan para controlar el flujo de los datos y la conexión. Algunos ejemplos de flags son:

SYN: Se utiliza para iniciar una conexión TCP.

ACK: Indica que el receptor ha recibido el paquete correctamente.

FIN: Señala que el emisor ha terminado de enviar datos y quiere cerrar la conexión.

RST: Indica que la conexión debe restablecerse.

URG: Indica que los datos enviados son urgentes.

PSH: Pide que los datos se entreguen lo antes posible.

Estos flags son cruciales para controlar cómo se establece, mantiene y termina una comunicación TCP entre dos dispositivos.`,

  `Una red según su geografía se clasifica en función de su extensión geográfica, es decir, en función del área geográfica que cubren las conexiones de los dispositivos en la red. Existen varias variantes, cada una con características y alcances distintos:

Tipos de red según su geografía:
<u>LAN (Red de Área Local)</u>

Definición: Es una red que conecta dispositivos dentro de una zona limitada, como una casa, una oficina o un edificio.

Características:

* Alcance limitado a un área pequeña.

* Alta velocidad de transmisión de datos.

* Bajo costo y fácil implementación.

Ejemplo: Una red Wi-Fi en una oficina o en una casa.

<u>MAN (Red de Área Metropolitana)</u>

Definición: Es una red que cubre un área más grande que una LAN, como una ciudad o un campus universitario.

Características:

* Alcance de varios kilómetros, como un barrio o ciudad.

* Puede conectar varias LANs dentro de una misma área metropolitana.

* Se utiliza para la transmisión de datos a nivel local, pero entre zonas geográficas más amplias que una LAN.

Ejemplo: Una red que conecta las oficinas de una empresa ubicadas en diferentes partes de una ciudad.

<u>WAN (Red de Área Amplia)</u>

Definición: Es una red que abarca un área geográfica extensa, como un país o incluso el mundo entero.

Características:

* Cubre grandes distancias, a menudo usando líneas telefónicas, satélites o fibra óptica.

* Conecta redes LAN o MAN de diferentes ubicaciones.

* Su implementación es más costosa y compleja.

Ejemplo: Internet, que conecta computadoras y servidores de todo el mundo.

<u>PAN (Red de Área Personal)</u>

Definición: Es una red que conecta dispositivos personales, generalmente dentro de un área muy pequeña, como un espacio de unos pocos metros.

Características:

* Usualmente conecta dispositivos como teléfonos móviles, computadoras portátiles, y otros dispositivos personales.

* Bajo alcance, generalmente entre 1 y 10 metros.

* Se utiliza en conexiones como Bluetooth o redes inalámbricas personales.

Ejemplo: Un teléfono móvil conectado a una computadora o un reloj inteligente a través de Bluetooth.

<u>CAN (Red de Área de Campus)</u>

Definición: Similar a una MAN, pero específicamente diseñada para interconectar dispositivos en un campus, como un campus universitario o una empresa con varias sedes dentro de una ciudad.

Características:

* Alcance más limitado que una MAN, pero cubre múltiples edificios dentro de un campus.

* A menudo se usa para compartir recursos como servidores, aplicaciones y bases de datos dentro de la institución.

Ejemplo: La red de una universidad que conecta diferentes edificios dentro del campus.

<table border="1">
  <thead>
    <tr>
      <th>Tipo de Red</th>
      <th>Alcance Geográfico</th>
      <th>Características Claves</th>
      <th>Ejemplos</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>LAN</strong></td>
      <td>Edificio o zona local</td>
      <td>Alta velocidad, costos bajos, conexión local</td>
      <td>Red doméstica, red de oficina</td>
    </tr>
    <tr>
      <td><strong>MAN</strong></td>
      <td>Ciudad o área metropolitana</td>
      <td>Conecta varias LANs, cobertura de ciudad</td>
      <td>Red de universidad en una ciudad</td>
    </tr>
    <tr>
      <td><strong>WAN</strong></td>
      <td>País o mundo entero</td>
      <td>Conecta LANs de larga distancia, infraestructura compleja</td>
      <td>Internet, conexiones entre oficinas globales</td>
    </tr>
    <tr>
      <td><strong>PAN</strong></td>
      <td>Personal, espacio pequeño</td>
      <td>Conecta dispositivos personales, corto alcance</td>
      <td>Bluetooth entre teléfono y computadora</td>
    </tr>
    <tr>
      <td><strong>CAN</strong></td>
      <td>Campus o área limitada</td>
      <td>Conecta varios edificios dentro de un campus</td>
      <td>Red universitaria, red de campus corporativo</td>
    </tr>
  </tbody>
</table>`
,
  `Una topología de red define la disposición o estructura física y lógica de los dispositivos y cables dentro de una red de comunicación. Es decir, establece cómo los dispositivos (computadoras, impresoras, servidores, etc.) se conectan entre sí y cómo fluye la información dentro de la red. La topología influye en el rendimiento, la escalabilidad y la facilidad de mantenimiento de la red.

Principales tipos de topologías de red:

<u>Topología de bus</u>:

<img class="img2" src="./imgs/bus.png">

Descripción: Todos los dispositivos están conectados a un solo cable central (el bus). La información viaja en ambas direcciones a lo largo del bus, y cada dispositivo escucha los mensajes para determinar si son para él.

Ventajas: Fácil de instalar y económica.

Desventajas: Si el bus central falla, toda la red se cae. También puede haber problemas de rendimiento si hay muchos dispositivos.

<u>Topología de estrella</u>:

<img class="img2" src="./imgs/estrella.jpg">

Descripción: Todos los dispositivos están conectados a un punto central (un switch o hub). La información fluye de un dispositivo a otro a través del punto central.

Ventajas: Si un dispositivo falla, no afecta a la red. Fácil de configurar y administrar.

Desventajas: Si el dispositivo central (switch o hub) falla, toda la red se ve afectada.

<u>Topología de anillo</u>:

<img class="img2" src="./imgs/anillo.jpg">

Descripción: Los dispositivos están conectados en un círculo cerrado. La información viaja en una dirección o ambas a través del anillo hasta llegar a su destino.

Ventajas: Funciona bien en redes pequeñas y medianas. La transmisión de datos es más eficiente que en una topología de bus.

Desventajas: Si un dispositivo o cable falla, toda la red puede verse afectada.

<u>Topología de malla</u>:

<img class="img2" src="./imgs/malla.jpg">

Descripción: Cada dispositivo está conectado a todos los demás dispositivos de la red. Esta topología proporciona múltiples rutas para el flujo de datos.

Ventajas: Alta confiabilidad y redundancia, ya que hay múltiples rutas de comunicación. Si un enlace falla, la red puede seguir funcionando a través de otros enlaces.

Desventajas: Costosa y compleja de implementar debido al gran número de conexiones.

<u>Topología de árbol (o jerárquica)</u>:

<img class="img2" src="./imgs/arbol.png">

Descripción: Es una combinación de topologías de estrella y bus. Los dispositivos están organizados en una estructura jerárquica, donde varios nodos de estrella están conectados a un bus principal.

Ventajas: Escalable y fácil de administrar.

Desventajas: Si el nodo principal falla, toda la subred de ese nodo se ve afectada.

<u>Topología híbrida</u>:

<img class="img2" src="./imgs/hibrida.jpg">

Descripción: Combina dos o más topologías en una sola red, como la combinación de topologías de estrella y malla.

Ventajas: Puede proporcionar lo mejor de varias topologías, adaptándose a las necesidades específicas de la red.

Desventajas: Su implementación y gestión pueden ser complejas.`,
  `DHCP (Dynamic Host Configuration Protocol) es un protocolo de red que se utiliza para asignar automáticamente direcciones IP y otros parámetros de configuración necesarios a los dispositivos (como computadoras, teléfonos, impresoras, etc.) que se conectan a una red. Este servicio facilita la administración de redes, ya que elimina la necesidad de configurar manualmente las direcciones IP para cada dispositivo
  
  <b>¿Cómo funciona?</b>
- Descubrimiento: El dispositivo solicita una dirección IP.

- Oferta: El servidor DHCP ofrece una dirección IP.

- Solicitud: El dispositivo acepta la oferta.

- Confirmación: El servidor confirma la asignación de la dirección IP.

Tipos de asignación:

- Dinámica: El servidor DHCP asigna direcciones IP de un grupo disponible por un tiempo limitado. Después de que el tiempo de arrendamiento expire, la dirección puede ser reasignada a otro dispositivo.

- Estática: El servidor DHCP asigna siempre la misma dirección IP a un dispositivo específico, basado en su dirección MAC. Es útil para dispositivos que necesitan una IP fija, como impresoras o servidores.

- Automática: El servidor DHCP asigna una dirección IP a un dispositivo la primera vez que se conecta y la mantiene hasta que se libere, sin que el dispositivo solicite una renovación del arrendamiento.

Ventajas:
* Automatización: Elimina la necesidad de asignar manualmente direcciones IP a cada dispositivo de la red.

* Eficiencia: Facilita la gestión de redes grandes, evitando errores humanos en la configuración de direcciones IP.

* Flexibilidad: Permite la reconfiguración dinámica de la red sin tener que intervenir en cada dispositivo.

Desventajas:
* Dependencia del servidor: Si el servidor DHCP falla, los dispositivos nuevosno podrán obtener una dirección IP y no podrán acceder a la red.

* Seguridad: Si un servidor DHCP no está configurado correctamente o es vulnerable, un atacante podría intentar suplantarlo y asignar direcciones IP incorrectas a los dispositivos, lo que podría comprometer la red.`,

"Respuesta 11", //Completar el espacio entre comillas

"Respuesta 12",

"Respuesta 13",

"Respuesta 14",

"Respuesta 15",

"Respuesta 16",

"Respuesta 17",

"Respuesta 18",

"Respuesta 19",

"Respuesta 20",

"Respuesta 21",

"Respuesta 22",

"Respuesta 23",

"Respuesta 24",

"Respuesta 25",

"Respuesta 26",

"Respuesta 27",

"Respuesta 28",

"Respuesta 29",

"Respuesta 30",

"Respuesta 31",

"Respuesta 32",

"Respuesta 33",

"Respuesta 34",
];

const questions = data.trim().split('\n');
let currentIndex = 0;

function startQuiz() {
  document.getElementById('welcome-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  renderQuestion(currentIndex);
}

function renderQuestion(index) {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = `
    <div class="question">
      <h3>${questions[index]}</h3>
      <br>
      <button class="show-btn" onclick="toggleAnswer(${index})">Mostrar respuesta</button>
      <br>
      <div class="answer" id="answer-${index}">
        <p><strong>Respuesta:</strong> ${answers[index]}</p>
      </div>
    </div>
  `;
}

function toggleAnswer(index) {
  const answerDiv = document.getElementById(`answer-${index}`);
  if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
    answerDiv.style.display = 'block';
  } else {
    answerDiv.style.display = 'none';
  }
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
  }
}

function typeEffect(elementId, text, delay = 100) {
    const element = document.getElementById(elementId);
    let index = 0;
    
    function typeCharacter() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        // Llamada recursiva con retraso aleatorio
        setTimeout(typeCharacter, Math.random() * (150 - 50) + 50); // Retraso entre 50ms y 150ms
      }
    }
  
    // Inicia el efecto de tipeo
    typeCharacter();
  }
  
  // Inicia el efecto cuando la página cargue
  window.onload = function() {

    const text = "Bienvenido al Trabajo Práctico de Redes";
    typeEffect("typing-effect", text, 100); // Aplica el efecto solo al texto del inicio
  };
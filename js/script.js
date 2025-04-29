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

//respuesta11
`El DNS es un sistema jerárquico y descentralizado que traduce los nombres de dominio legibles por humanos (como www.google.com) en direcciones IP (como 8.8.8.8), que son necesarias para que los dispositivos se comuniquen entre sí en una red, como Internet.

Esto es importante porque, aunque nosotros recordamos palabras fácilmente, los dispositivos en la red solo entienden direcciones IP. El DNS actúa como una agenda telefónica de Internet, donde buscás el número (IP) correspondiente a un nombre.

<img class="img" src="./imgs/dns_image.png">
`, //Completar el espacio entre comillas

//respuesta12
`Las tecnologías Wireless (inalámbricas) permiten la transmisión de datos sin necesidad de cables físicos, utilizando ondas de radio, infrarrojos u otros tipos de señales electromagnéticas. Son ampliamente utilizadas en redes locales (Wi-Fi), comunicaciones móviles (3G/4G/5G), Bluetooth y más.

Cuando hablamos de redes de datos, lo más común es referirse al Wi-Fi, que técnicamente se basa en los estándares IEEE 802.11.

<img class="img" src="./imgs/wifi_standar.png"> <img class="img" src="./imgs/wifi_standar2.png">
`,

//respuesta13
`Un proxy, también conocido como servidor proxy, es un intermediario que se ubica entre las solicitudes que realiza un cliente (generalmente, se trata del equipo de un usuario) hacia otro servidor y sus respuestas. Por lo tanto, cada vez que la máquina hace una solicitud, esta se traslada al proxy que, a su vez, la envía al servidor más adecuado en cada caso. Y cuando se reciben datos, el proceso se desempeña de la misma manera.

Usualmente, los servidores proxys se emplean para actuar como puente durante la navegación web. Sin embargo, también existen algunos destinados a otros protocolos, como el FTP. Es relevante saber que el proxy es en realidad un software que se puede ejecutar de manera local o externa. En este sentido, podemos identificar dos tipos de servidores:

* Internos o locales. Son aquellos que se ejecutan desde la propia máquina del usuario y están destinados a la mejora de la privacidad y otras funciones similares.

* De red o externos. Se trata de aquellos que actúan interceptando las solicitudes de manera externa a la máquina del usuario. Por lo tanto, su política de actuación se aplica en todos los equipos que se encuentran conectados a la red dependiente del proxy.

<img class="img" src="./imgs/proxy_image.png">
`,

//respuesta14
`El Spanning Tree Protocol (STP) es un protocolo de la capa 2 definido por el estándar IEEE 802.1D. Su objetivo es prevenir bucles en redes con enlaces redundantes, protegiendo así el rendimiento. STP elige un switch raíz (root bridge) y construye un árbol lógico, donde ciertos puertos se bloquean para eliminar caminos redundantes y evitar tormentas de difusión. Así, solo las rutas necesarias quedan activas para la comunicación.

<img class="img" src="./imgs/spanningtree_image.png">

Supongamos una red conformada por tres switches: Switch A, Switch B y Switch C, interconectados de la siguiente manera:

* A ↔ B
* B ↔ C
* C ↔ A

La conexión entre C y A genera un enlace redundante, formando un triángulo. Este diseño mejora la disponibilidad, ya que si falla el enlace A-B, los switches seguirán comunicándose mediante C.

No obstante, sin mecanismos de control, como el Spanning Tree Protocol (STP), se produciría un bucle de red, donde los datos circularían indefinidamente, saturando los recursos.

El STP actúa desactivando temporalmente uno de los enlaces para eliminar bucles, y, en caso de fallo de un enlace activo, reactiva dinámicamente el enlace bloqueado para mantener la conectividad.
 `,

//respuesta15
`OSPF es un protocolo de enrutamiento con estado, lo que significa que los routers utilizan la información de estado de los enrutadores vecinos para calcular y distribuir la información de enrutamiento que se distribuye en la red. Las redes OSPF se dividen en áreas. Cada área se conecta a un router llamado “router de frontera de área” (ABR, por sus siglas en inglés), que se encarga de distribuir información de enrutamiento entre las áreas. Cada router en una red OSPF mantiene una visión completa de la topología de la red y utiliza este conocimiento para calcular la mejor ruta para el tráfico dentro del ancho de banda disponible.

El costo refleja la calidad y capacidad de un enlace, considerando principalmente el ancho de banda disponible. Por convención, el costo se calcula utilizando la fórmula:

<math xmlns="http://www.w3.org/1998/Math/MathML">
  <mrow>
    <mi>Costo</mi>
    <mo>=</mo>
    <mfrac>
      <mn>100</mn>
      <mrow>
        <mi>Ancho de banda</mi>
        <mo>(</mo>
        <mi>Mbps</mi>
        <mo>)</mo>
      </mrow>
    </mfrac>
  </mrow>
</math>

<b>Ejemplo práctico:</b>

Si existen dos caminos posibles entre dos redes:

* Un enlace de 100 Mbps tendría un costo de 1.

* Un enlace de 10 Mbps tendría un costo de 10.

En este caso, OSPF seleccionaría el enlace de 100 Mbps como el camino óptimo, dado su menor costo.

Esta metodología permite que OSPF no solo elija rutas más cortas, sino también aquellas más eficientes en términos de capacidad de transmisión de datos.

<img class="img" src="./imgs/osfp_image.png">

`,

//respuesta16
`El Protocolo de Resolución de Direcciones (ARP) es un protocolo de red de nivel 2 utilizado para asociar una dirección IP lógica con una dirección física MAC (Media Access Control) dentro de una red local. Su función principal es permitir que un dispositivo que conoce la dirección IP de destino pueda obtener su dirección MAC correspondiente, necesaria para el envío de tramas en redes Ethernet.

Las direcciones IP, asignadas dinámicamente por servicios como DHCP, pueden cambiar con frecuencia, mientras que las direcciones MAC son únicas y permanentes para cada dispositivo. ARP actúa como intermediario para resolver esta diferencia, asegurando la correcta entrega de paquetes dentro de una red local.

Cuando un dispositivo necesita comunicarse con otro en la misma red, envía una solicitud ARP (ARP Request) preguntando "¿Quién tiene esta IP?", y el dispositivo con esa IP responde con su dirección MAC (ARP Reply). Este proceso permite completar la trama Ethernet con la dirección de destino correcta.

<img class="img" src="./imgs/arp_image.png">
`,

//respuesta17
`Un firewall es un sistema de seguridad que actúa como una barrera protectora entre una red privada segura y una red externa no confiable, como Internet. Su función principal es permitir o bloquear el tráfico de datos basado en un conjunto de reglas de seguridad predeterminadas.
Este sistema puede estar implementado en forma de hardware, software o como una combinación de ambos. Un firewall no solo filtra paquetes de datos, sino que también puede realizar inspección profunda de paquetes, detectar amenazas conocidas y prevenir ataques como accesos no autorizados, malware y explotación de vulnerabilidades.

Los firewalls modernos permiten definir políticas de seguridad avanzadas, controlar aplicaciones específicas y gestionar conexiones cifradas. Además, ofrecen capacidades de monitoreo continuo para identificar y responder a incidentes en tiempo real, reforzando así la postura de seguridad general de la organización.

En resumen, el firewall es un componente fundamental para garantizar la integridad, confidencialidad y disponibilidad de la información en redes corporativas y personales.

<img class="img" src="./imgs/firewall_image.png">
`,

//respuesta18
`Una zona desmilitarizada es una red aislada que se encuentra dentro de la red interna de la organización. En ella se encuentran ubicados exclusivamente todos los recursos de la empresa que deben ser accesibles desde Internet, como el servidor web o de correo. 

Por lo general, una DMZ permite las conexiones procedentes tanto de Internet, como de la red local de la empresa donde están los equipos de los trabajadores, pero las conexiones que van desde la DMZ a la red local, no están permitidas. 

Esto se debe a que los servidores que son accesibles desde Internet son más susceptibles a sufrir un ataque que pueda comprometer su seguridad. Si un ciberdelincuente comprometiera un servidor de la zona desmilitarizada, tendría muchos más complicado acceder a la red local de la organización, ya que las conexiones procedentes de la DMZ se encuentran bloqueadas.
<img class="img" src="./imgs/DMZ.png">
`,

//respuesta19
`Gateway es un término inglés que significa puerta o portal. Es un tipo de enrutador que funciona como un punto de parada para los datos en su camino hacia otras redes. Gracias a los Gateway es posible la comunicación y envío de datos de un lado a otro. Internet no tendría la funcionalidad que tiene hoy en día sin las puertas de enlaces (así como un montón de otros dispositivos y programas).
De igual forma, un Gateway es normalmente un equipo informático configurado para traducir los datos de un protocolo empleado en una red al protocolo utilizado en la red de destino. Esto podría ser un servidor, firewall (cortafuegos) u otro dispositivo que permita que el tráfico fluya hacia cualquier otra red.
Una de las principales ventajas de usar Gateway en escenarios empresariales es la simplificación de la conectividad a Internet en un solo dispositivo.

Todas las redes tienen un protocolo que limita la comunicación a los dispositivos. Debido a esto, si un dispositivo dentro de una red desea comunicarse con otro fuera de ella, requiere la funcionalidad de un Gateway.
Los Gateway pueden adoptar varias formas con el propósito de cumplir ciertas tareas. Por ejemplo:

Gateway de red: proporcionan una interfaz entre dos redes distintas que funcionan con varios protocolos.
- Firewall de aplicaciones web: filtran el tráfico hacia y desde un servidor web, analizando los datos de la capa de aplicación.
- Gateway de almacenamiento en la nube: es un servidor de red que descifra las solicitudes de almacenamiento en la nube. Además, permite almacenar la información en una sola red privada.
- Gateway API: supervisan el flujo de tráfico dentro y fuera de un servicio.
- Gateway loT: permiten agregar y transmitir datos a los sensores en un entorno loT (Internet de las cosas).
- Gateway VoIP: facilitan el uso de datos con los servicios de telefonía antiguo.
- Gateway de seguridad de email: evitan la entrada de correos electrónicos que no cumplan con la política de la empresa.

Entonces podemos concluir que un Gateway es un equipo informático configurado para traducir los datos de un protocolo empleado en una red al protocolo utilizado en la red de destino. 
<img class="img" src="./imgs/gateway.png">
`,

//respuesta20
`Microsoft define NLB o Network Load Balancing como una tecnología de Windows Server que permite distribuir el tráfico de red entre múltiples servidores dentro de un clúster. Su objetivo principal es mejorar la disponibilidad, escalabilidad y rendimiento de aplicaciones críticas, como servidores web, VPN, proxy y firewall.
¿Cómo funciona?
NLB opera mediante la asignación de una única dirección IP virtual a un grupo de servidores, conocidos como hosts. Cuando un cliente envía una solicitud, NLB distribuye la carga entre los servidores disponibles, asegurando que ninguno se sobrecargue. Además, si un servidor falla, NLB redistribuye automáticamente el tráfico a los demás servidores activos.
Características clave:

- Alta disponibilidad: Si un servidor se desconecta, la carga se redistribuye sin interrupciones.
- Escalabilidad dinámica: Se pueden agregar nuevos servidores al clúster sin afectar el servicio.
- Distribución eficiente: Se puede configurar la cantidad de tráfico que cada servidor maneja.
- Modos de operación: Funciona en unidifusión o multidifusión, dependiendo de la configuración de red.
Aplicaciones prácticas:
NLB es ideal para aplicaciones sin estado, como servidores web con Internet Information Services (IIS), donde la carga de trabajo puede distribuirse sin afectar la experiencia del usuario.
<img class="img" src="./imgs/microsoft.png">
`,

//respuesta21
`Explicación de cada tipo de enlace:
MPLS (Multiprotocol Label Switching): Tecnología de red que optimiza el enrutamiento de paquetes mediante etiquetas, mejorando la velocidad y eficiencia del tráfico de datos. Se usa en redes empresariales y proveedores de servicios.
LAN to LAN: Conexión directa entre dos redes locales (LAN) a través de fibra óptica, VPN o enlaces dedicados. Ideal para empresas con múltiples sucursales.
Microondas: Comunicación inalámbrica de alta frecuencia que permite la transmisión de datos entre dos puntos con línea de vista. Se usa en telecomunicaciones y enlaces de respaldo.
VSAT (Very Small Aperture Terminal): Tecnología satelital que permite conectividad en zonas remotas mediante antenas pequeñas. Se usa en minería, petróleo y zonas rurales.
b. Dos tipos de enlaces adicionales:
Fibra óptica: Tecnología de transmisión de datos mediante pulsos de luz en cables de fibra. Ofrece alta velocidad y baja latencia.
5G: Red móvil de última generación con alta velocidad y baja latencia, ideal para IoT y aplicaciones en tiempo real.
c. Ranking de enlaces según criterios:

<img class="img" src="./imgs/tablerank.png">

d. Elección de enlace según escenarios:
  d.1. Conectividad de varios call centers con un data center central → MPLS, por su capacidad de gestionar tráfico de manera eficiente y segura.
  d.2. Conectar los datos de los pozos petroleros durante 15 minutos por día → VSAT, ya que permite conectividad en zonas remotas sin infraestructura terrestre.
  d.3. Comunicar dos edificios enfrentados en la misma calle → LAN to LAN, usando fibra óptica o radioenlace de microondas para una conexión rápida y estable.
<img class="img" src="./imgs/LTE.png">
`,

//respuesta22
`LTE (Long Term Evolution) es una tecnología de comunicación móvil que representa una evolución del 3G hacia el 4G. Aunque a menudo se le llama 4G, técnicamente es una tecnología 3.9G, ya que no cumple completamente con los requisitos de la ITU para ser considerada 4G. LTE mejora la velocidad de transmisión de datos, la latencia y la eficiencia espectral, permitiendo conexiones más rápidas y estables en dispositivos móviles.
Características principales de LTE:
Mayor velocidad: LTE permite velocidades de descarga de hasta 300 Mbps y de subida de hasta 75 Mbps, dependiendo de la infraestructura y el espectro disponible.
Menor latencia: La latencia en LTE es significativamente menor que en redes 3G, lo que mejora la experiencia en aplicaciones en tiempo real como videollamadas y juegos en línea.
Eficiencia espectral: LTE optimiza el uso del espectro radioeléctrico, permitiendo una mejor distribución del tráfico y mayor capacidad de usuarios conectados simultáneamente.
Arquitectura basada en IP: LTE utiliza una arquitectura completamente basada en conmutación de paquetes, eliminando la dependencia de circuitos tradicionales.
LTE vs. LTE Advanced:
LTE Advanced es una evolución de LTE que cumple con los estándares de IMT-Advanced, lo que lo convierte en una verdadera tecnología 4G. 
Algunas mejoras incluyen:
Carrier Aggregation: Permite combinar múltiples bandas de frecuencia para aumentar la velocidad de transmisión.
MIMO avanzado: Usa múltiples antenas para mejorar la eficiencia y cobertura.
Mayor capacidad: LTE Advanced puede alcanzar velocidades de hasta 1 Gbps en condiciones óptimas.
`,

//respuesta23
`Microsoft Teams es una plataforma de comunicación y colaboración desarrollada por Microsoft que permite a los equipos trabajar juntos de manera eficiente, independientemente de su ubicación.
Características principales:
Mensajería instantánea: Permite chats individuales y grupales para una comunicación rápida.
Videollamadas y reuniones: Facilita reuniones virtuales con funciones como compartir pantalla y grabación.
Integración con Microsoft 365: Se conecta con aplicaciones como Word, Excel y PowerPoint para una colaboración fluida.
Espacios de trabajo organizados: Los equipos pueden crear canales para discutir proyectos específicos y compartir archivos.
Seguridad y cumplimiento: Ofrece cifrado de datos y controles de acceso para proteger la información empresarial.
<img class="img" src="./imgs/teams.png">
`,

//respuesta24
`Aplicar calidad en un enlace MPLS implica optimizar la transmisión de datos mediante la gestión eficiente del tráfico y la asignación de recursos dentro de la red. MPLS utiliza la conmutación de etiquetas para dirigir los paquetes de datos de manera más rápida y eficiente que el enrutamiento tradicional basado en IP.

Aspectos clave de la calidad en MPLS

Calidad de Servicio (QoS): MPLS permite priorizar ciertos tipos de tráfico, asegurando que aplicaciones críticas (como videoconferencias o VoIP) tengan un rendimiento óptimo. Esto se logra mediante la clasificación de paquetes y la asignación de niveles de prioridad.
Reducción de latencia: Al establecer rutas predefinidas, MPLS minimiza el tiempo de transmisión de datos, mejorando la experiencia del usuario. Esto es especialmente útil en entornos donde la baja latencia es crucial, como en el comercio financiero o el gaming en línea.
Mayor estabilidad: La conmutación de etiquetas evita congestiones en la red, asegurando una conexión más confiable. Esto significa que los datos viajan por rutas optimizadas sin depender de la lógica de enrutamiento tradicional.
Seguridad mejorada: MPLS segmenta el tráfico, reduciendo el riesgo de interferencias externas. Aunque no es una tecnología de seguridad por sí misma, su capacidad de aislamiento de tráfico lo hace más seguro que el enrutamiento IP convencional.
Optimización del ancho de banda: MPLS permite una mejor utilización del ancho de banda al evitar el reenvío innecesario de paquetes y mejorar la eficiencia de la red. Esto es clave para empresas que manejan grandes volúmenes de datos y requieren conexiones estables.

Beneficios de aplicar calidad en MPLS
Mejor rendimiento de aplicaciones críticas: Al priorizar el tráfico, las aplicaciones esenciales funcionan sin interrupciones.
Menos interrupciones en la red: La estabilidad de MPLS reduce la posibilidad de fallos en la conectividad.
Mayor eficiencia operativa: La optimización del tráfico permite un uso más eficiente de los recursos de red.
Escalabilidad: MPLS facilita la expansión de redes empresariales sin comprometer la calidad del servicio.
`,

//respuesta25
`Diferencias entre Coaxial, UTP y Fibra Óptica
<img class="img" src="./imgs/coaxial.png">

1. Cable Coaxial
Transmisión: Usa un conductor central de cobre rodeado por una capa de aislamiento y una malla metálica para reducir interferencias.
Velocidad: Puede alcanzar hasta 500 Mbps, aunque depende de la infraestructura.
Distancia: Funciona bien en distancias medias, pero sufre degradación en tramos largos.
Uso común: Se emplea en televisión por cable e internet de banda ancha.
2. Cable UTP (Par Trenzado)
Transmisión: Usa pares de cables de cobre trenzados para reducir interferencias electromagnéticas.
Velocidad: Puede alcanzar hasta 10 Gbps, dependiendo de la categoría del cable.
Distancia: Eficiente en distancias cortas (hasta 100 metros), pero pierde calidad en tramos largos.
Uso común: Se usa en redes Ethernet y telecomunicaciones.
3. Fibra Óptica
Transmisión: Usa pulsos de luz a través de hilos de vidrio o plástico, lo que permite una transmisión más rápida y estable.
Velocidad: Puede alcanzar hasta 200 Gbps en redes avanzadas.
Distancia: Funciona en largas distancias sin pérdida de señal (hasta 80 km).
Uso común: Se emplea en internet de alta velocidad, redes empresariales y telecomunicaciones avanzadas.
Comparación general
<img class="img" src="./imgs/table2.png">

`,

//respuesta26
`CCENT (Cisco Certified Entry Networking Technician): Era la certificación de nivel inicial en redes de Cisco. Certificaba conocimientos básicos en redes pequeñas y medianas, incluyendo instalación, operación y solución de problemas. Esta certificación fue retirada en 2020.

CCNA (Cisco Certified Network Associate): Es una certificación de nivel intermedio que valida habilidades en instalación, configuración, operación y solución de problemas de redes medianas, así como conocimientos básicos de seguridad, automatización y programación.

CCNP (Cisco Certified Network Professional): Es una certificación de nivel avanzado. Acredita habilidades profesionales en el manejo de redes complejas, incluyendo configuración avanzada, solución de problemas, implementación de redes de gran escala y tecnologías especializadas como seguridad, colaboración y servicios en la nube

Track Routing & Switching (ahora llamado "Enterprise Networking")
 Este track está enfocado en el diseño, implementación y solución de problemas de redes empresariales LAN/WAN, incluyendo protocolos de enrutamiento como OSPF, EIGRP y BGP, y configuraciones avanzadas de switches y routers.

Otro track: Security
 La certificación en Security prepara a los profesionales para asegurar las redes de una organización contra amenazas internas y externas. Incluye conocimientos en firewalls, VPNs, control de acceso, protección contra malware y estrategias de defensa.`,

 //respuesta27
`El modelo OSI (Open Systems Interconnection) es un marco teórico que describe cómo se comunican los sistemas de red. Divide el proceso de comunicación en 7 capas, cada una con funciones específicas:

1- Capa física: Transmisión de bits a través del medio físico (cables, señales eléctricas, ópticas, etc.).


2- Capa de enlace de datos: Asegura una transferencia libre de errores entre dos dispositivos conectados directamente (MAC, switches).


3- Capa de red: Encaminamiento de datos entre dispositivos de diferentes redes (IP, routers).


4- Capa de transporte: Garantiza la entrega correcta de datos (TCP/UDP).


5- Capa de sesión: Establece, administra y termina sesiones entre aplicaciones.


6- Capa de presentación: Traduce, cifra o comprime datos para la aplicación (formatos como JPEG, ASCII, SSL/TLS).


7- Capa de aplicación: Interfaz directa para el usuario final y las aplicaciones (HTTP, FTP, SMTP).


Cada capa interactúa con la capa superior e inferior para completar la comunicación de red.`,

//respuesta28
`

<strong>Resultados Claudia Santivañez</strong>
<img src="./imgs/ResulClaudia1.png">
<img src="./imgs/ResulClaudia2.png">
<img src="./imgs/ResulClaudia3.png">

<strong>Resultados Micaela Casebonne</strong>

<strong>Resultados Tomas Coa</strong>
<img class="img" src="./imgs/tomastest_image.png">

<strong>Resultados Manuel Torrealba</strong>
<img class="img" src="./imgs/manueltest.png">

`,

//respuesta29
`El estándar IEEE 802.3 define el funcionamiento de las redes Ethernet cableadas.
 Especifica aspectos como:

- El método de acceso al medio (CSMA/CD en versiones antiguas),

- Las velocidades de transmisión (desde 10 Mbps hasta 400 Gbps),

- El tipo de cableado (UTP, fibra óptica),

- Y las conexiones físicas.

Implementación: Se implementa utilizando switches, routers y cables específicos (normalmente UTP Cat 5e, Cat 6, Cat 6a o fibra).
Ventajas:

- Alta confiabilidad.

- Gran velocidad y ancho de banda.

- Bajo costo en instalaciones locales.

Desventajas:
- Limitado a redes cableadas (menor flexibilidad frente a Wireless).

- Costos de cableado en grandes instalaciones.`,

//respuesta30
`El estándar IEEE 802.4 regula el acceso al medio en redes Token Bus.
 En esta tecnología, los dispositivos forman una red lógica en forma de bus donde un "token" (una señal especial) circula entre los nodos. Solo el dispositivo que tiene el token puede transmitir datos, evitando colisiones.
Ventajas:
- Muy efectivo en evitar colisiones.

- Adecuado para aplicaciones industriales donde se requiere comunicación ordenada y predecible.

Desventajas:
- Complejidad en la gestión del token.

- Obsoleto frente a tecnologías Ethernet modernas (802.3).`,

//respuesta31
`SMTP (Simple Mail Transfer Protocol):
 Utilizado para enviar correos electrónicos desde un cliente a un servidor o entre servidores.

POP3 (Post Office Protocol v3):
 Utilizado para recibir correos descargándolos desde el servidor al cliente. Una vez descargados, los correos generalmente se eliminan del servidor.

IMAP (Internet Message Access Protocol):
 Utilizado para recibir correos, pero manteniéndolos almacenados en el servidor, permitiendo sincronización entre múltiples dispositivos.`,

//respuesta32
`El protocolo más usado para leer correos recibidos es:

IMAP, ya que permite acceder y gestionar los mensajes directamente en el servidor, ideal para acceder desde varios dispositivos.

También se puede usar POP3, aunque es menos flexible porque descarga y borra los correos del servidor.`,

//respuesta33
`<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th><strong>Caracteristica</strong></th>
      <th><strong>IPv4</strong></th>
      <th><strong>IPv6</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Longitud de la dirección</strong></td>
      <td>32 bits</td>
      <td>128 bits</td>
    </tr>
    <tr>
      <td><strong>Formato</strong></td>
      <td>Decimal (ej.: 192.168.0.1)</td>
      <td>Hexadecimal (ej.: 2001:0db8:85a3:0000:0000:8a2e:0370:7334)</td>
    </tr>
    <tr>
      <td><strong>Cantidad de direcciones</strong></td>
      <td>~4.3 mil millones</td>
      <td>3.4 x 10^38</td>
    </tr>
    <tr>
      <td><strong>NAT necesario</strong></td>
      <td>Sí, por escasez de direcciones</td>
      <td>No, gracias a la gran cantidad de direcciones</td>
    </tr>
    <tr>
      <td><strong>Seguridad</strong></td>
      <td>Opcional (IPSec)</td>
      <td>Integrada por defecto (IPSec)</td>
    </tr>
    <tr>
      <td><strong>Configuracion</strong></td>
      <td>Manual o por DHCP</td>
      <td>Automática (Stateless Address Autoconfiguration)</td>
    </tr>
    <tr>
      <td><strong>Compatibilidad</strong></td>
      <td>Infraestructura ampliamente instalada</td>
      <td>Se requiere compatibilidad o migración</td>
    </tr>
    
  </tbody>
</table>

En sisntesis: IPv6 soluciona los problemas de agotamiento de direcciones y ofrece mayor seguridad y eficiencia, pero su adopción aún es parcial.`,

//respuesta34
`

<strong>Claudia Santivañes</strong>

Actualmente no tengo experiencia profesional en redes, pero he configurado el router de mi casa para gestionar la conexión a internet, lo cual me permitió familiarizarme de manera básica con conceptos como redes Wi-Fi, contraseñas de seguridad y configuraciones de acceso. Además, estoy realizando el curso de redes de Cisco, el cual me ha sido de gran ayuda para adquirir nuevos conocimientos teóricos y prácticos en este campo.

<strong>Coa Tomas</strong>

La unica experiencia que tengo con redes es la configuracion de seguridad de la red personal de mi casa, haciendo cambios de contraseñas y reseteo de fabrica del router.
`
,
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
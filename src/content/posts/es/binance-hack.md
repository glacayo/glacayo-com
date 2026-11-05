---
title: "Cómo una “prueba técnica” falsa terminó en el robo de 6.300 millones de dólares a Binance"
description: El 29 de octubre de 2026, Binance sufrió el mayor robo de criptomonedas de la historia. Repasamos cómo una entrevista de trabajo falsa y una función de Ethereum llamada EIP-7702 se combinaron, quién está detrás y qué deberías aprender si eres developer.
date: 2026-11-05T11:00:00Z
category: security
translationKey: binance-hack
---

Imagina que te escribe un reclutador por una plataforma de empleo conocida. La empresa parece seria, la entrevista va bien y, al final, te mandan una prueba técnica para resolver en casa. La descargas, la instalas y te pones a programar. Nada fuera de lo normal.

Así empezó, según la propia Binance, una de las piezas clave del **mayor robo de criptomonedas de la historia**. El 29 de octubre de 2026 salieron de sus wallets calientes alrededor de **6.300 millones de dólares** en cuestión de horas.

Lo más interesante no es la cifra, sino el cómo. No hubo un fallo en Ethereum ni una clave privada robada a la antigua. Fue una campaña de meses que combinó la ingeniería social de siempre con una función relativamente nueva de Ethereum: **EIP-7702**.

> **La respuesta corta:** según los hallazgos iniciales de [Binance](https://x.com/binance), el atacante comprometió a varios ingenieros entre junio y octubre, entre otras cosas con una entrevista de trabajo falsa. Así llegó al servicio que firma las transacciones de sus wallets. En Ethereum usó EIP-7702 para que una wallet de Binance ejecutara su código durante casi cuatro horas. El [FBI](https://x.com/FBI) atribuye el robo a TraderTraitor, un grupo de Corea del Norte. Binance dice que cubrió las pérdidas con fondos propios y que los usuarios no perdieron dinero.

## Un robo sin precedentes

Las cifras varían un poco según quién las calcule: Binance habla de unos **6.340 millones de dólares**, [Chainalysis](https://x.com/chainalysis) de 6.400 millones y [Elliptic](https://x.com/elliptic) de 6.430 millones. Cualquiera de ellas multiplica por cuatro el récord anterior, los 1.500 millones que le robaron a Bybit en febrero de 2025.

<figure>
<img src="/images/posts/binance-hack/por-blockchain.webp" alt="Gráfico de barras de lo robado a Binance por blockchain: Ethereum unos 3.800 millones de dólares, Bitcoin unos 1.480 millones, Tron unos 613 millones, XRP unos 296 millones y Solana unos 96 millones. El total estimado va de 6.340 millones según Binance a 6.430 millones según Elliptic, y unos 2.850 millones quedaron congelados" width="1400" height="622" loading="lazy" decoding="async">
<figcaption>Lo robado en las principales blockchains, en dólares aproximados. Diagrama propio con datos de <a href="https://www.elliptic.co/insights/binance-largest-hack-in-history/">Elliptic</a> y de los reportes recogidos por <a href="https://en.wikipedia.org/wiki/2026_Binance_hack">Wikipedia</a>.</figcaption>
</figure>

Según Elliptic, el golpe tocó **11 blockchains** en unas tres horas. Ethereum se llevó la peor parte, con unos 3.800 millones de dólares repartidos en 186 tokens, y de Bitcoin salieron 18.270 BTC.

La buena noticia, dentro de lo malo: los emisores de stablecoins como Tether y Circle reaccionaron rápido. Al 3 de noviembre, Binance calculaba unos **2.850 millones de dólares congelados o interceptados**, casi todo en stablecoins. Lo que salió en Bitcoin, XRP o Solana no se puede congelar, porque esas monedas no tienen un emisor que pueda bloquearlas.

## El ataque duró meses, no horas

Binance publicó sus hallazgos iniciales el **3 de noviembre**, y lo primero que deja claro es que esto no fue un hackeo de un día. En sus palabras, se trató de "una campaña sofisticada de varias etapas".

<figure>
<img src="/images/posts/binance-hack/campana.webp" alt="Línea de tiempo de la campaña contra Binance: en junio de 2026, un ingeniero descarga un instalador de Homebrew alterado al configurar una herramienta de IA para programar; en septiembre, otro ingeniero recibe una prueba técnica falsa que reemplaza un binario de pyenv por uno malicioso; el 20 de octubre, con una herramienta de IA interna, llegan a dos ingenieros más y uno tiene un token para desplegar contenedores; el 29 de octubre a las 17:15 UTC despliegan un contenedor malicioso y llegan al servicio de firmado; a las 20:05 UTC empieza el vaciado; y el 30 de octubre a las 00:10 UTC Binance borra la delegación de su wallet Binance14" width="1400" height="920" loading="lazy" decoding="async">
<figcaption>La campaña, paso a paso. Diagrama propio basado en los hallazgos iniciales de Binance, según los recogen <a href="https://www.gncrypto.news/news/binance-traces-6-34b-hack-six-month-cyber-campaign/">GNcrypto</a> y <a href="https://www.tokenpost.com/news/technology/48454">TokenPost</a>.</figcaption>
</figure>

### Junio: el instalador alterado

Un ingeniero buscaba una herramienta de IA para programar, la encontró en un buscador y, al configurarla, descargó un **instalador de Homebrew manipulado**. Binance detectó actividad rara, le cambió el equipo y renovó sus credenciales. Pero ya era tarde para una cosa: el atacante había aprendido qué hacía ese ingeniero y quiénes eran sus compañeros en el equipo de infraestructura de wallets.

### Septiembre: la entrevista de trabajo falsa

Aquí entra la historia del principio. Alguien que se hacía pasar por director de proyectos contactó a otro ingeniero por una plataforma legítima de búsqueda de empleo. Hubo entrevista con supuestos empleados de una empresa que no existía y, al final, la famosa **prueba técnica**.

El ingeniero la descargó en su computadora de trabajo. Al instalarla, un código escondido en el repositorio reemplazó un archivo legítimo de **pyenv**, la herramienta para manejar versiones de Python, por una versión maliciosa apenas 70 bytes más grande. Eso le dio al atacante la capacidad de ejecutar comandos y conectarse a su propio servidor. Y lo peor: **el antivirus corporativo no lo detectó**.

### 20 de octubre: el salto a otros ingenieros

Con esa computadora comprometida, y ayudándose de una **herramienta de IA interna** de Binance, el atacante llegó a dos ingenieros más. En la máquina de uno de ellos había un **token para desplegar contenedores**, y ese token abría la puerta al servicio que firma las transacciones de las wallets.

### 29 de octubre: el golpe

A las **17:15 UTC**, el atacante entró a esa computadora, usó credenciales robadas, desplegó un contenedor y corrió un script malicioso. A las **20:05 UTC** empezaron a salir fondos: primero unos 233 millones de XRP desde cinco wallets calientes y, después, SOL, OP y 18.270 BTC. Binance recibió una alerta interna, suspendió los retiros y empezó a coordinar con otras empresas para congelar fondos.

Pero en Ethereum, los retiros siguieron. Y para entender por qué, hay que hablar de EIP-7702.

## La parte técnica: EIP-7702

**EIP-7702** es una mejora de Ethereum que llegó con la actualización Pectra, el **7 de mayo de 2025**. Permite que una wallet común (lo que en Ethereum se llama una EOA) ejecute temporalmente el código de un contrato inteligente, sin cambiar su dirección. Se creó para cosas útiles: pagar varias operaciones en una sola transacción o dejar que otra cuenta pague las comisiones.

El truco está en cómo se activa: el dueño de la wallet firma una **autorización** que apunta la wallet a un contrato. Desde ese momento, la wallet ejecuta ese código, y la delegación dura hasta que alguien la borre.

<figure>
<img src="/images/posts/binance-hack/eip-7702.webp" alt="Diagrama de EIP-7702 en tres pasos: primero, una wallet normal solo mueve fondos cuando su dueño firma cada transacción; segundo, con EIP-7702 el dueño firma una autorización que apunta la wallet a un contrato y la delegación dura hasta que se borre; tercero, en Binance el servicio de firmado firmó autorizaciones que apuntaban al contrato del atacante, la wallet Binance14 se volvió una aspiradora controlada por él y la delegación siguió activa fuera del sistema de retiros" width="1400" height="579" loading="lazy" decoding="async">
<figcaption>Cómo funciona EIP-7702 y cómo se usó contra Binance. Diagrama propio basado en <a href="https://decrypt.co/resources/what-is-eip-7702-the-ethereum-upgrade-behind-the-6-4b-binance-hack">Decrypt</a>, TRM Labs y los hallazgos de Binance.</figcaption>
</figure>

Con acceso al servicio de firmado, el atacante no necesitó robar ninguna clave privada: hizo que **el propio sistema de Binance firmara** las autorizaciones. Según [TRM Labs](https://x.com/trmlabs), preparó **50 autorizaciones firmadas por adelantado** y las envió desde una wallet financiada a través de Tornado Cash. Binance explica que esas 50 firmas le sirvieron para manipular el contador de transacciones (el *nonce*) de la cuenta y mantener la delegación activa.

El resultado: la wallet caliente **Binance14** se convirtió en una especie de aspiradora controlada por el atacante. Y como esa delegación vivía en la blockchain, fuera del sistema normal de retiros, suspender los retiros no la detuvo. Para colmo, la wallet usaba computación multiparte (MPC), así que no había una única clave privada que revocar.

La última transferencia salió a las **23:56 UTC**, y Binance logró borrar el código delegado a las **00:10 UTC del 30 de octubre**: unas cuatro horas después de la primera salida.

En el resto de blockchains (Bitcoin, Tron, XRP, Solana y demás) no hizo falta ningún truco: con acceso al servicio de firmado, bastaba con emitir transferencias que se veían perfectamente válidas.

Un matiz importante: **esto no fue un fallo de Ethereum**. Una delegación EIP-7702 necesita una firma válida de la propia wallet. El problema fue que el atacante controlaba quién firmaba. EIP-7702 solo le dio una forma de mantener el control por más tiempo.

## ¿Cómo controlaban esas computadoras sin dejarse ver?

Hay un detalle del informe de Binance que pasa casi desapercibido: cuando la prueba técnica instaló el malware, este se conectó a **un servidor controlado por el atacante**. Parece poca cosa, pero explica cómo alguien puede pasar meses dentro de una empresa sin que nadie lo vea.

Cuando imaginamos un ataque, solemos pensar que el hacker "se conecta" a la computadora de la víctima y la maneja en tiempo real desde la suya. En la práctica, los grupos sofisticados casi nunca lo hacen así. Conectarse de forma directa dejaría su IP real registrada, haría el tráfico más fácil de detectar y bloquear, y les haría perder el acceso en cuanto la víctima apagara la máquina o cambiara de red.

### La computadora comprometida llama al atacante, no al revés

El truco es invertir la dirección: el malware es el que **sale** a buscar a un servidor del atacante, conocido como **C2** (comando y control). Cada cierto tiempo se reporta, pregunta si hay órdenes nuevas y las ejecuta. A esto se le llama *beaconing*.

¿Por qué funciona tan bien? Porque la mayoría de las redes vigilan mucho más lo que entra que lo que sale. Para el firewall, una computadora que se conecta por HTTPS a un servidor en internet se ve igual que alguien abriendo una página web.

<figure>
<img src="/images/posts/binance-hack/c2.webp" alt="Diagrama de cómo se comunica un atacante con una computadora comprometida: la víctima, con el malware, sale a internet por HTTPS hacia un servidor de comando y control o C2; el operador real llega a ese C2 a través de capas de proxies, VPS y VPN, donde cada salto solo conoce al anterior, y nunca toca la máquina de la víctima" width="1400" height="511" loading="lazy" decoding="async">
<figcaption>El malware sale a buscar al C2, y el atacante llega al C2 por otro camino lleno de capas. Diagrama propio basado en <a href="https://attack.mitre.org/techniques/T1090/002/">MITRE ATT&amp;CK</a> y el reporte de SecurityScorecard sobre Lazarus.</figcaption>
</figure>

### Las capas para esconderse

Del otro lado, el atacante tampoco llega al C2 de forma directa. Suele apilar varias capas:

- **Proxies y cadenas de proxies:** el tráfico pasa por uno o varios servidores intermedios antes de llegar al C2. Cada salto solo ve al anterior. MITRE ATT&CK, la base de conocimiento de técnicas de ataque más usada en la industria, documenta que Lazarus ha usado varios proxies para ocultar su tráfico.
- **Servidores alquilados (VPS):** rentan servidores en distintos países que hacen de C2, de punto intermedio o de almacén de lo robado. Si uno cae, levantan otro.
- **Botnets:** redes de computadoras ya infectadas que sirven para rebotar conexiones, así la IP que aparece en los registros es la de otra víctima.
- **VPN comerciales:** en 2025, SecurityScorecard rastreó una campaña de Lazarus contra developers con pruebas técnicas falsas, muy parecida a esta. Los operadores usaban la VPN comercial Astrill para llegar a una red de proxies registrada a nombre de una empresa de transporte en Rusia, y desde ahí a sus servidores C2. Aun así, los investigadores lograron seguir el rastro hasta seis direcciones IP en Pionyang.
- **Automatización:** una vez dentro, buena parte del trabajo se hace con scripts y no con sesiones largas en vivo. En Binance, el golpe final fue justamente un script que corrió dentro del contenedor malicioso.

En resumen, el flujo típico se ve así:

1. El malware entra en la computadora de la víctima, por ejemplo con una prueba técnica falsa.
2. El malware se conecta al C2, a veces pasando por proxies o por nodos de una botnet.
3. El atacante llega al C2 desde su lado, a través de proxies, VPS o VPN.
4. Desde el C2 deja las órdenes.
5. El malware las recoge y las ejecuta en la máquina de la víctima.

### Por qué esto complica la detección y la atribución

- El tráfico hacia el C2 puede parecer normal: HTTPS, consultas DNS, nada que llame la atención.
- Las IPs que aparecen en los registros son de proxies, VPS o botnets, no del atacante.
- Si alguien da de baja un C2, el atacante puede montar otro en minutos.
- El malware puede borrar sus propias huellas. Richard Teng, codirector ejecutivo de Binance, dijo que el atacante usó un mecanismo de autodestrucción que eliminó sus herramientas y rastros.

Por eso la investigación forense suele encontrar con relativa facilidad el punto de entrada, la computadora de la víctima, pero llegar hasta el operador real es mucho más difícil. Y también por eso un compromiso puede pasar semanas o meses sin que nadie lo note, como pasó aquí entre junio y octubre.

Entonces, ¿cómo se supo quién fue? Por el rastro que sí es difícil de borrar: el del dinero en la blockchain.

## ¿Quién está detrás?

Binance no culpó de entrada a ningún grupo, pero las firmas de análisis blockchain lo hicieron rápido. El 30 de octubre, TRM Labs atribuyó el ataque "con alta confianza" a **TraderTraitor**, una unidad de hackers de Corea del Norte que se considera parte del famoso **Lazarus Group**. Jonathan Levin, CEO de Chainalysis, coincidió en que "probablemente" fue TraderTraitor, por sus vínculos con robos anteriores.

¿Qué los delató? Entre otras cosas, el investigador [ZachXBT](https://x.com/zachxbt) detectó que fondos de Binance terminaron en la misma dirección que fondos robados semanas antes a Bitget, un robo que ya se le atribuía a ese grupo.

El **31 de octubre**, el FBI lo hizo oficial: atribuyó el robo a Corea del Norte y a TraderTraitor, el mismo grupo al que culpa del robo a Bybit. Publicó direcciones vinculadas y pidió a los exchanges bloquear cualquier transacción relacionada.

Y la táctica de la entrevista falsa no es nueva para ellos. En el robo de más de 300 millones de dólares a DMM Bitcoin en 2024, un atacante que se hacía pasar por reclutador le envió una prueba técnica maliciosa a un empleado de Ginco, el proveedor de wallets de la empresa. Según la propia Binance, este año frenó **57 amenazas** que sospecha vinculadas a Corea del Norte, entre ellas entrevistas falsas, herramientas de desarrollo maliciosas y paquetes de software comprometidos.

## ¿Y los usuarios?

Binance asegura que los usuarios no perdieron dinero. Dijo que absorbería el impacto con fondos propios: su fondo de protección SAFU, parte de su fondo de seguros de futuros, su reserva de Bitcoin y la tesorería de la empresa. Al **3 de noviembre** reportó haber repuesto el **98 %** de los activos afectados, y publicó una prueba de reservas para que cada usuario pudiera verificar que sus fondos están respaldados.

Los retiros volvieron a abrirse el 1 de noviembre, empezando por Ethereum, USDT y USDC. Mientras tanto, según Chainalysis y Elliptic, el atacante mueve los fondos con patrones automatizados: miles de transacciones en poco tiempo, montos aleatorios y dinero que va y viene entre cientos de direcciones.

## Lo que esto nos enseña si eres developer

Esta historia no es solo para exchanges. Casi todo empezó en la computadora de un desarrollador, así que hay lecciones para cualquiera que programe:

- **Las ofertas de trabajo también pueden ser un ataque.** Si te mandan una prueba técnica, ábrela en una máquina virtual o en un contenedor desechable, **nunca en tu computadora de trabajo**. Y desconfía de cualquier proyecto que te pida correr un instalador o un script antes de leer el código.
- **Descarga tus herramientas solo de su sitio oficial.** El primer paso de esta campaña fue un instalador alterado encontrado en un buscador. Antes de copiar ese comando de instalación, revisa bien que estés en el dominio correcto.
- **El antivirus no te salva de todo.** El malware de la prueba técnica pasó sin alertas. La mejor defensa es no ejecutarlo en una máquina con acceso a nada importante.
- **Los tokens son llaves.** Un solo token para desplegar contenedores, guardado en una laptop, fue el puente hacia el servicio de firmado. Dales a los tokens la vida más corta y los permisos más pequeños posibles, y nunca los dejes sueltos en tu máquina.
- **Las herramientas de IA internas también son superficie de ataque.** El atacante se apoyó en una para llegar a otros ingenieros. Si tu empresa conecta agentes o asistentes a sistemas internos, merecen los mismos controles de acceso que cualquier otra herramienta.
- **Nunca firmes una autorización EIP-7702 que no entiendas.** Si usas wallets en Ethereum, una delegación le da al contrato control total sobre tus fondos. La propia especificación advierte que las apps no deberían pedirte firmarlas.

## Fuentes

- [Wikipedia: 2026 Binance hack](https://en.wikipedia.org/wiki/2026_Binance_hack)
- [GNcrypto: Binance traza el robo a una campaña de seis meses](https://www.gncrypto.news/news/binance-traces-6-34b-hack-six-month-cyber-campaign/), sobre los hallazgos iniciales de Binance del 3 de noviembre de 2026
- [TokenPost: Binance vincula una entrevista falsa con el robo](https://www.tokenpost.com/news/technology/48454) (4 de noviembre de 2026)
- [BleepingComputer: Binance vincula el robo con la laptop de un ingeniero](https://www.bleepingcomputer.com/news/security/binance-links-63-billion-crypto-theft-to-compromised-devops-laptop/) (30 de octubre de 2026)
- [Chainalysis: últimos hallazgos sobre el exploit a Binance](https://chainalysis.com/blog/binance-exploit-latest-findings-and-response/) (30 de octubre de 2026)
- [Elliptic: el mayor robo de la historia](https://www.elliptic.co/insights/binance-largest-hack-in-history/)
- [Cointelegraph: investigadores vinculan a Corea del Norte con el robo](https://cointelegraph.com/news/north-korea-linked-to-63b-binance-hack-by-crypto-investigators) (30 de octubre de 2026)
- [Al Jazeera: el FBI culpa a Corea del Norte](https://aljazeera.com/news/2026/11/1/fbi-blames-north-korea-for-record-6-3bn-crypto-heist) (1 de noviembre de 2026)
- [Decrypt: qué es EIP-7702](https://decrypt.co/resources/what-is-eip-7702-the-ethereum-upgrade-behind-the-6-4b-binance-hack) (30 de octubre de 2026)
- [MITRE ATT&CK: técnica de proxy externo (T1090.002)](https://attack.mitre.org/techniques/T1090/002/)
- [Dark Reading: la capa de administración de Lazarus para sus servidores C2](https://www.darkreading.com/cyberattacks-data-breaches/researchers-uncover-lazarus-admin-layer-c2-servers), sobre el reporte de SecurityScorecard (enero de 2025)

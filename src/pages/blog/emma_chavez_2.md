---
layout: "../../layouts/BlogPostLayout.astro"
title: "Entendiendo los Tensores: La Piedra Angular de las Redes Neuronales"
date: 2026-01-16 # YYYY-MM-DD
author: Emmanuel Chávez
image: { src: "/images/posts/WallPapers/Tensores-P1.png", alt: "Tensores" }
description: En esta primera parte de nuestra saga sobre Machine Learning y Deep Learning, exploramos los tensores de manera sencilla. Descubre qué son, por qué importan en la computación y algunas curiosidades del mundo físico que los inspiran.
draft: false
category: math
---

Imagínate un mundo donde los datos no son solo números aislados, sino estructuras complejas que capturan la esencia de la realidad multidimensional. Ese es el reino de los tensores, bloques fundamentales que impulsan el **Machine Learning** (ML) y el **Deep Learning** (DL). En esta primera parte de una saga dedicada a explicar el mundo de estas herramientas matemáticas, desentrañaremos a los tensores de forma sencilla, para que cualquier persona pueda capturar su magia. No son simples matemáticas abstractas, sino herramientas prácticas que resuelven problemas reales en la computación. Y, como buenos curiosos que somos en esta comunidad, añadiremos algunos factos de la física que muestran cómo estos conceptos trascienden pantallas. Prepárate para una aventura que sentará las bases para entender cómo es que las máquinas aprenden en nuestro mundo.

### De lo Simple a lo Complejo: Escalares, Vectores y Tensores

Comencemos por lo más básico, como si estuviéramos construyendo una casa ladrillo a ladrillo. Dentro del mundo de los datos, todo empieza con cantidades simples.

- *Escalares*: números solitarios, como la temperatura ($25^\circ C$) o la masa ($70\text{ kg}$). Se caracterizan por no tener dimensión, solo magnitud. En un mundo donde tengamos $n$ dimensiones, un escalar necesita solo **1 número** ($n^0=1$).
- *Vectores*: llegamos al territorio con dirección. Piensa en la velocidad (no solo qué tan rápido vas, sino hacia dónde te diriges) o una fuerza (empujar algo en una dirección específica). En 3D, un vector necesita de 3 números, uno por cada eje ($x,y,z$). Generalizando este concepto, en $\mathbf{n}$ dimensiones se requieren **n números** para representarlo ($n^1=n$).

Ahora sí llegamos a nuestro protagonista, los *tensores*. Son las generalizaciones de los escalares y los vectores. Un tensor de rango 2 (como lo puede ser una matriz) necesita $n^2$ números para representarse en $n$ dimensiones. **¿Por qué?** Porque capturan relaciones más complejas, siendo entonces que una entrada afecta a múltiples salidas de manera interconectada.\
En términos simples, un tensor es una "máquina multilineal" que transforma un vector (o tensor) en otro, siguiendo dos reglas clave:
1. El resultado no depende de cómo elijas tus ejes de coordenadas (a la naturaleza no le interesa el cómo representamos las cosas).
2. Representa relaciones lineales entre múltiples componentes, no solo un número simple.

Por ejemplo, en 2D, un tensor de rango 2 necesita 4 números ($2^2=4$) para representarse (una matriz 2x2). En 3D, necesitaría 9 números ($3^2=9$, una matriz 3x3). Y para rangos superiores, ejemplo, rango 3 necesita $n^3$, rango 4 necesita $n^4$, y así sucesivamente.

### La Utilidad de los Tensores en la Computación
En nuestra era digital, los tensores no solo se quedan para la teoría, son el corazón de bibliotecas como TensorFlow o PyTorch (*Python*). En estas librerías, un tensor es esencialmente un arreglo multidimensional de números, perfecto para el manejo de datos complejos.
- **Representación de datos**: imágenes en color son tensores de rango 3 (altura, anchura, canales RGB); un video añade el tiempo (rango 4). En ML, los tensores permiten procesar lotes de datos de una vez (*batch processing*), acelerando el entrenamiento de modelos.
- **Operaciones eficientes**: las redes neuronales usan multiplicaciones de matrices (tensores de rango 2) para propagar señales. Por ejemplo, en una capa densa, la salida se define como:
$$
y = Wx + b
$$
donde $y$ es la salida, $W$ es la matriz de pesos, $x$ es el vector de entrada y $b$ es el vector de desplazamiento. Esto escala a convoluciones en CNNs, donde los tensores capturan patrones espaciales.

### ¿Por qué nos importan para el Machine Learning o el Deep Learning?
Los tensores nos permiten que las máquinas "vean" el mundo en múltiples dimensiones; en DL facilitan el *back-propagation* (ajuste de pesos) y el manejo de big data. Sin los tensores, procesar una red con millones de parámetros sería bastante caótico. En palabras más sencillas, los tensores son el pegamento que une los datos en crudo con predicciones inteligentes, haciendo posible desde recomendaciones de Netflix hasta diagnósticos médicos hechos con IA.

## Curiosidades del Mundo de la Física
Los tensores no tienen su origen en las computadoras; surgen de la física, donde capturan fenómenos que desafían la simplicidad.
Algunas de las curiosidades donde se tienen tensores son:
- **Conductividad en cristales**: en materiales como el grafito, la electricidad fluye mejor en ciertas direcciones. Un tensor de rango 2 modela esto, explicando que rotar el material cambia la resistencia sin alterar la física subyacente.
- **Momento de inercia**: ¿por qué un satélite gira de manera impredecible? Porque la inercia varía por eje. Un tensor de rango 2 relaciona la velocidad angular con el momento angular, previniendo giros inesperados en el espacio.
- **Estrés y deformación**: dentro del campo de la ingeniería, el estrés (fuerza por área) es un tensor de rango 2, ya que las fuerzas actúan en múltiples planos. En cristales piezoeléctricos (rango 3), apretar genera electricidad - similar al caso de los encendedores.
- **Relatividad General**: Einstein usó los tensores para describir la curvatura del espacio-tiempo. Un tensor de rango 2 captura cómo es que el movimiento en una dirección estira o comprime otras, explicando la gravedad como geometría curva.

### Ecuaciones básicas
Para ilustrar un tensor, supongamos la ley de Ohm en forma vectorial, considerando la corriente ($\vec{J}=\sigma\vec{E}$) y la conductividad ($\sigma$). Si un material es anisotrópico (la corriente no fluye igual en todas las direcciones, como lo es el grafito), entonces $\sigma$ es un tensor de rango 2, porque la corriente no siempre fluye en la misma dirección que el campo eléctrico.
$$
\vec{J} = \begin{pmatrix} \sigma_{xx} & \sigma_{xy} \newline \sigma_{yx} & \sigma_{yy} \end{pmatrix} \vec{E}
$$
Esto nos demuestra cómo cada una de las componentes de $\vec{E}$ contribuye a múltiples partes de $\vec{J}$.

## Construyendo sobre las bases
Ahora que hemos plantado las raíces, es decir, los tensores como extensiones de los números y los vectores, su rol en computación para manejar datos multidimensionales y, un vistazo a su herencia física, en nuestro siguiente post profundizaremos en aplicaciones específicas de ML/DL, como lo son las redes neuronales o los algoritmos de optimización. Por ahora, te dejo de tarea que reflexiones que los tensores no son monstruos o artefactos intimidantes, son herramientas que simplifican nuestro mundo complejo.
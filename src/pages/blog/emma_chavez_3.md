---
layout: "../../layouts/BlogPostLayout.astro"
title: "Tensores en Acción: Cómo Impulsan el Machine Learning y Deep Learning"
date: 2026-03-15T00:00:00 # YYYY-MM-DD
author: Emmanuel Chávez
image: { src: "/images/posts/WallPapers/ML_DL-Tensores.png", alt: "Tensores2" }
description: En esta segunda parte de nuestra saga sobre Machine Learning y Deep Learning, descubre cómo los tensores se convierten en el motor de las redes neuronales; desde multiplicaciones matriciales hasta convoluciones, backpropagation y entrenamiento eficiente con PyTorch y TensorFlow.
draft: false
category: math
---

En la [Parte 1](/blog/emma_chavez_2) de esta saga vimos qué son los tensores, cómo se relacionan con escalares y vectores, su origen en la física y por qué son perfectos para representar datos multidimensionales (imágenes, videos, lotes de ejemplos...). Ahora vamos al corazón práctico: *cómo se usan* realmente los tensores dentro de las **redes neuronales** para que las máquinas aprendan. Piensa en una red neuronal como una enorme fábrica de transformaciones. Los tensores son las piezas, las cintas transportadoras y los moldes al mismo tiempo. Vamos a ver las operaciones más importantes, con ejemplos sencillos y código ilustrativo.

## Operaciones básicas en redes neuronales
### Multiplicación Matricial: el motor básico de las capas densas
Casi toda capa densa (también conocida como *fully-connected*) hace esto:
$$
\mathbf{y} = \mathbf{W} \mathbf{x} + \mathbf{b}
$$
En este caso, $\mathbf{x}$ es el vector de entrada, $\mathbf{W}$ es la matriz de pesos (también llamado *bias*), $\mathbf{b}$ es el vector de sesgos y $\mathbf{y}$ es el vector de salida.\
Ahora imagina que tienes 32 imágenes de 784 píxeles ($28\times28$). El tensor de entrada, en este caso, tiene forma $(32, 784)$. Una capa densa con 128 neuronas tiene una matriz de pesos de forma $(784, 128)$. Si este ejemplo se replica en [PyTorch](https://pytorch.org/), se vería así:
```python
import torch

x = torch.randn(32, 784)      # batch de 32 ejemplos
W = torch.randn(784, 128)     # pesos
b = torch.randn(128)          # bias

y = x @ W + b
print(y.shape)  # (32, 128)
```
La operación `@` en PyTorch es la multiplicación matricial; se considera la estrella aquí, ya que acelera las GPUs, siendo un proceso eficiente.

### Broadcasting (difusión): magia que ahorra memoria y código
El *broadcasting* permite operar tensores de formas diferentes sin copiar datos. Reglas básicas (de derecha a izquierda):
- Dos dimensiones son compatibles si son iguales o una de ellas es 1.
- Si falta dimensión, se "rellena" con 1s a la izquierda.

Ejemplo básico:
```python
a = torch.tensor([[1., 2., 3.]])          # shape [1, 3]
b = torch.tensor([10., 20., 30.])         # shape [3]  -> se comporta como [1, 3]

print(a + b) # tensor([[11., 22., 33.]])  <- broadcasting automático
```
Algunas de las operaciones que se realizan en redes son:
- Sumar bias a cada ejemplo del batch
- Multiplicar por escalares (learning rate)
- Normalizar por media y desviación (BatchNorm)

Sin broadcasting tendríamos que escribir bucles o repetir tensores manualmente → código lento y con más memoria.

### Reshape, View, Permute: cambiar la forma sin alterar datos
Los datos se nos presentan de una manera, pero probablemente la red los necesita de otra.
- `.view()` / `.reshape()` : cambia la forma pero mantiene los elementos en el mismo orden dentro de la memoria.
- `.permute()` : reordena las dimensiones, lo que lo hace útil en imágenes.

A continuación presentamos un código de ejemplo:
```python
img = torch.randn(64, 3, 224, 224)  # lote de 64 imágenes RGB 224x224

# aplana la capa -> (64, 3*224*224 = 150528)
flattened = img.view(64, -1)     
# cambia el orden -> (B, C, H, W) a (B, H, W, C)
permuted = img.permute(0, 2, 3, 1)  
```

### Convoluciones: tensores 4D para visión por computadora
Un lote (batch) de imágenes tiene la forma `[batch, canales, alto, ancho]`, lo que nos da un tensor de rango 4, y un filtro convolucional tiene la forma `[salida, entrada, kernel_altura, kernel_ancho]`, también siendo de rango 4. Las convoluciones deslizan los filtros sobre las imágenes y realizan un producto punto (multiplicación elemento a elemento y una suma) entre los píxeles de la imagen y los pesos del filtro; ésto hace que se vuelva posible la detección de bordes, texturas, formas, etc.\
En PyTorch, tenemos el siguiente código:
```python
conv = torch.nn.Conv2d(in_channels=3, out_channels=64, kernel_size=3, padding=1)

# Implementando la salida
output = conv(imagenes) # entrada [64,3,224,224] -> salida [64,64,224,224]
```
Esta técnica es fundamental en las redes neuronales convolucionales (CNNs), tales como AlexNet, ResNet, EfficientNet, etc.

### Einsum: la navaja suiza de operaciones tensoriales
La función `einsum` (Einstein summation) permite escribir casi cualquier operación de tensores de forma compacta y legible. La regla es que las letras repetidas se suman (contradicción), y las letras únicas quedan en el resultado final (salida).\
Un ejemplo sería:
```python
# Multiplicación matricial clásica
C = torch.einsum('ik,kj->ij', A, B)     # A [i,k] x B [k,j] -> C [i,j]

# Producto punto entre dos vectores
dot = torch.einsum('i,i->', v1, v2)

# Atención escalada (simplificado) – muy usado en transformers
scores = torch.einsum('bhid,bhjd->bhij', Q, K) / sqrt(dk)
```
Einsum presenta ventaja de legibilidad y eficiencia, comparado a realizar `matmul + transpose + reshape` de forma manual.

### Retropropagación y Entrenamiento: los tensores y sus gradientes
Cuando realizamos el entrenamiento de una red neuronal, sucede lo siguiente:
1. **Forward pass**, donde los datos fluyen a través de la red en dirección a la salida, realizando las primeras predicciones.
2. **Cálculo de pérdida**, donde se compara la predicción con el valor real. Algunas de las funciones de pérdida más comunes son:
   - *Mean Squared Error (MSE)*: para regresión.
   - *Cross-Entropy Loss*: para clasificación.
3. **Backpropagation**, donde se calculan los gradientes de la pérdida con respecto a los parámetros de la red. Se realizan en todos los tensores que tienen `requires_grad=True` (en caso de utilizar PyTorch, esto se realiza de manera automática).
4. **Optimization**, donde se actualizan los parámetros de la red usando los gradientes calculados. Normalmente, suelen ser los pesos y los sesgos de las capas de la red.
$$
w \leftarrow w - \eta \cdot \nabla_w L
$$

## ¿Por qué los tensores son fundamentales en el aprendizaje profundo?
- Representan datos reales (imagen, audio, texto, etc.).
- Permiten operaciones vectorizadas ultra-rápidas en GPU.
- Facilitan el cálculo automático de gradientes (autograd).
- Operaciones como matmul, conv, einsum son las que escalan a modelos gigantes.

En la Parte 1 hablamos de la teoría y la física. Aquí vimos la acción práctica.\
¿Qué operación te parece más mágica o más confusa? Y recuerda: si quieres escribir sobre ML, IA o matemáticas aplicadas. ¡EngiBlog está abierto a colaboraciones!\
**Nos leemos en la siguiente entrega** 🚀
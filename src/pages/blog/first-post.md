---
layout: '../../layouts/BlogPostLayout.astro'
title: "Un Viaje de Resilencia: El Nacimiento de EngiBlog"
date: 2025-08-20T00:00:00 # YYYY-MM-DD
author: Emmanuel Chávez
image: { src: '/images/posts/WallPapers/first-post.png', alt: 'First Post' }
description: El proceso de desarrollo de un blog de ingeniería hecho con Astro para la divulgación de ciencias al alcance de todos.
draft: false
category: general
---

Durante más de un año, este blog ha sido un sueño contenido, aguardando pacientemente su momento de brillar. La vida, con su impredecible vaivén, interpuso obstáculos que no permitían su publicación: rigores de la licenciatura, problemas de salud, pérdidas de seres queridos que desgarraron mi corazón y un sinfín de retos personales. A pesar de ello, cada uno de los retos fue un recordatorio de mi compromiso con este proyecto. EngiBlog no sólo es un blog, es la culminación de innumerables horas de mucho esfuerzo, dedicación y anhelo para crear algo significativo. Este proyecto crea una nueva etapa, un nuevo comienzo. Representa el deseo ardiente de superar las adversidades y seguir construyendo y, no solo para sentirme productivo, sino para encontrar un propósito renovado.

Originalmente se concibió que este espacio fuera un blog personal, pero la reflexión me llevó a un lugar mejor: un lugar donde mentes afines, unidas por intereses comunes, puedan colaborar y compartir sus conocimientos. A lo largo de este proyecto, no solo consolidé las bases de Astro -la tecnología que da vida a este blog-, sino que también crecí como persona y como profesional. El código que sustenta este blog está en el siguiente repositorio: [EngiBlog](https://github.com/EngiBlog547/EngiBlog).

## Características del blog
Dada mi formación en ciencia, EngiBlog está equipado para abrazar la precisión y elegancia de las disciplinas técnicas. Una de sus características es el soporte para escritura en LaTeX, un lenguaje que da vida a las matemáticas y ciencias con claridad y belleza. Si deseas explorar el dominio, te recomiendo visitar el sitio web oficial de LaTeX [aquí](https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes).

### Ecuaciones
Por ejemplo, puedes escribir ecuaciones como esta:
```tex
$$
x=\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
```
Y en el blog se renderiza con precisión matemática de la siguiente forma:
$$
x=\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$
Otro ejemplo de ecuación podría ser:
```tex
$$
\begin{align*}
  \mathbf{\nabla} \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0}\\
  \mathbf{\nabla} \cdot \mathbf{B} &= 0\\
  \mathbf{\nabla} \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}\\
  \mathbf{\nabla} \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align*}
$$
```
Y dentro del blog se vería como:

\begin{align*}
  \mathbf{\nabla} \cdot \mathbf{E} &= \frac{\rho}{\epsilon_0}\newline
  \mathbf{\nabla} \cdot \mathbf{B} &= 0\newline
  \mathbf{\nabla} \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t}\newline
  \mathbf{\nabla} \times \mathbf{B} &= \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}
\end{align*}

## Únete a la Aventura: Colabora en EngiBlog
EngiBlog no es solo mi historia; es una invitación abierta a quienes comparten la pasión por el conocimiento y la creación. Si sientes el llamado a contribuir con tus ideas y dejar tu huella en este espacio, te damos la bienvenida con los brazos abiertos. A continuación, te presentamos dos formas de colaborar, diseñadas para adaptarse a tu estilo y preferencias:

### Colaboración a Través de GitHub
Para aquellos que se sienten cómodos navegando en el mundo del código, te invitamos a unirte al proyecto directamente en nuestro repositorio:

1. **Haz un fork del repositorio** de EngiBlog en GitHub.
2. **Crea una rama** con un nombre que refleje el título o tema de tu artículo.
3. **Escribe tu post** en formato Markdown (.md), siguiendo el estilo de la plantilla disponible en `(src/pages/blog/first-post.md)`
4. **Envía un Pull Request** para que revisemos tu contribución con atención y cuidado.

### Colaboración a Través de correo electrónico
Si prefieres una vía más directa, puedes compartir tu propuesta sin necesidad de interactuar con el código:

1. **Redacta un correo** que incluya el título de tu artículo, la categoría a la que pertenece y el contenido completo del artículo.
2. En el *asunto*, utiliza el prefijo: "**Propuesta de artículo**:" para facilitar su identificación.
3. Envía tu propuesta a nuestro [contacto oficial](mailto:engiblog547@gmail.com).

📌 **Nota**: Asegúrate de que tu contenido sea original, bien estructurado y refleje tu voz única. Si sospechas que tu idea podría coincidir con un artículo existente, contáctanos para discutir mejoras o nuevas perspectivas. Queremos que cada contribución brille con autenticidad.

EngiBlog es más que un blog; es un espacio donde las ideas cobran vida y las mentes curiosas se encuentran. Únete a esta comunidad y seamos, juntos, arquitectos de un conocimiento que inspire y transforme.
# Despliegue Continuo usando AWS Code Pipeline y S3

Este repositorio contiene los archivos de código utilizados en este video de YouTube.

## En Resumen

El código de un juego está alojado en GitHub. Creamos un bucket S3 para el alojamiento de un sitio web estático, luego creamos un pipeline de despliegue continuo (usando AWS Code Pipeline) para desplegar automáticamente el código cada vez que se realizan cambios.

## El Juego

Un simple juego de memoria. El usuario hace clic en dos cartas (imágenes de memes) para intentar hacerlas coincidir. Si hay una coincidencia, las cartas desaparecen del tablero. Si no hay coincidencia, las cartas se vuelven a voltear a su lado en blanco para que el usuario pueda intentarlo de nuevo.

El juego consiste en HTML, CSS y JavaScript.

### Ideas para características adicionales:

- Un mecanismo de puntuación
- Un temporizador
- Agregar cartas adicionales
- Capacidades multijugador para poder comparar puntuaciones

## El Entorno de Despliegue

El código será desplegado y alojado en S3.

## El Pipeline de Despliegue

El pipeline se crea utilizando AWS Code Pipeline. El pipeline extrae el código de GitHub y lo despliega en S3 cada vez que se detecta un cambio en el código.

## Costo

Todos los servicios utilizados son elegibles para el nivel gratuito de AWS. Sin embargo, se incurrirán cargos en algún momento, por lo que se recomienda que se apaguen los recursos después de completar este tutorial.

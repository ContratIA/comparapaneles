---
title: Cuántos kWh produce 1 kWp de placas solares en España: datos de PVGIS para 12 ciudades
description: Producción anual de 1 kWp en 12 ciudades españolas según PVGIS: de 1.699 kWh en Málaga a 1.170 en Bilbao, y cómo cambia con la orientación.
date: 2026-10-30
updated: 2026-10-30
photo: cuanto-produce-1-kwp-espana
related: produccion-solar-mes-a-mes-madrid-barcelona,leer-factura-luz-dimensionar-instalacion,si-compensa-instalar-placas-2026
---

Antes de pedir presupuestos conviene saber cuánta electricidad da cada kilovatio pico (kWp) que se instala. Esa cifra, los kWh anuales por kWp, es la que usan todos los cálculos de ahorro, y es también la que más se maquilla en las ofertas comerciales. Aquí tienes los datos de PVGIS, la herramienta de la Comisión Europea (Joint Research Centre), para 12 ciudades. Los consulté el 30 de octubre de 2026.

## Qué es un kWp y por qué se usa

Un kWp es la potencia que da un panel, o un conjunto de paneles, en condiciones de laboratorio normalizadas. Un panel de 430 W son 0,43 kWp. En la práctica la instalación rara vez llega a esa potencia: hay temperatura, suciedad, cableado, el inversor y sombras. Por eso se mide la producción real a lo largo de un año completo y se expresa en kWh por cada kWp instalado.

Con ese número se puede comparar una instalación de 3 kWp en Sevilla con otra de 4 kWp en Bilbao sin tener que fiarse del folleto del fabricante.

## Cómo se han calculado los datos

Todas las ciudades usan los mismos parámetros, para que la comparación sea justa:

- Potencia instalada: 1 kWp de silicio cristalino.
- Pérdidas del sistema: 14 %.
- Inclinación: 35° y orientación sur (azimut 0).
- Base de radiación: PVGIS-SARAH3, años 2005 a 2023.

Los 35° y el sur son valores que fijé para todas, no el óptimo de cada ciudad. Con otra inclinación u orientación los números cambian, como verás más abajo.

## Producción anual de 1 kWp

| Ciudad | kWh al año | Desviación típica entre años (kWh) |
|---|---:|---:|
| Málaga | 1.698,82 | 44,77 |
| Sevilla | 1.671,73 | 40,06 |
| Valencia | 1.630,90 | 50,25 |
| Murcia | 1.630,23 | 52,63 |
| Madrid | 1.619,37 | 50,73 |
| Zaragoza | 1.616,15 | 45,71 |
| Las Palmas de Gran Canaria | 1.599,02 | 43,09 |
| Palma | 1.598,22 | 45,51 |
| Barcelona | 1.569,52 | 44,46 |
| Valladolid | 1.559,86 | 41,11 |
| A Coruña | 1.288,58 | 38,32 |
| Bilbao | 1.170,05 | 38,20 |

La desviación típica (SD_y en PVGIS) indica cuánto se aleja, de media, la producción de un año cualquiera respecto a la media de la serie.

## Qué se ve en la tabla

- **La diferencia entre el sur y el Cantábrico es grande.** Málaga produce 528,77 kWh más que Bilbao con la misma instalación: un 45 % más.
- **El centro y el este quedan muy juntos.** Valencia, Murcia, Madrid y Zaragoza están dentro de un margen de 14,75 kWh, menos del 1 %.
- **Madrid supera a Barcelona** por 49,85 kWh al año, un 3,2 %.
- **Un año concreto puede salir distinto de la media.** La desviación típica va del 2,4 % de la media en Sevilla al 3,3 % en Bilbao. Es una estimación, no una garantía.

Si en un presupuesto te prometen 2.000 kWh por kWp en Madrid o en Valencia, pide que te enseñen de dónde sale: la media de PVGIS para esas ciudades, con orientación sur y 35°, queda en torno a 1.620-1.630.

## Cuánto cambia con la orientación

Hice la misma consulta para Madrid variando solo la orientación y la inclinación (14 % de pérdidas, misma base de datos):

| Madrid, 1 kWp | kWh al año | Frente al sur a 35° |
|---|---:|---:|
| Sur, 35° | 1.619,37 | – |
| Óptimo calculado por PVGIS (37°, orientación −5°) | 1.620,70 | +0,1 % |
| Sur, 20° | 1.564,77 | −3,4 % |
| Este, 35° | 1.282,90 | −20,8 % |
| Oeste, 35° | 1.244,67 | −23,1 % |
| Norte, 35° | 792,77 | −51,0 % |

Dos conclusiones útiles. Primera: no hace falta afinar al grado, porque el óptimo apenas mejora el sur a 35°. Segunda: un tejado orientado al este o al oeste pierde alrededor de una quinta parte, algo que se puede compensar con más paneles si hay sitio, pero que hay que contar al calcular la amortización. El norte, en la práctica, no sale a cuenta.

## Un ejemplo con cuentas propias

Multiplicar la producción de 1 kWp por la potencia que quieres instalar da una primera idea. Es un cálculo lineal mío, no un dato de PVGIS, y no tiene en cuenta sombras ni la potencia del inversor:

| Instalación de 4 kWp | kWh al año aproximados |
|---|---:|
| Madrid | 6.477 |
| Barcelona | 6.278 |
| Bilbao | 4.680 |

La diferencia entre Madrid y Bilbao, casi 1.800 kWh al año con la misma instalación, es energía que en Bilbao simplemente no se produce. No se arregla poniendo mejores paneles.

## Lo que estos datos no te dicen

La producción no es lo mismo que el ahorro. Para saber cuánta de esa energía consumirías tú, necesitas tu consumo a lo largo del día y del año, y eso no sale de PVGIS. Tus facturas de los últimos doce meses son el punto de partida: lo explicamos en [cómo leer la factura de la luz para dimensionar la instalación](/blog/leer-factura-luz-dimensionar-instalacion/). Para ver cómo cambia la producción mes a mes, mira los datos de [Madrid y Barcelona](/blog/produccion-solar-mes-a-mes-madrid-barcelona/).

## Cómo sacar el dato de tu tejado

1. Entra en PVGIS y marca tu dirección en el mapa.
2. Elige «Conectado a la red», potencia pico de 1 kWp y pérdidas del sistema que quieras suponer.
3. Indica la inclinación y la orientación reales de tu tejado, o pulsa la opción de optimizar.
4. Anota el valor de producción anual (E_y) y úsalo en la [calculadora de ahorro](/calculadora-ahorro-placas-solares/), en el campo de producción por kWp.

## Cómo funciona PVGIS y qué suposiciones lleva

PVGIS calcula la producción a partir de datos históricos de radiación solar medidos por satélite y de las pérdidas del sistema que tú le indicas. No sabe si tu tejado tiene sombras de un edificio cercano, si los paneles se ensucian o si el inversor está sobredimensionado. Es un buen dato de partida y no sustituye a un estudio de sombras en tu tejado.

Tampoco incluye la degradación de los paneles. La producción baja un poco cada año. En la [calculadora](/calculadora-ahorro-placas-solares/) suponemos un 0,5 % anual, un supuesto nuestro: comprueba la garantía de rendimiento del fabricante del panel que te ofrezcan.

## Tres errores frecuentes al usar estos datos

- **Confundir kWp con kW del inversor.** La potencia pico de los paneles y la potencia nominal del inversor son cosas distintas, y las ofertas a veces mezclan ambas. Pregunta por los kWp de paneles.
- **Usar los datos de otra ciudad.** Una instalación en Valladolid produce unos 60 kWh por kWp menos que una en Madrid; en Bilbao, 450 menos. Usa el dato de tu zona.
- **Aplicar el óptimo a un tejado que no lo es.** El 1.619 de Madrid vale para orientación sur y 35°. Si tu tejado mira al este, ajusta con la tabla de orientaciones de arriba.

## Fuentes

- [PVGIS, Comisión Europea (Joint Research Centre)](https://re.jrc.ec.europa.eu/pvg_tools/es/), consulta del 30 de octubre de 2026 con la API v5.3.
- Consulta usada: `https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=LAT&lon=LON&peakpower=1&loss=14&angle=35&aspect=0&outputformat=json`

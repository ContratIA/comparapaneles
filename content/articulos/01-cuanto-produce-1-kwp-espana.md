---
title: "Cuántos kWh produce 1 kWp de placas solares en España: datos PVGIS de 12 ciudades"
description: "Producción anual de 1 kWp en 12 ciudades españolas según PVGIS 5.3 de la Comisión Europea: de 1.699 kWh en Málaga a 1.170 kWh en Bilbao."
slug: cuanto-produce-1-kwp-espana
date: 2026-10-30
actualizado: 2026-10-30
foto: pv-cubierta.jpg
foto_alt: "Instalación fotovoltaica sobre una cubierta"
foto_credito: "Marta Victoria, CC BY-SA 4.0, vía Wikimedia Commons"
---

Antes de pedir presupuestos conviene saber cuánta electricidad puede dar cada kilovatio pico (kWp) que instales. Estos son los datos de PVGIS, la herramienta de la Comisión Europea (Joint Research Centre), para 12 ciudades españolas. Los he consultado el 30 de octubre de 2026.

## Cómo se han calculado

Todas las ciudades usan los mismos parámetros, para que la comparación sea justa:

- Potencia instalada: 1 kWp de silicio cristalino.
- Pérdidas del sistema: 14 %.
- Inclinación: 35°.
- Orientación: sur (azimut 0).
- Base de radiación: PVGIS-SARAH3, años 2005 a 2023.

Los 35° y el sur son los valores que he fijado para todas, no el óptimo de cada ciudad. Con otra inclinación u orientación los números cambian.

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

Fuente: PVGIS 5.3, consulta del 30/10/2026. La desviación típica (SD_y en PVGIS) indica cuánto se aleja la producción de un año cualquiera de la media.

## Qué se ve en la tabla

- **La diferencia entre el sur y el Cantábrico es grande.** Málaga produce 528,77 kWh más que Bilbao con la misma instalación, un 45 % más.
- **El centro y el este quedan muy juntos.** Valencia, Murcia, Madrid y Zaragoza están dentro de un margen de 14,75 kWh (menos del 1 %).
- **Madrid supera a Barcelona** por 49,85 kWh al año (un 3,2 %).
- **Un año concreto puede salir distinto de la media.** La desviación típica va del 2,4 % de la media en Sevilla al 3,3 % en Bilbao. Es una estimación, no una garantía.

## Un ejemplo con números propios

Si multiplicas la producción de 1 kWp por la potencia que quieres instalar tienes una primera idea. Es un cálculo lineal mío, no un dato de PVGIS, y no tiene en cuenta sombras ni la potencia del inversor:

| Instalación de 4 kWp | kWh al año aproximados |
|---|---:|
| Madrid | 6.477 |
| Barcelona | 6.278 |
| Bilbao | 4.680 |

## Lo que estos datos no te dicen

La producción no es lo mismo que el ahorro. Para saber cuánta de esa energía consumirías tú, necesitas tu consumo a lo largo del día y del año, que no sale de PVGIS. Tus facturas de los últimos doce meses son un buen punto de partida.

## Fuentes

- [PVGIS, Comisión Europea (JRC)](https://re.jrc.ec.europa.eu/pvg_tools/es/)
- Consulta usada: `https://re.jrc.ec.europa.eu/api/v5_3/PVcalc?lat=LAT&lon=LON&peakpower=1&loss=14&angle=35&aspect=0&outputformat=json`

Foto: Marta Victoria, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), vía [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rooftop_solar_photovoltaic_installation.jpg).

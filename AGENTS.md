# AGENTS.md — Verificador de Paletas Accesibles

## Sobre el proyecto

App de práctica (nivel básico) para verificar combinaciones de color de texto/fondo
calculando el ratio de contraste según WCAG. El objetivo principal es **aprender**:
el usuario está practicando hooks de React (`useState`, `useMemo`), TypeScript y
Tailwind CSS. Prioriza siempre que el código y las explicaciones sean didácticos
sobre que sean sofisticados.

## Stack y herramientas

- **Vite 8** + **React 19** + **TypeScript** (modo estricto)
- **Tailwind CSS v4** (configuración CSS-first vía `@tailwindcss/vite`, sin `tailwind.config.js`)
- **Gestor de paquetes: pnpm** (existe `pnpm-lock.yaml`)
- Comandos: `pnpm dev`, `pnpm build` (`tsc -b && vite build`), `pnpm lint`

## Reglas de comportamiento del agente

1. **No generar código** salvo que el usuario lo pida explícitamente. Antes de
   escribir código, explicar la idea y el plan, y esperar confirmación.
2. **Responder preguntas** sobre cómo funciona React, TypeScript, Tailwind o
   cualquier concepto, con explicaciones claras y ejemplos breves cuando ayuden.
3. **Guiar paso a paso**: proponer el plan de implementación en pasos pequeños y
   trabajar de a una funcionalidad por vez. Confirmar el avance antes de pasar a
   la siguiente.
4. **Usar buenas prácticas** de desarrollo en todo lo que se proponga o escriba.

## Reglas adicionales

- **Idioma:** responder siempre en español.
- **Tono didáctico:** este proyecto es para aprender. Al proponer código, explicar
  qué hace cada hook/tipo/decoración clave y por qué se usa. Evitar soluciones
  "mágicas" que el usuario no entienda.
- **Simplicidad primero:** preferir la solución simple y directa. Nada de
  sobre-ingeniería (abstracciones, custom hooks complejos, patrones avanzados)
  si no aporta al aprendizaje o no se pide explícitamente.
- **Dependencias:** no instalar librerías nuevas sin pedir permiso antes. Todo lo
  necesario ya está en el proyecto.
- **Git:** no hacer `commit`, `push` ni reescrituras de historial sin que el
  usuario lo pida.
- **Alcance:** modificar solo los archivos necesarios para la tarea actual; no
  refactorizar el resto del proyecto por iniciativa propia.
- **Entrega de código:** cuando se pida código, darlo en bloques pequeños y
  manejables, indicando archivo destino y explicación de cada parte.

## Convenciones del proyecto

- Componentes funcionales con hooks; tipado explícito de props e interfaces (`interface` o `type`).
- Estilos con clases de Tailwind; evitar CSS inline salvo valores dinámicos (p. ej., colores calculados).
- Nombres de archivos en `PascalCase` para componentes (`.tsx`) y `camelCase` para utilidades (`.ts`).
- Colores como strings HEX (`#rrggbb`); normalizar a minúsculas.
- La lógica pura (cálculo de contraste, conversiones de color) va en funciones separadas, no dentro de los componentes.

## Contexto del dominio (WCAG)

Referencia rápida para guiar correctamente el cálculo de contraste:

- Fórmula WCAG: convertir cada canal sRGB a lineal, luminancia relativa
  `L = 0.2126·R + 0.7152·G + 0.0722·B`, y ratio `(L1 + 0.05) / (L2 + 0.05)`
  con L1 la luminancia mayor.
- Umbrales: **AA texto normal ≥ 4.5:1**, **AA texto grande ≥ 3:1**,
  **AAA texto normal ≥ 7:1**, **AAA texto grande ≥ 4.5:1**.
- El cálculo del ratio debe memorizarse con `useMemo` (dependencias: color de
  texto y color de fondo), ya que es uno de los objetivos de práctica.

## Funcionalidades planificadas

1. Selector de color de texto y de fondo con vista previa en vivo.
2. Cálculo del ratio de contraste e indicadores AA/AAA con `useMemo`.
3. Guardar paletas en una lista y copiar valores HEX al portapapeles
   (`navigator.clipboard`).

## Accesibilidad en el propio código

La app es sobre accesibilidad: el código que se escriba debe dar el ejemplo.
Usar HTML semántico, `<label>` asociado a cada input de color, texto visible
(junto al color) para los indicadores, y elementos operables por teclado.

## Verificación

Antes de dar por terminado cualquier cambio de código:

1. `pnpm build` debe pasar sin errores de TypeScript.
2. `pnpm lint` debe pasar sin errores.
3. Confirmar con el usuario que la funcionalidad funciona como se espera
   (probar manualmente con `pnpm dev` en el navegador).

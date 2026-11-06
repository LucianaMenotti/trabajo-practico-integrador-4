## Diferencias importantes

- Compilar y transpilar: compilar es traducir código de un lenguaje a otro. Transpilar es un caso particular: traducir entre dos lenguajes de nivel similar, como TypeScript y JavaScript. (sección 01)
- Instalación global y local: la global se instala una vez en la computadora y es la misma versión para todos los proyectos. La local se instala en node_modules, queda en devDependencies y cada proyecto tiene su versión. Se recomienda la local. (sección 02)
- src/ y dist/: src/ tiene lo que escribimos. dist/ tiene lo que se ejecuta. Todo lo que apunte a ejecutar el proyecto va a dist/ y en .js. (sección 03)
- CommonJS y ESM: CommonJS se usa con "type": "commonjs" y await solo se puede usar dentro de funciones async. ESM se usa con "type": "module" y exige la extensión en los imports relativos. (secciones 04 y 07)
- Windows y Linux: Windows no distingue mayúsculas de minúsculas en los nombres de archivo y Linux sí. Un import mal escrito funciona en Windows y falla en Linux. (sección 04)

## Palabras y conceptos clave

- Type stripping: quitar tipos. Es lo que hace Node con un archivo .ts. Borra las anotaciones de tipos y ejecuta el JavaScript que queda. (secciones 01 y 05)
- Anotación de tipo: tipo que se escribe a mano, por ejemplo number en let edad: number. (sección 06)
- Inferencia de tipos: TypeScript deduce el tipo a partir del valor inicial. (sección 06)
- `export {}`: línea que se pone al inicio de cada archivo de ejemplo. Evita que TypeScript lo trate como script global y dé error de redeclaración. (sección 06)
- Scripts del proyecto: dev ejecuta con recarga y no verifica tipos. check verifica tipos sin generar archivos. build verifica tipos y genera dist/. start ejecuta la versión compilada. (sección 03)
- `@types/node`: definiciones de tipos de Node.js. Hacen falta dos pasos: instalar el paquete y declararlo en el tsconfig con "types": ["node"]. (sección 02)
- npx: ejecuta comandos de los paquetes instalados en el proyecto. Si no está instalado TypeScript, npx tsc ofrece un paquete que no es TypeScript. (sección 02)
- `-D`: abreviatura de --save-dev. Indica que el paquete es una herramienta de desarrollo y no algo que el programa necesita para funcionar. (sección 02)
- LTS: versiones de Node.js con soporte a largo plazo. La guía recomienda las 24 y 26. (secciones 01 y 03)
- `strict`: activa todas las verificaciones estrictas. Bloquea el any implícito, el null sin verificar y las propiedades de clase sin inicializar. (sección 04)
- `noEmitOnError`: no genera archivos si hay errores de tipos. (sección 04)
- `target` y `module`: target es la versión de JavaScript que se genera. module es el sistema de módulos de la salida. (sección 04)
- `rootDir` y `outDir`: rootDir es la carpeta del código fuente. outDir es la carpeta del JavaScript generado. (sección 04)
- `unknown`: acepta cualquier valor, pero obliga a verificar el tipo antes de usarlo. Se usa en lugar de any cuando no se conoce el tipo. (sección 06)
- `null` y `undefined`: con strict no se pueden asignar a cualquier tipo. Hay que verificar el valor antes de usarlo. (sección 06)
- Tupla: array con cantidad y tipo fijos en cada posición, por ejemplo [string, number]. (sección 06)
- `readonly`: propiedad de solo lectura. (sección 08)
- `async`, `await` y `Promise`: una función async siempre devuelve una Promise. await espera su resultado. (sección 07)
- Source map (`.js.map`): archivo que relaciona el .js con el .ts. Con --enable-source-maps, los errores de ejecución apuntan al .ts original. (secciones 03 y 04)

Fuente: Guía teórica-práctica, Unidad 4: Introducción a TypeScript, Instituto Politécnico Formosa.

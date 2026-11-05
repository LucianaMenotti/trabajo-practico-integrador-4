//Tema 3: Tipos básicos

// src/06-tipos.ts
export {};

// Primitivos
let nombre: string = "Luciana";
let edad: number = 19;
let activo: boolean = true;

// Arrays
let numeros: number[] = [1, 2, 3];
let nombres: string[] = ["Luciana", "Alejandra"];

console.log(numeros);
console.log(nombres);

// Tuplas: cantidad y tipo fijos en cada posición
let usuario: [string, number] = ["Luciana", 19];

console.log(usuario);

// Union: uno u otro tipo
let id: string | number = "ABC123";
id = 456;

console.log(id);

// Null: con strict, hay que declararlo explícitamente
let opcional: string | null = null;

if (opcional !== null) {
  console.log(opcional); // Correcto: dentro del if es string
}

// any: desactiva la verificación (evitar)
let cualquierCosa: any = "texto";
cualquierCosa = 42;
cualquierCosa.metodoQueNoExiste(); // Sin error al escribir; falla al ejecutar

console.log(cualquierCosa);
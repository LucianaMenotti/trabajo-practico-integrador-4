//## Tema 4: Funciones

export {};

//¿Cómo se indican los tipos de los parámetros?

function sumar(a: number, b: number): number {
  return a + b;
}

console.log(sumar(2, 3));

//¿Cómo se indica el tipo de retorno?

function crear(nombre: string): void {
  console.log(`Usuario ${nombre}`);
}

crear("Luciana");

//¿Qué es un parámetro opcional?

function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}

console.log(saludar("Luciana"));
console.log(saludar("Luciana", "Menotti"));

//¿Qué es un parámetro por defecto?

function crearConRol(nombre: string, rol: string = "USER"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}

crearConRol("Luciana");
crearConRol("Luciana", "ADMIN");

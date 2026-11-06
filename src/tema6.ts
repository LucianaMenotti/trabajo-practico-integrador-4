// Tema 6: Enums y tipos literales

export {};

// ¿Qué es un enum?

enum Estado {
  PENDIENTE = "PENDIENTE",
  COMPLETADO = "COMPLETADO",
  CANCELADO = "CANCELADO",
}

let estadoTarea: Estado = Estado.PENDIENTE;

console.log(estadoTarea);
console.log(Estado.COMPLETADO);

// ¿Qué es un tipo literal?

type Rol = "ADMIN" | "USER" | "GUEST";

let rol: Rol = "ADMIN";

console.log(rol);

// ¿En qué se parecen y en qué se diferencian?

let estadoActual: Estado = Estado.CANCELADO;
let rolActual: Rol = "GUEST";

console.log(estadoActual);
console.log(rolActual);
console.log(typeof Estado);

// ¿En qué situaciones se puede usar cada uno?

interface Usuario {
  nombre: string;
  rol: Rol;
}

const usuario: Usuario = { nombre: "Luciana Menotti", rol: "USER" };

console.log(usuario);

const Prioridad = {
  ALTA: "ALTA",
  MEDIA: "MEDIA",
  BAJA: "BAJA",
} as const;

type Prioridad = (typeof Prioridad)[keyof typeof Prioridad];

let prioridadTarea: Prioridad = Prioridad.ALTA;

console.log(prioridadTarea);

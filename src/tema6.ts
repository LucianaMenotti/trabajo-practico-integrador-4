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

console.log(typeof Estado);

// ¿En qué situaciones se puede usar cada uno?

const Prioridad = {
  ALTA: "ALTA",
  MEDIA: "MEDIA",
  BAJA: "BAJA",
} as const;

type Prioridad = (typeof Prioridad)[keyof typeof Prioridad];

let prioridadTarea: Prioridad = Prioridad.ALTA;

console.log(prioridadTarea);

//Tema 5: Interfaces y type

export {};

//¿Qué es una interfaz y para qué sirve?

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const usuario: Usuario = {
  id: 1,
  nombre: "Luciana Menotti",
  email: "luciana@example.com",
};

console.log(usuario);

//¿Qué es un type?

type ID = string | number;
type Rol = "ADMIN" | "USER" | "GUEST";

const id: ID = "ABC123";
const rol: Rol = "ADMIN";

console.log(id);
console.log(rol);

//¿Cómo se declara una propiedad opcional?

interface Perfil {
  nombre: string;
  edad?: number;
}

const perfilSinEdad: Perfil = { nombre: "Luciana Menotti" };
const perfilConEdad: Perfil = { nombre: "Luciana Menotti", edad: 25 };

console.log(perfilSinEdad);
console.log(perfilConEdad);

//¿Cuándo conviene usar cada uno?

interface Empleado extends Usuario {
  legajo: string;
  salario: number;
}

type EmpleadoCompleto = Empleado & {
  departamento: string;
};

const empleado: Empleado = {
  id: 2,
  nombre: "Luciana Menotti",
  email: "luciana@example.com",
  legajo: "A-100",
  salario: 500000,
};

const empleadoCompleto: EmpleadoCompleto = {
  ...empleado,
  departamento: "Sistemas",
};

console.log(empleado);
console.log(empleadoCompleto);

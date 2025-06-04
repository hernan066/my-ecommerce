# 🛒 My E-commerce API

Este proyecto es una API desarrollada con Node.js, Express y TypeScript siguiendo principios de Clean Architecture, TDD y SOLID. La estructura es un **monorepo** con separación clara entre dominio y aplicaciones.

---

## 🧱 Estructura del Proyecto

```
my-ecommerce/
├── apps/
│   └── backend/           # Aplicación Express
│       ├── src/           # Código fuente principal
│       ├── test/          # Tests específicos del backend
├── domain/                # Lógica de dominio (entidades, casos de uso, servicios)
├── .husky/                # Hooks de Git
├── .yarn/                 # Configuración de Yarn (v4)
├── vitest.config.ts       # Configuración de tests
├── tsconfig.json          # Configuración de TypeScript
├── docker-compose.yml     # (opcional) Configuración para levantar el entorno
```

---

## 🚀 Scripts principales

Desde la raíz del proyecto:

```bash
yarn dev       # Levanta el servidor backend en desarrollo
yarn build     # Compila el código TypeScript
yarn start     # Ejecuta el servidor desde /dist
yarn test      # Ejecuta los tests con Vitest
```

---

## 🧪 Testing

- Usamos **Vitest** como framework principal.
- Las pruebas están ubicadas en `apps/backend/test/**`.
- Primer test implementado: `/ping` para verificar estado del servidor.

---

## 📦 Tecnologías y Herramientas

- Node.js + Express
- TypeScript
- Yarn Workspaces (Berry v4)
- ESLint + Prettier
- Vitest + Supertest
- Husky + lint-staged (pre-commits)
- Clean Architecture
- TDD + SOLID Principles

---

## 📌 Estado Actual

- [x] Setup inicial
- [x] Primer endpoint `/ping`
- [x] Test funcional del endpoint
- [ ] Implementación de dominio de productos
- [ ] Conexión con MongoDB

---

## 🧠 Referencias

Este proyecto sigue prácticas recomendadas de los libros:

- **Clean Code** – Robert C. Martin
- **Clean Architecture** – Robert C. Martin
- **Test-Driven Development by Example** – Kent Beck

---

## 🧑‍💻 Autor

Desarrollado por Hernán Moneta.  
Curso académico con enfoque en arquitectura limpia + TDD.

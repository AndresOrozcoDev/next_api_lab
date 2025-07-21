# 🚀 Next JS RestApi Laboratory

<p align="center">
    <img src="https://img.shields.io/badge/Next.js-15.4.2-black?logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-9.x-4B32C3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/OpenAI-5.10.1-412991?logo=openai&logoColor=white" />
    <img src="https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/@types/react-19.x-blue?logo=react&logoColor=white" />
    <img src="https://img.shields.io/badge/@types/node-20.x-43853D?logo=node.js&logoColor=white" />
    ![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
    ![Status](https://img.shields.io/badge/status-in%20development-yellow)
    ![License](https://img.shields.io/badge/license-MIT-blue)
</p>



Laboratorio experimental usando **Next.js v15** para explorar y demostrar el desarrollo de servicios HTTP (`/api`) con soporte para despliegue serverless en **Vercel**. Ideal para prácticas de arquitectura ligera y conexión con otros servicios (como OpenAI).

---

## 🔗 Demo en Vivo

Puedes ver el laboratorio funcionando en producción aquí:

👉 [Next JS API Lab](api-lab-murex.vercel.app)

Desplegado automáticamente con [Vercel](https://vercel.com), utilizando funciones serverless para los endpoints API.

---

## 📡 Endpoints Disponibles

Actualmente, esta API expone los siguientes endpoints públicos en formato JSON:

### 🗺️ Ubicación (Colombia)

| Método | Endpoint                          | Descripción                                                                 |
|--------|-----------------------------------|-----------------------------------------------------------------------------|
| GET    | `/api/location/states`           | Retorna todos los departamentos de Colombia.                               |
| GET    | `/api/location/cities`           | Retorna todas las ciudades y municipios del país.                          |
| GET    | `/api/location/states/:id`       | Retorna las ciudades y municipios del departamento especificado por `:id`. |

### 🤖 OpenAI Chat

| Método | Endpoint                 | Descripción                                                                 |
|--------|--------------------------|-----------------------------------------------------------------------------|
| POST   | `/api/openai/message`    | Envía un mensaje al modelo GPT y retorna una respuesta generada por IA.    |

> [!WARNING]
> Actualmente **no requieren headers especiales**. Todas las respuestas están en formato `application/json`.

---

## 🛠️ Requerimientos

- [Node](https://nodejs.org/)
- [Git](https://git-scm.com/)

## 💻 Ejecucion local

Clonar el repositorio
```bash
    git clone https://github.com/AndresOrozcoDev/next_api_lab.git
    cd next_api_lab
```

Instalar las dependencias
```bash
    npm install
```

Ejecutar el servidor
```bash
    npm run dev
```

---

## 👨‍💻 Autor

Desarrollado con 💙 por [Andrés Orozco](https://github.com/AndresOrozcoDev)

- 📬 [andresorozcodev@gmail.com](mailto:andresorozcodev@gmail.com)
- 🌐 [LinkedIn](https://www.linkedin.com/in/andresorozcodev)

---

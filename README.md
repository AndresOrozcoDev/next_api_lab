# 🚀 Next JS RestApi Laboratory

![Next.js](https://img.shields.io/badge/Next.js-v15.4.2-black?logo=next.js)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

Laboratorio experimental usando **Next.js v15** para explorar y demostrar el desarrollo de servicios HTTP (`/api`) con soporte para despliegue serverless en **Vercel**. Ideal para prácticas de arquitectura ligera y conexión con otros servicios (como OpenAI).

---

## 🔗 Demo en Vivo

Puedes ver el laboratorio funcionando en producción aquí:

👉 [Next JS API Lab](api-lab-murex.vercel.app)

Desplegado automáticamente con [Vercel](https://vercel.com), utilizando funciones serverless para los endpoints API.

---

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

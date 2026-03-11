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
    <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel" />
    <img src="https://img.shields.io/badge/status-in%20development-yellow" />
    <img src="https://img.shields.io/badge/license-MIT-blue" />
</p>



Experimental laboratory using **Next.js v15** to explore and demonstrate the development of HTTP services (`/api`) with support for serverless deployment on **Vercel**. Ideal for lightweight architecture practices and integration with other services (like OpenAI).

---

## 🔗 Live Demo

You can see the lab running in production here:

👉 [Next JS API Lab](api-lab-murex.vercel.app)

Automatically deployed with [Vercel](https://vercel.com), using **serverless** functions for the API endpoints.

---

## 📡 Available Endpoints

This API currently exposes the following public endpoints in JSON format:

### 🗺️ Location (Colombia)

| Method | Endpoint                          | Description                                                                 |
|--------|-----------------------------------|-----------------------------------------------------------------------------|
| GET    | `/api/v#/location/states`           | Returns all departments of Colombia.                               |
| GET    | `/api/v#/location/cities`           | Returns all cities and municipalities in the country.                          |
| GET    | `/api/v#/location/states/:id`       | Returns the cities and municipalities of the department specified by `:id`. |

> [!WARNING]
> Protected endpoints require the `x-api-key` header. All responses are in `application/json` format.

---

## 🛠️ Requirements

- [Node](https://nodejs.org/)
- [Git](https://git-scm.com/)

## 💻 Local Setup

Clone the repository
```bash
    git clone https://github.com/AndresOrozcoDev/next_api_lab.git
    cd next_api_lab
```

Install dependencies
```bash
    npm install
```

Run the development server
```bash
    npm run dev
```

## 📁 Project Structure

```bash
next_api_lab/
├── app/
│   ├── api/
│   │   ├── v1/
│   │   │   └── location/
│   │   │       ├── cities/
│   │   │       │   └── route.ts
│   │   │       └── states/
│   │   │           └── route.ts
│   │   └── v2/
│   │       └── location/
│   │           ├── cities/
│   │           │   └── route.ts
│   │           └── states/
│   │               └── route.ts
│   ├── lib/
│   │   └── location.service.ts
│   ├── types/
│   │   └── data.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── mock.json
├── middleware.ts
├── next.config.ts
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

## 🔐 Environment Variables

This project uses environment variables to protect API access through middleware.

Create a `.env.local` file in the project root:

```bash
API_KEY=your-secure-api-key
```

Required variables:

- `API_KEY`: Secret key validated in the `x-api-key` header for `/api/v1/location/*` and `/api/v2/location/*` endpoints.

Example request with header:

```bash
curl -H "x-api-key: your-secure-api-key" http://localhost:3000/api/v1/location/states
```

## Maintenance Checklist
Review package vulnerabilities in production
```bash
    npm audit fix
```

## Deployments
Generate the production build
```bash
    npm run build
```

---

## 👨‍💻 Author

Developed with 💙 by [Andrés Orozco](https://github.com/AndresOrozcoDev)

- 📬 [andresorozcodev@gmail.com](mailto:andresorozcodev@gmail.com)
- 🌐 [LinkedIn](https://www.linkedin.com/in/andresorozcodev)

---

# Frontend - Plataforma de Gestión de Residuos

Este repositorio contiene el código fuente del **servicio de frontend** para el proyecto "Plataforma tecnológica para optimizar la gestión de residuos sólidos en Bogotá".

**El prototipo está desplegado en Render y se encuentra completamente funcional y accesible en la siguiente URL:**
> ### **URL del Prototipo en Vivo: `https://gestion-residuos-cliente.onrender.com`**

Esta aplicación, construida con **React**, es la **interfaz de usuario** que permite a los ciudadanos y recicladores interactuar con la plataforma. Se conecta y consume los datos de la API del backend para ofrecer una experiencia interactiva.

> **Nota:** El código fuente del backend se encuentra en un repositorio separado para mantener una arquitectura desacoplada.
>
> **Repositorio del Backend:** `https://github.com/duvn-dev/gestion-residuos-api`

## Características del Frontend

*   **Autenticación de Usuarios:** Formularios para registro e inicio de sesión.
*   **Gestión de Sesión:** Manejo del estado de autenticación y tokens de usuario a través de React Context.
*   **Enrutamiento Protegido:** Rutas que solo son accesibles para usuarios autenticados.
*   **Visualización de Datos:** Muestra la lista de reportes de residuos obtenidos desde la API.
*   **Navegación:** Sistema de enrutamiento del lado del cliente con React Router.

## Tecnologías Utilizadas

*   **Framework:** React
*   **Enrutamiento:** React Router
*   **Cliente HTTP:** Axios
*   **Gestión de Estado:** React Context API
*   **Despliegue:** Render (como Sitio Estático)

## Desarrollo Local

Sigue estos pasos para levantar el entorno de desarrollo local del frontend.

### Prerrequisitos

*   Node.js (versión LTS recomendada)
*   Git

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/duvn-dev/gestion-residuos-frontend.git
    cd gestion-residuos-frontend
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm start
    ```
    La aplicación se abrirá automáticamente en `http://localhost:3000`.

**Nota sobre la API:** Este proyecto está preconfigurado para conectarse directamente a la API desplegada en Render (`https://gestion-residuos-api.onrender.com`), por lo que no requiere configuración de variables de entorno para funcionar.
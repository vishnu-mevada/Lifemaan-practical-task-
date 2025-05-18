
# Angular Role-Based Authentication Project

## 🚀 Getting Started

To start the project, run the following command:

```bash
npm run start
```

This will start both the Angular application and the `json-server` to serve the database.

Alternatively, you can start them manually:

```bash
ng serve
json-server --watch db.json --port 3000
```

## 🔐 Role-Based Authentication

This project implements role-based authentication for route and action-level access control. There are three user roles:

- **Admin**: Full access to all routes and actions (Add, Edit, Delete)
- **Editor**: Cannot access the **Users** route, but can perform all actions on other routes
- **Viewer**: Read-only access; cannot access the **Users** route or perform any actions

A custom `RoleGuard` is implemented to prevent unauthorized access. Even if a user manually enters a restricted URL, they will be redirected to a **403 (Forbidden)** page.

If a route does not exist, users are redirected to a **404 (Not Found)** page.

## 🧭 Navigation

This project includes six main navigation menus:

- Home
- Users
- Reports
- Projects
- About Us
- Contact Us

> **Note:** The **Contact Us** route is included to demonstrate the 404 error handling. No actual component is implemented for this route.

## ✅ Features

- Role-based route and action control using `RoleGuard`
- Route redirection for unauthorized (403) and unknown (404) routes
- Error handling for all `GET` requests with user notifications
- User-friendly notifications using `ngx-toastr`
- Backend simulation using `json-server` for CRUD operations
- UUID generation for new entries using `uuid()`
- Module-based architecture
- Standalone components and a shared global form
- Role persistence using `localStorage` (survives hard reloads)
- Developed with **Angular 16** and **Angular Material 16**

## 📦 Dependencies

- Angular 16
- Angular Material 16
- ngx-toastr
- json-server
- uuid

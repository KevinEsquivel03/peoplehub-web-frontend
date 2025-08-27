# 📋 PeopleHub

**PeopleHub** is a web application to **manage groups and track attendance** easily.  
It allows administrators to create groups, manage members, and take digital attendance in a simple and modern interface.

⚠️ The project is still under active development.

---

## ✨ Features (planned / in progress)

- 🔑 **Authentication** with [Supabase Auth](https://supabase.com/).
- 👥 **Group management**: create, edit and remove groups.
- ✅ **Attendance tracking**: mark presence/absence per member.
- 📊 **Reports** (future): attendance history and statistics.
- 🛠️ **Modern stack**: React + TypeScript + ESLint + Prettier.
- 🧪 **Testing**: Jest (with possible migration to Vitest).

---

## 🛠️ Tech Stack

- **Frontend:** [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Auth:** [Supabase](https://supabase.com/)
- **Linting & Formatting:** ESLint + Prettier
- **CI/CD:** GitHub Actions
- **Testing:** Jest

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) >= 18
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/peoplehub-web-frontend.git

cd peoplehub-web-frontend

# Install dependencies
npm install
```

### Running the App

```bash
# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧪 Running Tests

```bash
# Run unit tests
npm run test
```

---

## 🔍 Linting & Formatting

```bash
# Check linting errors
npm run lint

# Check formatting
npm run format:check

# Apply Prettier formatting
npm run format:write
```

_(Make sure your commits follow the formatting rules — GitHub Actions will enforce ESLint + Prettier checks)._

---

## 🤝 Contributing

1. Fork the project.
2. Create your feature branch:

   ```bash
   git checkout -b feat/my-feature
   ```

3. Commit your changes:

   ```bash
   git commit -m "feat: add my feature"
   ```

4. Push to the branch:

   ```bash
   git push origin feat/my-feature
   ```

5. Open a Pull Request.

---

## 📌 Roadmap

- [ ] Basic authentication flow (login/register).
- [ ] Group management UI.
- [ ] Attendance feature.
- [ ] Reports & dashboards.
- [ ] Deployment to production.

---

## 📄 License

This project is licensed under the MIT License.

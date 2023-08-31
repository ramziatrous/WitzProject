SpaVogel Team (Emanuel, Ramzi, Nick)

Tag 1 - 24. August 2023:

Node.js Umgebung vorbereitet
Express Framework eingerichtet
Express-Routen für CRUD-Funktionen erstellt
Beispieldatenbank von Witzen mit Text, Bewertung und Zeitstempel erstellt
getestet an einem lokal .js File in Postman

Tag 2 - 25. August 2023:

Projekt aufgeräumt und strukturiert
Routen in separate Dateien ausgelagert, um die Codebasis übersichtlicher zu gestalten.
Ein Modell für die Datenbank erstellt, um die Struktur der gespeicherten Daten zu definieren.
Controller erstellt, um die Logik für die CRUD-Operationen von den Routen zu trennen und besser zu organisieren.

### Wochenende

### 26.August

### 27.August

Tag 3 - 28. August 2023:

- MongoDB Atlas/Compass Setup
- Connect with mongoose
- Connection mit DB mit server.js ?
- neue Route UPDATE/PUT um Bewertung zu aktualisieren

─ server.js

Tag 4 - 29. August 2023:

- Modeling Data, Controller & Routes für USER
- User Email & Passwort Validation

Tag 5 - 30. August 2023:

- JSON WebToken
- Auth Middleware & Endpoint
- Logout User & Clear Cookie

Ordner Struktur -->

├── backend
│ ├── config
│ │ └── db.js
│ ├── controllers
│ │ └── jokesController.js
│ ├── middlewares
│ │ ├── errorHandlers.js
│ │ └── requestLogger.js
│ ├── models
│ │ ├── jokeModel.js
│ │ ├── userModel.js
│ ├── routes
│ │ └── apiRoutes.js
│ ├─

User Routen Overview :

authUser: Handles user authentication and token generation.
registerUser: Handles user registration.
logoutUser: Handles user logout and clearing cookies.
updateUserProfile: Updates the user's profile information.

getUserProfile: Retrieves the authenticated user's profile based on their ID.

getUserByID: Retrieves a specific user by their ID (admin access).
getUsers: Retrieves a list of users (admin access).
deleteUser: Deletes a user by their ID (admin access).
updateUser: Updates a user by their ID (admin access).

 its a new day ⚕️

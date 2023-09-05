Projektdokumentation von Nick Jabs
SpaVogel Team (Emanuel, Ramzi, Nick)

Emanuel Manager
Ramzi Front-End
Nick Back-End

https://github.com/ramziatrous/WitzProject


Tag 1 - 24.August 2023

Diese technische Dokumentation dokumentiert den Entwicklungsprozess der Anwendung von Anfang bis zum Erstellen von Express-Routen für CRUD-Funktionen und dem Testen der Funktionalitäten mit Postman. Es werden die Schritte von der Vorbereitung der Node.js Umgebung bis zur Erstellung der Beispieldatenbank von Witzen beschrieben.

Node.js Umgebung vorbereitet
 Vorbereitung der Node.js Umgebung

Am Anfang des Projekts wurde die Node.js Umgebung vorbereitet. Dies umfasst:

Installation von Node.js auf dem Entwicklungsrechner.
Erstellung des Projektordners.
Initialisierung des Projekts mit npm init.
Installieren von Abhängigkeiten, wie z.B. Express, über npm install.

Express Framework eingerichtet

Einrichtung des Express Frameworks
Das Express Framework wurde eingerichtet, um die Entwicklung einer RESTful API zu ermöglichen. Hierbei wurden folgende Schritte durchgeführt:

Erstellung der Hauptdatei (z.B. server.js) als Einstiegspunkt der Anwendung.
Importieren von Express und Initialisierung der App.
Konfiguration des Server-Ports.
Einrichtung von Middleware, wie Body Parser und CORS.

Express-Routen für CRUD-Funktionen erstellt

Erstellung von Express-Routen für CRUD-Funktionen

Die Express-Routen für CRUD-Funktionen wurden erstellt, um die Grundlagen der API-Endpunkte zu definieren. Dabei wurden folgende Schritte durchgeführt:

Erstellung eines separaten Moduls für die Routen (z.B. apiRoutes.js).
Importieren und Verwenden von Express Router.
Implementierung der Routen für das Abrufen, Erstellen, Aktualisieren und Löschen von Ressourcen.

Beispieldatenbank von Witzen mit Text, Bewertung und Zeitstempel erstellt

Erstellung einer Beispieldatenbank von Witzen
Zur Demonstration der Funktionalitäten wurde eine Beispieldatenbank von Witzen erstellt. Dies beinhaltete:

Die Erstellung einer Datenbank, die Witze mit Text, Bewertung und Zeitstempel speichert.
Das Hinzufügen von Beispieldaten zur Datenbank.
Die Verbindung der Datenbank mit der Anwendung, um die CRUD-Operationen auszuführen.

getestet an einem lokal .js File in Postman

Um die erstellten Express-Routen und die Funktionalitäten zu testen, wurde Postman verwendet:

Erstellung von Anfragen für jeden der erstellten API-Endpunkte (GET, POST, PUT, DELETE).
Überprüfung der erwarteten Antworten und Ergebnisse der Anfragen.



Tag 2 - 25.August 2023

Projekt aufräumen und strukturieren

Projekt aufräumen und strukturieren

Am zweiten Tag wurde der Fokus darauf gelegt, das Projekt aufzuräumen und eine klarere Struktur zu schaffen:

Überprüfung und Optimierung der Ordnerstruktur.
Entfernung von nicht benötigten Dateien und Abhängigkeiten.
Erstellung eines klaren Namensschemas für Dateien und Ordner.


Routen in separate Dateien ausgelagern, um die Codebasis übersichtlicher zu gestalten.
 Auslagerung von Routen in separate Dateien
Um die Codebasis übersichtlicher zu gestalten, wurden die Routen in separate Dateien ausgelagert:

Erstellung von Modulen für verschiedene Routengruppen, wie z.B. apiRoutes.js und userRoutes.js.
Trennung der Routenlogik für verschiedene Funktionen, um die Wartbarkeit zu verbessern.

Ein Modell für die Datenbank erstellen, um die Struktur der gespeicherten Daten zu definieren.
Modell für die Datenbank erstellen

Die Struktur der in der Datenbank gespeicherten Daten wurde durch die Erstellung von Modellen definiert:

Erstellung eines Modells (z.B. jokeModel.js) zur Definition der Datenstruktur für Witze.
Verwendung von Mongoose-Schemas, um die Datenstruktur zu definieren, z.B. Witztext, Bewertung usw.

Controller erstellen, um die Logik für die CRUD-Operationen von den Routen zu trennen und besser zu organisieren.
Erstellung von Controllern

Die Logik für CRUD-Operationen wurde aus den Routen ausgelagert und in Controllern organisiert:

Erstellung von Controllern (z.B. jokesController.js) für jede Art von Ressource (z.B. Witze).
Trennung der Geschäftslogik von den Express-Routen, um den Code besser zu organisieren.

Front End - Back End Merge Test

 Frontend-Backend Merge Test
Um sicherzustellen, dass das Frontend und Backend korrekt zusammenarbeiten, wurde ein Test durchgeführt:

Integration des Frontends mit den bereitgestellten API-Endpunkten.
Durchführung von Tests, um sicherzustellen, dass Daten zwischen Frontend und Backend erfolgreich übertragen werden.
Überprüfung der Anzeige von Daten und Funktionen im Frontend, die durch die Backend-API bereitgestellt werden.










Schutz sensibler Informationen
Um sensible Daten, wie Verbindungszeichenfolgen, zu schützen, wurde das .env-File bewusst nicht in das Repository gepusht. Stattdessen wurde ein example.env-File bereitgestellt, das leer ist und als Vorlage dient. Die eigentlichen Verbindungsdaten werden intern ausgetauscht und im .env-File hinterlegt.

Cross-Origin Resource Sharing (CORS) 
ProblemeDie Kommunikation zwischen Frontend (Angular) und Backend (Node.js/Express) wurde durch Cross-Origin Resource Sharing (CORS) beschränkt. Um diese Beschränkung zu überwinden und eine reibungslose Interaktion zu ermöglichen, wurde die notwendige CORS-Konfiguration im Backend implementiert. Dies beinhaltet das Hinzufügen des richtigen CORS-Headers, um den Zugriff auf das Backend von verschiedenen Ursprüngen aus zu gestatten.






Tag 3 - 28.August 2023

MongoDB Atlas/Compas/setup
Connect with mongoose
Connection DB mit server.js
API End Point PUT erstellt und das Rating upzudaten
Middleware error handling - logging
 
Backend-Konfiguration und Datenbankanbindung
Die Backend-Konfiguration erfolgte unter Verwendung des MEAN-Stacks (MongoDB, Express, Angular, Node.js). Während des Merge-Prozesses sind Probleme aufgetreten, die auf die Verwendung von ES6-Modulen im Backend zurückzuführen sind. Das import-Statement wurde anstelle von require verwendet, was zu Konflikten beim Zusammenführen von Änderungen führte. Die Lösung für dieses Problem bestand darin, die Abhängigkeiten im package.json-File sowohl im Root-Verzeichnis als auch im Backend-Verzeichnis zu aktualisieren und die Aktualisierungen mittels npm install einzuspielen.


Tag 4 - 29.August 2023
Data Konstruktor für User 

Die Benutzerdaten werden mithilfe eines Data-Konstruktors organisiert. Der Data-Konstruktor für Benutzer enthält folgende Eigenschaften:

_id: Eindeutige Identifikationsnummer des Benutzers.
username: Benutzername des Benutzers.
email: E-Mail-Adresse des Benutzers.
password: Gehashtes Passwort des Benutzers.
isAdmin: Gibt an, ob der Benutzer Administratorrechte hat.

Das userSchema mit Mongooses Schema-Klasse. Dieses Schema definiert die Struktur eines Benutzers Dokuments in der Datenbank, einschließlich Feldern wie Benutzername, E-Mail, Passwort, isAdmin und Bild.

Controller für User

Der User-Controller enthält die Logik für Benutzeraktionen, wie Anmeldung, Registrierung und Ausloggen. Er implementiert die folgenden Funktionen:

authUser(email, password): Authentifiziert den Benutzer anhand von E-Mail und Passwort.
registerUser(username, email, password): Registriert einen neuen Benutzer.
logoutUser(): Meldet den Benutzer ab und löscht den JWT-Token.

API Points für User

Die API-Endpunkte ermöglichen die Interaktion mit Benutzerdaten über HTTP-Anfragen. Die folgenden Endpunkte sind implementiert:

POST /users/login: Authentifiziert den Benutzer und gibt einen JWT-Token zurück.
POST /users/register: Registriert einen neuen Benutzer und gibt eine Bestätigung zurück.
POST /users/logout: Meldet den Benutzer ab und löscht den JWT-Token.

User Email & Passwort Validation

Bevor Benutzerdaten in die Datenbank geschrieben werden, erfolgt eine Validierung von E-Mail und Passwort. Die Validierung umfasst:

Überprüfung der E-Mail-Struktur auf Gültigkeit.
Passwort-Hashing, um die Sicherheit der gespeicherten Passwörter zu gewährleisten.
Die Methode matchPassword: Diese Methode ermöglicht den Vergleich des vom Benutzer eingegebenen Passworts mit dem gehashten Passwort im Benutzerdatensatz. Die matchPassword-Methode spielt eine entscheidende Rolle bei der Authentifizierung von Benutzern während des Anmeldevorgangs. Indem sie das eingegebene Passwort mit dem in der Datenbank gespeicherten Passwort vergleicht, ermöglicht diese Methode eine sichere und zuverlässige Authentifizierung der Benutzer.





Tag 5 - 30.August 2023


JSON Web Token

Authentifizierung: JWTs werden oft verwendet, um Benutzer nach erfolgreichem Login zu authentifizieren. Der Server generiert ein JWT, das Informationen über den Benutzer enthält, wie z. B. die Benutzer-ID oder Rollenberechtigungen. Der Client sendet dieses JWT bei jeder Anfrage an den Server, und der Server kann das JWT überprüfen, um sicherzustellen, dass der Benutzer authentifiziert ist.

Token-basierte API-Authentifizierung: Anstelle von Benutzername und Passwort kann ein JWT verwendet werden, um API-Anfragen zu authentifizieren. Der Client erhält nach erfolgreicher Anmeldung ein JWT und sendet es bei jeder API-Anfrage mit. Der Server kann das JWT überprüfen und den Zugriff gewähren oder verweigern.

Cookie im HTTP-Header an den Client zurückgegeben. Der Client sendet diesen Token mit seinen Anfragen, wenn er auf geschützte Ressourcen zugreifen möchte

Wenn ein Benutzer nicht authentifiziert ist (nicht eingeloggt), hat er keinen Zugriff auf geschützte Routen oder Ressourcen, die für eingeloggte Benutzer reserviert sind.

Encryption

Verwendung von bcrypt.js Bibliothek, um das Passwort zu hashen. bcrypt ist eine weit verbreitete und bewährte Bibliothek, die speziell für die sichere Speicherung von Passwörtern entwickelt wurde. Hier sind die Schritte, die wir für die Verschlüsselung und das Hashing von Passwörtern durchführen

Pre-Save-Hook eingerichtet, der vor dem Speichern eines Benutzerdatensatzes in die Datenbank automatisch aktiviert wird. Dieser Hook hat die Aufgabe, das Benutzerpasswort vor dem Speichern zu hashen, um die Sicherheit der Passwortdaten zu gewährleisten. Der Hook wird jedoch nur dann ausgeführt, wenn das Passwortfeld geändert wurde. Das bedeutet, dass der Hashing-Vorgang nur dann stattfindet, wenn ein neues Passwort festgelegt oder ein bestehendes Passwort aktualisiert wird. Dies stellt sicher, dass das Passwort in der Datenbank sicher und geschützt gespeichert wird, ohne den Hashing-Prozess unnötig zu wiederholen.


Auth Middleware & Endpoint

logRequest und errorHandler beitragen, Anfragen zu verarbeiten und auf Fehler zu reagieren.


Logout & Clear Cookie

Obwohl dieser Endpunkt existiert, führt er keine spezifische Aktion im Backend aus und sendet stattdessen eine Nachricht zurück ( String Text ), Logout durch front end action

User Register Endpoints

Vergleichen von Passwörtern: Das Benutzerschema verfügt über eine Methode namens matchPassword, die dazu dient, eingegebene Passwörter mit den in der Datenbank gespeicherten gehashten Passwörtern zu vergleichen. Dies geschieht mithilfe der bcrypt.compare-Methode.



Tag 6 - 31.August 2023

Beim Registrieren, Bild uploaden mögloch 

Der Bild-Upload in deinem Code wird mithilfe der JavaScript-Bibliothek "multer" durchgeführt. 

Hier ist ein kurzer Ablauf, wie der Bild-Upload in deiner Anwendung funktioniert:

Konfiguration von Multer: In der Datei userRoutes.js wird Multer konfiguriert, um den Datei-Upload zu ermöglichen. Dabei wird der Speicherort für hochgeladene Bilder festgelegt und eine benutzerdefinierte Dateinamenkonvention definiert.

Verwendung von Multer in einer Route: In der gleichen Datei userRoutes.js wird Multer als Middleware in der userRouter.post("/register")-Route verwendet. Dies bedeutet, dass Multer aufgerufen wird, wenn ein POST-Request an diesen Endpunkt gesendet wird und ein Bild hochgeladen wird.

Bildverarbeitung im Controller: Im userController.js-Datei wird die eigentliche Verarbeitung des hochgeladenen Bilds durchgeführt. Wenn ein Bild hochgeladen wird (req.file existiert), wird der Dateiname des Bilds dem Benutzerdatenobjekt hinzugefügt. Dieser Dateiname wird dann in der Benutzerdatenbank gespeichert.

Speichern des Benutzers: Nachdem das Bild verarbeitet wurde, wird der Benutzer mit den entsprechenden Daten, einschließlich des Bild-Dateinamens, in der Datenbank gespeichert.




Code Review


Routing




Ordnerstruktur

- BackendFolder
  - config
    - db.js
  - controllers
    - jokesController.js
    - userController.js
  - data
    - jokes.js
    - users.js
  - middleware
    (Any middleware files go here)
  - models
    - jokeModel.js
    - userModel.js
  - routes
    - apiRoutes.js
    - userRoutes.js
  - uploads
    (User-uploaded data can be stored here)
  - importData.js
  - server.js



















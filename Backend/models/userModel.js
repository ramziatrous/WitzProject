import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Definiere das Benutzerschema unter Verwendung von Mongoose
const userSchema = new mongoose.Schema(
  {
    // Benutzername des Benutzers
    username: {
      type: String,
      required: true,
    },
    // E-Mail-Adresse des Benutzers
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Passwort des Benutzers (gehasht)
    password: {
      type: String,
      required: true,
    },
    // Gibt an, ob der Benutzer ein Administrator ist
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Profilbild des Benutzers (optional)
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true } // Automatische Zeitstempel-Felder (Erstellt am, Aktualisiert am)
);

// Methode für das Benutzerschema, um Passwörter zu überprüfen
userSchema.methods.matchPassword = async function (eingegebenesPasswort) {
  return await bcrypt.compare(eingegebenesPasswort, this.password);
};

// Pre-Save-Hook, um das Passwort vor dem Speichern in der Datenbank zu hashen
userSchema.pre("save", async function (next) {
  // Das Passwort nur hashen, wenn es geändert wurde (neu oder aktualisiert)
  if (!this.isModified("password")) {
    next();
  }

  // Ein Salz generieren und das Passwort hashen
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hashSync(this.password, salt);

  next();
});

// Das User-Modell erstellen, basierend auf dem definierten Schema
const User = mongoose.model("User", userSchema);

// Exportieren des User-Modells
export { User };

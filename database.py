#Dabase functions will go here
import sqlite3

DB_NAME = "scholarships.db"

# 1. Initialize database and table
def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS scholarships (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            deadline TEXT NOT NULL,
            link TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

# 2. Add a new scholarship
def add_scholarship(name, deadline, link):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("INSERT INTO scholarships (name, deadline, link) VALUES (?, ?, ?)",
              (name, deadline, link))
    conn.commit()
    conn.close()

# 3. Get all scholarships
def get_scholarships():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM scholarships")
    rows = c.fetchall()
    conn.close()
    return rows

# 4. Delete a scholarship by ID
def delete_scholarship(scholarship_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("DELETE FROM scholarships WHERE id = ?", (scholarship_id,))
    conn.commit()
    conn.close()


# ✅ Run once when script starts to make sure DB exists
if __name__ == "__main__":
    init_db()
    print("Database initialized successfully!")

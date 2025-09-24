import sqlite3

DB_NAME = "scholarships.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS scholarships (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            deadline TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

def add_scholarship(name, deadline):
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("INSERT INTO scholarships (name, deadline) VALUES (?, ?)", (name, deadline))
    conn.commit()
    conn.close()

def get_scholarships():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()
    cur.execute("SELECT id, name, deadline FROM scholarships")
    rows = cur.fetchall()
    conn.close()
    return [{"id": r[0], "name": r[1], "deadline": r[2]} for r in rows]

# run this once to create DB
init_db()

from flask import Flask, request, jsonify
from flask_cors import CORS
import database

app = Flask(__name__)
CORS(app)  # allow frontend JS to talk to backend

@app.route("/add", methods=["POST"])
def add_scholarship():
    data = request.json
    name = data.get("name")
    deadline = data.get("deadline")

    if not name or not deadline:
        return jsonify({"error": "Missing fields"}), 400

    database.add_scholarship(name, deadline)
    return jsonify({"message": "Scholarship added successfully!"})

@app.route("/list", methods=["GET"])
def list_scholarships():
    scholarships = database.get_scholarships()
    return jsonify(scholarships)

if __name__ == "__main__":
    app.run(debug=True)

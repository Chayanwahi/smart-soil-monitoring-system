from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/sensor-data")
def sensor_data():
    return jsonify({
        "moisture": 72,
        "temperature": 29,
        "status": "Healthy"
    })

if __name__ == "__main__":
    app.run(debug=True)

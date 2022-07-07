from flask import Flask, request
from flask_cors import CORS
from data_caller import insert_emp, insert_cert, get_certs_db
import uuid
import json

app = Flask(__name__)
CORS(app)

@app.route("/employees")
def employees():
    return {"employees":["Employee1", "Employee2", "Employee3"]}

@app.route("/backend/add-employee-certs", methods=["POST"])
def add_employee_api():
    employeeId = str(uuid.uuid4())
    insert_emp(request.json['inputFieldsEmployee'][0], employeeId)
    for cert in request.json['inputFieldsCert']:
        insert_cert(cert,employeeId, str(uuid.uuid4()))
    return {"response":"ok"}

@app.route("/backend/get-certs", methods=["GET"])
def get_certs_api():
    certs = get_certs_db()
    return json.dumps(certs)

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

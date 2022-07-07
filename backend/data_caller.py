import sqlite3

conn = sqlite3.connect('cert-manager.db')

c = conn.cursor()

# c.execute("""CREATE TABLE employees (
#   employeeId text PRIMARY KEY,
#   firstName text,
#   lastName text,
#   email text
# )""")

# c.execute("""CREATE TABLE certificates (
#   certificateId text PRIMARY KEY,
#   employeeId text,
#   certName text,
#   certDate date,
#   certProvider text,
#   certCost integer
# )""")

def insert_emp(emp, employeeId):
    conn = sqlite3.connect('cert-manager.db', check_same_thread=False)
    c = conn.cursor()
    print(emp['firstName'])
    with conn:
        c.execute("INSERT INTO employees VALUES (:employeeId, :firstName, :lastName, :email)", {'employeeId': employeeId,'firstName': emp['firstName'], 'lastName': emp['lastName'], 'email': emp['email']})

def insert_cert(cert,employeeId, certificateId):
    conn = sqlite3.connect('cert-manager.db', check_same_thread=False)
    c = conn.cursor()
    with conn:
        c.execute("INSERT INTO certificates VALUES (:certificateId, :employeeId, :certName, :certDate, :certProvider, :certCost)", {'certificateId': certificateId, 'employeeId': employeeId, 'certName': cert['certName'], 'certDate': cert['certDate'], 'certProvider': cert['certProvider'], 'certCost': cert['certCost']})

def get_certs_db():
    with sqlite3.connect('cert-manager.db') as conn:
        c = conn.cursor()
        c.execute("SELECT * FROM certificates")
        data = c.fetchall()
        certs = []
        for i in range(len(data) - 1, -1, -1):
            certs.append({
                    "certificateId": str(data[i][0]),
                    "employeeId": str(data[i][1]),
                    "certName": str(data[i][2]),
                    "certDate": str(data[i][3]),
                    "certProvider": str(data[i][4]),
                    "certCost": str(data[i][5]),
                })
        return(certs)
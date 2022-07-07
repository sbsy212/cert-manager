## Deploy in docker

make sure you have docker on your machine
use the

```
docker-compose up
```

command and both containers should start.

## Deploy locally

you should have on your machine:

- Python 3.7.9 or higher
- node 16
- yarn
  to deploy the frontend just

```
yarn install
```

and

```
'yarn start'
```

to deploy the backend cd into the backend folder, install the dependencies with

```
pip install -r ./requirements.txt
```

and start the app with

```
python app.py
```

## Use the app

- go to 'http://localhost:3000' on your browser
- type in your name
- with the buttons - and + you can adjust the number of your certificates
- type in the data for your certificates
- send
- after reloading you will see your certificates listed in the table on the bottom

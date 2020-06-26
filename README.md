# gwDonations
TRABALHO PI UNI BH 2020 // O sistema consiste em intermediar a relação entre instituições que necessitam de qualquer tipo de doações e instituições parceiras que desejam doar . É uma solução de caráter social cujo não consiste em retorno e fins lucrativos .

# RUNNING FRONTEND Intern + Angular


## Get started

### Clone the repo

```shell
git clone https://github.com/bryanforbes/intern-angular
cd intern-angular
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

The `npm start` command builds (compiles TypeScript and copies assets) the application into `dist/`, watches for changes to the source files, and runs `lite-server` on port `3000`.


# RUNNING BACKEND 

# PYTHON + DJANGO REST FRAMEWORK

## INSTALL DEPENDENCIES

To run locally, do the usual:

#. Create a Python 3.5 virtualenv

#. Install dependencies::

    pip install -r requirements/dev.txt
    npm install

   Alternatively, use the make task::

    make install
#. Make a directory to store the project's data (MEDIA_ROOT, DOC_BUILDS_ROOT,
   etc.). We'll use ~/.djangoproject for example purposes.

   Create a 'secrets.json' file in a directory named 'conf' in that directory,
   containing something like::

    { "secret_key": "xyz",
      "superfeedr_creds": ["any@email.com", "some_string"],
      "db_host": "localhost",
      "db_password": "secret",
      "trac_db_host": "localhost",
      "trac_db_password": "secret" }

   Add `export DJANGOPROJECT_DATA_DIR=~/.djangoproject` (without the backticks)
   to your ~/.bashrc (or ~/.zshrc if you're using zsh) file and then run
   `source ~/.bashrc` (or `source ~/.zshrc`) to load the changes.

#. Create databases::

    createuser -d djangoproject --superuser
    createdb -O djangoproject djangoproject
    createuser -d code.djangoproject --superuser
    createdb -O code.djangoproject code.djangoproject

#. Setting up database access

   If you are using the default postgres configuration, chances are you will
   have to give a password for the newly created users to be able to
   use them for Django::

     psql
     ALTER USER djangoproject WITH PASSWORD 'secret';
     ALTER USER "code.djangoproject" WITH PASSWORD 'secret';
     \d

   (Use the same passwords as the ones you've used in your `secrets.json` file)

#. Create tables::

    psql -d code.djangoproject < tracdb/trac.sql

    ./manage.py migrate

#. Create a superuser::

   ./manage.py createsuperuser

## SERVE
Finally run the command in the root file: ```py manage.py runserver```

# CHANGELOG

## Schematics applied

### 20200318

```bash
yarn run ng add @angular/material

yarn run ng generate @nrwl/node:library --publishable types

yarn run ng generate @nrwl/angular:library --style=scss --publishable processings --directory=features

yarn run ng generate @nrwl/node:library --publishable tree --directory=structures

yarn add --dev pouchdb-server

yarn run ng generate @nrwl/express:application embedded-device-manager-api-couchdb-cloud --directory=""
yarn run ng generate @nrwl/express:application embedded-device-manager-api-couchdb-device --directory=""

yarn run ng generate @nrwl/node:library langs --publishable --directory=dbs/pouchdb
yarn run ng generate @nrwl/node:library langs --publishable --directory=dbs/pouchdb/texts

yarn add --dev @nestjs/cli

yarn run ng add @nrwl/nest

yarn run ng generate @nrwl/nest:application embedded-device-manager-api-nest --frontend-project embedded-device-manager --directory=""

yarn run ng generate @nrwl/nest:library child-processes --publishable --directory=apis
```

### 20200506

```bash
yarn run ng generate @nrwl/angular:library --style=scss --publishable route --directory=apps/embedded-device-manager/routes/routes/terminal


yarn run ng generate @nrwl/angular:library --style=scss --publishable route --directory=apps/embedded-device-manager/routes/routes/pouchdb-manager

yarn run ng generate @nrwl/angular:library --style=scss --publishable route --directory=apps/embedded-device-manager/routes/routes/pouchdb-manager/routes/changes-options

yarn run ng generate @nrwl/angular:library --style=scss --publishable route --directory=apps/embedded-device-manager/routes/routes/pouchdb-manager/routes/changes-feeds

yarn run ng generate @nrwl/angular:library --style=scss --publishable route --directory=apps/embedded-device-manager/routes/routes/pouchdb-manager/routes/database-configurations

yarn run ng generate @nrwl/angular:library --style=scss --publishable route --directory=apps/embedded-device-manager/routes/routes/pouchdb-manager/routes/find-selectors

yarn run ng generate @nrwl/angular:library --style=scss --publishable pouchdb-manager --directory=features
```

### 20200511

```bash
yarn run ng generate @nrwl/angular:library --style=scss --publishable expansion-panel --directory=components

yarn run ng generate @nrwl/angular:component --flat --change-detection=OnPush --module=component.module.ts --export --project=components-expansion-panel --style=scss --selector=gdgtoulouse-expansion-panel components/index
```

### 20200512

```bash
yarn run ng generate @nrwl/angular:library --style=scss --publishable expansion-panel-pouchdb --directory=components

yarn run ng generate @nrwl/angular:component --flat --change-detection=OnPush --module=component.module.ts --export --project=components-expansion-panel-pouchdb --style=scss --selector=gdgtoulouse-expansion-panel-pouchdb components/index
```

### 20200516

```bash
yarn run ng generate @nrwl/angular:library --style=scss --publishable terminal --directory=components

yarn run ng generate @nrwl/angular:component --flat --change-detection=OnPush --module=index.module.ts --export --project=components-terminal --style=scss --selector=gdgtoulouse-terminal components/index
```

### 20200523

```bash
yarn run ng generate @nrwl/angular:library --style=scss --publishable router --directory=features

yarn run ng generate @nrwl/angular:library --style=scss --publishable lang --directory=features

yarn run ng generate @nrwl/angular:application embedded-devices-manager \
    --directory="" \
    --unit-test-runner=jest \
    --style=scss \
    --routing

yarn run ng generate @nrwl/nest:application embedded-devices-manager-api-nest --frontend-project embedded-devices-manager --directory=""
```

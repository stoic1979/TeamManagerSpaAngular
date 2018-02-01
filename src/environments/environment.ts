// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // URL of development API
  apiUrl: 'https://teammanager9.herokuapp.com',
  // apiUrl:  'http://192.168.11.6:3002/api',
  API_ENDPOINT: 'http://192.168.11.6:3002/api'
  // API_ENDPOINT:  'https://jsonplaceholder.typicode.com/users'
};

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'su3n1zf5ampv',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'ClwEIrmt38HZnNVaBvCzTlo1xuiuQmnANaRR_3jMaOA'
})


export{client}
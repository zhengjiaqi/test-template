import type { NamiConfig } from '@mtfe/nami-core'

const APPKEY = '<%= appkey %>'
const WEBSTATIC_APPKEY = '<% if (locals.webstatic) { %><%= webstatic %><% } %>'

const namiConfig: NamiConfig = {
  serve: {
    appkey: APPKEY,
    devConfig: 'config/dev.config.ts'
  },
  build: {
    webstatic: WEBSTATIC_APPKEY,
    clientConfig: 'config/client.config.ts',
    serverConfig: 'config/server.config.ts'
  },
  start: {
    appkey: APPKEY
  }
}

export default namiConfig

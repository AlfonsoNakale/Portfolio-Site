import { RuntimeConfig as UserRuntimeConfig, PublicRuntimeConfig as UserPublicRuntimeConfig } from 'nuxt/schema'
  interface SharedRuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   "nuxt-scripts": {
      version: string,
   },

   studio: {
      ai: {
         apiKey: any,

         context: {
            title: string,

            description: string,

            style: string,

            tone: string,

            collection: {
               name: string,

               folder: string,
            },
         },

         experimental: any,
      },

      auth: {
         sessionSecret: string,

         github: {
            clientId: string,

            clientSecret: string,

            instanceUrl: string,
         },

         gitlab: {
            applicationId: any,

            applicationSecret: any,

            instanceUrl: string,
         },

         google: {
            clientId: any,

            clientSecret: any,
         },

         sso: {
            serverUrl: any,

            clientId: any,

            clientSecret: any,
         },
      },

      repository: {
         provider: string,

         owner: string,

         repo: string,

         branch: string,

         rootDir: string,

         private: boolean,

         instanceUrl: any,
      },

      meta: {
         components: {
            include: Array<any>,

            exclude: Array<any>,

            groups: any,

            ungrouped: string,
         },
      },

      markdown: any,
   },

   content: {
      databaseVersion: string,

      version: string,

      database: {
         type: string,

         filename: string,
      },

      localDatabase: {
         type: string,

         filename: string,
      },

      integrityCheck: boolean,
   },
  }
  interface SharedPublicRuntimeConfig {
   "nuxt-scripts": {
      version: string,

      defaultScriptOptions: {
         trigger: string,
      },
   },

   studio: {
      route: string,

      dev: boolean,

      development: {
         server: any,
      },

      ai: {
         enabled: boolean,

         context: {
            collectionName: string,

            contentFolder: string,
         },

         experimental: {
            collectionContext: boolean,
         },
      },

      repository: {
         provider: string,

         owner: string,

         repo: string,

         branch: string,

         rootDir: string,

         private: boolean,

         instanceUrl: any,
      },

      i18n: {
         defaultLocale: string,
      },

      media: {
         external: boolean,

         publicUrl: string,

         maxFileSize: number,

         allowedTypes: Array<string>,

         prefix: string,
      },

      git: {
         commit: {
            messagePrefix: string,
         },
      },
   },

   mdc: {
      components: {
         prose: boolean,

         map: any,

         customElements: Array<any>,
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },

      highlight: {
         noApiRoute: boolean,

         highlighter: string,

         theme: {
            default: string,

            dark: string,
         },

         shikiEngine: string,

         langs: Array<string>,
      },
   },

   content: {
      wsUrl: string,
   },
  }
declare module '@nuxt/schema' {
  interface RuntimeConfig extends UserRuntimeConfig {}
  interface PublicRuntimeConfig extends UserPublicRuntimeConfig {}
}
declare module 'nuxt/schema' {
  interface RuntimeConfig extends SharedRuntimeConfig {}
  interface PublicRuntimeConfig extends SharedPublicRuntimeConfig {}
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: UserRuntimeConfig
        }
      }
export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603d303cb2fe5921a549b8a4',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-s1mxym8s',
                  apiId: '771623b2-eb81-49bd-aa70-7ff753deacf8'
                },
                {
                  buildHookId: '603d303c04316720a7154660',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-ksdx4jwg',
                  apiId: '8cdf03a8-2b96-494b-8532-7272b81f4f20'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/strepro/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-ksdx4jwg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

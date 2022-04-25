export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '6265eaff3dfcf0133cb5187a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-sa89igrs',
                  apiId: '8ac2372b-b037-40a7-8047-b5294902ca12'
                },
                {
                  buildHookId: '6265eb006625680c7dc02020',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-ppzceb2z',
                  apiId: '967d3c25-fe6f-46ab-90f7-a840fea4ec87'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guncoen/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-ppzceb2z.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

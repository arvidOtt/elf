/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs:  [{
    type: 'doc',
    label: 'Introduction',
    id: 'introduction'
  },{
    type: 'doc',
    label: 'CLI',
    id: 'cli'
  },{
    type: 'doc',
    label: 'Getting Started',
    id: 'getting-started'
  },{
    type: 'category',
    label: 'Features',
    items: ['features/entities', 'features/active-ids', 'features/ui-entities', 'features/requests', 'features/pagination', 'features/caching', 'features/persist-state', 'features/history', 'features/props', 'features/create-your-own']
  },{
    type: 'doc',
    label: 'Creating the Store',
    id: 'creating-the-store'
  },{
    type: 'doc',
    label: 'Writing to the Store',
    id: 'writing-to-the-store'
  },{
    type: 'doc',
    label: 'Querying the Store',
    id: 'querying-the-store'
  },{
    type: 'doc',
    label: 'DevTools',
    id: 'dev-tools'
  },{
    type: 'doc',
    label: 'FAQ',
    id: 'faq'
  }]
};

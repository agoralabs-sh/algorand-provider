// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'overview',
    {
      items: [
        {
          type: 'category',
          label: 'DApps',
          items: ['getting-started/dapps/usage'],
        },
        {
          type: 'category',
          label: 'Wallets',
          items: ['getting-started/wallets/installation'],
        },
      ],
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'getting-started/index',
      },
      type: 'category',
    },
    {
      items: [
        'api-reference/algorand-provider',
        'api-reference/base-wallet-manager',
        'api-reference/errors',
      ],
      label: 'API Reference',
      link: {
        type: 'doc',
        id: 'api-reference/index',
      },
      type: 'category',
    },
  ],
};

module.exports = sidebars;

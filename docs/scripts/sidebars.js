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
          items: [
            'getting-started/dapps/initialization',
            'getting-started/dapps/enabling-a-wallet',
            'getting-started/dapps/signing-transactions',
            'getting-started/dapps/sending-transactions',
            'getting-started/dapps/signing-data',
          ],
        },
        {
          type: 'category',
          label: 'Wallets',
          items: [
            'getting-started/wallets/installation',
            'getting-started/wallets/usage',
          ],
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

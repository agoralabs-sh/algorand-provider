"use strict";(self.webpackChunk_agoralabs_sh_algorand_provider=self.webpackChunk_agoralabs_sh_algorand_provider||[]).push([[224],{1286:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>w,contentTitle:()=>g,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var t=n(7462),l=n(3366),i=(n(7294),n(3905)),r=n(4866),o=n(5162),s=n(3901),d=["components"],p={},g="Usage",c={unversionedId:"getting-started/wallets/usage",id:"getting-started/wallets/usage",title:"Usage",description:"<TOCInline",source:"@site/docs/getting-started/wallets/usage.mdx",sourceDirName:"getting-started/wallets",slug:"/getting-started/wallets/usage",permalink:"/getting-started/wallets/usage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/getting-started/wallets/installation"},next:{title:"API Reference",permalink:"/api-reference/"}},w={},m=[{value:"Overview",id:"overview",level:2},{value:"Initializing the Algorand provider",id:"initializing-the-algorand-provider",level:2},{value:"Adding a wallet manager",id:"adding-a-wallet-manager",level:2}],u={toc:m},v="wrapper";function h(e){var a=e.components,n=(0,l.Z)(e,d);return(0,i.kt)(v,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)(s.Z,{maxHeadingLevel:4,toc:m,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In order for a dApp to interact with any wallets, a dApp will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.algorand")," object to interface between the injected wallets."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When initializing a wallet interface, it maybe necessary to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.algorand")," object. See ",(0,i.kt)("a",{parentName:"p",href:"#initializing-the-algorand-provider"},"initializing the Algorand provider")," for details on how to initialize the ",(0,i.kt)("a",{parentName:"p",href:"../../api-reference/algorand-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"AlgorandProvider"))," in the global namespace.")),(0,i.kt)("h2",{id:"initializing-the-algorand-provider"},"Initializing the Algorand provider"),(0,i.kt)("p",null,"DApps will be expecting any wallets to be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.algorand")," object and will use this object to interface with wallets."),(0,i.kt)(r.Z,{defaultValue:"javascript",values:[{label:"Javascript",value:"javascript"},{label:"TypeScript",value:"typescript"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { AlgorandProvider } = require('@agoralabs-sh/algorand-provider');\n\nif (!window.algorand) {\n  window.algorand = new AlgorandProvider();\n}\n"))),(0,i.kt)(o.Z,{value:"typescript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { AlgorandProvider } from '@agoralabs-sh/algorand-provider';\n\nif (!window.algorand) {\n    window.algorand = new AlgorandProvider();\n}\n")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As ",(0,i.kt)("inlineCode",{parentName:"p"},"window.algorand")," is a global object and could possibly be overridden, it maybe necessary to check that the object is the correct type.")),(0,i.kt)("h2",{id:"adding-a-wallet-manager"},"Adding a wallet manager"),(0,i.kt)("p",null,"Next, a wallet manager will need to be created, conforming to the ",(0,i.kt)("a",{parentName:"p",href:"../../api-reference/base-wallet-manager"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseWalletManager"))," class. This wallet manager can then be added to the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.algorand")," provider:"),(0,i.kt)(r.Z,{defaultValue:"javascript",values:[{label:"Javascript",value:"javascript"},{label:"TypeScript",value:"typescript"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { BaseWalletManager } = require('@agoralabs-sh/algorand-provider');\n\nclass AwesomeWallet extends BaseWalletManager {\n  enable(options) {\n    // ...logic goes here\n  }\n\n  postTxns(options) {\n    // ...logic goes here\n  }\n\n  signBytes() {\n    // ...logic goes here\n  }\n\n  signTxns() {\n    // ...logic goes here\n  }\n}\n\nconst wallet = new AwesomeWallet({\n  id: 'awesome-wallet',\n});\n\nwindow.algorand.addWallet(wallet, {\n  replace: true, // ensures your wallet is the only one with the provided id\n});\n"))),(0,i.kt)(o.Z,{value:"typescript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  BaseWalletManager,\n  IEnableOptions,\n  IEnableResult,\n  IPostTxnsOptions,\n  IPostTxnsResult,\n  ISignBytesOptions,\n  ISignBytesResult,\n  ISignTxnsOptions,\n  ISignTxnsResult,\n} from '@agoralabs-sh/algorand-provider';\n\nclass AwesomeWallet extends BaseWalletManager {\n  public async enable(options?: IEnableOptions): Promise<IEnableResult> {\n    // ...logic goes here\n  }\n\n  public async postTxns(options: IPostTxnsOptions): Promise<IPostTxnsResult> {\n    // ...logic goes here\n  }\n\n  public async signBytes(options: ISignBytesOptions): Promise<ISignBytesResult> {\n    // ...logic goes here\n  }\n\n  public async signTxns(options: ISignTxnsOptions): Promise<ISignTxnsResult> {\n    // ...logic goes here\n  }\n}\n\nconst wallet: AwesomeWallet = new AwesomeWallet({\n  id: 'awesome-wallet',\n});\n\nwindow.algorand.addWallet(wallet, {\n  replace: true, // ensures your wallet is the only one with the provided id\n});\n")))))}h.isMDXComponent=!0}}]);
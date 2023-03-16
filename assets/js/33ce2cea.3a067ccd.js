"use strict";(self.webpackChunk_agoralabs_sh_algorand_provider=self.webpackChunk_agoralabs_sh_algorand_provider||[]).push([[21],{815:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>w});var a=n(7462),s=n(3366),r=(n(7294),n(3905)),i=n(4866),o=n(5162),l=n(3901),p=["components"],d={},c="Sending Transactions",g={unversionedId:"getting-started/dapps/sending-transactions",id:"getting-started/dapps/sending-transactions",title:"Sending Transactions",description:"<TOCInline",source:"@site/docs/getting-started/dapps/sending-transactions.mdx",sourceDirName:"getting-started/dapps",slug:"/getting-started/dapps/sending-transactions",permalink:"/getting-started/dapps/sending-transactions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Signing Transactions",permalink:"/getting-started/dapps/signing-transactions"},next:{title:"Signing Data",permalink:"/getting-started/dapps/signing-data"}},u={},w=[{value:"Overview",id:"overview",level:2},{value:"Sending a transaction with the default wallet",id:"sending-a-transaction-with-the-default-wallet",level:2},{value:"Sending a transaction with a specific wallet",id:"sending-a-transaction-with-a-specific-wallet",level:2}],m={toc:w},h="wrapper";function v(t){var e=t.components,n=(0,s.Z)(t,p);return(0,r.kt)(h,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sending-transactions"},"Sending Transactions"),(0,r.kt)(l.Z,{maxHeadingLevel:4,toc:w,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Wallets, if supported, can commit transactions to the network using their connection to a node."),(0,r.kt)("h2",{id:"sending-a-transaction-with-the-default-wallet"},"Sending a transaction with the default wallet"),(0,r.kt)("p",null,"If you only want to send transactions to the network with the default wallet, you can simply call:"),(0,r.kt)(i.Z,{defaultValue:"javascript",values:[{label:"Javascript",value:"javascript"},{label:"TypeScript",value:"typescript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const result = await window.algorand.postTxns({\n    stxns: [\n      'gqNzaWfEQ...',\n    ],\n  });\n\n  console.log(result);\n  /*\n  {\n    id: 'awesome-wallet',\n    txnIDs: [\n      'OKU6A2Q...',\n    ],\n  }\n  */\n} catch (error) {\n  // handle error\n}\n"))),(0,r.kt)(o.Z,{value:"typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { IBaseResult, IPostTxnsResult } from '@agoralabs-sh/algorand-provider';\n\ntry {\n  const result: IBaseResult & IPostTxnsResult = await window.algorand.postBytes({\n    stxns: [\n      'gqNzaWfEQ...',\n    ],\n  });\n\n  console.log(result);\n  /*\n  {\n    id: 'awesome-wallet',\n    txnIDs: [\n      'OKU6A2Q...',\n    ],\n  }\n  */\n} catch (error) {\n  // handle error\n}\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this operation is not supported, then a ",(0,r.kt)("a",{parentName:"p",href:"../../api-reference/errors#walletoperationnotsupportederror"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletOperationNotSupportedError"))," will be thrown.")),(0,r.kt)("h2",{id:"sending-a-transaction-with-a-specific-wallet"},"Sending a transaction with a specific wallet"),(0,r.kt)("p",null,"If you want to target a specific wallet to send the transactions, you can simply pass the ID of the wallet to the options object:"),(0,r.kt)(i.Z,{defaultValue:"javascript",values:[{label:"Javascript",value:"javascript"},{label:"TypeScript",value:"typescript"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"try {\n  const result = await window.algorand.postTxns({\n    id: 'another-awesome-wallet',\n    stxns: [\n      'gqNzaWfEQ...',\n    ],\n  });\n\n  console.log(result);\n  /*\n  {\n    id: 'another-awesome-wallet',\n    txnIDs: [\n      'OKU6A2Q...',\n    ],\n  }\n  */\n} catch (error) {\n  // handle error\n}\n"))),(0,r.kt)(o.Z,{value:"typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type { IBaseResult, IPostTxnsResult } from '@agoralabs-sh/algorand-provider';\n\ntry {\n  const result: IBaseResult & IPostTxnsResult = await window.algorand.postTxns({\n    id: 'another-awesome-wallet',\n    stxns: [\n      'gqNzaWfEQ...',\n    ],\n  });\n\n  console.log(result);\n  /*\n  {\n    id: 'another-awesome-wallet',\n    txnIDs: [\n      'OKU6A2Q...',\n    ],\n  }\n  */\n} catch (error) {\n  // handle error\n}\n")))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If the specified wallet does not exist, then a ",(0,r.kt)("a",{parentName:"p",href:"../../api-reference/errors#walletdoesnotexisterror"},(0,r.kt)("inlineCode",{parentName:"a"},"WalletDoesNotExistError"))," will be thrown.")))}v.isMDXComponent=!0}}]);
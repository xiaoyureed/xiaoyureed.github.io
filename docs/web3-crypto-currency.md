---
title: Web3 和加密货币
tags: [web3, crypto]
date: 2024-03-14 15:31:40
toc_min_heading_level: 2
toc_max_heading_level: 5
---

https://decert.me/tutorial/blockchain-basic/blockchains

《精通比特币》

http://zhenxiao.com/blockchain/
https://www.bilibili.com/video/av37065233/?from=search&seid=10142609027487181062

https://github.com/chaseSpace/learn_blockchain


<!--truncate-->

- [web3 terms](#web3-terms)
- [和 rust](#和-rust)
- [加密算法](#加密算法)
- [共识算法](#共识算法)
- [p2p 协议](#p2p-协议)
- [智能合约](#智能合约)



## web3 terms

```rs

web3: 分为三大部分, 
    crypto ( 加密货币 或者叫 同质化代币/令牌): 以数字/虚拟形式存在, 使用加密技术来保护交易的任何形式的货币
    nft 非同质化代币/令牌: 和 crypto 相对, 每个单品各不相同, 如无聊猿, crypto 每个币都是一样的
    Dao 去中心化组织

大饼/冰糖橙 : BTC 比特币

二姨太/二饼: ETH 以太坊

FOMO: 错失恐惧

FUD: 媒体或个人发布的散播恐惧/疑惑的文章/言论

rug pull : 归零, 你投资的虚拟资产项目方跑路了

预言机: 区块链为了保证其安全性, 禁止直接获取现实中的信息, 预言机可以充当区块链和现实世界的桥梁, 如提供现实世界的天气情况, 代表: Chainlink

DApp: 运行在区块链上的 app (Decentralized App)

socialFi: 区块链+社交, 去中心化社交, 解决当前存在的隐私泄露, 服务器中断, 同时让 KOL 创造更大的粉丝经济

CeFi: 中心化金融, 如银行, 支付宝, 金融活动需要有权威的公信力的机构来担保, 并接收中心机构的审查, 成本高

DeFi: 去中心化金融, 公信力机构的担保/审查将部分甚至全部交由区块链来完成, 降低成本, 代表: uniswap

GameFi: DeFi + game , 游戏化金融, 目前不靠谱, 充满诈骗

DID: 去中心化身份, 在区块链中的身份

DAO: Decentralized Autonomous organization 去中心化自治组织, 基于区块链的一种组织形态, 组织的控制权分散在成员之间, 而不是某个特定的人, 其工作由预先写好的智能合约决定, 不可篡改. 

CEX: 中心化的加密货币交易所, 由一个实体/公司控制, 如香港加密货币交易所 (HKD)

DEX: 去中心化交易所, 是 Defi 的主要载体, 如 uniswap

LP: DEX 中的存单, 可以通过 Lp 置换出原先存入的代币

Gas fee: 支付给矿工的费用, 燃料. 即交易的手续费, 动态变化的

共识机制:
    POW: 工作量证明, 矿工要参与记账, 需要贡献算力解答难题
    POS: 股权证明, 更环保. 矿工仅仅需要质押 ETh即可参与记账, 若矿工试图做坏事, 将没收 ETH

公链: BTC, Solana (使用 rust 开发合约)

EVM 链: 如 eth, BIC

    EOA: 外部账户 (普通用户所有的地址), 通过公钥计算而来, 拥有私钥即可控制这个账户

    CA: 合同账户 (内部账户), 比如用 solity 写的智能合约在 eth 网络上部署, 得到的那个地址就是这里的账户

测试链: 可以获得和主网一样的体验, 模拟主网进行开发部署, 但是上面的资产没有价值

水龙头: 服务于测试链的, 用户可以每天领取一定的测试币

AirDrop : 空投, 大部分 web3 项目都会在早期空投 token 给参与的用户, 用作激励

Mint: 在链上铸造某种虚拟资产

白名单: 项目方设置的一些拥有特权的地址(账户), 拥有购买资格 或者免费购买资格, 可以保证 mint 成功

蓝筹: 有前景的项目

OG: 项目的早期参与者

Mod: 帮助项目方的社区志愿者

巨鲸: web3项目中的资产大户

Sweep the floor : 扫货, 以地板价买入大量资产, 等涨价后卖出

Layer0: 泛指区块链的底层协议, 连接各个公链, 是的各个公粮上的资产能够互相流通

layer1: 各种公链, 如 Btc, Eth, 国产链conflux

layer2: 架构在公链上的第二层网络, 对 layer1 进行扩展, 降费, 如 Polygon

稳定币: 如果代币本身与另外一种资产挂钩, 那么这种代币就是稳定币, 如usdt 与美元挂钩, 汇率稳定在 1:1

三明治机器人: 

智能合约:

ABI: 类似于传统的 api, 为了与链上合约进行交互而提供的接口

```

## 和 rust

```rs
Substrate subtrate 框架 波卡生态的应用链开发框架，rust 语言的

Polkadot

Near

Solana

ICP

Conflux

Nervos

Aptos

Sui



```

## 加密算法


## 共识算法

## p2p 协议


## 智能合约

归属于应用层开发, 又细分 NFT/DEFI 方向

https://www.youtube.com/watch?v=M576WGiDBdQ&embeds_referring_euri=https%3A%2F%2Fwww.v2ex.com%2Ft%2F835692&feature=emb_imp_woyt solidity 基于以太坊

相关开发生态（ remix/truffle/hardhat 等）



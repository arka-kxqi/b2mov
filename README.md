# B2Mov

For years, I’ve wanted to participate in funding initiatives to invest in projects—startups and others—but the bureaucracy, high requirements, and numerous obstacles have made it very difficult. This isn’t just my experience; many others who have a bit of money and want to support projects in the medium or long term face the same issues.

The private investment fund market is substantial but challenging to quantify due to a lack of comprehensive data. However, it's clear that the market has grown significantly over recent decades. According to Bain & Company's Global Private Equity Report 2021, assets under management in the private equity industry reached a record of approximately US$4.6 trillion in 2020. Besides traditional private equity, other private investment funds like hedge funds, venture capital funds, and private debt funds also contribute to this growth.

Through DAOs (Decentralized Autonomous Organizations), we can create structures that allow anyone to invest in projects via investment clubs, whether through affinity of ideas, professional relationships, or other means, using Blockchain technology. This can be done from anywhere in the world with fewer requirements, which is why B2Mov was created.

## LIVE FRONTEND - [B2Mov](https://btcclub-h97j.vercel.app/)

## DEMO VIDEO - [Watch Here](https://youtu.be/FTeX02Gme5s?si=WKJdaV-7_yOkeT8B)

## Smart Contract Deployed on B² Testnet
- Smart contract - 0x4102264faD436edD9B0015A5031C32FC79D4cD59

### [B² Testnet Explorer](https://testnet-explorer.bsquared.network/address/0x4102264faD436edD9B0015A5031C32FC79D4cD59)

![Smart Contract Deployment](https://github.com/user-attachments/assets/85bf7b35-159a-4ced-8255-25b6cd825533)

## Smart Account

### [Smart Account on B² Testnet](https://testnet-explorer.bsquared.network/address/0x2eD46De2217B43E19cc4522490ebb23ef824E104)

![Smart Account](https://github.com/user-attachments/assets/ef92a60d-d04d-44cf-b0ae-3fed7c7fbe1e)

## Particle Network AA (Gasless Transactions for B² Testnet)

### [User Operation on B² Testnet](https://testnet-explorer.bsquared.network/op/0x4600cbf5b6ac6e36d237e17563474f8d71ff5e7ca2be935e2175616d79bbba47)

![Particle Network](https://github.com/user-attachments/assets/406d8f68-b969-4f40-84d9-3762572605a6)

---

### Introduction

**B2Mov** is a treasury management DApp designed to help small startups and students raise funds. All fund distribution is managed through a DAO, ensuring transparency and community-driven decision-making.

### Key Features

- **Create Investment Clubs**: Users can define a name and create an investment club, which will be associated with their account as the owner.

  ![Create Investment Club](https://github.com/user-attachments/assets/d8f1ba69-cbca-4a51-9f87-bdd28dcbcbaa)

- **Join or Leave Clubs**: Anyone with a Conflux blockchain account can easily join or leave available investment clubs with just a few clicks.

  ![Join or Leave Club](https://github.com/user-attachments/assets/223929ba-65c4-45f0-acee-12c7290a6d3d)

- **Contribute to the Club**: Club members can contribute to the common fund (pool), depositing BTC coins that can be used for proposals.

  ![Contribute to Club](https://github.com/user-attachments/assets/b56eaaf4-d035-4c80-a4a2-720eb608cb50)

  [Transaction Details](https://testnet-explorer.bsquared.network/tx/0x1c967db9f6de5e7eff52647a8ccb99dbe177540342552d78b2a91f64caa300ba?tab=overview)

- **Create and Vote on Proposals**: Members who have contributed funds can create proposals with descriptions, amounts (not exceeding the pool amount), and recipients, aiming to invest in any business or project. Members can then approve or reject the proposal, with each member having one vote per proposal.

  ![Create and Vote on Proposals](https://github.com/user-attachments/assets/9fa23907-dbb4-41a0-9604-b659f2116fa9)

- **Run Proposals**: Proposal owners can execute proposals (if approval exceeds rejection) to send the specified amount to the recipient. They can also close a proposal if needed, whether due to cancellation, publication error, or to prevent fund distribution.

  ![Run Proposals](https://github.com/user-attachments/assets/81d7a705-d0c4-4368-830d-208407482531)

  [Proposal Execution Details](https://testnet-explorer.bsquared.network/tx/0x9a9fa97fb3eec622a41c39f27263e05c9e573537acf3360ea1cbeba70cbdf58b?tab=overview)

- **Timing Voting**: After a proposal is created, members have about 5 minutes to vote.

  ![Timing Voting](https://github.com/user-attachments/assets/cf087cf7-9486-4651-bf3f-698336b87281)

### Restrictions

The club smart contract includes certain restrictions, akin to real hedge funds:

- A maximum of 99 members per club (reflecting legal limits in jurisdictions like the USA and Chile).
- Only members can participate in club activities.
- Only members who contribute funds have the right to create proposals.
- Only proposal creators can execute them.

### Challenges

- Understanding DAO mechanics was crucial and took more than 4 hours to fully conceptualize for this project.
- Connecting BTC via the Particle Network posed difficulties due to outdated libraries, but with support from Particle Network DevRel, the issue was resolved.

https://btcclub-h97j.vercel.app/
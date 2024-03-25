```
┌───────────┐
│   Users   │
├───────────┤
│    _id    │
│    name   │
│   email   │
│  password │
└───────────┘
      │
      │
      └──────────────┐
                     │
                     ▼
┌───────────┐    ┌───────────┐
│  Products │    │Transactions│
├───────────┤    ├───────────┤
│    _id    │    │    _id    │
│    name   │    │   buyer   │◄─────┐
│description│    │  product  │      │
│   price   │    │   date    │      │
│ listedBy  │────┤  quantity │      │
└───────────┘    └───────────┘      │
      │                              │
      └──────────────────────────────┘
```
var it = Object.defineProperty
var ot = (e, t, a) => (t in e ? it(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a))
var l = (e, t, a) => (ot(e, typeof t != "symbol" ? t + "" : t, a), a)
import {
    r as $,
    o as c,
    c as y,
    a as s,
    t as f,
    b as p,
    w as T,
    d as m,
    e as _,
    F as M,
    f as ve,
    g as ut,
    S as dt,
    i as F,
    C as Me,
    I as x,
    h as k,
    j as Ie,
    k as De,
    l as pt,
    m as P,
    n as te,
    W as Ce,
    B as V,
    D as E,
    p as ne,
    q as lt,
    u as b,
    s as D,
    v as Se,
    x as ct,
    y as yt,
    z as Fe,
    A as be,
    E as ae,
    G as ie,
    H as bt,
    J as ft,
    K as mt,
    L as Tt,
} from "./vendor.55821603.js"
const ht = function () {
    const t = document.createElement("link").relList
    if (t && t.supports && t.supports("modulepreload")) return
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) o(i)
    new MutationObserver((i) => {
        for (const r of i) if (r.type === "childList") for (const u of r.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && o(u)
    }).observe(document, { childList: !0, subtree: !0 })
    function a(i) {
        const r = {}
        return (
            i.integrity && (r.integrity = i.integrity),
            i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
            i.crossorigin === "use-credentials"
                ? (r.credentials = "include")
                : i.crossorigin === "anonymous"
                ? (r.credentials = "omit")
                : (r.credentials = "same-origin"),
            r
        )
    }
    function o(i) {
        if (i.ep) return
        i.ep = !0
        const r = a(i)
        fetch(i.href, r)
    }
}
ht()
var gt = (e, t) => {
    const a = e.__vccOpts || e
    for (const [o, i] of t) a[o] = i
    return a
}
const wt = {},
    At = { class: "navbar navbar-expand-lg navbar-light bg-light sticky-top" },
    Et = { class: "container-fluid" },
    Mt = { class: "navbar-brand", href: "#" },
    _t = s(
        "button",
        {
            class: "navbar-toggler",
            type: "button",
            "data-bs-toggle": "collapse",
            "data-bs-target": "#navbarSupportedContent",
            "aria-controls": "navbarSupportedContent",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
        },
        [s("span", { class: "navbar-toggler-icon" })],
        -1
    ),
    xt = { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
    kt = { class: "navbar-nav me-auto mb-2 mb-lg-0" },
    vt = { class: "nav-item" },
    Ct = m("Home"),
    Ot = { class: "nav-item dropdown" },
    Bt = s(
        "a",
        {
            class: "nav-link dropdown-toggle",
            href: "#",
            id: "navbarDropdown",
            role: "button",
            "data-bs-toggle": "dropdown",
            "aria-expanded": "false",
        },
        " Sushi ",
        -1
    ),
    It = { class: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
    Dt = m("Multi Sigs"),
    St = m("Routers"),
    Ft = m("Factories"),
    Ut = m("Makers"),
    Nt = m("Chefs"),
    Rt = m("BentoBoxes"),
    Lt = { class: "navbar-nav d-flex" }
function Ht(e, t) {
    var o
    const a = $("router-link")
    return (
        c(),
        y("nav", At, [
            s("div", Et, [
                s("a", Mt, f(e.app.name), 1),
                _t,
                s("div", xt, [
                    s("ul", kt, [
                        s("li", vt, [p(a, { class: "nav-link active", "aria-current": "page", to: "/" }, { default: T(() => [Ct]), _: 1 })]),
                        s("li", Ot, [
                            Bt,
                            s("ul", It, [
                                s("li", null, [
                                    p(a, { class: "dropdown-item", "aria-current": "page", to: "/multisigs" }, { default: T(() => [Dt]), _: 1 }),
                                ]),
                                s("li", null, [
                                    p(a, { class: "dropdown-item", "aria-current": "page", to: "/routers" }, { default: T(() => [St]), _: 1 }),
                                ]),
                                s("li", null, [
                                    p(a, { class: "dropdown-item", "aria-current": "page", to: "/factories" }, { default: T(() => [Ft]), _: 1 }),
                                ]),
                                s("li", null, [
                                    p(a, { class: "dropdown-item", "aria-current": "page", to: "/makers" }, { default: T(() => [Ut]), _: 1 }),
                                ]),
                                s("li", null, [
                                    p(a, { class: "dropdown-item", "aria-current": "page", to: "/chefs" }, { default: T(() => [Nt]), _: 1 }),
                                ]),
                                s("li", null, [
                                    p(
                                        a,
                                        { class: "dropdown-item", "aria-current": "page", to: "/bentoboxes" },
                                        { default: T(() => [Rt]), _: 1 }
                                    ),
                                ]),
                            ]),
                        ]),
                    ]),
                    s("ul", Lt, f((o = e.app.web3.connector) == null ? void 0 : o.chainName) + " " + f(e.app.web3.address), 1),
                ]),
            ]),
        ])
    )
}
var Pt = gt(wt, [["render", Ht]])
const $t = m(" Loading... "),
    Gt = _({
        setup(e) {
            return (t, a) => {
                const o = $("router-view")
                return (
                    c(),
                    y(
                        M,
                        null,
                        [
                            p(Pt),
                            p(o, null, {
                                default: T(({ Component: i }) => [
                                    (c(),
                                    ve(
                                        dt,
                                        null,
                                        { fallback: T(() => [$t]), default: T(() => [s("div", null, [(c(), ve(ut(i)))])]), _: 2 },
                                        1024
                                    )),
                                ]),
                                _: 1,
                            }),
                        ],
                        64
                    )
                )
            }
        },
    }),
    Yt = { class: "row mt-3" },
    Vt = s("div", { class: "col-10 mx-auto" }, null, -1),
    qt = [Vt],
    Kt = _({
        setup(e) {
            return F("app"), (t, a) => (c(), y("div", Yt, qt))
        },
    }),
    J = [
        {
            inputs: [
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "aggregate",
            outputs: [
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
                { internalType: "bytes[]", name: "returnData", type: "bytes[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "blockAndAggregate",
            outputs: [
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
                { internalType: "bytes32", name: "blockHash", type: "bytes32" },
                {
                    components: [
                        { internalType: "bool", name: "success", type: "bool" },
                        { internalType: "bytes", name: "returnData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
            name: "getBlockHash",
            outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getBlockNumber",
            outputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockCoinbase",
            outputs: [{ internalType: "address", name: "coinbase", type: "address" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockDifficulty",
            outputs: [{ internalType: "uint256", name: "difficulty", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockGasLimit",
            outputs: [{ internalType: "uint256", name: "gaslimit", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockTimestamp",
            outputs: [{ internalType: "uint256", name: "timestamp", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [{ internalType: "address", name: "addr", type: "address" }],
            name: "getEthBalance",
            outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getLastBlockHash",
            outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                { internalType: "bool", name: "requireSuccess", type: "bool" },
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "tryAggregate",
            outputs: [
                {
                    components: [
                        { internalType: "bool", name: "success", type: "bool" },
                        { internalType: "bytes", name: "returnData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "bool", name: "requireSuccess", type: "bool" },
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "tryBlockAndAggregate",
            outputs: [
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
                { internalType: "bytes32", name: "blockHash", type: "bytes32" },
                {
                    components: [
                        { internalType: "bool", name: "success", type: "bool" },
                        { internalType: "bytes", name: "returnData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    Oe =
        "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d146101a657806386d516e8146101c4578063a8b0574e146101e2578063bce38bd714610200578063c3077fa914610230578063ee82ac5e14610262576100b4565b80630f28c97d146100b9578063252dba42146100d757806327e86d6e14610108578063399542e91461012657806342cbb15c146101585780634d2301cc14610176575b600080fd5b6100c1610292565b6040516100ce91906106a3565b60405180910390f35b6100f160048036038101906100ec91906109d2565b61029a565b6040516100ff929190610b65565b60405180910390f35b610110610423565b60405161011d9190610bae565b60405180910390f35b610140600480360381019061013b9190610c01565b610438565b60405161014f93929190610d6b565b60405180910390f35b610160610457565b60405161016d91906106a3565b60405180910390f35b610190600480360381019061018b9190610da9565b61045f565b60405161019d91906106a3565b60405180910390f35b6101ae610480565b6040516101bb91906106a3565b60405180910390f35b6101cc610488565b6040516101d991906106a3565b60405180910390f35b6101ea610490565b6040516101f79190610de5565b60405180910390f35b61021a60048036038101906102159190610c01565b610498565b6040516102279190610e00565b60405180910390f35b61024a600480360381019061024591906109d2565b610640565b60405161025993929190610d6b565b60405180910390f35b61027c60048036038101906102779190610e4e565b610663565b6040516102899190610bae565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff8111156102bc576102bb6106e8565b5b6040519080825280602002602001820160405280156102ef57816020015b60608152602001906001900390816102da5790505b50905060005b835181101561041d5760008085838151811061031457610313610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061034957610348610e7b565b5b6020026020010151602001516040516103629190610ee6565b6000604051808303816000865af19150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5091509150816103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090610f5a565b60405180910390fd5b808484815181106103fd576103fc610e7b565b5b60200260200101819052505050808061041590610fa9565b9150506102f5565b50915091565b60006001436104329190610ff2565b40905090565b60008060604392504340915061044e8585610498565b90509250925092565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b6060815167ffffffffffffffff8111156104b5576104b46106e8565b5b6040519080825280602002602001820160405280156104ee57816020015b6104db61066e565b8152602001906001900390816104d35790505b50905060005b82518110156106395760008084838151811061051357610512610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061054857610547610e7b565b5b6020026020010151602001516040516105619190610ee6565b6000604051808303816000865af19150503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915085156105ef57816105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590611098565b60405180910390fd5b5b604051806040016040528083151581526020018281525084848151811061061957610618610e7b565b5b60200260200101819052505050808061063190610fa9565b9150506104f4565b5092915050565b6000806060610650600185610438565b8093508194508295505050509193909250565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b61069d8161068a565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610720826106d7565b810181811067ffffffffffffffff8211171561073f5761073e6106e8565b5b80604052505050565b60006107526106be565b905061075e8282610717565b919050565b600067ffffffffffffffff82111561077e5761077d6106e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107c98261079e565b9050919050565b6107d9816107be565b81146107e457600080fd5b50565b6000813590506107f6816107d0565b92915050565b600080fd5b600067ffffffffffffffff82111561081c5761081b6106e8565b5b610825826106d7565b9050602081019050919050565b82818337600083830152505050565b600061085461084f84610801565b610748565b9050828152602081018484840111156108705761086f6107fc565b5b61087b848285610832565b509392505050565b600082601f830112610898576108976106d2565b5b81356108a8848260208601610841565b91505092915050565b6000604082840312156108c7576108c6610794565b5b6108d16040610748565b905060006108e1848285016107e7565b600083015250602082013567ffffffffffffffff81111561090557610904610799565b5b61091184828501610883565b60208301525092915050565b600061093061092b84610763565b610748565b905080838252602082019050602084028301858111156109535761095261078f565b5b835b8181101561099a57803567ffffffffffffffff811115610978576109776106d2565b5b80860161098589826108b1565b85526020850194505050602081019050610955565b5050509392505050565b600082601f8301126109b9576109b86106d2565b5b81356109c984826020860161091d565b91505092915050565b6000602082840312156109e8576109e76106c8565b5b600082013567ffffffffffffffff811115610a0657610a056106cd565b5b610a12848285016109a4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a81578082015181840152602081019050610a66565b83811115610a90576000848401525b50505050565b6000610aa182610a47565b610aab8185610a52565b9350610abb818560208601610a63565b610ac4816106d7565b840191505092915050565b6000610adb8383610a96565b905092915050565b6000602082019050919050565b6000610afb82610a1b565b610b058185610a26565b935083602082028501610b1785610a37565b8060005b85811015610b535784840389528151610b348582610acf565b9450610b3f83610ae3565b925060208a01995050600181019050610b1b565b50829750879550505050505092915050565b6000604082019050610b7a6000830185610694565b8181036020830152610b8c8184610af0565b90509392505050565b6000819050919050565b610ba881610b95565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b60008115159050919050565b610bde81610bc9565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b60008060408385031215610c1857610c176106c8565b5b6000610c2685828601610bec565b925050602083013567ffffffffffffffff811115610c4757610c466106cd565b5b610c53858286016109a4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c9281610bc9565b82525050565b6000604083016000830151610cb06000860182610c89565b5060208301518482036020860152610cc88282610a96565b9150508091505092915050565b6000610ce18383610c98565b905092915050565b6000602082019050919050565b6000610d0182610c5d565b610d0b8185610c68565b935083602082028501610d1d85610c79565b8060005b85811015610d595784840389528151610d3a8582610cd5565b9450610d4583610ce9565b925060208a01995050600181019050610d21565b50829750879550505050505092915050565b6000606082019050610d806000830186610694565b610d8d6020830185610b9f565b8181036040830152610d9f8184610cf6565b9050949350505050565b600060208284031215610dbf57610dbe6106c8565b5b6000610dcd848285016107e7565b91505092915050565b610ddf816107be565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b60006020820190508181036000830152610e1a8184610cf6565b905092915050565b610e2b8161068a565b8114610e3657600080fd5b50565b600081359050610e4881610e22565b92915050565b600060208284031215610e6457610e636106c8565b5b6000610e7284828501610e39565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000610ec082610a47565b610eca8185610eaa565b9350610eda818560208601610a63565b80840191505092915050565b6000610ef28284610eb5565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564600082015250565b6000610f44602083610efd565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb48261068a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fe757610fe6610f7a565b5b600182019050919050565b6000610ffd8261068a565b91506110088361068a565b92508282101561101b5761101a610f7a565b5b828203905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611082602183610efd565b915061108d82611026565b604082019050919050565b600060208201905081810360008301526110b181611075565b905091905056fea26469706673582212202ad79168f7d1dfe0e32b590efa8eefaaaf0c61e9f6257161be30bcbab1ad332264736f6c63430008090033",
    Xt = (e) => e.length > 1
class Q extends Me {
    constructor(...t) {
        l(this, "contractName")
        Xt(t) ? super(...t) : super(J, Oe, t[0]), (this.contractName = "Multicall2")
    }
    deploy(t) {
        return super.deploy(t || {})
    }
    getDeployTransaction(t) {
        return super.getDeployTransaction(t || {})
    }
    attach(t) {
        return super.attach(t)
    }
    connect(t) {
        return super.connect(t)
    }
    static createInterface() {
        return new x(J)
    }
    static connect(t, a) {
        return new k(t, J, a)
    }
}
l(Q, "contractName"), l(Q, "bytecode", Oe), l(Q, "abi", J)
var n = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.ETHEREUM = 1)] = "ETHEREUM"),
    (e[(e.ROPSTEN = 3)] = "ROPSTEN"),
    (e[(e.KOVAN = 42)] = "KOVAN"),
    (e[(e.RINKEBY = 4)] = "RINKEBY"),
    (e[(e.GOERLI = 5)] = "GOERLI"),
    (e[(e.OPTIMISM = 10)] = "OPTIMISM"),
    (e[(e.BINANCE = 56)] = "BINANCE"),
    (e[(e.OKEX_TEST = 65)] = "OKEX_TEST"),
    (e[(e.OKEX = 66)] = "OKEX"),
    (e[(e.BINANCE_TEST = 98)] = "BINANCE_TEST"),
    (e[(e.FUSE = 122)] = "FUSE"),
    (e[(e.POLYGON = 137)] = "POLYGON"),
    (e[(e.POLYGON_TEST = 80001)] = "POLYGON_TEST"),
    (e[(e.XDAI = 100)] = "XDAI"),
    (e[(e.HUOBI = 128)] = "HUOBI"),
    (e[(e.HUOBI_TEST = 256)] = "HUOBI_TEST"),
    (e[(e.ENERGY_WEB_CHAIN = 246)] = "ENERGY_WEB_CHAIN"),
    (e[(e.ENERGY_WEB_CHAIN_TEST = 73799)] = "ENERGY_WEB_CHAIN_TEST"),
    (e[(e.ARBITRUM = 42161)] = "ARBITRUM"),
    (e[(e.ARBITRUM_TEST = 421611)] = "ARBITRUM_TEST"),
    (e[(e.AVALANCHE = 43114)] = "AVALANCHE"),
    (e[(e.AVALANCHE_TEST = 43113)] = "AVALANCHE_TEST"),
    (e[(e.TOMO = 88)] = "TOMO"),
    (e[(e.TOMO_TEST = 89)] = "TOMO_TEST"),
    (e[(e.FANTOM = 250)] = "FANTOM"),
    (e[(e.FANTOM_TEST = 4002)] = "FANTOM_TEST"),
    (e[(e.MOONBEAM = 1284)] = "MOONBEAM"),
    (e[(e.MOONBEAM_KUSAMA = 1285)] = "MOONBEAM_KUSAMA"),
    (e[(e.MOONBEAM_TEST = 1287)] = "MOONBEAM_TEST"),
    (e[(e.HARDHAT = 31337)] = "HARDHAT"),
    (e[(e.CELO = 42220)] = "CELO"),
    (e[(e.HARMONY = 16666e5)] = "HARMONY"),
    (e[(e.HARMONY_TEST = 16667e5)] = "HARMONY_TEST"),
    (e[(e.PALM = 11297108109)] = "PALM"),
    (e[(e.TELOS = 40)] = "TELOS"),
    (e[(e.BOBA = 288)] = "BOBA"),
    (e[(e.AURORA = 1313161554)] = "AURORA"),
    (e[(e.AURORA_TEST = 1313161555)] = "AURORA_TEST"),
    (e[(e.AURORA_BETA = 1313161556)] = "AURORA_BETA"),
    (e[(e.UBIQ = 8)] = "UBIQ"),
    (e[(e.UBIQ_TEST = 9)] = "UBIQ_TEST"),
    (e[(e.CRONOS = 25)] = "CRONOS"),
    (e[(e.KLAYTN = 8217)] = "KLAYTN"),
    (e[(e.METIS = 1088)] = "METIS"),
    (e[(e.METIS_TEST = 588)] = "METIS_TEST"),
    e
))(n || {})
class w {
    constructor(t) {
        l(this, "provider")
        t ? (this.provider = t) : (this.provider = new pt({ url: this.rpcUrls[0] }))
    }
    static get chainId() {
        return n.NONE
    }
    static get chainName() {
        return "None"
    }
    static get nativeCurrency() {
        return { name: "None", symbol: "NONE", decimals: 18 }
    }
    static get rpcUrls() {
        return []
    }
    static get blockExplorerUrls() {
        return []
    }
    static get multiCallAddress() {
        return ""
    }
    static get chainParams() {
        return {
            chainId: Ie(De(this.chainId)),
            chainName: this.chainName,
            nativeCurrency: this.nativeCurrency,
            rpcUrls: this.rpcUrls,
            blockExplorerUrls: this.blockExplorerUrls,
        }
    }
    static get coinGeckoId() {
        return ""
    }
    get type() {
        return this.constructor
    }
    get chainId() {
        return this.type.chainId
    }
    get chainName() {
        return this.type.chainName
    }
    get nativeCurrency() {
        return this.type.nativeCurrency
    }
    get rpcUrls() {
        return this.type.rpcUrls
    }
    get blockExplorerUrls() {
        return this.type.blockExplorerUrls
    }
    get multiCallAddress() {
        return this.type.multiCallAddress
    }
    get coinGeckoId() {
        return this.type.coinGeckoId
    }
}
class _e {
    constructor(t, a) {
        l(this, "connector")
        l(this, "items", [])
        if (((this.connector = t), a && a.length)) for (const o of a) Array.isArray(o) ? this.queue(o[0], o[1]) : this.queue(o)
    }
    queue(t, a, o) {
        this.items.push({ transactionPromise: t, contractInterface: a, callback: o })
    }
    async call(t = 0) {
        const a = []
        for (let o in this.items) this.items[o].transaction = await this.items[o].transactionPromise
        for (; this.items.length; ) {
            const o = Q.connect(this.connector.multiCallAddress, this.connector.provider),
                i = this.items.splice(0, t || this.items.length),
                r = i.map((d) => ({ target: d.transaction.to, callData: d.transaction.data })),
                u = (await o.callStatic.aggregate(r)).returnData
            i.forEach((d, v) => {
                var S
                const O = d.contractInterface
                    ? d.contractInterface.decodeFunctionResult(
                          d.contractInterface.parseTransaction({ data: ((S = d.transaction) == null ? void 0 : S.data) || "" }).name,
                          u[v]
                      )
                    : u[v]
                return d.callback && d.callback(O.length === 1 ? O[0] : O, d.transaction), O
            })
        }
        return a
    }
}
class G extends w {
    static get chainId() {
        return n.ETHEREUM
    }
    static get chainName() {
        return "Ethereum"
    }
    static get nativeCurrency() {
        return { name: "Ethereum", symbol: "ETH", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://mainnet.infura.io/v3/845b3e08e20a41f185f36a2b73cfa5e4"]
    }
    static get blockExplorerUrls() {
        return ["https://etherscan.io/"]
    }
    static get multiCallAddress() {
        return "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696"
    }
    static get coinGeckoId() {
        return "ethereum"
    }
}
class Wt extends G {
    static get chainId() {
        return n.ROPSTEN
    }
    static get chainName() {
        return "Ropsten"
    }
    static get rpcUrls() {
        return ["https://ropsten.infura.io/v3/845b3e08e20a41f185f36a2b73cfa5e4"]
    }
    static get blockExplorerUrls() {
        return ["https://ropsten.etherscan.io/"]
    }
    static get coinGeckoId() {
        return "ethereum"
    }
}
class jt extends G {
    static get chainId() {
        return n.KOVAN
    }
    static get chainName() {
        return "Kovan"
    }
    static get rpcUrls() {
        return ["https://kovan.infura.io/v3/845b3e08e20a41f185f36a2b73cfa5e4"]
    }
    static get blockExplorerUrls() {
        return ["https://kovan.etherscan.io/"]
    }
}
class Jt extends G {
    static get chainId() {
        return n.RINKEBY
    }
    static get chainName() {
        return "Rinkeby"
    }
    static get rpcUrls() {
        return ["https://rinkeby.infura.io/v3/845b3e08e20a41f185f36a2b73cfa5e4"]
    }
    static get blockExplorerUrls() {
        return ["https://rinkeby.etherscan.io/"]
    }
}
class Qt extends G {
    static get chainId() {
        return n.GOERLI
    }
    static get chainName() {
        return "G\xF6rli"
    }
    static get rpcUrls() {
        return ["https://goerli.infura.io/v3/845b3e08e20a41f185f36a2b73cfa5e4"]
    }
    static get blockExplorerUrls() {
        return ["https://goerli.etherscan.io/"]
    }
}
class Ue extends w {
    static get chainId() {
        return n.BINANCE
    }
    static get chainName() {
        return "Binance Smart Chain"
    }
    static get nativeCurrency() {
        return { name: "BNB", symbol: "BNB", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://bsc-dataseed.binance.org/"]
    }
    static get blockExplorerUrls() {
        return ["https://bscscan.com/"]
    }
    static get multiCallAddress() {
        return "0xa9193376D09C7f31283C54e56D013fCF370Cd9D9"
    }
    static get coinGeckoId() {
        return "binance-smart-chain"
    }
}
class Zt extends Ue {
    static get chainId() {
        return n.BINANCE_TEST
    }
    static get chainName() {
        return "Binance Smart Chain Testnet"
    }
    static get rpcUrls() {
        return ["https://data-seed-prebsc-1-s1.binance.org:8545/"]
    }
    static get blockExplorerUrls() {
        return ["https://testnet.bscscan.com/"]
    }
    static get multiCallAddress() {
        return ""
    }
}
class zt extends w {
    static get chainId() {
        return n.FUSE
    }
    static get chainName() {
        return "Fuse"
    }
    static get nativeCurrency() {
        return { name: "Fuse", symbol: "FUSE", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.fuse.io/"]
    }
    static get blockExplorerUrls() {
        return ["https://explorer.fuse.io/"]
    }
    static get multiCallAddress() {
        return "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F"
    }
    static get coinGeckoId() {
        return "fuse"
    }
}
class Ne extends w {
    static get chainId() {
        return n.POLYGON
    }
    static get chainName() {
        return "Polygon"
    }
    static get nativeCurrency() {
        return { name: "MATIC", symbol: "MATIC", decimals: 18 }
    }
    static get rpcUrls() {
        return [
            "https://matic-mainnet.chainstacklabs.com/",
            "https://rpc-mainnet.matic.network/",
            "https://rpc-mainnet.maticvigil.com/",
            "https://rpc-mainnet.matic.quiknode.pro/",
            "https://matic-mainnet-full-rpc.bwarelabs.com/",
            "https://matic-mainnet-archive-rpc.bwarelabs.com/",
        ]
    }
    static get blockExplorerUrls() {
        return [
            "https://polygonscan.com/",
            "https://polygon-explorer-mainnet.chainstacklabs.com/",
            "https://explorer-mainnet.maticvigil.com/",
            "https://explorer.matic.network/",
            "https://backup-explorer.matic.network/",
        ]
    }
    static get multiCallAddress() {
        return "0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD"
    }
    static get coinGeckoId() {
        return "polygon-pos"
    }
}
class en extends Ne {
    static get chainId() {
        return n.POLYGON_TEST
    }
    static get chainName() {
        return "Mumbai (Polygon Testnet)"
    }
    static get rpcUrls() {
        return [
            "https://matic-mumbai.chainstacklabs.com/",
            "https://rpc-mumbai.matic.today/",
            "https://rpc-mumbai.maticvigil.com/",
            "https://matic-testnet-archive-rpc.bwarelabs.com/",
        ]
    }
    static get blockExplorerUrls() {
        return [
            "https://mumbai.polygonscan.com/",
            "https://polygon-explorer-mumbai.chainstacklabs.com/",
            "https://explorer-mumbai.maticvigil.com/",
            "https://mumbai-explorer.matic.today/",
            "https://backup-mumbai-explorer.matic.today/",
        ]
    }
    static get multiCallAddress() {
        return "0xc1400d49baa8e307B4462cD46E0a20109D25F50f"
    }
}
class tn extends w {
    static get chainId() {
        return n.XDAI
    }
    static get chainName() {
        return "Gnosis (xDai)"
    }
    static get nativeCurrency() {
        return { name: "xDai", symbol: "xDAI", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.gnosischain.com/"]
    }
    static get blockExplorerUrls() {
        return ["https://blockscout.com/xdai/mainnet/"]
    }
    static get multiCallAddress() {
        return "0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287"
    }
    static get coinGeckoId() {
        return "xdai"
    }
}
class Re extends w {
    static get chainId() {
        return n.HUOBI
    }
    static get chainName() {
        return "Heco"
    }
    static get nativeCurrency() {
        return { name: "HT", symbol: "HT", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://http-mainnet-node.huobichain.com/"]
    }
    static get blockExplorerUrls() {
        return ["https://www.hecochain.io/", "https://hecoinfo.com/"]
    }
    static get multiCallAddress() {
        return "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3"
    }
    static get coinGeckoId() {
        return "huobi-token"
    }
}
class nn extends Re {
    static get chainId() {
        return n.HUOBI_TEST
    }
    static get chainName() {
        return "Heco Testnet"
    }
    static get rpcUrls() {
        return ["https://http-testnet.hecochain.com/"]
    }
    static get blockExplorerUrls() {
        return ["https://scan-testnet.hecochain.com/"]
    }
    static get multiCallAddress() {
        return ""
    }
}
class Le extends G {
    static get chainId() {
        return n.ARBITRUM
    }
    static get chainName() {
        return "Arbitrum"
    }
    static get rpcUrls() {
        return ["https://arb1.arbitrum.io/rpc/"]
    }
    static get blockExplorerUrls() {
        return ["https://arbiscan.io/"]
    }
    static get multiCallAddress() {
        return "0x80C7DD17B01855a6D2347444a0FCC36136a314de"
    }
    static get coinGeckoId() {
        return "arbitrum-one"
    }
}
class an extends Le {
    static get chainId() {
        return n.ARBITRUM_TEST
    }
    static get chainName() {
        return "Arbitrum Testnet"
    }
    static get rpcUrls() {
        return ["https://rinkeby.arbitrum.io/rpc/"]
    }
    static get blockExplorerUrls() {
        return ["https://rinkeby-explorer.arbitrum.io/"]
    }
    static get multiCallAddress() {
        return "0xa501c031958F579dB7676fF1CE78AD305794d579"
    }
}
class He extends w {
    static get chainId() {
        return n.AVALANCHE
    }
    static get chainName() {
        return "Avalanche Mainnet C-Chain"
    }
    static get nativeCurrency() {
        return { name: "Avalanche", symbol: "AVAX", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://api.avax.network/ext/bc/C/rpc"]
    }
    static get blockExplorerUrls() {
        return ["https://cchain.explorer.avax.network/"]
    }
    static get multiCallAddress() {
        return "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3"
    }
    static get coinGeckoId() {
        return "avalanche"
    }
}
class sn extends He {
    static get chainId() {
        return n.AVALANCHE_TEST
    }
    static get chainName() {
        return "Avalanche Testnet C-Chain"
    }
    static get rpcUrls() {
        return ["https://api.avax-test.network/ext/bc/C/rpc/"]
    }
    static get blockExplorerUrls() {
        return ["https://cchain.explorer.avax-test.network/"]
    }
    static get multiCallAddress() {
        return ""
    }
}
class Pe extends w {
    static get chainId() {
        return n.TOMO
    }
    static get chainName() {
        return "TomoChain"
    }
    static get nativeCurrency() {
        return { name: "TOMO", symbol: "TOMO", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.tomochain.com/"]
    }
    static get blockExplorerUrls() {
        return ["https://scan.tomochain.com/"]
    }
    static get coinGeckoId() {
        return "tomochain"
    }
}
class rn extends Pe {
    static get chainId() {
        return n.TOMO_TEST
    }
    static get chainName() {
        return "TomoChain Testnet"
    }
    static get rpcUrls() {
        return ["https://rpc.testnet.tomochain.com/"]
    }
    static get blockExplorerUrls() {
        return ["https://scan.testnet.tomochain.com/"]
    }
}
class $e extends w {
    static get chainId() {
        return n.FANTOM
    }
    static get chainName() {
        return "Fantom Opera"
    }
    static get nativeCurrency() {
        return { name: "FTM", symbol: "FTM", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.ftm.tools/"]
    }
    static get blockExplorerUrls() {
        return ["https://ftmscan.com/"]
    }
    static get multiCallAddress() {
        return "0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5"
    }
    static get coinGeckoId() {
        return "fantom"
    }
}
class on extends $e {
    static get chainId() {
        return n.FANTOM
    }
    static get chainName() {
        return "Fantom Testnet"
    }
    static get rpcUrls() {
        return ["https://rpc.testnet.fantom.network/"]
    }
    static get blockExplorerUrls() {
        return []
    }
    static get multiCallAddress() {
        return ""
    }
}
class un extends w {
    static get chainId() {
        return n.MOONBEAM
    }
    static get chainName() {
        return "Moonbeam"
    }
    static get nativeCurrency() {
        return { name: "Moonbeam", symbol: "GLMR", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.api.moonbeam.network"]
    }
    static get blockExplorerUrls() {
        return ["https://moonscan.io/"]
    }
    static get multiCallAddress() {
        return "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F"
    }
}
class dn extends w {
    static get chainId() {
        return n.MOONBEAM_TEST
    }
    static get chainName() {
        return "Moonbase Alpha"
    }
    static get nativeCurrency() {
        return { name: "DEV", symbol: "DEV", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.api.moonbase.moonbeam.network"]
    }
    static get blockExplorerUrls() {
        return ["https://moonbase-blockscout.testnet.moonbeam.network/"]
    }
}
class pn extends w {
    static get chainId() {
        return n.MOONBEAM_KUSAMA
    }
    static get chainName() {
        return "Moonriver"
    }
    static get nativeCurrency() {
        return { name: "MOVR", symbol: "MOVR", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://rpc.api.moonriver.moonbeam.network"]
    }
    static get blockExplorerUrls() {
        return ["https://blockscout.moonriver.moonbeam.network/"]
    }
    static get multiCallAddress() {
        return "0x270f2F35bED92B7A59eA5F08F6B3fd34c8D9D9b5"
    }
    static get coinGeckoId() {
        return "moonriver"
    }
}
class ln extends G {
    static get chainId() {
        return n.HARDHAT
    }
    static get chainName() {
        return "Hardhat"
    }
    static get rpcUrls() {
        return ["http://127.0.0.1:8545/"]
    }
    static get blockExplorerUrls() {
        return []
    }
}
class cn extends w {
    static get chainId() {
        return n.CELO
    }
    static get chainName() {
        return "Celo"
    }
    static get nativeCurrency() {
        return { name: "Celo", symbol: "CELO", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://forno.celo.org"]
    }
    static get blockExplorerUrls() {
        return ["https://explorer.celo.org/"]
    }
    static get multiCallAddress() {
        return "0x9aac9048fC8139667D6a2597B902865bfdc225d3"
    }
    static get coinGeckoId() {
        return "celo"
    }
}
class Ge extends w {
    static get chainId() {
        return n.HARMONY
    }
    static get chainName() {
        return "Harmony"
    }
    static get nativeCurrency() {
        return { name: "Harmony", symbol: "ONE", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://api.harmony.one"]
    }
    static get blockExplorerUrls() {
        return ["https://explorer.harmony.one/"]
    }
    static get multiCallAddress() {
        return "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3"
    }
}
class yn extends Ge {
    static get chainId() {
        return n.HARMONY_TEST
    }
    static get chainName() {
        return "Harmony Testnet"
    }
    static get rpcUrls() {
        return ["https://api.s0.b.hmny.io/"]
    }
    static get blockExplorerUrls() {
        return ["https://explorer.pops.one/"]
    }
    static get multiCallAddress() {
        return ""
    }
}
class Ye extends w {
    static get chainId() {
        return n.OKEX
    }
    static get chainName() {
        return "OKExChain"
    }
    static get nativeCurrency() {
        return { name: "OEC Token", symbol: "OKT", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://exchainrpc.okex.org/"]
    }
    static get blockExplorerUrls() {
        return ["https://www.oklink.com/oec/"]
    }
    static get multiCallAddress() {
        return "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3"
    }
    static get coinGeckoId() {
        return "okex-chain"
    }
}
class bn extends Ye {
    static get chainId() {
        return n.OKEX_TEST
    }
    static get chainName() {
        return "OKExChain Testnet"
    }
    static get rpcUrls() {
        return ["https://exchaintestrpc.okex.org/"]
    }
    static get blockExplorerUrls() {
        return ["https://www.oklink.com/oec-test/"]
    }
    static get multiCallAddress() {
        return ""
    }
}
class fn extends w {
    static get chainId() {
        return n.PALM
    }
    static get chainName() {
        return "Palm"
    }
    static get nativeCurrency() {
        return { name: "Palm", symbol: "PALM", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"]
    }
    static get blockExplorerUrls() {
        return ["https://explorer.palm.io/"]
    }
    static get multiCallAddress() {
        return "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F"
    }
}
class mn extends w {
    static get chainId() {
        return n.TELOS
    }
    static get chainName() {
        return "Telos"
    }
    static get nativeCurrency() {
        return { name: "Telos", symbol: "TLOS", decimals: 18 }
    }
    static get rpcUrls() {
        return ["https://mainnet.telos.net/evm"]
    }
    static get blockExplorerUrls() {
        return ["https://rpc1.us.telos.net/v2/explore/"]
    }
    static get multiCallAddress() {
        return "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3"
    }
}
const h = {
    [n.NONE]: w,
    [n.ETHEREUM]: G,
    [n.ROPSTEN]: Wt,
    [n.KOVAN]: jt,
    [n.RINKEBY]: Jt,
    [n.GOERLI]: Qt,
    [n.BINANCE]: Ue,
    [n.BINANCE_TEST]: Zt,
    [n.FUSE]: zt,
    [n.POLYGON]: Ne,
    [n.POLYGON_TEST]: en,
    [n.XDAI]: tn,
    [n.HUOBI]: Re,
    [n.HUOBI_TEST]: nn,
    [n.ARBITRUM]: Le,
    [n.ARBITRUM_TEST]: an,
    [n.AVALANCHE]: He,
    [n.AVALANCHE_TEST]: sn,
    [n.TOMO]: Pe,
    [n.TOMO_TEST]: rn,
    [n.FANTOM]: $e,
    [n.FANTOM_TEST]: on,
    [n.MOONBEAM]: un,
    [n.MOONBEAM_TEST]: dn,
    [n.MOONBEAM_KUSAMA]: pn,
    [n.HARDHAT]: ln,
    [n.CELO]: cn,
    [n.HARMONY]: Ge,
    [n.HARMONY_TEST]: yn,
    [n.OKEX]: Ye,
    [n.OKEX_TEST]: bn,
    [n.PALM]: fn,
    [n.TELOS]: mn,
}
class Tn {
    constructor() {
        l(this, "name", "Loading...")
        l(this, "connected", !1)
        l(this, "chainId", n.NONE)
        l(this, "address", "")
        l(this, "addresses", [])
        l(this, "block", 0)
        l(this, "provider")
        l(this, "update")
        l(this, "connector")
    }
    connect() {
        this.connected && window.ethereum.request && window.ethereum.request({ method: "eth_requestAccounts" })
    }
    switch(t) {
        window.ethereum &&
            window.ethereum.request &&
            window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: Ie(De(t)) }] }).catch((a) => {
                console.log(a),
                    a.code == 4902 &&
                        window.ethereum &&
                        window.ethereum.request &&
                        window.ethereum.request({ method: "wallet_addEthereumChain", params: [h[t].chainParams] })
            })
    }
    setup() {
        if (
            ((this.update = P(() => this.chainId + "|" + this.block + "|" + this.address)),
            (this.connector = P(() => (this.provider ? new h[this.chainId](this.provider) : null))),
            window.ethereum && window.ethereum.request)
        ) {
            ;(this.provider = te(new Ce(window.ethereum))),
                this.connector,
                window.ethereum.isMetaMask ? (this.name = "MetaMask") : (this.name = "Other"),
                (window.ethereum.autoRefreshOnNetworkChange = !1)
            const t = (r) => {
                    this.block = r
                },
                a = (r) => {
                    var u
                    ;(this.chainId = Number(V.from(r))),
                        (this.connected = !0),
                        (u = this.provider) == null || u.off("block"),
                        (this.provider = te(new Ce(window.ethereum))),
                        this.provider.on("block", t)
                },
                o = (r) => {
                    a(r.chainId)
                },
                i = (r) => {
                    ;(this.addresses = r || []), r && r.length ? (this.address = r[0]) : (this.address = "")
                }
            window.ethereum.on("accountsChanged", i),
                window.ethereum.on("chainChanged", a),
                window.ethereum.on("connect", o),
                window.ethereum.on("disconnect", (r) => {
                    ;(this.connected = !1), (this.block = 0)
                }),
                this.provider.on("block", t),
                window.ethereum
                    .request({ method: "eth_accounts" })
                    .then((r) => {
                        i(r), o({ chainId: window.ethereum.chainId })
                    })
                    .catch((r) => {
                        console.log("Error", r)
                    })
        } else this.name = "None"
    }
}
const oe = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "owner", type: "address" },
            { indexed: !0, internalType: "address", name: "spender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
]
class K {
    static createInterface() {
        return new x(oe)
    }
    static connect(t, a) {
        return new k(t, oe, a)
    }
}
l(K, "abi", oe)
const ue = [
    {
        inputs: [],
        name: "getOwners",
        outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getThreshold",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
]
class Ve {
    static createInterface() {
        return new x(ue)
    }
    static connect(t, a) {
        return new k(t, ue, a)
    }
}
l(Ve, "abi", ue)
const de = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "owner", type: "address" },
            { indexed: !0, internalType: "address", name: "spender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "sender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1", type: "uint256" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "sender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1", type: "uint256" },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "sender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount0In", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1In", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount0Out", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1Out", type: "uint256" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, internalType: "uint112", name: "reserve0", type: "uint112" },
            { indexed: !1, internalType: "uint112", name: "reserve1", type: "uint112" },
        ],
        name: "Sync",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINIMUM_LIQUIDITY",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "burn",
        outputs: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "pure", type: "function" },
    {
        inputs: [],
        name: "factory",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getReserves",
        outputs: [
            { internalType: "uint112", name: "reserve0", type: "uint112" },
            { internalType: "uint112", name: "reserve1", type: "uint112" },
            { internalType: "uint32", name: "blockTimestampLast", type: "uint32" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "kLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "mint",
        outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "pure", type: "function" },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "nonces",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "price0CumulativeLast",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "price1CumulativeLast",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "skim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amount0Out", type: "uint256" },
            { internalType: "uint256", name: "amount1Out", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "swap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "pure", type: "function" },
    { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class R {
    static createInterface() {
        return new x(de)
    }
    static connect(t, a) {
        return new k(t, de, a)
    }
}
l(R, "abi", de)
class qe {
    constructor(t, a) {
        l(this, "connector")
        l(this, "address")
        l(this, "safe")
        ;(this.connector = te(new h[t]())), (this.address = a), (this.safe = te(Ve.connect(a, this.connector.provider)))
    }
    get chainID() {
        return { [n.ETHEREUM]: "eth", [n.XDAI]: "gno", [n.POLYGON]: "matic", [n.BINANCE]: "bnb", [n.ARBITRUM]: "arb1", [n.AVALANCHE]: "avax" }[
            this.connector.chainId
        ]
    }
    get transactionHistoryUrl() {
        if ([n.ETHEREUM, n.XDAI, n.POLYGON, n.BINANCE, n.ARBITRUM, n.AVALANCHE].includes(this.connector.chainId))
            return "https://gnosis-safe.io/app/" + this.chainID + ":" + this.address + "/transactions/history"
        if (this.connector.chainId == n.HARMONY) return "https://multisig.harmony.one/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == n.FANTOM) return "https://safe.fantom.network/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == n.CELO) return "https://ui.celo-safe.io/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == n.MOONBEAM) return "https://multisig.moonbeam.network/moonbeam:" + this.address + "/transactions/history"
        if (this.connector.chainId == n.MOONBEAM_KUSAMA)
            return "https://multisig.moonbeam.network/mriver:" + this.address + "/transactions/history"
        if (this.connector.chainId == n.FUSE) return "https://safe.fuse.io/fuse:" + this.address + "/transactions/history"
    }
    async getOwners() {
        return await this.safe.getOwners()
    }
    async getThreshold() {
        return (await this.safe.getThreshold()).toNumber()
    }
    async getTokenBalances() {
        if ([n.ETHEREUM, n.BINANCE, n.ARBITRUM, n.POLYGON, n.XDAI, n.FUSE, n.CELO, n.FANTOM].indexOf(this.connector.chainId) !== -1) {
            let t =
                "https://safe-client.gnosis.io/v1/chains/" +
                this.connector.chainId +
                "/safes/" +
                this.address +
                "/balances/USD?exclude_spam=true&trusted=false"
            this.connector.chainId === n.FUSE &&
                (t = "https://safe-service.fuse.io/cgw/v1/chains/122/safes/" + this.address + "/balances/USD/?exclude_spam=true&trusted=false"),
                this.connector.chainId === n.CELO &&
                    (t =
                        "https://client-gateway.celo-safe.io/v1/chains/" +
                        this.connector.chainId +
                        "/safes/" +
                        this.address +
                        "/balances/USD?exclude_spam=true&trusted=false"),
                this.connector.chainId === n.FANTOM &&
                    (t =
                        "https://safe.fantom.network/v1/chains/" +
                        this.connector.chainId +
                        "/safes/" +
                        this.address +
                        "/balances/USD?exclude_spam=true&trusted=false")
            const a = await (await fetch(t)).json()
            return { total: parseFloat(a.fiatTotal), tokens: a.items }
        }
        return this.connector.chainId === n.HARMONY
            ? { total: 0, tokens: [] }
            : (console.log("TODO:", this.connector.chainName), { total: 0, tokens: [] })
    }
}
const Z = [
        { inputs: [{ internalType: "string", name: "_greeting", type: "string" }], stateMutability: "nonpayable", type: "constructor" },
        {
            inputs: [],
            name: "greet",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [{ internalType: "string", name: "_greeting", type: "string" }],
            name: "setGreeting",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    Ke =
        "0x60806040523480156200001157600080fd5b5060405162000812380380620008128339818101604052810190620000379190620002a4565b80600090805190602001906200004f92919062000057565b50506200035a565b828054620000659062000324565b90600052602060002090601f016020900481019282620000895760008555620000d5565b82601f10620000a457805160ff1916838001178555620000d5565b82800160010185558215620000d5579182015b82811115620000d4578251825591602001919060010190620000b7565b5b509050620000e49190620000e8565b5090565b5b8082111562000103576000816000905550600101620000e9565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001708262000125565b810181811067ffffffffffffffff8211171562000192576200019162000136565b5b80604052505050565b6000620001a762000107565b9050620001b5828262000165565b919050565b600067ffffffffffffffff821115620001d857620001d762000136565b5b620001e38262000125565b9050602081019050919050565b60005b8381101562000210578082015181840152602081019050620001f3565b8381111562000220576000848401525b50505050565b60006200023d6200023784620001ba565b6200019b565b9050828152602081018484840111156200025c576200025b62000120565b5b62000269848285620001f0565b509392505050565b600082601f8301126200028957620002886200011b565b5b81516200029b84826020860162000226565b91505092915050565b600060208284031215620002bd57620002bc62000111565b5b600082015167ffffffffffffffff811115620002de57620002dd62000116565b5b620002ec8482850162000271565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200033d57607f821691505b60208210811415620003545762000353620002f5565b5b50919050565b6104a8806200036a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea26469706673582212202df62d8852bcb0e0db2e0c936670271d826d4c7f8be6532ea5f14d364c5fc86364736f6c63430008090033",
    hn = (e) => e.length > 1
class Xe extends Me {
    constructor(...t) {
        hn(t) ? super(...t) : super(Z, Ke, t[0]), (this.contractName = "Greeter")
    }
    deploy(t, a) {
        return super.deploy(t, a || {})
    }
    getDeployTransaction(t, a) {
        return super.getDeployTransaction(t, a || {})
    }
    attach(t) {
        return super.attach(t)
    }
    connect(t) {
        return super.connect(t)
    }
    static createInterface() {
        return new x(Z)
    }
    static connect(t, a) {
        return new k(t, Z, a)
    }
}
Xe.bytecode = Ke
Xe.abi = Z
const fe = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "masterContract", type: "address" },
            { indexed: !1, internalType: "bytes", name: "data", type: "bytes" },
            { indexed: !0, internalType: "address", name: "cloneAddress", type: "address" },
        ],
        name: "LogDeploy",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "share", type: "uint256" },
        ],
        name: "LogDeposit",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "borrower", type: "address" },
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "feeAmount", type: "uint256" },
            { indexed: !0, internalType: "address", name: "receiver", type: "address" },
        ],
        name: "LogFlashLoan",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [{ indexed: !0, internalType: "address", name: "protocol", type: "address" }],
        name: "LogRegisterProtocol",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "masterContract", type: "address" },
            { indexed: !0, internalType: "address", name: "user", type: "address" },
            { indexed: !1, internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "LogSetMasterContractApproval",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "LogStrategyDivest",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "LogStrategyInvest",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "LogStrategyLoss",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "LogStrategyProfit",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !0, internalType: "address", name: "strategy", type: "address" },
        ],
        name: "LogStrategyQueued",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !0, internalType: "address", name: "strategy", type: "address" },
        ],
        name: "LogStrategySet",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !1, internalType: "uint256", name: "targetPercentage", type: "uint256" },
        ],
        name: "LogStrategyTargetPercentage",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "share", type: "uint256" },
        ],
        name: "LogTransfer",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "masterContract", type: "address" },
            { indexed: !1, internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "LogWhiteListMasterContract",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token", type: "address" },
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "share", type: "uint256" },
        ],
        name: "LogWithdraw",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: !0, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
        ],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "bytes[]", name: "calls", type: "bytes[]" },
            { internalType: "bool", name: "revertOnFail", type: "bool" },
        ],
        name: "batch",
        outputs: [
            { internalType: "bool[]", name: "successes", type: "bool[]" },
            { internalType: "bytes[]", name: "results", type: "bytes[]" },
        ],
        stateMutability: "payable",
        type: "function",
    },
    { inputs: [], name: "claimOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [
            { internalType: "address", name: "masterContract", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
            { internalType: "bool", name: "useCreate2", type: "bool" },
        ],
        name: "deploy",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token_", type: "address" },
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "share", type: "uint256" },
        ],
        name: "deposit",
        outputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "uint256", name: "shareOut", type: "uint256" },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "bool", name: "balance", type: "bool" },
            { internalType: "uint256", name: "maxChangeAmount", type: "uint256" },
        ],
        name: "harvest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
        ],
        name: "masterContractApproved",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "masterContractOf",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "nonces",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "pendingOwner",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        name: "pendingStrategy",
        outputs: [{ internalType: "contract IStrategy", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permitToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "registerProtocol", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [
            { internalType: "address", name: "user", type: "address" },
            { internalType: "address", name: "masterContract", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "setMasterContractApproval",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "contract IStrategy", name: "newStrategy", type: "address" },
        ],
        name: "setStrategy",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "uint64", name: "targetPercentage_", type: "uint64" },
        ],
        name: "setStrategyTargetPercentage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        name: "strategy",
        outputs: [{ internalType: "contract IStrategy", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        name: "strategyData",
        outputs: [
            { internalType: "uint64", name: "strategyStartDate", type: "uint64" },
            { internalType: "uint64", name: "targetPercentage", type: "uint64" },
            { internalType: "uint128", name: "balance", type: "uint128" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "uint256", name: "share", type: "uint256" },
            { internalType: "bool", name: "roundUp", type: "bool" },
        ],
        name: "toAmount",
        outputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "bool", name: "roundUp", type: "bool" },
        ],
        name: "toShare",
        outputs: [{ internalType: "uint256", name: "share", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        name: "totals",
        outputs: [
            {
                components: [
                    { internalType: "uint128", name: "elastic", type: "uint128" },
                    { internalType: "uint128", name: "base", type: "uint128" },
                ],
                internalType: "struct Rebase",
                name: "totals_",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "share", type: "uint256" },
        ],
        name: "transfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token", type: "address" },
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address[]", name: "tos", type: "address[]" },
            { internalType: "uint256[]", name: "shares", type: "uint256[]" },
        ],
        name: "transferMultiple",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
            { internalType: "bool", name: "direct", type: "bool" },
            { internalType: "bool", name: "renounce", type: "bool" },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "masterContract", type: "address" },
            { internalType: "bool", name: "approved", type: "bool" },
        ],
        name: "whitelistMasterContract",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "whitelistedMasterContracts",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "contract IERC20", name: "token_", type: "address" },
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "share", type: "uint256" },
        ],
        name: "withdraw",
        outputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "uint256", name: "shareOut", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class We {
    static createInterface() {
        return new x(fe)
    }
    static connect(t, a) {
        return new k(t, fe, a)
    }
}
We.abi = fe
const me = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "owner", type: "address" },
            { indexed: !0, internalType: "address", name: "spender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "account", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
]
class z {
    static createInterface() {
        return new x(me)
    }
    static connect(t, a) {
        return new k(t, me, a)
    }
}
z.abi = me
const Te = [
    {
        inputs: [],
        name: "getOwners",
        outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getThreshold",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
]
class je {
    static createInterface() {
        return new x(Te)
    }
    static connect(t, a) {
        return new k(t, Te, a)
    }
}
je.abi = Te
const he = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "user", type: "address" },
            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "Deposit",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "user", type: "address" },
            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "EmergencyWithdraw",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: !0, internalType: "address", name: "newOwner", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "user", type: "address" },
            { indexed: !0, internalType: "uint256", name: "pid", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount", type: "uint256" },
        ],
        name: "Withdraw",
        type: "event",
    },
    {
        inputs: [],
        name: "BONUS_MULTIPLIER",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_allocPoint", type: "uint256" },
            { internalType: "contract IERC20", name: "_lpToken", type: "address" },
            { internalType: "bool", name: "_withUpdate", type: "bool" },
        ],
        name: "add",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "bonusEndBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
        ],
        name: "deposit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_devaddr", type: "address" }],
        name: "dev",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "devaddr",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
        name: "emergencyWithdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_from", type: "uint256" },
            { internalType: "uint256", name: "_to", type: "uint256" },
        ],
        name: "getMultiplier",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "massUpdatePools", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
        name: "migrate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "migrator",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "address", name: "_user", type: "address" },
        ],
        name: "pendingSushi",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
        name: "poolInfo",
        outputs: [
            {
                components: [
                    { internalType: "contract IERC20", name: "lpToken", type: "address" },
                    { internalType: "uint256", name: "allocPoint", type: "uint256" },
                    { internalType: "uint256", name: "lastRewardBlock", type: "uint256" },
                    { internalType: "uint256", name: "accSushiPerShare", type: "uint256" },
                ],
                internalType: "struct IMasterChef.PoolInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolLength",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    {
        inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "uint256", name: "_allocPoint", type: "uint256" },
            { internalType: "bool", name: "_withUpdate", type: "bool" },
        ],
        name: "set",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "_migrator", type: "address" }],
        name: "setMigrator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "startBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sushi",
        outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "sushiPerBlock",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalAllocPoint",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
        name: "updatePool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "poolId", type: "uint256" },
            { internalType: "address", name: "user", type: "address" },
        ],
        name: "userInfo",
        outputs: [
            {
                components: [
                    { internalType: "uint256", name: "amount", type: "uint256" },
                    { internalType: "uint256", name: "rewardDebt", type: "uint256" },
                ],
                internalType: "struct IMasterChef.UserInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class se {
    static createInterface() {
        return new x(he)
    }
    static connect(t, a) {
        return new k(t, he, a)
    }
}
se.abi = he
const ge = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "token0", type: "address" },
            { indexed: !0, internalType: "address", name: "token1", type: "address" },
            { indexed: !1, internalType: "address", name: "pair", type: "address" },
            { indexed: !1, internalType: "uint256", name: "", type: "uint256" },
        ],
        name: "PairCreated",
        type: "event",
    },
    {
        inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        name: "allPairs",
        outputs: [{ internalType: "address", name: "pair", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "allPairsLength",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenA", type: "address" },
            { internalType: "address", name: "tokenB", type: "address" },
        ],
        name: "createPair",
        outputs: [{ internalType: "address", name: "pair", type: "address" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "feeTo", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "feeToSetter",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenA", type: "address" },
            { internalType: "address", name: "tokenB", type: "address" },
        ],
        name: "getPair",
        outputs: [{ internalType: "address", name: "pair", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "migrator",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "setFeeTo",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "setFeeToSetter",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "setMigrator",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class Je {
    static createInterface() {
        return new x(ge)
    }
    static connect(t, a) {
        return new k(t, ge, a)
    }
}
Je.abi = ge
const we = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "owner", type: "address" },
            { indexed: !0, internalType: "address", name: "spender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "sender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1", type: "uint256" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "sender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1", type: "uint256" },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "sender", type: "address" },
            { indexed: !1, internalType: "uint256", name: "amount0In", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1In", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount0Out", type: "uint256" },
            { indexed: !1, internalType: "uint256", name: "amount1Out", type: "uint256" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !1, internalType: "uint112", name: "reserve0", type: "uint112" },
            { indexed: !1, internalType: "uint112", name: "reserve1", type: "uint112" },
        ],
        name: "Sync",
        type: "event",
    },
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "from", type: "address" },
            { indexed: !0, internalType: "address", name: "to", type: "address" },
            { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [],
        name: "DOMAIN_SEPARATOR",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINIMUM_LIQUIDITY",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [],
        name: "PERMIT_TYPEHASH",
        outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "burn",
        outputs: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "pure", type: "function" },
    {
        inputs: [],
        name: "factory",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getReserves",
        outputs: [
            { internalType: "uint112", name: "reserve0", type: "uint112" },
            { internalType: "uint112", name: "reserve1", type: "uint112" },
            { internalType: "uint32", name: "blockTimestampLast", type: "uint32" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
        ],
        name: "initialize",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "kLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "mint",
        outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "pure", type: "function" },
    {
        inputs: [{ internalType: "address", name: "owner", type: "address" }],
        name: "nonces",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permit",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "price0CumulativeLast",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "price1CumulativeLast",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "skim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amount0Out", type: "uint256" },
            { internalType: "uint256", name: "amount1Out", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "swap",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "pure", type: "function" },
    { inputs: [], name: "sync", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class Qe {
    static createInterface() {
        return new x(we)
    }
    static connect(t, a) {
        return new k(t, we, a)
    }
}
Qe.abi = we
const Ae = [
    { inputs: [], name: "WETH", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "pure", type: "function" },
    {
        inputs: [
            { internalType: "address", name: "tokenA", type: "address" },
            { internalType: "address", name: "tokenB", type: "address" },
            { internalType: "uint256", name: "amountADesired", type: "uint256" },
            { internalType: "uint256", name: "amountBDesired", type: "uint256" },
            { internalType: "uint256", name: "amountAMin", type: "uint256" },
            { internalType: "uint256", name: "amountBMin", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "addLiquidity",
        outputs: [
            { internalType: "uint256", name: "amountA", type: "uint256" },
            { internalType: "uint256", name: "amountB", type: "uint256" },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "amountTokenDesired", type: "uint256" },
            { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
            { internalType: "uint256", name: "amountETHMin", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "addLiquidityETH",
        outputs: [
            { internalType: "uint256", name: "amountToken", type: "uint256" },
            { internalType: "uint256", name: "amountETH", type: "uint256" },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
        ],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [],
        name: "factory",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "uint256", name: "reserveIn", type: "uint256" },
            { internalType: "uint256", name: "reserveOut", type: "uint256" },
        ],
        name: "getAmountIn",
        outputs: [{ internalType: "uint256", name: "amountIn", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "uint256", name: "reserveIn", type: "uint256" },
            { internalType: "uint256", name: "reserveOut", type: "uint256" },
        ],
        name: "getAmountOut",
        outputs: [{ internalType: "uint256", name: "amountOut", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
        ],
        name: "getAmountsIn",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
        ],
        name: "getAmountsOut",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountA", type: "uint256" },
            { internalType: "uint256", name: "reserveA", type: "uint256" },
            { internalType: "uint256", name: "reserveB", type: "uint256" },
        ],
        name: "quote",
        outputs: [{ internalType: "uint256", name: "amountB", type: "uint256" }],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenA", type: "address" },
            { internalType: "address", name: "tokenB", type: "address" },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
            { internalType: "uint256", name: "amountAMin", type: "uint256" },
            { internalType: "uint256", name: "amountBMin", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "removeLiquidity",
        outputs: [
            { internalType: "uint256", name: "amountA", type: "uint256" },
            { internalType: "uint256", name: "amountB", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
            { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
            { internalType: "uint256", name: "amountETHMin", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "removeLiquidityETH",
        outputs: [
            { internalType: "uint256", name: "amountToken", type: "uint256" },
            { internalType: "uint256", name: "amountETH", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
            { internalType: "uint256", name: "amountTokenMin", type: "uint256" },
            { internalType: "uint256", name: "amountETHMin", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "bool", name: "approveMax", type: "bool" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "removeLiquidityETHWithPermit",
        outputs: [
            { internalType: "uint256", name: "amountToken", type: "uint256" },
            { internalType: "uint256", name: "amountETH", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "address", name: "tokenA", type: "address" },
            { internalType: "address", name: "tokenB", type: "address" },
            { internalType: "uint256", name: "liquidity", type: "uint256" },
            { internalType: "uint256", name: "amountAMin", type: "uint256" },
            { internalType: "uint256", name: "amountBMin", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "bool", name: "approveMax", type: "bool" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "removeLiquidityWithPermit",
        outputs: [
            { internalType: "uint256", name: "amountA", type: "uint256" },
            { internalType: "uint256", name: "amountB", type: "uint256" },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "swapETHForExactTokens",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountOutMin", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "swapExactETHForTokens",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "uint256", name: "amountOutMin", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "swapExactTokensForETH",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountIn", type: "uint256" },
            { internalType: "uint256", name: "amountOutMin", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "swapExactTokensForTokens",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "uint256", name: "amountInMax", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "swapTokensForExactETH",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            { internalType: "uint256", name: "amountOut", type: "uint256" },
            { internalType: "uint256", name: "amountInMax", type: "uint256" },
            { internalType: "address[]", name: "path", type: "address[]" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
        ],
        name: "swapTokensForExactTokens",
        outputs: [{ internalType: "uint256[]", name: "amounts", type: "uint256[]" }],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class Ze {
    static createInterface() {
        return new x(Ae)
    }
    static connect(t, a) {
        return new k(t, Ae, a)
    }
}
Ze.abi = Ae
const Ee = [
    {
        anonymous: !1,
        inputs: [
            { indexed: !0, internalType: "address", name: "user", type: "address" },
            { indexed: !1, internalType: "bool", name: "isTrusted", type: "bool" },
        ],
        name: "SetTrusted",
        type: "event",
    },
    {
        inputs: [{ internalType: "address", name: "", type: "address" }],
        name: "bridges",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
]
class xe {
    static createInterface() {
        return new x(Ee)
    }
    static connect(t, a) {
        return new k(t, Ee, a)
    }
}
xe.abi = Ee
const ee = [
        {
            inputs: [
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "aggregate",
            outputs: [
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
                { internalType: "bytes[]", name: "returnData", type: "bytes[]" },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "blockAndAggregate",
            outputs: [
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
                { internalType: "bytes32", name: "blockHash", type: "bytes32" },
                {
                    components: [
                        { internalType: "bool", name: "success", type: "bool" },
                        { internalType: "bytes", name: "returnData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
            name: "getBlockHash",
            outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getBlockNumber",
            outputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockCoinbase",
            outputs: [{ internalType: "address", name: "coinbase", type: "address" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockDifficulty",
            outputs: [{ internalType: "uint256", name: "difficulty", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockGasLimit",
            outputs: [{ internalType: "uint256", name: "gaslimit", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getCurrentBlockTimestamp",
            outputs: [{ internalType: "uint256", name: "timestamp", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [{ internalType: "address", name: "addr", type: "address" }],
            name: "getEthBalance",
            outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "getLastBlockHash",
            outputs: [{ internalType: "bytes32", name: "blockHash", type: "bytes32" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                { internalType: "bool", name: "requireSuccess", type: "bool" },
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "tryAggregate",
            outputs: [
                {
                    components: [
                        { internalType: "bool", name: "success", type: "bool" },
                        { internalType: "bytes", name: "returnData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                { internalType: "bool", name: "requireSuccess", type: "bool" },
                {
                    components: [
                        { internalType: "address", name: "target", type: "address" },
                        { internalType: "bytes", name: "callData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Call[]",
                    name: "calls",
                    type: "tuple[]",
                },
            ],
            name: "tryBlockAndAggregate",
            outputs: [
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
                { internalType: "bytes32", name: "blockHash", type: "bytes32" },
                {
                    components: [
                        { internalType: "bool", name: "success", type: "bool" },
                        { internalType: "bytes", name: "returnData", type: "bytes" },
                    ],
                    internalType: "struct Multicall2.Result[]",
                    name: "returnData",
                    type: "tuple[]",
                },
            ],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
    ze =
        "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d146101a657806386d516e8146101c4578063a8b0574e146101e2578063bce38bd714610200578063c3077fa914610230578063ee82ac5e14610262576100b4565b80630f28c97d146100b9578063252dba42146100d757806327e86d6e14610108578063399542e91461012657806342cbb15c146101585780634d2301cc14610176575b600080fd5b6100c1610292565b6040516100ce91906106a3565b60405180910390f35b6100f160048036038101906100ec91906109d2565b61029a565b6040516100ff929190610b65565b60405180910390f35b610110610423565b60405161011d9190610bae565b60405180910390f35b610140600480360381019061013b9190610c01565b610438565b60405161014f93929190610d6b565b60405180910390f35b610160610457565b60405161016d91906106a3565b60405180910390f35b610190600480360381019061018b9190610da9565b61045f565b60405161019d91906106a3565b60405180910390f35b6101ae610480565b6040516101bb91906106a3565b60405180910390f35b6101cc610488565b6040516101d991906106a3565b60405180910390f35b6101ea610490565b6040516101f79190610de5565b60405180910390f35b61021a60048036038101906102159190610c01565b610498565b6040516102279190610e00565b60405180910390f35b61024a600480360381019061024591906109d2565b610640565b60405161025993929190610d6b565b60405180910390f35b61027c60048036038101906102779190610e4e565b610663565b6040516102899190610bae565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff8111156102bc576102bb6106e8565b5b6040519080825280602002602001820160405280156102ef57816020015b60608152602001906001900390816102da5790505b50905060005b835181101561041d5760008085838151811061031457610313610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061034957610348610e7b565b5b6020026020010151602001516040516103629190610ee6565b6000604051808303816000865af19150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5091509150816103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090610f5a565b60405180910390fd5b808484815181106103fd576103fc610e7b565b5b60200260200101819052505050808061041590610fa9565b9150506102f5565b50915091565b60006001436104329190610ff2565b40905090565b60008060604392504340915061044e8585610498565b90509250925092565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b6060815167ffffffffffffffff8111156104b5576104b46106e8565b5b6040519080825280602002602001820160405280156104ee57816020015b6104db61066e565b8152602001906001900390816104d35790505b50905060005b82518110156106395760008084838151811061051357610512610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061054857610547610e7b565b5b6020026020010151602001516040516105619190610ee6565b6000604051808303816000865af19150503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915085156105ef57816105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590611098565b60405180910390fd5b5b604051806040016040528083151581526020018281525084848151811061061957610618610e7b565b5b60200260200101819052505050808061063190610fa9565b9150506104f4565b5092915050565b6000806060610650600185610438565b8093508194508295505050509193909250565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b61069d8161068a565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610720826106d7565b810181811067ffffffffffffffff8211171561073f5761073e6106e8565b5b80604052505050565b60006107526106be565b905061075e8282610717565b919050565b600067ffffffffffffffff82111561077e5761077d6106e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107c98261079e565b9050919050565b6107d9816107be565b81146107e457600080fd5b50565b6000813590506107f6816107d0565b92915050565b600080fd5b600067ffffffffffffffff82111561081c5761081b6106e8565b5b610825826106d7565b9050602081019050919050565b82818337600083830152505050565b600061085461084f84610801565b610748565b9050828152602081018484840111156108705761086f6107fc565b5b61087b848285610832565b509392505050565b600082601f830112610898576108976106d2565b5b81356108a8848260208601610841565b91505092915050565b6000604082840312156108c7576108c6610794565b5b6108d16040610748565b905060006108e1848285016107e7565b600083015250602082013567ffffffffffffffff81111561090557610904610799565b5b61091184828501610883565b60208301525092915050565b600061093061092b84610763565b610748565b905080838252602082019050602084028301858111156109535761095261078f565b5b835b8181101561099a57803567ffffffffffffffff811115610978576109776106d2565b5b80860161098589826108b1565b85526020850194505050602081019050610955565b5050509392505050565b600082601f8301126109b9576109b86106d2565b5b81356109c984826020860161091d565b91505092915050565b6000602082840312156109e8576109e76106c8565b5b600082013567ffffffffffffffff811115610a0657610a056106cd565b5b610a12848285016109a4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a81578082015181840152602081019050610a66565b83811115610a90576000848401525b50505050565b6000610aa182610a47565b610aab8185610a52565b9350610abb818560208601610a63565b610ac4816106d7565b840191505092915050565b6000610adb8383610a96565b905092915050565b6000602082019050919050565b6000610afb82610a1b565b610b058185610a26565b935083602082028501610b1785610a37565b8060005b85811015610b535784840389528151610b348582610acf565b9450610b3f83610ae3565b925060208a01995050600181019050610b1b565b50829750879550505050505092915050565b6000604082019050610b7a6000830185610694565b8181036020830152610b8c8184610af0565b90509392505050565b6000819050919050565b610ba881610b95565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b60008115159050919050565b610bde81610bc9565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b60008060408385031215610c1857610c176106c8565b5b6000610c2685828601610bec565b925050602083013567ffffffffffffffff811115610c4757610c466106cd565b5b610c53858286016109a4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c9281610bc9565b82525050565b6000604083016000830151610cb06000860182610c89565b5060208301518482036020860152610cc88282610a96565b9150508091505092915050565b6000610ce18383610c98565b905092915050565b6000602082019050919050565b6000610d0182610c5d565b610d0b8185610c68565b935083602082028501610d1d85610c79565b8060005b85811015610d595784840389528151610d3a8582610cd5565b9450610d4583610ce9565b925060208a01995050600181019050610d21565b50829750879550505050505092915050565b6000606082019050610d806000830186610694565b610d8d6020830185610b9f565b8181036040830152610d9f8184610cf6565b9050949350505050565b600060208284031215610dbf57610dbe6106c8565b5b6000610dcd848285016107e7565b91505092915050565b610ddf816107be565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b60006020820190508181036000830152610e1a8184610cf6565b905092915050565b610e2b8161068a565b8114610e3657600080fd5b50565b600081359050610e4881610e22565b92915050565b600060208284031215610e6457610e636106c8565b5b6000610e7284828501610e39565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000610ec082610a47565b610eca8185610eaa565b9350610eda818560208601610a63565b80840191505092915050565b6000610ef28284610eb5565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564600082015250565b6000610f44602083610efd565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb48261068a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fe757610fe6610f7a565b5b600182019050919050565b6000610ffd8261068a565b91506110088361068a565b92508282101561101b5761101a610f7a565b5b828203905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611082602183610efd565b915061108d82611026565b604082019050919050565b600060208201905081810360008301526110b181611075565b905091905056fea2646970667358221220a6abea822e004150d7df5d59c9ec8933da946cf625db7b082e9dd8936ce2c7b464736f6c63430008090033",
    gn = (e) => e.length > 1
class et extends Me {
    constructor(...t) {
        gn(t) ? super(...t) : super(ee, ze, t[0]), (this.contractName = "Multicall2")
    }
    deploy(t) {
        return super.deploy(t || {})
    }
    getDeployTransaction(t) {
        return super.getDeployTransaction(t || {})
    }
    attach(t) {
        return super.attach(t)
    }
    connect(t) {
        return super.connect(t)
    }
    static createInterface() {
        return new x(ee)
    }
    static connect(t, a) {
        return new k(t, ee, a)
    }
}
et.bytecode = ze
et.abi = ee
class pe {
    constructor() {
        l(this, "balances", {})
        l(this, "tokens", [])
    }
    get SLPTokens() {
        return this.tokens.filter((t) => t instanceof H)
    }
}
class U {
    constructor(t, a) {
        l(this, "type", "Token")
        l(this, "network")
        l(this, "address")
        l(this, "loaded", !1)
        l(this, "name")
        l(this, "_symbol")
        l(this, "decimals")
        l(this, "price")
        ;(this.network = t), (this.address = a), (this.name = ""), (this._symbol = ""), (this.decimals = 0), (this.price = new E(0))
    }
    get symbol() {
        return this._symbol
    }
    balance(t) {
        return t.balances[this.address] || V.from(0)
    }
    value(t) {
        return this.price ? this.balance(t).toDec(this.decimals).mul(this.price) : new E(0)
    }
}
class H extends U {
    constructor(t, a) {
        super(t, a)
        l(this, "type", "SLPToken")
        l(this, "token0")
        l(this, "token1")
        l(this, "totalSupply")
        l(this, "reserve0")
        l(this, "reserve1")
        ;(this.name = "SushiSwap LP Token"), (this._symbol = "SLP"), (this.decimals = 18)
    }
    get symbol() {
        return this.token0 && this.token1 ? this.token0.symbol + "-" + this.token1.symbol + " SLP" : this._symbol
    }
    balance0(t) {
        return this.token0 && this.totalSupply && !this.totalSupply.isZero() && t.balances[this.address] && this.reserve0
            ? t.balances[this.address].mul(this.reserve0).div(this.totalSupply)
            : V.from(0)
    }
    balance1(t) {
        return this.token1 && this.totalSupply && !this.totalSupply.isZero() && t.balances[this.address] && this.reserve1
            ? t.balances[this.address].mul(this.reserve1).div(this.totalSupply)
            : V.from(0)
    }
    value0(t) {
        return this.token0 && this.token0.price ? this.balance0(t).toDec(this.token0.decimals).mul(this.token0.price) : new E(0)
    }
    value1(t) {
        return this.token1 && this.token1.price ? this.balance1(t).toDec(this.token1.decimals).mul(this.token1.price) : new E(0)
    }
    value(t) {
        return this.value0(t).isZero()
            ? this.value1(t).mul(2)
            : this.value1(t).isZero()
            ? this.value0(t).mul(2)
            : this.value0(t).add(this.value1(t))
    }
}
class wn {
    constructor() {
        l(this, "tokenList", ne([]))
        l(this, "tokens", ne({}))
        l(this, "web3")
        this.load()
    }
    get(t, a, o) {
        if (((a = lt(a)), this.tokens[t] || (this.tokens[t] = {}), !this.tokens[t][a])) {
            const i = new (o || U)(t, a)
            this.tokenList.push(i), (this.tokens[t][a] = i)
        }
        return this.tokens[t][a]
    }
    async _handleToLoad(t, a, o, i) {
        i ? (i = [...new Set(i)]) : (i = this.tokenList), (i = i.filter(t))
        const r = {}
        i.forEach((u) => {
            var d
            r[u.network] || (r[u.network] = []), (d = r[u.network]) == null || d.push(u)
        })
        for (const u of Object.values(r).filter((d) => d.length)) {
            const d = new h[u[0].network](),
                v = new _e(d)
            for (const O of u) a(O, d, v)
            if ((await v.call(100), o)) for (const O of u) o(O)
        }
    }
    async loadInfo(t) {
        await this._handleToLoad(
            (a) => !a.loaded,
            (a, o, i) => {
                if (a instanceof H) {
                    const r = R.connect(a.address, o.provider)
                    i.queue(r.populateTransaction.token0(), R.createInterface(), (u) => (a.token0 = this.get(o.chainId, u, U))),
                        i.queue(r.populateTransaction.token1(), R.createInterface(), (u) => (a.token1 = this.get(o.chainId, u, U)))
                } else {
                    const r = K.connect(a.address, o.provider)
                    i.queue(r.populateTransaction.name(), K.createInterface(), (u) => (a.name = u)),
                        i.queue(r.populateTransaction.symbol(), K.createInterface(), (u) => (a._symbol = u)),
                        i.queue(r.populateTransaction.decimals(), K.createInterface(), (u) => (a.decimals = u))
                }
            },
            (a) => (a.loaded = !0),
            t
        ),
            this.save()
    }
    async loadSLPInfo(t) {
        await this._handleToLoad(
            (a) => a instanceof H,
            (a, o, i) => {
                const r = R.connect(a.address, o.provider)
                i.queue(r.populateTransaction.getReserves(), R.createInterface(), (u) => {
                    ;(a.reserve0 = u.reserve0), (a.reserve1 = u.reserve1)
                }),
                    i.queue(r.populateTransaction.totalSupply(), R.createInterface(), (u) => (a.totalSupply = u))
            },
            void 0,
            t
        )
    }
    load() {
        const t = JSON.parse(localStorage.getItem("Tokens") || "[]")
        for (const a of t) {
            const o = this.get(a.network, a.address, a.type === "SLPToken" ? H : U)
            ;(o.network = a.network),
                (o.address = a.address),
                (o.loaded = a.loaded),
                a.type === "SLPToken"
                    ? ((o.token0 = a.token0 ? this.get(a.network, a.token0, U) : void 0),
                      (o.token1 = a.token1 ? this.get(a.network, a.token1, U) : void 0))
                    : ((o.name = a.name), (o._symbol = a.symbol), (o.decimals = a.decimals))
        }
    }
    save() {
        localStorage.setItem(
            "Tokens",
            JSON.stringify(
                this.tokenList.map((t) => {
                    var a, o
                    return t instanceof H
                        ? {
                              type: t.type,
                              network: t.network,
                              address: t.address,
                              loaded: t.loaded,
                              token0: (a = t.token0) == null ? void 0 : a.address,
                              token1: (o = t.token1) == null ? void 0 : o.address,
                          }
                        : {
                              type: t.type,
                              network: t.network,
                              address: t.address,
                              loaded: t.loaded,
                              name: t.name,
                              symbol: t.symbol,
                              decimals: t.decimals,
                          }
                })
            )
        )
    }
}
const L = new wn(),
    tt = [
        { name: "Ops", network: n.ETHEREUM, address: "0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7" },
        { name: "Fees", network: n.POLYGON, address: "0x850a57630A2012B2494779fBc86bBc24F2a7baeF" },
        { name: "Ops", network: n.POLYGON, address: "0x2B23D9B02FffA1F5441Ef951B4B95c09faa57EBA" },
        { name: "Ops", network: n.XDAI, address: "0xc375411C6597F692Add6a7a3AD5b3C38626B0F26" },
        { name: "Ops", network: n.HARMONY, address: "0x30af69A3f4a6f266961313Ce0943719dF4A8AA10" },
        { name: "Ops", network: n.BINANCE, address: "0xc6fD91aD4919Fd91e2c84077ba648092cB499638" },
        { name: "Ops", network: n.FANTOM, address: "0xF9E7d4c6d36ca311566f46c81E572102A2DC9F52" },
        { name: "Ops", network: n.AVALANCHE, address: "0x09842Ce338647906B686aBB3B648A6457fbB25DA" },
        { name: "Ops", network: n.CELO, address: "0x751b01Fa14fD9640a1DF9014e2D0f3a03A198b81" },
        { name: "Fees", network: n.CELO, address: "0x8b63fcBB752e425e3C4B12F7802BAd1A24c6d7F4" },
        { name: "Ops", network: n.MOONBEAM_KUSAMA, address: "0x939f7E76cc515cc296dD3ce362D9a52e148A7D5f" },
        { name: "Fees", network: n.MOONBEAM_KUSAMA, address: "0x6669cc35031A84fAc1Efe30bB586B9ADdf223Fbc" },
        { name: "Ops", network: n.FUSE, address: "0x33b6beb37837459Ee84a1Ffed2C6a4ca22e5F316" },
        { name: "Ops", network: n.ARBITRUM, address: "0x978982772b8e4055B921bf9295c0d74eB36Bc54e" },
        { name: "Ops", network: n.MOONBEAM, address: "0x87AEb22b7BB02AC42204eB312C08A22FC3f077F3" },
    ],
    nt = [{ network: n.ETHEREUM, address: "0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277" }],
    at = [
        { network: n.ARBITRUM, address: "0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8", account: new pe() },
        { network: n.POLYGON, address: "0xf1c9881Be22EBF108B8927c4d197d126346b5036", account: new pe() },
        { network: n.AVALANCHE, address: "0x560C759A11cd026405F6f2e19c65Da1181995fA2", account: new pe() },
    ],
    st = [
        { network: n.ETHEREUM, address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac" },
        { network: n.POLYGON, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.ARBITRUM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.AVALANCHE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.MOONBEAM_KUSAMA, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.FANTOM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.BINANCE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.XDAI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.HARMONY, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.TELOS, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.CELO, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.FUSE, address: "0x43eA90e2b786728520e4f930d2A71a477BF2737C" },
        { network: n.OKEX, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.HUOBI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.PALM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: n.MOONBEAM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    ],
    An = [
        { network: n.ETHEREUM, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
        { network: n.POLYGON, address: "0x0319000133d3AdA02600f0875d2cf03D442C3367" },
        { network: n.ARBITRUM, address: "0x74c764d41b77dbbb4fe771dab1939b00b146894a" },
        { network: n.BINANCE, address: "0xf5bce5077908a1b7370b9ae04adc565ebd643966" },
        { network: n.MOONBEAM, address: "0x80C7DD17B01855a6D2347444a0FCC36136a314de" },
        { network: n.FANTOM, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
        { network: n.XDAI, address: "0xE2d7F5dd869Fc7c126D21b13a9080e75a4bDb324" },
        { network: n.AVALANCHE, address: "0x0711B6026068f736bae6B213031fCE978D48E026" },
        { network: n.HUOBI, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
        { network: n.CELO, address: "0x0711B6026068f736bae6B213031fCE978D48E026" },
    ]
var le = ne({
    title: "DAOView",
    name: "SushiView",
    web3: new Tn(),
    multisigs: tt,
    masterchefs: [{ network: n.ETHEREUM, address: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd" }],
    masterchefsV2: [{ network: n.ETHEREUM, address: "0xef0881ec094552b2e128cf945ef17a6752b4ec5d" }],
    minichefs: [
        { network: n.FANTOM, address: "0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5" },
        { network: n.POLYGON, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: n.XDAI, address: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3" },
        { network: n.ARBITRUM, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: n.HARMONY, address: "0x67da5f2ffaddff067ab9d5f025f8810634d84287" },
        { network: n.CELO, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: n.CELO, address: "0x8084936982D089130e001b470eDf58faCA445008" },
        { network: n.MOONBEAM_KUSAMA, address: "0x3dB01570D97631f69bbb0ba39796865456Cf89A5" },
        { network: n.FUSE, address: "0x182CD0C6F1FaEc0aED2eA83cd0e160c8Bd4cb063" },
        { network: n.MOONBEAM, address: "0x011E52E4E40CF9498c79273329E8827b21E2e581" },
    ],
    complexRewarders: [
        { network: n.FANTOM, address: "0xeaf76e3bD36680D98d254B378ED706cb0DFBfc1B" },
        { network: n.POLYGON, address: "0xa3378Ca78633B3b9b2255EAa26748770211163AE" },
        { network: n.XDAI, address: "0x84562cE1a5f3A4A957a5a94Ed0be05BA73fD2665" },
        { network: n.HARMONY, address: "0x25836011bbc0d5b6db96b20361a474cbc5245b45" },
        { network: n.CELO, address: "0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c" },
        { network: n.CELO, address: "0xFa3de59eDd2500BA725Dad355B98E6a4346Ada7d" },
        { network: n.MOONBEAM_KUSAMA, address: "0x1334c8e873E1cae8467156e2A81d1C8b566B2da1" },
        { network: n.FUSE, address: "0xEF502259Dd5d497d082498912031E027c4515563" },
    ],
    timelocks: [{ network: n.ETHEREUM, address: "0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1" }],
    routers: [
        { network: n.ETHEREUM, address: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F" },
        { network: n.POLYGON, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: n.ARBITRUM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: n.AVALANCHE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: n.MOONBEAM_KUSAMA, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: n.FANTOM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: n.BINANCE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: n.XDAI, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: n.HARMONY, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: n.TELOS, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: n.CELO, address: "0x1421bDe4B10e8dd459b3BCb598810B1337D56842" },
        { network: n.FUSE, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: n.OKEX, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: n.HUOBI, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: n.PALM, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: n.MOONBEAM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
    ],
    factories: st,
    sushiMakers: nt,
    wethMakers: at,
    bentoBoxes: An,
    kashiMasters: [
        { network: n.ETHEREUM, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: n.POLYGON, address: "0xb527c5295c4bc348cbb3a2e96b2494fd292075a7" },
        { network: n.ARBITRUM, address: "0xa010ee0226cd071bebd8919a1f675cae1f1f5d3e" },
        { network: n.AVALANCHE, address: "0x513037395fa0c9c35e41f89189cedfe3bd42fadb" },
        { network: n.BINANCE, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: n.XDAI, address: "0x7a6da9903d0a481f40b8336c1463487bc8c0407e" },
        { network: n.HUOBI, address: "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42" },
    ],
    kashiSushiMakers: [{ network: n.ETHEREUM, address: "0x08C82f7513C7952A95029FE3B1587B1FA52DACed" }],
})
const X = {
    "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC": "Gasper",
    "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0": "Jiro",
    "0xFBb3a85603C398Ff22435DD40873EC190134e1f6": "Matt",
    "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3": "Ramin",
    "0xb4A3f907ec1611F22543219AE9Bb33ec5E96e116": "Omakase",
    "0x6b83270726342E02a11E755e8CC35275712122eC": "Lufy",
    "0x426b3afFbbE924E01575d5b3cb9dc640625bBB49": "Keno",
    "0x5b8C253517b6Bd003369173109693B01cb6841B5": "LevX",
    "0x8f99B0b48b23908Da9f727B5083052d5099e6aea": "Joe",
    "0x285b7EEa81a5B66B62e7276a24c1e0F83F7409c1": "Maki",
    "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74": "Sarang",
    "0xCc159BCb6a466DA442D254Ad934125f05DAB66b5": "Matt Deployer (Ledger)",
    "0xe94B5EEC1fA96CEecbD33EF5Baa8d00E4493F4f3": "Treasury Multisig",
    "0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1": "Timelock",
}
tt.forEach((e) => {
    X[e.address] = "MultiSig: " + e.name
})
nt.forEach((e) => {
    X[e.address] = "SushiMaker"
})
at.forEach((e) => {
    X[e.address] = "WethMaker"
})
st.forEach((e) => {
    X[e.address] = "Factory"
})
async function rt(e) {
    const t = new h[e.network](),
        a = "factory" + t.chainName + e.address,
        o = Je.connect(e.address, t.provider)
    if (
        ((e.pairCount = (await o.allPairsLength()).toNumber()),
        (e.feeTo = await o.feeTo()),
        (e.feeToSetter = await o.feeToSetter()),
        (e.pairs = JSON.parse(localStorage.getItem(a) || "[]")),
        e.pairs.length < e.pairCount)
    ) {
        const i = new _e(t)
        for (let r = e.pairs.length; r < e.pairCount; r++)
            i.queue(o.populateTransaction.allPairs(r), o.interface, (u) => {
                var d
                return (d = e.pairs) == null ? void 0 : d.push(u)
            })
        await i.call(250), localStorage.setItem(a, JSON.stringify(e.pairs))
    }
}
async function En(e) {
    const t = new h[e.network]()
    ;(e.safe = new qe(e.network, e.address)),
        (e.owners = [...(await e.safe.getOwners())].sort()),
        (e.threshold = await e.safe.getThreshold()),
        (e.tokens = await e.safe.getTokenBalances()),
        (e.nativeBalance = await t.provider.getBalance(e.address))
}
async function Mn(e) {
    const t = new h[e.network](),
        a = Ze.connect(e.address, t.provider)
    e.factory = await a.factory()
}
async function _n(e) {
    const t = new h[e.network](),
        a = xe.connect(e.address, t.provider)
    e.owner = await a.owner()
}
async function xn(e) {
    const t = new h[e.network](),
        a = We.connect(e.address, t.provider)
    e.owner = await a.owner()
}
async function kn(e) {
    const t = new h[e.network](),
        a = se.connect(e.address, t.provider)
    ;(e.owner = await a.owner()), (e.devaddr = await a.devaddr()), (e.poolLength = (await a.poolLength()).toNumber())
}
async function vn(e) {
    const t = new h[e.network](),
        a = se.connect(e.address, t.provider)
    ;(e.owner = await a.owner()), (e.poolLength = (await a.poolLength()).toNumber())
}
async function Cn(e) {
    const t = new h[e.network](),
        a = se.connect(e.address, t.provider)
    ;(e.owner = await a.owner()), (e.poolLength = (await a.poolLength()).toNumber())
}
const I = _({
        props: { address: null },
        setup(e) {
            const t = e,
                a = P(() => (t.address ? X[t.address] || t.address : "<empty>"))
            return (o, i) => f(b(a))
        },
    }),
    On = { class: "row mt-3" },
    Bn = { class: "col-10 mx-auto" },
    In = s("h2", null, "Multi Sigs", -1),
    Dn = { class: "table" },
    Sn = s(
        "thead",
        null,
        [
            s("tr", null, [
                s("th", { scope: "col" }, "Wallet"),
                s("th", { scope: "col" }, "Address"),
                s("th", { scope: "col" }, "Threshold"),
                s("th", { scope: "col" }, "Signers"),
            ]),
        ],
        -1
    ),
    Fn = ["href"],
    Un = m("\xA0 "),
    Nn = _({
        setup(e) {
            const t = F("app")
            return (
                t.multisigs.map((a) => En(a)),
                (a, o) => {
                    const i = $("router-link")
                    return (
                        c(),
                        y("div", On, [
                            s("div", Bn, [
                                In,
                                s("table", Dn, [
                                    Sn,
                                    s("tbody", null, [
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(b(t).multisigs, (r) => {
                                                var u, d
                                                return (
                                                    c(),
                                                    y("tr", null, [
                                                        s("td", null, [
                                                            p(
                                                                i,
                                                                { to: "/multisig/" + r.network + "/" + r.address },
                                                                {
                                                                    default: T(() => [m(f(b(h)[r.network].chainName) + " " + f(r.name), 1)]),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            s(
                                                                "a",
                                                                {
                                                                    href: (u = r.safe) == null ? void 0 : u.transactionHistoryUrl,
                                                                    target: "_blank",
                                                                },
                                                                f(r.address),
                                                                9,
                                                                Fn
                                                            ),
                                                        ]),
                                                        s(
                                                            "td",
                                                            null,
                                                            f(r.threshold) + " of " + f(((d = r.owners) == null ? void 0 : d.length) || 0),
                                                            1
                                                        ),
                                                        s("td", null, [
                                                            (c(!0),
                                                            y(
                                                                M,
                                                                null,
                                                                D(
                                                                    r.owners,
                                                                    (v) => (
                                                                        c(),
                                                                        y("span", null, [
                                                                            s(
                                                                                "span",
                                                                                {
                                                                                    class: Se(
                                                                                        [
                                                                                            "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC",
                                                                                            "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0",
                                                                                            "0xFBb3a85603C398Ff22435DD40873EC190134e1f6",
                                                                                            "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3",
                                                                                            "0x6b83270726342E02a11E755e8CC35275712122eC",
                                                                                            "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74",
                                                                                        ].includes(v)
                                                                                            ? ""
                                                                                            : "text-danger"
                                                                                    ),
                                                                                },
                                                                                [p(I, { address: v }, null, 8, ["address"]), Un],
                                                                                2
                                                                            ),
                                                                        ])
                                                                    )
                                                                ),
                                                                256
                                                            )),
                                                        ]),
                                                    ])
                                                )
                                            }),
                                            256
                                        )),
                                    ]),
                                ]),
                            ]),
                        ])
                    )
                }
            )
        },
    }),
    Rn = ["href"],
    Ln = { key: 1 },
    C = _({
        props: { address: null, network: null },
        setup(e) {
            const t = e,
                a = P(() => (t.network ? h[t.network] : null)),
                o = ct()
            return (i, r) => {
                var u
                return (
                    c(),
                    y(
                        "a",
                        { href: ((u = b(a)) == null ? void 0 : u.blockExplorerUrls[0]) + "address/" + t.address, target: "_blank" },
                        [b(o).default ? yt(i.$slots, "default", { key: 0 }) : (c(), y("span", Ln, f(e.address), 1))],
                        8,
                        Rn
                    )
                )
            }
        },
    }),
    Hn = { class: "row mt-3" },
    Pn = { class: "col-10 mx-auto" },
    $n = s("h2", null, "Routers", -1),
    Gn = { class: "table" },
    Yn = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Factory")])],
        -1
    ),
    Vn = _({
        setup(e) {
            const t = F("app")
            return (
                t.routers.map((a) => Mn(a)),
                (a, o) => (
                    c(),
                    y("div", Hn, [
                        s("div", Pn, [
                            $n,
                            s("table", Gn, [
                                Yn,
                                s("tbody", null, [
                                    (c(!0),
                                    y(
                                        M,
                                        null,
                                        D(
                                            b(t).routers,
                                            (i) => (
                                                c(),
                                                y("tr", null, [
                                                    s("td", null, f(b(h)[i.network].chainName), 1),
                                                    s("td", null, [
                                                        p(C, { network: i.network, address: i.address }, null, 8, ["network", "address"]),
                                                    ]),
                                                    s("td", null, [p(I, { address: i.factory }, null, 8, ["address"])]),
                                                ])
                                            )
                                        ),
                                        256
                                    )),
                                ]),
                            ]),
                        ]),
                    ])
                )
            )
        },
    }),
    qn = { class: "row mt-3" },
    Kn = { class: "col-10 mx-auto" },
    Xn = s("h2", null, "Factories", -1),
    Wn = { class: "table" },
    jn = s(
        "thead",
        null,
        [
            s("tr", null, [
                s("th", { scope: "col" }, "Network"),
                s("th", { scope: "col" }, "Pairs"),
                s("th", { scope: "col" }, "Fees go to"),
                s("th", { scope: "col" }, "Admin (can redirect fees)"),
            ]),
        ],
        -1
    ),
    Jn = _({
        setup(e) {
            const t = F("app")
            return (
                t.factories.map((a) => rt(a)),
                (a, o) => (
                    c(),
                    y("div", qn, [
                        s("div", Kn, [
                            Xn,
                            s("table", Wn, [
                                jn,
                                s("tbody", null, [
                                    (c(!0),
                                    y(
                                        M,
                                        null,
                                        D(
                                            b(t).factories,
                                            (i) => (
                                                c(),
                                                y("tr", null, [
                                                    s("td", null, [
                                                        p(
                                                            C,
                                                            { network: i.network, address: i.address },
                                                            { default: T(() => [m(f(b(h)[i.network].chainName), 1)]), _: 2 },
                                                            1032,
                                                            ["network", "address"]
                                                        ),
                                                    ]),
                                                    s("td", null, f(i.pairCount), 1),
                                                    s("td", null, [p(I, { address: i.feeTo }, null, 8, ["address"])]),
                                                    s("td", null, [p(I, { address: i.feeToSetter }, null, 8, ["address"])]),
                                                ])
                                            )
                                        ),
                                        256
                                    )),
                                ]),
                            ]),
                        ]),
                    ])
                )
            )
        },
    }),
    Qn = { class: "row mt-3" },
    Zn = { class: "col-10 mx-auto" },
    zn = s("h2", null, "Makers", -1),
    e0 = { class: "table" },
    t0 = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Admin")])],
        -1
    ),
    Be = _({
        setup(e) {
            const t = F("app")
            return (
                t.wethMakers.map((a) => _n(a)),
                (a, o) => {
                    const i = $("router-link")
                    return (
                        c(),
                        y("div", Qn, [
                            s("div", Zn, [
                                zn,
                                s("table", e0, [
                                    t0,
                                    s("tbody", null, [
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(
                                                b(t).wethMakers,
                                                (r) => (
                                                    c(),
                                                    y("tr", null, [
                                                        s("td", null, [
                                                            p(
                                                                i,
                                                                { to: "/wethmaker/" + r.network + "/" + r.address },
                                                                { default: T(() => [m(f(b(h)[r.network].chainName), 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.address },
                                                                { default: T(() => [m(f(r.address), 1)]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [p(I, { address: r.owner }, null, 8, ["address"])]),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                    ]),
                                ]),
                            ]),
                        ])
                    )
                }
            )
        },
    }),
    n0 = { class: "row mt-3" },
    a0 = { class: "col-10 mx-auto" },
    s0 = s("h2", null, "Chefs", -1),
    r0 = { class: "table" },
    i0 = s(
        "thead",
        null,
        [
            s("tr", null, [
                s("th", { scope: "col" }, "Chef"),
                s("th", { scope: "col" }, "Address"),
                s("th", { scope: "col" }, "Owner"),
                s("th", { scope: "col" }, "Dev (treasury)"),
                s("th", { scope: "col" }, "Pools"),
            ]),
        ],
        -1
    ),
    o0 = s("td", null, " N/A ", -1),
    u0 = s("td", null, " N/A ", -1),
    d0 = _({
        setup(e) {
            const t = F("app")
            return (
                t.masterchefs.map((a) => kn(a)),
                t.masterchefsV2.map((a) => vn(a)),
                t.minichefs.map((a) => Cn(a)),
                (a, o) => {
                    const i = $("router-link")
                    return (
                        c(),
                        y("div", n0, [
                            s("div", a0, [
                                s0,
                                s("table", r0, [
                                    i0,
                                    s("tbody", null, [
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(
                                                b(t).masterchefs,
                                                (r) => (
                                                    c(),
                                                    y("tr", null, [
                                                        s("td", null, [
                                                            p(
                                                                i,
                                                                { to: "/chef/" + r.network + "/" + r.address },
                                                                {
                                                                    default: T(() => [m(f(b(h)[r.network].chainName) + " MasterChef ", 1)]),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(C, { network: r.network, address: r.address }, null, 8, ["network", "address"]),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.owner },
                                                                { default: T(() => [p(I, { address: r.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.devaddr },
                                                                { default: T(() => [p(I, { address: r.devaddr }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, f(r.poolLength), 1),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(
                                                b(t).masterchefsV2,
                                                (r) => (
                                                    c(),
                                                    y("tr", null, [
                                                        s("td", null, [
                                                            p(
                                                                i,
                                                                { to: "/chef/" + r.network + "/" + r.address },
                                                                {
                                                                    default: T(() => [m(f(b(h)[r.network].chainName) + " MasterChefV2 ", 1)]),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(C, { network: r.network, address: r.address }, null, 8, ["network", "address"]),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.owner },
                                                                { default: T(() => [p(I, { address: r.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        o0,
                                                        s("td", null, f(r.poolLength), 1),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(
                                                b(t).minichefs,
                                                (r) => (
                                                    c(),
                                                    y("tr", null, [
                                                        s("td", null, [
                                                            p(
                                                                i,
                                                                { to: "/chef/" + r.network + "/" + r.address },
                                                                { default: T(() => [m(f(b(h)[r.network].chainName) + " MiniChef ", 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(C, { network: r.network, address: r.address }, null, 8, ["network", "address"]),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.owner },
                                                                { default: T(() => [p(I, { address: r.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        u0,
                                                        s("td", null, f(r.poolLength), 1),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                    ]),
                                ]),
                            ]),
                        ])
                    )
                }
            )
        },
    }),
    p0 = { class: "row mt-3" },
    l0 = { class: "col-10 mx-auto" },
    c0 = s("h2", null, "BentoBoxes", -1),
    y0 = { class: "table" },
    b0 = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Admin")])],
        -1
    ),
    f0 = _({
        setup(e) {
            const t = F("app")
            return (
                t.bentoBoxes.map((a) => xn(a)),
                (a, o) => {
                    const i = $("router-link")
                    return (
                        c(),
                        y("div", p0, [
                            s("div", l0, [
                                c0,
                                s("table", y0, [
                                    b0,
                                    s("tbody", null, [
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(
                                                b(t).bentoBoxes,
                                                (r) => (
                                                    c(),
                                                    y("tr", null, [
                                                        s("td", null, [
                                                            p(
                                                                i,
                                                                { to: "/bentobox/" + r.network + "/" + r.address },
                                                                { default: T(() => [m(f(b(h)[r.network].chainName), 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.address },
                                                                { default: T(() => [m(f(r.address), 1)]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            p(
                                                                C,
                                                                { network: r.network, address: r.owner },
                                                                { default: T(() => [p(I, { address: r.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                    ]),
                                ]),
                            ]),
                        ])
                    )
                }
            )
        },
    }),
    m0 = { class: "row" },
    T0 = { class: "col-10 mx-auto" },
    h0 = s("br", null, null, -1),
    g0 = m(" Owners: "),
    w0 = m("\xA0 "),
    A0 = s("br", null, null, -1),
    E0 = s("br", null, null, -1),
    M0 = s(
        "table",
        { class: "table" },
        [
            s("thead", null, [
                s("tr", null, [s("th", { scope: "col" }, "Tokens"), s("th", { scope: "col" }, "Pending"), s("th", { scope: "col" }, "Value")]),
            ]),
            s("tbody"),
        ],
        -1
    ),
    _0 = _({
        async setup(e) {
            let t, a
            const o = F("app"),
                i = Fe(),
                r = new h[parseInt(i.params.network)](),
                u = i.params.address,
                d = o.multisigs.filter((q) => q.address === u && q.network === r.chainId)[0]
            je.connect(u, r.provider)
            const v = new qe(r.chainId, u),
                O = (([t, a] = be(() => v.getOwners())), (t = await t), a(), t),
                S = (([t, a] = be(() => v.getThreshold())), (t = await t), a(), t)
            async function W() {}
            return (
                W(),
                (q, re) => (
                    c(),
                    y("div", m0, [
                        s("div", T0, [
                            s("h2", null, f(b(r).chainName) + " " + f(b(d).name) + " MultiSig", 1),
                            m(" Address: " + f(b(u)), 1),
                            h0,
                            g0,
                            (c(!0),
                            y(
                                M,
                                null,
                                D(
                                    b(d).owners,
                                    (j) => (
                                        c(),
                                        y("span", null, [
                                            s(
                                                "span",
                                                {
                                                    class: Se(
                                                        [
                                                            "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC",
                                                            "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0",
                                                            "0xFBb3a85603C398Ff22435DD40873EC190134e1f6",
                                                            "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3",
                                                            "0x6b83270726342E02a11E755e8CC35275712122eC",
                                                            "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74",
                                                        ].includes(j)
                                                            ? ""
                                                            : "text-danger"
                                                    ),
                                                },
                                                [p(I, { address: j }, null, 8, ["address"]), w0],
                                                2
                                            ),
                                        ])
                                    )
                                ),
                                256
                            )),
                            A0,
                            m(" Threshold: " + f(b(S)) + " of " + f(b(O).length), 1),
                            E0,
                            M0,
                        ]),
                    ])
                )
            )
        },
    })
class x0 {
    async getPrices(t, a) {
        const o = a.filter((i) => i.constructor === U).map((i) => i.address)
        for (; o.length; )
            try {
                const i =
                        "https://api.coingecko.com/api/v3/simple/token_price/" +
                        t.coinGeckoId +
                        "?contract_addresses=" +
                        o.splice(0, 100).join(",") +
                        "&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false",
                    r = await (await fetch(i)).json()
                for (const u of Object.entries(r)) {
                    const d = L.get(t.chainId, u[0])
                    d.price = new E(u[1].usd)
                }
            } catch (i) {
                console.log(i)
            }
    }
}
const k0 = { key: 0 },
    ce = _({
        props: { token: null, amount: null },
        setup(e) {
            const t = e,
                a = P(() => {
                    var i, r
                    const o = ((r = t.amount) == null ? void 0 : r.toDec(((i = t.token) == null ? void 0 : i.decimals) || 0)) || new E(0)
                    return o.gt(1e4) ? o.toFixed(0) : o.toSignificantDigits(4).toString()
                })
            return (o, i) => {
                var r, u
                return (
                    c(),
                    y(
                        M,
                        null,
                        [
                            m(f(b(a)), 1),
                            ((r = e.token) == null ? void 0 : r.symbol)
                                ? (c(), y("span", k0, f(" " + ((u = e.token) == null ? void 0 : u.symbol)), 1))
                                : ae("", !0),
                        ],
                        64
                    )
                )
            }
        },
    }),
    v0 = { key: 0 },
    ye = _({
        props: { amount: null },
        setup(e) {
            const t = e,
                a = P(() => {
                    var o
                    return ((o = t.amount) == null ? void 0 : o.toFixed(2)) || "0.00"
                })
            return (o, i) => (e.amount ? (c(), y("span", v0, " $" + f(b(a)), 1)) : ae("", !0))
        },
    }),
    C0 = { class: "row" },
    O0 = { class: "col-10 mx-auto" },
    B0 = m(" Address: "),
    I0 = s("br", null, null, -1),
    D0 = m(" Owner: "),
    S0 = s("br", null, null, -1),
    F0 = s("br", null, null, -1),
    U0 = { class: "table" },
    N0 = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Tokens"), s("th", { scope: "col" }, "Pending"), s("th", { scope: "col" }, "Value")])],
        -1
    ),
    R0 = m(" - "),
    L0 = _({
        async setup(e) {
            let t, a
            const o = F("app"),
                i = Fe(),
                r = new h[parseInt(i.params.network)](),
                u = i.params.address,
                d = o.wethMakers.filter((B) => B.address === u && B.network === r.chainId)[0],
                v = xe.connect(u, r.provider),
                O = (([t, a] = be(() => v.owner())), (t = await t), a(), t),
                S = o.factories.filter((B) => B.network === d.network)[0],
                W = ie(new E(0)),
                q = P(() => d.account.tokens.sort((B, N) => N.value(d.account).sub(B.value(d.account)).toNumber()))
            ie([])
            const re = ie([])
            async function j() {
                if ((S.pairs || (console.log("Getting factory info"), await rt(S)), S.pairs)) {
                    d.account.tokens = []
                    const B = new _e(r)
                    Qe.createInterface()
                    const N = z.createInterface()
                    console.log("Getting SLP balances"),
                        S.pairs.forEach((A) => {
                            const g = L.get(d.network, A, H)
                            B.queue(z.connect(g.address, r.provider).populateTransaction.balanceOf(d.address), N, (Y) => {
                                const ke = Y
                                ke.isZero() || (d.account.tokens.push(g), (d.account.balances[g.address] = ke))
                            })
                        }),
                        await B.call(100),
                        await L.loadInfo(d.account.tokens),
                        await L.loadSLPInfo(d.account.tokens),
                        console.log("Getting token balances"),
                        Object.values(L.tokens[d.network] || [])
                            .filter((A) => A.type === "Token")
                            .forEach((A) => {
                                B.queue(z.connect(A.address, r.provider).populateTransaction.balanceOf(d.address), N, (g) => {
                                    const Y = g
                                    Y.isZero() || (d.account.tokens.push(A), (d.account.balances[A.address] = Y))
                                })
                            }),
                        await B.call(100),
                        console.log("Loading tokens"),
                        await L.loadInfo(d.account.SLPTokens.map((A) => A.token0).concat(d.account.SLPTokens.map((A) => A.token1))),
                        console.log("Loading coinGecko"),
                        await new x0().getPrices(r, Object.values(L.tokens[r.chainId])),
                        (W.value = d.account.tokens.map((A) => A.value(d.account)).reduce((A, g) => A.add(g), new E(0)))
                }
            }
            return (
                j(),
                (B, N) => {
                    const A = $("b-form-checkbox")
                    return (
                        c(),
                        y("div", C0, [
                            s("div", O0, [
                                s("h2", null, [
                                    m(f(b(r).chainName) + " WethMaker ", 1),
                                    s("small", null, [p(ye, { amount: W.value }, null, 8, ["amount"])]),
                                ]),
                                B0,
                                p(C, { network: b(d).network, address: b(u) }, null, 8, ["network", "address"]),
                                I0,
                                D0,
                                p(I, { address: b(O) }, null, 8, ["address"]),
                                S0,
                                m(" Factory: " + f(b(S).address), 1),
                                F0,
                                s("table", U0, [
                                    N0,
                                    s("tbody", null, [
                                        (c(!0),
                                        y(
                                            M,
                                            null,
                                            D(
                                                b(q),
                                                (g) => (
                                                    c(),
                                                    y("tr", null, [
                                                        g.type === "Token"
                                                            ? (c(),
                                                              y(
                                                                  M,
                                                                  { key: 0 },
                                                                  [
                                                                      s("td", null, f(g.symbol), 1),
                                                                      s("td", null, [
                                                                          p(ce, { token: g, amount: g.balance(b(d).account) }, null, 8, [
                                                                              "token",
                                                                              "amount",
                                                                          ]),
                                                                      ]),
                                                                      s("td", null, [
                                                                          p(ye, { amount: g.value(b(d).account) }, null, 8, ["amount"]),
                                                                      ]),
                                                                  ],
                                                                  64
                                                              ))
                                                            : ae("", !0),
                                                        g instanceof b(H)
                                                            ? (c(),
                                                              y(
                                                                  M,
                                                                  { key: 1 },
                                                                  [
                                                                      s("td", null, f(g.symbol), 1),
                                                                      s("td", null, [
                                                                          p(ce, { token: g.token0, amount: g.balance0(b(d).account) }, null, 8, [
                                                                              "token",
                                                                              "amount",
                                                                          ]),
                                                                          R0,
                                                                          p(ce, { token: g.token1, amount: g.balance1(b(d).account) }, null, 8, [
                                                                              "token",
                                                                              "amount",
                                                                          ]),
                                                                      ]),
                                                                      s("td", null, [
                                                                          p(ye, { amount: g.value(b(d).account) }, null, 8, ["amount"]),
                                                                      ]),
                                                                      s("td", null, [
                                                                          p(
                                                                              A,
                                                                              {
                                                                                  modelValue: re.value,
                                                                                  "onUpdate:modelValue": N[0] || (N[0] = (Y) => (re.value = Y)),
                                                                                  value: g.address,
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ["modelValue", "value"]
                                                                          ),
                                                                      ]),
                                                                  ],
                                                                  64
                                                              ))
                                                            : ae("", !0),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                    ]),
                                ]),
                            ]),
                        ])
                    )
                }
            )
        },
    })
E.config({ precision: 36 })
E.config({ toExpNeg: -1e3 })
E.config({ toExpPos: 1e3 })
E.prototype.toInt = function (e) {
    return V.from(this.times(new E("10").pow(new E(e.toString()))).todp(0))
}
V.prototype.toDec = function (e) {
    return new E(this.toString()).dividedBy(new E(10).toPower((e || 0).toString()))
}
async function H0() {
    const e = bt(Gt)
    await le.web3.setup(),
        (window.data = le),
        (e.config.globalProperties.app = ne(le)),
        e.provide("app", e.config.globalProperties.app),
        e.use(
            ft({
                history: mt(),
                routes: [
                    { path: "/", component: Kt },
                    { path: "/multisigs", component: Nn },
                    { path: "/makers", component: Be },
                    { path: "/factories", component: Jn },
                    { path: "/chefs", component: d0 },
                    { path: "/bentoboxes", component: f0 },
                    { path: "/kashimasters", component: Be },
                    { path: "/routers", component: Vn },
                    { path: "/multisig/:network/:address", component: _0 },
                    { path: "/wethmaker/:network/:address", component: L0 },
                ],
            })
        ),
        e.use(Tt),
        e.mount("#app")
}
H0()

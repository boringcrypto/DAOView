var ut = Object.defineProperty
var lt = (e, t, n) => (t in e ? ut(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n))
var y = (e, t, n) => (lt(e, typeof t != "symbol" ? t + "" : t, n), n)
import {
    r as H,
    o as p,
    c as f,
    a as s,
    t as m,
    b,
    w as g,
    d as h,
    F as C,
    e as L,
    f as v,
    g as K,
    h as ct,
    S as pt,
    i as R,
    C as Ee,
    I,
    j as D,
    k as Be,
    l as Oe,
    m as bt,
    n as yt,
    p as J,
    W as de,
    q as ft,
    s as P,
    B as X,
    u as Q,
    v as mt,
    D as A,
    x as c,
    y as S,
    z as Ie,
    A as ht,
    E as De,
    G as Se,
    H as fe,
    J as Me,
    K as Tt,
    L as gt,
    M as wt,
    N as _t,
} from "./vendor.5efd37f7.js"
const At = function () {
    const t = document.createElement("link").relList
    if (t && t.supports && t.supports("modulepreload")) return
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r)
    new MutationObserver((r) => {
        for (const o of r) if (o.type === "childList") for (const u of o.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && i(u)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(r) {
        const o = {}
        return (
            r.integrity && (o.integrity = r.integrity),
            r.referrerpolicy && (o.referrerPolicy = r.referrerpolicy),
            r.crossorigin === "use-credentials"
                ? (o.credentials = "include")
                : r.crossorigin === "anonymous"
                ? (o.credentials = "omit")
                : (o.credentials = "same-origin"),
            o
        )
    }
    function i(r) {
        if (r.ep) return
        r.ep = !0
        const o = n(r)
        fetch(r.href, o)
    }
}
At()
var Et = (e, t) => {
    const n = e.__vccOpts || e
    for (const [i, r] of t) n[i] = r
    return n
}
const kt = {},
    Ct = { class: "navbar navbar-expand-lg navbar-light bg-light sticky-top" },
    Mt = { class: "container-fluid" },
    vt = { class: "navbar-brand", href: "#" },
    xt = s(
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
    Bt = { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
    Ot = { class: "navbar-nav me-auto mb-2 mb-lg-0" },
    It = { class: "nav-item" },
    Dt = h("Home"),
    St = { class: "nav-item dropdown" },
    Ft = s(
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
    Nt = { class: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
    Ut = h("Multi Sigs"),
    Rt = h("Routers"),
    Lt = h("Factories"),
    Pt = h("Makers"),
    Ht = h("Chefs"),
    $t = h("BentoBoxes"),
    Gt = { class: "navbar-nav d-flex" },
    qt = s("br", null, null, -1)
function Vt(e, t) {
    var i
    const n = H("router-link")
    return (
        p(),
        f("nav", Ct, [
            s("div", Mt, [
                s("a", vt, m(e.app.name), 1),
                xt,
                s("div", Bt, [
                    s("ul", Ot, [
                        s("li", It, [b(n, { class: "nav-link active", "aria-current": "page", to: "/" }, { default: g(() => [Dt]), _: 1 })]),
                        s("li", St, [
                            Ft,
                            s("ul", Nt, [
                                s("li", null, [
                                    b(n, { class: "dropdown-item", "aria-current": "page", to: "/multisigs" }, { default: g(() => [Ut]), _: 1 }),
                                ]),
                                s("li", null, [
                                    b(n, { class: "dropdown-item", "aria-current": "page", to: "/routers" }, { default: g(() => [Rt]), _: 1 }),
                                ]),
                                s("li", null, [
                                    b(n, { class: "dropdown-item", "aria-current": "page", to: "/factories" }, { default: g(() => [Lt]), _: 1 }),
                                ]),
                                s("li", null, [
                                    b(n, { class: "dropdown-item", "aria-current": "page", to: "/makers" }, { default: g(() => [Pt]), _: 1 }),
                                ]),
                                s("li", null, [
                                    b(n, { class: "dropdown-item", "aria-current": "page", to: "/chefs" }, { default: g(() => [Ht]), _: 1 }),
                                ]),
                                s("li", null, [
                                    b(
                                        n,
                                        { class: "dropdown-item", "aria-current": "page", to: "/bentoboxes" },
                                        { default: g(() => [$t]), _: 1 }
                                    ),
                                ]),
                            ]),
                        ]),
                    ]),
                    s("ul", Gt, [
                        h(m((i = e.app.web3.connector) == null ? void 0 : i.chainName) + " " + m(e.app.web3.address) + " ", 1),
                        e.app.web3.safe ? (p(), f(C, { key: 0 }, [qt, h(" Gnosis: " + m(e.app.web3.safe.safeAddress), 1)], 64)) : L("", !0),
                    ]),
                ]),
            ]),
        ])
    )
}
var Yt = Et(kt, [["render", Vt]])
const Kt = h(" Loading... "),
    Xt = v({
        setup(e) {
            return (t, n) => {
                const i = H("router-view")
                return (
                    p(),
                    f(
                        C,
                        null,
                        [
                            b(Yt),
                            b(i, null, {
                                default: g(({ Component: r }) => [
                                    (p(),
                                    K(pt, null, { fallback: g(() => [Kt]), default: g(() => [s("div", null, [(p(), K(ct(r)))])]), _: 2 }, 1024)),
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
    Wt = { class: "row mt-3" },
    jt = s("div", { class: "col-10 mx-auto" }, null, -1),
    Jt = [jt],
    Zt = v({
        setup(e) {
            return R("app"), (t, n) => (p(), f("div", Wt, Jt))
        },
    }),
    ne = [
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
    ve =
        "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d146101a657806386d516e8146101c4578063a8b0574e146101e2578063bce38bd714610200578063c3077fa914610230578063ee82ac5e14610262576100b4565b80630f28c97d146100b9578063252dba42146100d757806327e86d6e14610108578063399542e91461012657806342cbb15c146101585780634d2301cc14610176575b600080fd5b6100c1610292565b6040516100ce91906106a3565b60405180910390f35b6100f160048036038101906100ec91906109d2565b61029a565b6040516100ff929190610b65565b60405180910390f35b610110610423565b60405161011d9190610bae565b60405180910390f35b610140600480360381019061013b9190610c01565b610438565b60405161014f93929190610d6b565b60405180910390f35b610160610457565b60405161016d91906106a3565b60405180910390f35b610190600480360381019061018b9190610da9565b61045f565b60405161019d91906106a3565b60405180910390f35b6101ae610480565b6040516101bb91906106a3565b60405180910390f35b6101cc610488565b6040516101d991906106a3565b60405180910390f35b6101ea610490565b6040516101f79190610de5565b60405180910390f35b61021a60048036038101906102159190610c01565b610498565b6040516102279190610e00565b60405180910390f35b61024a600480360381019061024591906109d2565b610640565b60405161025993929190610d6b565b60405180910390f35b61027c60048036038101906102779190610e4e565b610663565b6040516102899190610bae565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff8111156102bc576102bb6106e8565b5b6040519080825280602002602001820160405280156102ef57816020015b60608152602001906001900390816102da5790505b50905060005b835181101561041d5760008085838151811061031457610313610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061034957610348610e7b565b5b6020026020010151602001516040516103629190610ee6565b6000604051808303816000865af19150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5091509150816103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090610f5a565b60405180910390fd5b808484815181106103fd576103fc610e7b565b5b60200260200101819052505050808061041590610fa9565b9150506102f5565b50915091565b60006001436104329190610ff2565b40905090565b60008060604392504340915061044e8585610498565b90509250925092565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b6060815167ffffffffffffffff8111156104b5576104b46106e8565b5b6040519080825280602002602001820160405280156104ee57816020015b6104db61066e565b8152602001906001900390816104d35790505b50905060005b82518110156106395760008084838151811061051357610512610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061054857610547610e7b565b5b6020026020010151602001516040516105619190610ee6565b6000604051808303816000865af19150503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915085156105ef57816105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590611098565b60405180910390fd5b5b604051806040016040528083151581526020018281525084848151811061061957610618610e7b565b5b60200260200101819052505050808061063190610fa9565b9150506104f4565b5092915050565b6000806060610650600185610438565b8093508194508295505050509193909250565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b61069d8161068a565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610720826106d7565b810181811067ffffffffffffffff8211171561073f5761073e6106e8565b5b80604052505050565b60006107526106be565b905061075e8282610717565b919050565b600067ffffffffffffffff82111561077e5761077d6106e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107c98261079e565b9050919050565b6107d9816107be565b81146107e457600080fd5b50565b6000813590506107f6816107d0565b92915050565b600080fd5b600067ffffffffffffffff82111561081c5761081b6106e8565b5b610825826106d7565b9050602081019050919050565b82818337600083830152505050565b600061085461084f84610801565b610748565b9050828152602081018484840111156108705761086f6107fc565b5b61087b848285610832565b509392505050565b600082601f830112610898576108976106d2565b5b81356108a8848260208601610841565b91505092915050565b6000604082840312156108c7576108c6610794565b5b6108d16040610748565b905060006108e1848285016107e7565b600083015250602082013567ffffffffffffffff81111561090557610904610799565b5b61091184828501610883565b60208301525092915050565b600061093061092b84610763565b610748565b905080838252602082019050602084028301858111156109535761095261078f565b5b835b8181101561099a57803567ffffffffffffffff811115610978576109776106d2565b5b80860161098589826108b1565b85526020850194505050602081019050610955565b5050509392505050565b600082601f8301126109b9576109b86106d2565b5b81356109c984826020860161091d565b91505092915050565b6000602082840312156109e8576109e76106c8565b5b600082013567ffffffffffffffff811115610a0657610a056106cd565b5b610a12848285016109a4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a81578082015181840152602081019050610a66565b83811115610a90576000848401525b50505050565b6000610aa182610a47565b610aab8185610a52565b9350610abb818560208601610a63565b610ac4816106d7565b840191505092915050565b6000610adb8383610a96565b905092915050565b6000602082019050919050565b6000610afb82610a1b565b610b058185610a26565b935083602082028501610b1785610a37565b8060005b85811015610b535784840389528151610b348582610acf565b9450610b3f83610ae3565b925060208a01995050600181019050610b1b565b50829750879550505050505092915050565b6000604082019050610b7a6000830185610694565b8181036020830152610b8c8184610af0565b90509392505050565b6000819050919050565b610ba881610b95565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b60008115159050919050565b610bde81610bc9565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b60008060408385031215610c1857610c176106c8565b5b6000610c2685828601610bec565b925050602083013567ffffffffffffffff811115610c4757610c466106cd565b5b610c53858286016109a4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c9281610bc9565b82525050565b6000604083016000830151610cb06000860182610c89565b5060208301518482036020860152610cc88282610a96565b9150508091505092915050565b6000610ce18383610c98565b905092915050565b6000602082019050919050565b6000610d0182610c5d565b610d0b8185610c68565b935083602082028501610d1d85610c79565b8060005b85811015610d595784840389528151610d3a8582610cd5565b9450610d4583610ce9565b925060208a01995050600181019050610d21565b50829750879550505050505092915050565b6000606082019050610d806000830186610694565b610d8d6020830185610b9f565b8181036040830152610d9f8184610cf6565b9050949350505050565b600060208284031215610dbf57610dbe6106c8565b5b6000610dcd848285016107e7565b91505092915050565b610ddf816107be565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b60006020820190508181036000830152610e1a8184610cf6565b905092915050565b610e2b8161068a565b8114610e3657600080fd5b50565b600081359050610e4881610e22565b92915050565b600060208284031215610e6457610e636106c8565b5b6000610e7284828501610e39565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000610ec082610a47565b610eca8185610eaa565b9350610eda818560208601610a63565b80840191505092915050565b6000610ef28284610eb5565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564600082015250565b6000610f44602083610efd565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb48261068a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fe757610fe6610f7a565b5b600182019050919050565b6000610ffd8261068a565b91506110088361068a565b92508282101561101b5761101a610f7a565b5b828203905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611082602183610efd565b915061108d82611026565b604082019050919050565b600060208201905081810360008301526110b181611075565b905091905056fea26469706673582212202ad79168f7d1dfe0e32b590efa8eefaaaf0c61e9f6257161be30bcbab1ad332264736f6c63430008090033",
    Qt = (e) => e.length > 1
class se extends Ee {
    constructor(...t) {
        y(this, "contractName")
        Qt(t) ? super(...t) : super(ne, ve, t[0]), (this.contractName = "Multicall2")
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
        return new I(ne)
    }
    static connect(t, n) {
        return new D(t, ne, n)
    }
}
y(se, "contractName"), y(se, "bytecode", ve), y(se, "abi", ne)
var a = ((e) => (
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
))(a || {})
class E {
    constructor(t) {
        y(this, "provider")
        y(this, "items", [])
        t ? (this.provider = t) : (this.provider = new bt({ url: this.rpcUrls[0] }))
    }
    static get chainId() {
        return a.NONE
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
            chainId: Be(Oe(this.chainId)),
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
    queue(t, n, i, r) {
        this.items.push({ transactionPromise: t, contractInterface: n, callback: i, failcallback: r })
    }
    async call(t = 0) {
        const n = []
        for (; this.items.length; ) {
            const i = se.connect(this.multiCallAddress, this.provider),
                r = this.items.splice(0, t || this.items.length)
            for (let d in r) r[d].transaction = await r[d].transactionPromise
            const o = r.map((d) => ({ target: d.transaction.to, callData: d.transaction.data })),
                u = await i.callStatic.tryAggregate(!1, o)
            r.forEach((d, l) => {
                var U
                if (u[l].success) {
                    let _ = u[l].returnData
                    if (d.contractInterface)
                        try {
                            _ = d.contractInterface.decodeFunctionResult(
                                d.contractInterface.parseTransaction({ data: ((U = d.transaction) == null ? void 0 : U.data) || "" }).name,
                                u[l].returnData
                            )
                        } catch {}
                    d.callback && d.callback(_.length === 1 ? _[0] : _, d.transaction), n.push(_.length === 1 ? _[0] : _)
                } else d.failcallback && d.failcallback(d.transaction), console.log("Fail"), n.push(new Error("Failed"))
            })
        }
        return n
    }
}
class V extends E {
    static get chainId() {
        return a.ETHEREUM
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
class zt extends V {
    static get chainId() {
        return a.ROPSTEN
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
class e0 extends V {
    static get chainId() {
        return a.KOVAN
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
class t0 extends V {
    static get chainId() {
        return a.RINKEBY
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
class n0 extends V {
    static get chainId() {
        return a.GOERLI
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
class Fe extends E {
    static get chainId() {
        return a.BINANCE
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
class a0 extends Fe {
    static get chainId() {
        return a.BINANCE_TEST
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
class s0 extends E {
    static get chainId() {
        return a.FUSE
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
class Ne extends E {
    static get chainId() {
        return a.POLYGON
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
class r0 extends Ne {
    static get chainId() {
        return a.POLYGON_TEST
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
class i0 extends E {
    static get chainId() {
        return a.XDAI
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
class Ue extends E {
    static get chainId() {
        return a.HUOBI
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
class o0 extends Ue {
    static get chainId() {
        return a.HUOBI_TEST
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
class Re extends V {
    static get chainId() {
        return a.ARBITRUM
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
class d0 extends Re {
    static get chainId() {
        return a.ARBITRUM_TEST
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
class Le extends E {
    static get chainId() {
        return a.AVALANCHE
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
class u0 extends Le {
    static get chainId() {
        return a.AVALANCHE_TEST
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
class Pe extends E {
    static get chainId() {
        return a.TOMO
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
class l0 extends Pe {
    static get chainId() {
        return a.TOMO_TEST
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
class He extends E {
    static get chainId() {
        return a.FANTOM
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
class c0 extends He {
    static get chainId() {
        return a.FANTOM
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
class p0 extends E {
    static get chainId() {
        return a.MOONBEAM
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
class b0 extends E {
    static get chainId() {
        return a.MOONBEAM_TEST
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
class y0 extends E {
    static get chainId() {
        return a.MOONBEAM_KUSAMA
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
class f0 extends V {
    static get chainId() {
        return a.HARDHAT
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
class m0 extends E {
    static get chainId() {
        return a.CELO
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
class $e extends E {
    static get chainId() {
        return a.HARMONY
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
class h0 extends $e {
    static get chainId() {
        return a.HARMONY_TEST
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
class Ge extends E {
    static get chainId() {
        return a.OKEX
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
class T0 extends Ge {
    static get chainId() {
        return a.OKEX_TEST
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
class g0 extends E {
    static get chainId() {
        return a.PALM
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
class w0 extends E {
    static get chainId() {
        return a.TELOS
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
const w = {
    [a.NONE]: E,
    [a.ETHEREUM]: V,
    [a.ROPSTEN]: zt,
    [a.KOVAN]: e0,
    [a.RINKEBY]: t0,
    [a.GOERLI]: n0,
    [a.BINANCE]: Fe,
    [a.BINANCE_TEST]: a0,
    [a.FUSE]: s0,
    [a.POLYGON]: Ne,
    [a.POLYGON_TEST]: r0,
    [a.XDAI]: i0,
    [a.HUOBI]: Ue,
    [a.HUOBI_TEST]: o0,
    [a.ARBITRUM]: Re,
    [a.ARBITRUM_TEST]: d0,
    [a.AVALANCHE]: Le,
    [a.AVALANCHE_TEST]: u0,
    [a.TOMO]: Pe,
    [a.TOMO_TEST]: l0,
    [a.FANTOM]: He,
    [a.FANTOM_TEST]: c0,
    [a.MOONBEAM]: p0,
    [a.MOONBEAM_TEST]: b0,
    [a.MOONBEAM_KUSAMA]: y0,
    [a.HARDHAT]: f0,
    [a.CELO]: m0,
    [a.HARMONY]: $e,
    [a.HARMONY_TEST]: h0,
    [a.OKEX]: Ge,
    [a.OKEX_TEST]: T0,
    [a.PALM]: g0,
    [a.TELOS]: w0,
}
class _0 {
    constructor() {
        y(this, "name", "Loading...")
        y(this, "walletProvider", 1)
        y(this, "connected", !1)
        y(this, "chainId", a.NONE)
        y(this, "address", "")
        y(this, "addresses", [])
        y(this, "block", 0)
        y(this, "provider")
        y(this, "gnosis")
        y(this, "safe")
        y(this, "update")
        y(this, "connector")
    }
    connect() {
        this.connected && window.ethereum.request && window.ethereum.request({ method: "eth_requestAccounts" })
    }
    switch(t) {
        console.log(t, window.ethereum),
            window.ethereum &&
                window.ethereum.request &&
                window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: Be(Oe(t)) }] }).catch((n) => {
                    console.log(n),
                        n.code == 4902 &&
                            window.ethereum &&
                            window.ethereum.request &&
                            window.ethereum.request({ method: "wallet_addEthereumChain", params: [w[t].chainParams] })
                })
    }
    setup() {
        const t = new yt()
        if (
            (t.safe.getInfo().then((n) => {
                console.log("Gnosis safe found:", n), (this.safe = n), (this.gnosis = J(new de(new ft.SafeAppProvider(n, t))))
            }),
            (this.update = P(() => this.chainId + "|" + this.block + "|" + this.address)),
            (this.connector = P(() => (this.provider ? new w[this.chainId](this.provider) : null))),
            window.ethereum && window.ethereum.request)
        ) {
            ;(this.provider = J(new de(window.ethereum))),
                window.ethereum.isMetaMask ? (this.name = "MetaMask") : (this.name = "Other"),
                (window.ethereum.autoRefreshOnNetworkChange = !1)
            const n = (u) => {
                    this.block = u
                },
                i = (u) => {
                    var d
                    ;(this.chainId = Number(X.from(u))),
                        (this.connected = !0),
                        (d = this.provider) == null || d.off("block"),
                        (this.provider = J(new de(window.ethereum))),
                        this.provider.on("block", n)
                },
                r = (u) => {
                    i(u.chainId)
                },
                o = (u) => {
                    ;(this.addresses = u || []), u && u.length ? (this.address = u[0]) : (this.address = "")
                }
            window.ethereum.on("accountsChanged", o),
                window.ethereum.on("chainChanged", i),
                window.ethereum.on("connect", r),
                window.ethereum.on("disconnect", (u) => {
                    ;(this.connected = !1), (this.block = 0)
                }),
                this.provider.on("block", n),
                window.ethereum
                    .request({ method: "eth_accounts" })
                    .then((u) => {
                        o(u), r({ chainId: window.ethereum.chainId })
                    })
                    .catch((u) => {
                        console.log("Error", u)
                    })
        } else this.name = "None"
    }
}
const ue = [
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
class q {
    static createInterface() {
        return new I(ue)
    }
    static connect(t, n) {
        return new D(t, ue, n)
    }
}
y(q, "abi", ue)
const le = [
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
class qe {
    static createInterface() {
        return new I(le)
    }
    static connect(t, n) {
        return new D(t, le, n)
    }
}
y(qe, "abi", le)
const ce = [
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
class G {
    static createInterface() {
        return new I(ce)
    }
    static connect(t, n) {
        return new D(t, ce, n)
    }
}
y(G, "abi", ce)
class Ve {
    constructor(t, n) {
        y(this, "connector")
        y(this, "address")
        y(this, "safe")
        ;(this.connector = J(new w[t]())), (this.address = n), (this.safe = J(qe.connect(n, this.connector.provider)))
    }
    get chainID() {
        return { [a.ETHEREUM]: "eth", [a.XDAI]: "gno", [a.POLYGON]: "matic", [a.BINANCE]: "bnb", [a.ARBITRUM]: "arb1", [a.AVALANCHE]: "avax" }[
            this.connector.chainId
        ]
    }
    get transactionHistoryUrl() {
        if ([a.ETHEREUM, a.XDAI, a.POLYGON, a.BINANCE, a.ARBITRUM, a.AVALANCHE].includes(this.connector.chainId))
            return "https://gnosis-safe.io/app/" + this.chainID + ":" + this.address + "/transactions/history"
        if (this.connector.chainId == a.HARMONY) return "https://multisig.harmony.one/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == a.FANTOM) return "https://safe.fantom.network/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == a.CELO) return "https://ui.celo-safe.io/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == a.MOONBEAM) return "https://multisig.moonbeam.network/moonbeam:" + this.address + "/transactions/history"
        if (this.connector.chainId == a.MOONBEAM_KUSAMA)
            return "https://multisig.moonbeam.network/mriver:" + this.address + "/transactions/history"
        if (this.connector.chainId == a.FUSE) return "https://safe.fuse.io/fuse:" + this.address + "/transactions/history"
    }
    async getOwners() {
        return await this.safe.getOwners()
    }
    async getThreshold() {
        return (await this.safe.getThreshold()).toNumber()
    }
    async getTokenBalances() {
        if ([a.ETHEREUM, a.BINANCE, a.ARBITRUM, a.POLYGON, a.XDAI, a.FUSE, a.CELO, a.FANTOM].indexOf(this.connector.chainId) !== -1) {
            let t =
                "https://safe-client.gnosis.io/v1/chains/" +
                this.connector.chainId +
                "/safes/" +
                this.address +
                "/balances/USD?exclude_spam=true&trusted=false"
            this.connector.chainId === a.FUSE &&
                (t = "https://safe-service.fuse.io/cgw/v1/chains/122/safes/" + this.address + "/balances/USD/?exclude_spam=true&trusted=false"),
                this.connector.chainId === a.CELO &&
                    (t =
                        "https://client-gateway.celo-safe.io/v1/chains/" +
                        this.connector.chainId +
                        "/safes/" +
                        this.address +
                        "/balances/USD?exclude_spam=true&trusted=false"),
                this.connector.chainId === a.FANTOM &&
                    (t =
                        "https://safe.fantom.network/v1/chains/" +
                        this.connector.chainId +
                        "/safes/" +
                        this.address +
                        "/balances/USD?exclude_spam=true&trusted=false")
            const n = await (await fetch(t)).json()
            return { total: parseFloat(n.fiatTotal), tokens: n.items }
        }
        return this.connector.chainId === a.HARMONY
            ? { total: 0, tokens: [] }
            : (console.log("TODO:", this.connector.chainName), { total: 0, tokens: [] })
    }
}
const re = [
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
    Ye =
        "0x60806040523480156200001157600080fd5b5060405162000812380380620008128339818101604052810190620000379190620002a4565b80600090805190602001906200004f92919062000057565b50506200035a565b828054620000659062000324565b90600052602060002090601f016020900481019282620000895760008555620000d5565b82601f10620000a457805160ff1916838001178555620000d5565b82800160010185558215620000d5579182015b82811115620000d4578251825591602001919060010190620000b7565b5b509050620000e49190620000e8565b5090565b5b8082111562000103576000816000905550600101620000e9565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001708262000125565b810181811067ffffffffffffffff8211171562000192576200019162000136565b5b80604052505050565b6000620001a762000107565b9050620001b5828262000165565b919050565b600067ffffffffffffffff821115620001d857620001d762000136565b5b620001e38262000125565b9050602081019050919050565b60005b8381101562000210578082015181840152602081019050620001f3565b8381111562000220576000848401525b50505050565b60006200023d6200023784620001ba565b6200019b565b9050828152602081018484840111156200025c576200025b62000120565b5b62000269848285620001f0565b509392505050565b600082601f8301126200028957620002886200011b565b5b81516200029b84826020860162000226565b91505092915050565b600060208284031215620002bd57620002bc62000111565b5b600082015167ffffffffffffffff811115620002de57620002dd62000116565b5b620002ec8482850162000271565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200033d57607f821691505b60208210811415620003545762000353620002f5565b5b50919050565b6104a8806200036a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea26469706673582212202df62d8852bcb0e0db2e0c936670271d826d4c7f8be6532ea5f14d364c5fc86364736f6c63430008090033",
    A0 = (e) => e.length > 1
class Ke extends Ee {
    constructor(...t) {
        A0(t) ? super(...t) : super(re, Ye, t[0]), (this.contractName = "Greeter")
    }
    deploy(t, n) {
        return super.deploy(t, n || {})
    }
    getDeployTransaction(t, n) {
        return super.getDeployTransaction(t, n || {})
    }
    attach(t) {
        return super.attach(t)
    }
    connect(t) {
        return super.connect(t)
    }
    static createInterface() {
        return new I(re)
    }
    static connect(t, n) {
        return new D(t, re, n)
    }
}
Ke.bytecode = Ye
Ke.abi = re
const me = [
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
class Xe {
    static createInterface() {
        return new I(me)
    }
    static connect(t, n) {
        return new D(t, me, n)
    }
}
Xe.abi = me
const he = [
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
class We {
    static createInterface() {
        return new I(he)
    }
    static connect(t, n) {
        return new D(t, he, n)
    }
}
We.abi = he
const Te = [
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
        name: "sushiPerSecond",
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
class z {
    static createInterface() {
        return new I(Te)
    }
    static connect(t, n) {
        return new D(t, Te, n)
    }
}
z.abi = Te
const ge = [
    {
        inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
        name: "lpToken",
        outputs: [{ internalType: "address", name: "", type: "address" }],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
        name: "poolInfo",
        outputs: [
            {
                components: [
                    { internalType: "uint128", name: "accSushiPerShare", type: "uint128" },
                    { internalType: "uint64", name: "lastRewardBlock", type: "uint64" },
                    { internalType: "uint64", name: "allocPoint", type: "uint64" },
                ],
                internalType: "struct IMasterChefV2.PoolInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
]
class je {
    static createInterface() {
        return new I(ge)
    }
    static connect(t, n) {
        return new D(t, ge, n)
    }
}
je.abi = ge
const we = [
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
        return new I(we)
    }
    static connect(t, n) {
        return new D(t, we, n)
    }
}
Je.abi = we
const _e = [
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
        return new I(_e)
    }
    static connect(t, n) {
        return new D(t, _e, n)
    }
}
Ze.abi = _e
const Ae = [
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
    {
        inputs: [
            { internalType: "address[]", name: "lpTokens", type: "address[]" },
            { internalType: "uint256[]", name: "amounts", type: "uint256[]" },
            { internalType: "uint256[]", name: "minimumOut0", type: "uint256[]" },
            { internalType: "uint256[]", name: "minimumOut1", type: "uint256[]" },
        ],
        name: "burnPairs",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [
            { internalType: "address", name: "token", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "_value", type: "uint256" },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
]
class Z {
    static createInterface() {
        return new I(Ae)
    }
    static connect(t, n) {
        return new D(t, Ae, n)
    }
}
Z.abi = Ae
const ie = [
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
    Qe =
        "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d146101a657806386d516e8146101c4578063a8b0574e146101e2578063bce38bd714610200578063c3077fa914610230578063ee82ac5e14610262576100b4565b80630f28c97d146100b9578063252dba42146100d757806327e86d6e14610108578063399542e91461012657806342cbb15c146101585780634d2301cc14610176575b600080fd5b6100c1610292565b6040516100ce91906106a3565b60405180910390f35b6100f160048036038101906100ec91906109d2565b61029a565b6040516100ff929190610b65565b60405180910390f35b610110610423565b60405161011d9190610bae565b60405180910390f35b610140600480360381019061013b9190610c01565b610438565b60405161014f93929190610d6b565b60405180910390f35b610160610457565b60405161016d91906106a3565b60405180910390f35b610190600480360381019061018b9190610da9565b61045f565b60405161019d91906106a3565b60405180910390f35b6101ae610480565b6040516101bb91906106a3565b60405180910390f35b6101cc610488565b6040516101d991906106a3565b60405180910390f35b6101ea610490565b6040516101f79190610de5565b60405180910390f35b61021a60048036038101906102159190610c01565b610498565b6040516102279190610e00565b60405180910390f35b61024a600480360381019061024591906109d2565b610640565b60405161025993929190610d6b565b60405180910390f35b61027c60048036038101906102779190610e4e565b610663565b6040516102899190610bae565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff8111156102bc576102bb6106e8565b5b6040519080825280602002602001820160405280156102ef57816020015b60608152602001906001900390816102da5790505b50905060005b835181101561041d5760008085838151811061031457610313610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061034957610348610e7b565b5b6020026020010151602001516040516103629190610ee6565b6000604051808303816000865af19150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5091509150816103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090610f5a565b60405180910390fd5b808484815181106103fd576103fc610e7b565b5b60200260200101819052505050808061041590610fa9565b9150506102f5565b50915091565b60006001436104329190610ff2565b40905090565b60008060604392504340915061044e8585610498565b90509250925092565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b6060815167ffffffffffffffff8111156104b5576104b46106e8565b5b6040519080825280602002602001820160405280156104ee57816020015b6104db61066e565b8152602001906001900390816104d35790505b50905060005b82518110156106395760008084838151811061051357610512610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061054857610547610e7b565b5b6020026020010151602001516040516105619190610ee6565b6000604051808303816000865af19150503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915085156105ef57816105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590611098565b60405180910390fd5b5b604051806040016040528083151581526020018281525084848151811061061957610618610e7b565b5b60200260200101819052505050808061063190610fa9565b9150506104f4565b5092915050565b6000806060610650600185610438565b8093508194508295505050509193909250565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b61069d8161068a565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610720826106d7565b810181811067ffffffffffffffff8211171561073f5761073e6106e8565b5b80604052505050565b60006107526106be565b905061075e8282610717565b919050565b600067ffffffffffffffff82111561077e5761077d6106e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107c98261079e565b9050919050565b6107d9816107be565b81146107e457600080fd5b50565b6000813590506107f6816107d0565b92915050565b600080fd5b600067ffffffffffffffff82111561081c5761081b6106e8565b5b610825826106d7565b9050602081019050919050565b82818337600083830152505050565b600061085461084f84610801565b610748565b9050828152602081018484840111156108705761086f6107fc565b5b61087b848285610832565b509392505050565b600082601f830112610898576108976106d2565b5b81356108a8848260208601610841565b91505092915050565b6000604082840312156108c7576108c6610794565b5b6108d16040610748565b905060006108e1848285016107e7565b600083015250602082013567ffffffffffffffff81111561090557610904610799565b5b61091184828501610883565b60208301525092915050565b600061093061092b84610763565b610748565b905080838252602082019050602084028301858111156109535761095261078f565b5b835b8181101561099a57803567ffffffffffffffff811115610978576109776106d2565b5b80860161098589826108b1565b85526020850194505050602081019050610955565b5050509392505050565b600082601f8301126109b9576109b86106d2565b5b81356109c984826020860161091d565b91505092915050565b6000602082840312156109e8576109e76106c8565b5b600082013567ffffffffffffffff811115610a0657610a056106cd565b5b610a12848285016109a4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a81578082015181840152602081019050610a66565b83811115610a90576000848401525b50505050565b6000610aa182610a47565b610aab8185610a52565b9350610abb818560208601610a63565b610ac4816106d7565b840191505092915050565b6000610adb8383610a96565b905092915050565b6000602082019050919050565b6000610afb82610a1b565b610b058185610a26565b935083602082028501610b1785610a37565b8060005b85811015610b535784840389528151610b348582610acf565b9450610b3f83610ae3565b925060208a01995050600181019050610b1b565b50829750879550505050505092915050565b6000604082019050610b7a6000830185610694565b8181036020830152610b8c8184610af0565b90509392505050565b6000819050919050565b610ba881610b95565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b60008115159050919050565b610bde81610bc9565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b60008060408385031215610c1857610c176106c8565b5b6000610c2685828601610bec565b925050602083013567ffffffffffffffff811115610c4757610c466106cd565b5b610c53858286016109a4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c9281610bc9565b82525050565b6000604083016000830151610cb06000860182610c89565b5060208301518482036020860152610cc88282610a96565b9150508091505092915050565b6000610ce18383610c98565b905092915050565b6000602082019050919050565b6000610d0182610c5d565b610d0b8185610c68565b935083602082028501610d1d85610c79565b8060005b85811015610d595784840389528151610d3a8582610cd5565b9450610d4583610ce9565b925060208a01995050600181019050610d21565b50829750879550505050505092915050565b6000606082019050610d806000830186610694565b610d8d6020830185610b9f565b8181036040830152610d9f8184610cf6565b9050949350505050565b600060208284031215610dbf57610dbe6106c8565b5b6000610dcd848285016107e7565b91505092915050565b610ddf816107be565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b60006020820190508181036000830152610e1a8184610cf6565b905092915050565b610e2b8161068a565b8114610e3657600080fd5b50565b600081359050610e4881610e22565b92915050565b600060208284031215610e6457610e636106c8565b5b6000610e7284828501610e39565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000610ec082610a47565b610eca8185610eaa565b9350610eda818560208601610a63565b80840191505092915050565b6000610ef28284610eb5565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564600082015250565b6000610f44602083610efd565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb48261068a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fe757610fe6610f7a565b5b600182019050919050565b6000610ffd8261068a565b91506110088361068a565b92508282101561101b5761101a610f7a565b5b828203905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611082602183610efd565b915061108d82611026565b604082019050919050565b600060208201905081810360008301526110b181611075565b905091905056fea2646970667358221220a6abea822e004150d7df5d59c9ec8933da946cf625db7b082e9dd8936ce2c7b464736f6c63430008090033",
    E0 = (e) => e.length > 1
class ze extends Ee {
    constructor(...t) {
        E0(t) ? super(...t) : super(ie, Qe, t[0]), (this.contractName = "Multicall2")
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
        return new I(ie)
    }
    static connect(t, n) {
        return new D(t, ie, n)
    }
}
ze.bytecode = Qe
ze.abi = ie
class et {
    constructor(t, n) {
        y(this, "network")
        y(this, "address")
        y(this, "loaded", !1)
        y(this, "details")
        ;(this.network = t), (this.address = n), (this.details = new k0(this))
    }
    get type() {
        return this.details.type
    }
    get name() {
        return this.details.name
    }
    get symbol() {
        return this.details.symbol
    }
    get decimals() {
        return this.details.decimals
    }
    get price() {
        return this.details.price
    }
    value(t) {
        return this.details.value(t)
    }
}
class tt {
    constructor(t) {
        y(this, "token")
        y(this, "type", "")
        this.token = t
    }
    get name() {
        return ""
    }
    get symbol() {
        return ""
    }
    get decimals() {
        return 0
    }
    get price() {
        return new A(0)
    }
    value(t) {
        return new A(0)
    }
}
class k0 extends tt {
    constructor() {
        super(...arguments)
        y(this, "type", "ERC20")
        y(this, "_name", "")
        y(this, "_symbol", "")
        y(this, "_decimals", 0)
        y(this, "_price", new A(0))
    }
    get name() {
        return this._name
    }
    set name(t) {
        this._name = t
    }
    get symbol() {
        return this._symbol
    }
    set symbol(t) {
        this._symbol = t
    }
    get decimals() {
        return this._decimals
    }
    set decimals(t) {
        this._decimals = t
    }
    get price() {
        return this._price
    }
    set price(t) {
        this._price = t
    }
    value(t) {
        return this.price ? t.toDec(this.decimals).mul(this.price) : new A(0)
    }
}
class Y extends tt {
    constructor() {
        super(...arguments)
        y(this, "type", "SLP")
        y(this, "token0")
        y(this, "token1")
        y(this, "totalSupply")
        y(this, "reserve0")
        y(this, "reserve1")
    }
    get name() {
        return this.token0 && this.token1 ? "SushiSwap " + this.token0.symbol + "/" + this.token1.symbol + " LP (SLP)" : "Sushiswap LP Token"
    }
    get symbol() {
        return this.token0 && this.token1 ? this.token0.symbol + "-" + this.token1.symbol + " SLP" : "SLP"
    }
    get decimals() {
        return 18
    }
    balance0(t) {
        return this.token0 && this.totalSupply && !this.totalSupply.isZero() && t && this.reserve0
            ? t.mul(this.reserve0).div(this.totalSupply)
            : X.from(0)
    }
    balance1(t) {
        return this.token1 && this.totalSupply && !this.totalSupply.isZero() && t && this.reserve1
            ? t.mul(this.reserve1).div(this.totalSupply)
            : X.from(0)
    }
    value0(t) {
        return this.token0 && this.token0.price ? this.balance0(t).toDec(this.token0.decimals).mul(this.token0.price) : new A(0)
    }
    value1(t) {
        return this.token1 && this.token1.price ? this.balance1(t).toDec(this.token1.decimals).mul(this.token1.price) : new A(0)
    }
    value(t) {
        return this.value0(t).isZero()
            ? this.value1(t).mul(2)
            : this.value1(t).isZero()
            ? this.value0(t).mul(2)
            : this.value0(t).add(this.value1(t))
    }
}
class C0 {
    constructor() {
        y(this, "tokenList", Q([]))
        y(this, "tokens", Q({}))
        y(this, "web3")
        this.load()
    }
    get(t, n) {
        if (((n = mt(n)), this.tokens[t] || (this.tokens[t] = {}), !this.tokens[t][n])) {
            const i = new et(t, n)
            this.tokenList.push(i), (this.tokens[t][n] = i)
        }
        return this.tokens[t][n]
    }
    async _handleToLoad(t, n, i, r) {
        r ? (r = [...new Set(r)]) : (r = this.tokenList), (r = r.filter(t))
        const o = {}
        r.forEach((u) => {
            var d
            o[u.network] || (o[u.network] = []), (d = o[u.network]) == null || d.push(u)
        })
        for (const u of Object.values(o).filter((d) => d.length)) {
            const d = new w[u[0].network]()
            for (const l of u) n(l, d)
            if ((await d.call(100), i)) for (const l of u) i(l)
        }
    }
    queueERC20(t, n) {
        if (t.loaded) return
        const i = q.connect(t.address, n.provider)
        n.queue(
            i.populateTransaction.name(),
            q.createInterface(),
            (r) => (t.details.name = r),
            () => console.log(n.chainName, t.address, "Name")
        ),
            n.queue(
                i.populateTransaction.symbol(),
                q.createInterface(),
                (r) => (t.details.symbol = r),
                () => console.log(n.chainName, t.address, "Symbol")
            ),
            n.queue(
                i.populateTransaction.decimals(),
                q.createInterface(),
                (r) => {
                    ;(t.details.decimals = r),
                        t.name === "SushiSwap LP Token" &&
                            t.symbol === "SLP" &&
                            t.decimals === 18 &&
                            ((t.details = new Y(t)), this.queueSLP(t, n), (t.loaded = !0))
                },
                () => console.log(n.chainName, t.address, "Decimals")
            )
    }
    queueSLP(t, n) {
        if (t.loaded) return
        const i = G.connect(t.address, n.provider)
        n.queue(i.populateTransaction.token0(), G.createInterface(), (r) => {
            ;(t.details.token0 = this.get(n.chainId, r)), this.queueERC20(t.details.token0, n)
        }),
            n.queue(i.populateTransaction.token1(), G.createInterface(), (r) => {
                ;(t.details.token1 = this.get(n.chainId, r)), this.queueERC20(t.details.token1, n), (t.loaded = !0)
            })
    }
    async loadInfo(t) {
        await this._handleToLoad(
            (n) => !n.loaded,
            (n, i) => {
                n.details instanceof Y ? this.queueSLP(n, i) : this.queueERC20(n, i)
            },
            (n) => (n.loaded = !0),
            t
        ),
            this.save()
    }
    async loadSLPInfo(t) {
        await this._handleToLoad(
            (n) => n.details instanceof Y,
            (n, i) => {
                const r = G.connect(n.address, i.provider)
                i.queue(r.populateTransaction.getReserves(), G.createInterface(), (o) => {
                    ;(n.details.reserve0 = o.reserve0), (n.details.reserve1 = o.reserve1)
                }),
                    i.queue(r.populateTransaction.totalSupply(), G.createInterface(), (o) => (n.details.totalSupply = o))
            },
            void 0,
            t
        )
    }
    load() {
        const t = JSON.parse(localStorage.getItem("Tokens") || "[]")
        for (const n of t) {
            const i = this.get(n.network, n.address)
            ;(i.network = n.network),
                (i.address = n.address),
                (i.loaded = n.loaded),
                n.type === "SLP"
                    ? ((i.details = new Y(n)),
                      (i.details.token0 = this.get(n.network, n.token0)),
                      (i.details.token1 = this.get(n.network, n.token1)))
                    : ((i.details.name = n.name), (i.details.symbol = n.symbol), (i.details.decimals = n.decimals))
        }
    }
    save() {
        localStorage.setItem(
            "Tokens",
            JSON.stringify(
                this.tokenList.map((t) => {
                    var n, i
                    return t.details instanceof Y
                        ? {
                              type: t.type,
                              network: t.network,
                              address: t.address,
                              loaded: t.loaded,
                              token0: (n = t.details.token0) == null ? void 0 : n.address,
                              token1: (i = t.details.token1) == null ? void 0 : i.address,
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
const N = new C0()
class pe {
    constructor(t) {
        y(this, "address")
        y(this, "balances", {})
        y(this, "tokens", [])
        this.address = t
    }
    balance(t) {
        return this.balances[t.address] || X.from(0)
    }
    value(t) {
        return t.value(this.balances[t.address])
    }
    get SLPTokens() {
        return this.tokens.filter((t) => t.details instanceof Y)
    }
    async loadNetworkBalances(t) {
        console.log("Getting token balances", t, N.tokens[t])
        const n = new w[t](),
            i = q.createInterface()
        Object.values(N.tokens[t] || []).forEach((r) => {
            n.queue(q.connect(r.address, n.provider).populateTransaction.balanceOf(this.address), i, (o) => {
                const u = o
                !u.isZero() && !this.balances[r.address] && (this.tokens.push(r), (this.balances[r.address] = u))
            })
        }),
            await n.call(100)
    }
}
const nt = [
        { name: "Ops", network: a.ETHEREUM, address: "0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7" },
        { name: "Fees", network: a.POLYGON, address: "0x850a57630A2012B2494779fBc86bBc24F2a7baeF" },
        { name: "Ops", network: a.POLYGON, address: "0x2B23D9B02FffA1F5441Ef951B4B95c09faa57EBA" },
        { name: "Ops", network: a.XDAI, address: "0xc375411C6597F692Add6a7a3AD5b3C38626B0F26" },
        { name: "Ops", network: a.HARMONY, address: "0x30af69A3f4a6f266961313Ce0943719dF4A8AA10" },
        { name: "Ops", network: a.BINANCE, address: "0xc6fD91aD4919Fd91e2c84077ba648092cB499638" },
        { name: "Ops", network: a.FANTOM, address: "0xF9E7d4c6d36ca311566f46c81E572102A2DC9F52" },
        { name: "Ops", network: a.AVALANCHE, address: "0x09842Ce338647906B686aBB3B648A6457fbB25DA" },
        { name: "Ops", network: a.CELO, address: "0x751b01Fa14fD9640a1DF9014e2D0f3a03A198b81" },
        { name: "Fees", network: a.CELO, address: "0x8b63fcBB752e425e3C4B12F7802BAd1A24c6d7F4" },
        { name: "Ops", network: a.MOONBEAM_KUSAMA, address: "0x939f7E76cc515cc296dD3ce362D9a52e148A7D5f" },
        { name: "Fees", network: a.MOONBEAM_KUSAMA, address: "0x6669cc35031A84fAc1Efe30bB586B9ADdf223Fbc" },
        { name: "Ops", network: a.FUSE, address: "0x33b6beb37837459Ee84a1Ffed2C6a4ca22e5F316" },
        { name: "Ops", network: a.ARBITRUM, address: "0x978982772b8e4055B921bf9295c0d74eB36Bc54e" },
        { name: "Ops", network: a.MOONBEAM, address: "0x87AEb22b7BB02AC42204eB312C08A22FC3f077F3" },
    ],
    at = [{ network: a.ETHEREUM, address: "0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277" }],
    st = [
        {
            network: a.ARBITRUM,
            address: "0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8",
            account: new pe("0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8"),
        },
        {
            network: a.POLYGON,
            address: "0xf1c9881Be22EBF108B8927c4d197d126346b5036",
            account: new pe("0xf1c9881Be22EBF108B8927c4d197d126346b5036"),
        },
        {
            network: a.AVALANCHE,
            address: "0x560C759A11cd026405F6f2e19c65Da1181995fA2",
            account: new pe("0x560C759A11cd026405F6f2e19c65Da1181995fA2"),
        },
    ],
    rt = [
        { network: a.ETHEREUM, address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac" },
        { network: a.POLYGON, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.ARBITRUM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.AVALANCHE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.MOONBEAM_KUSAMA, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.FANTOM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.BINANCE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.XDAI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.HARMONY, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.TELOS, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.CELO, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.FUSE, address: "0x43eA90e2b786728520e4f930d2A71a477BF2737C" },
        { network: a.OKEX, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.HUOBI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.PALM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: a.MOONBEAM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    ],
    M0 = [
        { network: a.ETHEREUM, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
        { network: a.POLYGON, address: "0x0319000133d3AdA02600f0875d2cf03D442C3367" },
        { network: a.ARBITRUM, address: "0x74c764d41b77dbbb4fe771dab1939b00b146894a" },
        { network: a.BINANCE, address: "0xf5bce5077908a1b7370b9ae04adc565ebd643966" },
        { network: a.MOONBEAM, address: "0x80C7DD17B01855a6D2347444a0FCC36136a314de" },
        { network: a.FANTOM, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
        { network: a.XDAI, address: "0xE2d7F5dd869Fc7c126D21b13a9080e75a4bDb324" },
        { network: a.AVALANCHE, address: "0x0711B6026068f736bae6B213031fCE978D48E026" },
        { network: a.HUOBI, address: "0xF5BCE5077908a1b7370B9ae04AdC565EBd643966" },
        { network: a.CELO, address: "0x0711B6026068f736bae6B213031fCE978D48E026" },
    ],
    ke = Q([])
var be = Q({
    title: "DAOView",
    name: "SushiView",
    web3: new _0(),
    multisigs: nt,
    masterchefs: [{ network: a.ETHEREUM, address: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd" }],
    masterchefsV2: [{ network: a.ETHEREUM, address: "0xef0881ec094552b2e128cf945ef17a6752b4ec5d" }],
    minichefs: [
        { network: a.FANTOM, address: "0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5" },
        { network: a.POLYGON, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: a.XDAI, address: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3" },
        { network: a.ARBITRUM, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: a.HARMONY, address: "0x67da5f2ffaddff067ab9d5f025f8810634d84287" },
        { network: a.CELO, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: a.CELO, address: "0x8084936982D089130e001b470eDf58faCA445008" },
        { network: a.MOONBEAM_KUSAMA, address: "0x3dB01570D97631f69bbb0ba39796865456Cf89A5" },
        { network: a.FUSE, address: "0x182CD0C6F1FaEc0aED2eA83cd0e160c8Bd4cb063" },
        { network: a.MOONBEAM, address: "0x011E52E4E40CF9498c79273329E8827b21E2e581" },
    ],
    pools: ke,
    complexRewarders: [
        { network: a.FANTOM, address: "0xeaf76e3bD36680D98d254B378ED706cb0DFBfc1B" },
        { network: a.POLYGON, address: "0xa3378Ca78633B3b9b2255EAa26748770211163AE" },
        { network: a.XDAI, address: "0x84562cE1a5f3A4A957a5a94Ed0be05BA73fD2665" },
        { network: a.HARMONY, address: "0x25836011bbc0d5b6db96b20361a474cbc5245b45" },
        { network: a.CELO, address: "0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c" },
        { network: a.CELO, address: "0xFa3de59eDd2500BA725Dad355B98E6a4346Ada7d" },
        { network: a.MOONBEAM_KUSAMA, address: "0x1334c8e873E1cae8467156e2A81d1C8b566B2da1" },
        { network: a.FUSE, address: "0xEF502259Dd5d497d082498912031E027c4515563" },
    ],
    timelocks: [{ network: a.ETHEREUM, address: "0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1" }],
    routers: [
        { network: a.ETHEREUM, address: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F" },
        { network: a.POLYGON, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: a.ARBITRUM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: a.AVALANCHE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: a.MOONBEAM_KUSAMA, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: a.FANTOM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: a.BINANCE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: a.XDAI, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: a.HARMONY, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: a.TELOS, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: a.CELO, address: "0x1421bDe4B10e8dd459b3BCb598810B1337D56842" },
        { network: a.FUSE, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: a.OKEX, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: a.HUOBI, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: a.PALM, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: a.MOONBEAM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
    ],
    factories: rt,
    sushiMakers: at,
    wethMakers: st,
    bentoBoxes: M0,
    kashiMasters: [
        { network: a.ETHEREUM, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: a.POLYGON, address: "0xb527c5295c4bc348cbb3a2e96b2494fd292075a7" },
        { network: a.ARBITRUM, address: "0xa010ee0226cd071bebd8919a1f675cae1f1f5d3e" },
        { network: a.AVALANCHE, address: "0x513037395fa0c9c35e41f89189cedfe3bd42fadb" },
        { network: a.BINANCE, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: a.XDAI, address: "0x7a6da9903d0a481f40b8336c1463487bc8c0407e" },
        { network: a.HUOBI, address: "0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42" },
    ],
    kashiSushiMakers: [{ network: a.ETHEREUM, address: "0x08C82f7513C7952A95029FE3B1587B1FA52DACed" }],
})
const ee = {
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
nt.forEach((e) => {
    ee[e.address] = "MultiSig: " + e.name
})
at.forEach((e) => {
    ee[e.address] = "SushiMaker"
})
st.forEach((e) => {
    ee[e.address] = "WethMaker"
})
rt.forEach((e) => {
    ee[e.address] = "Factory"
})
async function it(e) {
    const t = new w[e.network](),
        n = "factory" + t.chainName + e.address,
        i = Je.connect(e.address, t.provider)
    if (
        ((e.pairCount = (await i.allPairsLength()).toNumber()),
        (e.feeTo = await i.feeTo()),
        (e.feeToSetter = await i.feeToSetter()),
        (e.pairs = JSON.parse(localStorage.getItem(n) || "[]").map((r) => N.get(e.network, r))),
        e.pairs.length < e.pairCount)
    ) {
        for (let r = e.pairs.length; r < e.pairCount; r++)
            t.queue(i.populateTransaction.allPairs(r), i.interface, (o) => {
                var u
                return (u = e.pairs) == null ? void 0 : u.push(N.get(e.network, o))
            })
        await t.call(250), localStorage.setItem(n, JSON.stringify(e.pairs.map((r) => r.address)))
    }
}
async function v0(e) {
    const t = new w[e.network]()
    ;(e.safe = new Ve(e.network, e.address)),
        (e.owners = [...(await e.safe.getOwners())].sort()),
        (e.threshold = await e.safe.getThreshold()),
        (e.tokens = await e.safe.getTokenBalances()),
        (e.nativeBalance = await t.provider.getBalance(e.address))
}
async function x0(e) {
    const t = new w[e.network](),
        n = Ze.connect(e.address, t.provider)
    e.factory = await n.factory()
}
async function B0(e) {
    const t = new w[e.network](),
        n = Z.connect(e.address, t.provider)
    e.owner = await n.owner()
}
async function O0(e) {
    const t = new w[e.network](),
        n = Xe.connect(e.address, t.provider)
    e.owner = await n.owner()
}
async function I0(e) {
    const t = new w[e.network](),
        n = z.connect(e.address, t.provider)
    for (let i = 0; i < (e.poolLength || 0); i++)
        t.queue(n.populateTransaction.poolInfo(i), n.interface, (r) => {
            var o
            r.allocPoint.isZero() ||
                ke.push({
                    poolId: i,
                    chef: e,
                    token: N.get(t.chainId, r.lpToken),
                    allocPoint: r.allocPoint,
                    accSushiPerShare: r.accSushiPerShare,
                    lastRewardBlock: r.lastRewardBlock,
                    sushiPerDay: (o = e.sushiPerDay) == null ? void 0 : o.mul(r.allocPoint).div(e.totalAllocPoint),
                })
        })
    await t.call(100)
}
async function ot(e) {
    console.log(e, e.poolLength)
    const t = new w[e.network](),
        n = je.connect(e.address, t.provider),
        i = {}
    for (let r = 0; r < (e.poolLength || 0); r++)
        t.queue(n.populateTransaction.poolInfo(r), n.interface, (o) => {
            var u
            i[r] = {
                poolId: r,
                chef: e,
                token: void 0,
                allocPoint: o.allocPoint,
                accSushiPerShare: o.accSushiPerShare,
                lastRewardBlock: o.lastRewardBlock,
                sushiPerDay: (u = e.sushiPerDay) == null ? void 0 : u.mul(o.allocPoint).div(e.totalAllocPoint),
            }
        }),
            t.queue(n.populateTransaction.lpToken(r), n.interface, (o) => (i[r].token = N.get(t.chainId, o)))
    await t.call(100), ke.push(...Object.values(i).filter((r) => !r.allocPoint.isZero()))
}
async function D0(e) {
    const t = new w[e.network](),
        n = z.connect(e.address, t.provider)
    ;(e.owner = await n.owner()),
        (e.devaddr = await n.devaddr()),
        (e.poolLength = (await n.poolLength()).toNumber()),
        (e.totalAllocPoint = await n.totalAllocPoint()),
        (e.sushiPerDay = (await n.sushiPerBlock()).mul(6595)),
        await I0(e)
}
async function S0(e) {
    const t = new w[e.network](),
        n = z.connect(e.address, t.provider)
    ;(e.owner = await n.owner()),
        (e.poolLength = (await n.poolLength()).toNumber()),
        (e.totalAllocPoint = await n.totalAllocPoint()),
        (e.sushiPerDay = (await n.sushiPerBlock()).mul(6595)),
        await ot(e)
}
async function F0(e) {
    const t = new w[e.network](),
        n = z.connect(e.address, t.provider)
    ;(e.owner = await n.owner()),
        (e.poolLength = (await n.poolLength()).toNumber()),
        (e.totalAllocPoint = await n.totalAllocPoint()),
        (e.sushiPerDay = (await n.sushiPerSecond()).mul(24 * 60 * 60)),
        await ot(e)
}
const F = v({
        props: { address: null },
        setup(e) {
            const t = e,
                n = P(() => (t.address ? ee[t.address] || t.address : "<empty>"))
            return (i, r) => m(c(n))
        },
    }),
    N0 = { class: "row mt-3" },
    U0 = { class: "col-10 mx-auto" },
    R0 = s("h2", null, "Multi Sigs", -1),
    L0 = { class: "table" },
    P0 = s(
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
    H0 = ["href"],
    $0 = h("\xA0 "),
    G0 = v({
        setup(e) {
            const t = R("app")
            return (
                t.multisigs.map((n) => v0(n)),
                (n, i) => {
                    const r = H("router-link")
                    return (
                        p(),
                        f("div", N0, [
                            s("div", U0, [
                                R0,
                                s("table", L0, [
                                    P0,
                                    s("tbody", null, [
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(c(t).multisigs, (o) => {
                                                var u, d
                                                return (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, [
                                                            b(
                                                                r,
                                                                { to: "/multisig/" + o.network + "/" + o.address },
                                                                {
                                                                    default: g(() => [h(m(c(w)[o.network].chainName) + " " + m(o.name), 1)]),
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
                                                                    href: (u = o.safe) == null ? void 0 : u.transactionHistoryUrl,
                                                                    target: "_blank",
                                                                },
                                                                m(o.address),
                                                                9,
                                                                H0
                                                            ),
                                                        ]),
                                                        s(
                                                            "td",
                                                            null,
                                                            m(o.threshold) + " of " + m(((d = o.owners) == null ? void 0 : d.length) || 0),
                                                            1
                                                        ),
                                                        s("td", null, [
                                                            (p(!0),
                                                            f(
                                                                C,
                                                                null,
                                                                S(
                                                                    o.owners,
                                                                    (l) => (
                                                                        p(),
                                                                        f("span", null, [
                                                                            s(
                                                                                "span",
                                                                                {
                                                                                    class: Ie(
                                                                                        [
                                                                                            "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC",
                                                                                            "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0",
                                                                                            "0xFBb3a85603C398Ff22435DD40873EC190134e1f6",
                                                                                            "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3",
                                                                                            "0x6b83270726342E02a11E755e8CC35275712122eC",
                                                                                            "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74",
                                                                                        ].includes(l)
                                                                                            ? ""
                                                                                            : "text-danger"
                                                                                    ),
                                                                                },
                                                                                [b(F, { address: l }, null, 8, ["address"]), $0],
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
    q0 = ["href"],
    V0 = { key: 1 },
    B = v({
        props: { address: null, network: null },
        setup(e) {
            const t = e,
                n = P(() => (t.network ? w[t.network] : null)),
                i = ht()
            return (r, o) => {
                var u
                return (
                    p(),
                    f(
                        "a",
                        { href: ((u = c(n)) == null ? void 0 : u.blockExplorerUrls[0]) + "address/" + t.address, target: "_blank" },
                        [c(i).default ? De(r.$slots, "default", { key: 0 }) : (p(), f("span", V0, m(e.address), 1))],
                        8,
                        q0
                    )
                )
            }
        },
    }),
    Y0 = { class: "row mt-3" },
    K0 = { class: "col-10 mx-auto" },
    X0 = s("h2", null, "Routers", -1),
    W0 = { class: "table" },
    j0 = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Factory")])],
        -1
    ),
    J0 = v({
        setup(e) {
            const t = R("app")
            return (
                t.routers.map((n) => x0(n)),
                (n, i) => (
                    p(),
                    f("div", Y0, [
                        s("div", K0, [
                            X0,
                            s("table", W0, [
                                j0,
                                s("tbody", null, [
                                    (p(!0),
                                    f(
                                        C,
                                        null,
                                        S(
                                            c(t).routers,
                                            (r) => (
                                                p(),
                                                f("tr", null, [
                                                    s("td", null, m(c(w)[r.network].chainName), 1),
                                                    s("td", null, [
                                                        b(B, { network: r.network, address: r.address }, null, 8, ["network", "address"]),
                                                    ]),
                                                    s("td", null, [b(F, { address: r.factory }, null, 8, ["address"])]),
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
    Z0 = { class: "row mt-3" },
    Q0 = { class: "col-10 mx-auto" },
    z0 = s("h2", null, "Factories", -1),
    en = { class: "table" },
    tn = s(
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
    nn = v({
        setup(e) {
            const t = R("app")
            return (
                t.factories.map((n) => it(n)),
                (n, i) => (
                    p(),
                    f("div", Z0, [
                        s("div", Q0, [
                            z0,
                            s("table", en, [
                                tn,
                                s("tbody", null, [
                                    (p(!0),
                                    f(
                                        C,
                                        null,
                                        S(
                                            c(t).factories,
                                            (r) => (
                                                p(),
                                                f("tr", null, [
                                                    s("td", null, [
                                                        b(
                                                            B,
                                                            { network: r.network, address: r.address },
                                                            { default: g(() => [h(m(c(w)[r.network].chainName), 1)]), _: 2 },
                                                            1032,
                                                            ["network", "address"]
                                                        ),
                                                    ]),
                                                    s("td", null, m(r.pairCount), 1),
                                                    s("td", null, [b(F, { address: r.feeTo }, null, 8, ["address"])]),
                                                    s("td", null, [b(F, { address: r.feeToSetter }, null, 8, ["address"])]),
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
    an = { class: "row mt-3" },
    sn = { class: "col-10 mx-auto" },
    rn = s("h2", null, "Makers", -1),
    on = { class: "table" },
    dn = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Admin")])],
        -1
    ),
    xe = v({
        setup(e) {
            const t = R("app")
            return (
                t.wethMakers.map((n) => B0(n)),
                (n, i) => {
                    const r = H("router-link")
                    return (
                        p(),
                        f("div", an, [
                            s("div", sn, [
                                rn,
                                s("table", on, [
                                    dn,
                                    s("tbody", null, [
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(
                                                c(t).wethMakers,
                                                (o) => (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, [
                                                            b(
                                                                r,
                                                                { to: "/wethmaker/" + o.network + "/" + o.address },
                                                                { default: g(() => [h(m(c(w)[o.network].chainName), 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: o.network, address: o.address },
                                                                { default: g(() => [h(m(o.address), 1)]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [b(F, { address: o.owner }, null, 8, ["address"])]),
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
    un = { key: 0 },
    oe = v({
        props: { token: null, amount: null },
        setup(e) {
            const t = e,
                n = P(() => {
                    var r, o
                    const i = ((o = t.amount) == null ? void 0 : o.toDec(((r = t.token) == null ? void 0 : r.decimals) || 0)) || new A(0)
                    return i.gt(1e4) ? i.toFixed(0) : i.toSignificantDigits(4).toString()
                })
            return (i, r) => {
                var o, u
                return (
                    p(),
                    f(
                        C,
                        null,
                        [
                            h(m(c(n)), 1),
                            ((o = e.token) == null ? void 0 : o.symbol)
                                ? (p(), f("span", un, m(" " + ((u = e.token) == null ? void 0 : u.symbol)), 1))
                                : L("", !0),
                        ],
                        64
                    )
                )
            }
        },
    }),
    ln = { class: "row mt-3" },
    cn = { class: "col-10 mx-auto" },
    pn = s("h2", null, "Chefs", -1),
    bn = { class: "table" },
    yn = s(
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
    fn = s("td", null, "N/A", -1),
    mn = s("td", null, "N/A", -1),
    hn = s("h2", null, "Pools", -1),
    Tn = { class: "table" },
    gn = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Chef"), s("th", { scope: "col" }, "Asset"), s("th", { scope: "col" }, "AllocPoint")])],
        -1
    ),
    wn = v({
        setup(e) {
            const t = R("app"),
                n = N.get(a.ETHEREUM, "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2")
            t.pools.splice(0, t.pools.length)
            const i = P(() =>
                t.pools.sort((o, u) => {
                    var d
                    return ((d = u.sushiPerDay) == null ? void 0 : d.sub(o.sushiPerDay || 0).isNegative()) ? -1 : 1
                })
            )
            async function r() {
                await Promise.all([...t.masterchefs.map((o) => D0(o)), ...t.masterchefsV2.map((o) => S0(o)), ...t.minichefs.map((o) => F0(o))]),
                    console.log("Loaded"),
                    await N.loadInfo()
            }
            return (
                r(),
                (o, u) => {
                    const d = H("router-link")
                    return (
                        p(),
                        f("div", ln, [
                            s("div", cn, [
                                pn,
                                s("table", bn, [
                                    yn,
                                    s("tbody", null, [
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(
                                                c(t).masterchefs,
                                                (l) => (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, [
                                                            b(
                                                                d,
                                                                { to: "/chef/" + l.network + "/" + l.address },
                                                                {
                                                                    default: g(() => [h(m(c(w)[l.network].chainName) + " MasterChef ", 1)]),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(B, { network: l.network, address: l.address }, null, 8, ["network", "address"]),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: l.network, address: l.owner },
                                                                { default: g(() => [b(F, { address: l.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: l.network, address: l.devaddr },
                                                                { default: g(() => [b(F, { address: l.devaddr }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, m(l.poolLength), 1),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(
                                                c(t).masterchefsV2,
                                                (l) => (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, [
                                                            b(
                                                                d,
                                                                { to: "/chef/" + l.network + "/" + l.address },
                                                                {
                                                                    default: g(() => [h(m(c(w)[l.network].chainName) + " MasterChefV2 ", 1)]),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(B, { network: l.network, address: l.address }, null, 8, ["network", "address"]),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: l.network, address: l.owner },
                                                                { default: g(() => [b(F, { address: l.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        fn,
                                                        s("td", null, m(l.poolLength), 1),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(
                                                c(t).minichefs,
                                                (l) => (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, [
                                                            b(
                                                                d,
                                                                { to: "/chef/" + l.network + "/" + l.address },
                                                                { default: g(() => [h(m(c(w)[l.network].chainName) + " MiniChef ", 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(B, { network: l.network, address: l.address }, null, 8, ["network", "address"]),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: l.network, address: l.owner },
                                                                { default: g(() => [b(F, { address: l.owner }, null, 8, ["address"])]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        mn,
                                                        s("td", null, m(l.poolLength), 1),
                                                    ])
                                                )
                                            ),
                                            256
                                        )),
                                    ]),
                                ]),
                                hn,
                                s("table", Tn, [
                                    gn,
                                    s("tbody", null, [
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(c(i), (l) => {
                                                var U
                                                return (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, m(c(w)[l.chef.network].chainName), 1),
                                                        s("td", null, m(l.poolId), 1),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: l.chef.network, address: (U = l.token) == null ? void 0 : U.address },
                                                                {
                                                                    default: g(() => {
                                                                        var _
                                                                        return [h(m((_ = l.token) == null ? void 0 : _.symbol), 1)]
                                                                    }),
                                                                    _: 2,
                                                                },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(oe, { token: c(n), amount: l.sushiPerDay }, null, 8, ["token", "amount"]),
                                                        ]),
                                                        s("td", null, m(l.allocPoint) + " / " + m(l.chef.totalAllocPoint), 1),
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
    _n = { class: "row mt-3" },
    An = { class: "col-10 mx-auto" },
    En = s("h2", null, "BentoBoxes", -1),
    kn = { class: "table" },
    Cn = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Admin")])],
        -1
    ),
    Mn = v({
        setup(e) {
            const t = R("app")
            return (
                t.bentoBoxes.map((n) => O0(n)),
                (n, i) => {
                    const r = H("router-link")
                    return (
                        p(),
                        f("div", _n, [
                            s("div", An, [
                                En,
                                s("table", kn, [
                                    Cn,
                                    s("tbody", null, [
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(
                                                c(t).bentoBoxes,
                                                (o) => (
                                                    p(),
                                                    f("tr", null, [
                                                        s("td", null, [
                                                            b(
                                                                r,
                                                                { to: "/bentobox/" + o.network + "/" + o.address },
                                                                { default: g(() => [h(m(c(w)[o.network].chainName), 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: o.network, address: o.address },
                                                                { default: g(() => [h(m(o.address), 1)]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            b(
                                                                B,
                                                                { network: o.network, address: o.owner },
                                                                { default: g(() => [b(F, { address: o.owner }, null, 8, ["address"])]), _: 2 },
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
    vn = { class: "row" },
    xn = { class: "col-10 mx-auto" },
    Bn = s("br", null, null, -1),
    On = h(" Owners: "),
    In = h("\xA0 "),
    Dn = s("br", null, null, -1),
    Sn = s("br", null, null, -1),
    Fn = s(
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
    Nn = v({
        async setup(e) {
            let t, n
            const i = R("app"),
                r = Se(),
                o = new w[parseInt(r.params.network)](),
                u = r.params.address,
                d = i.multisigs.filter((W) => W.address === u && W.network === o.chainId)[0]
            We.connect(u, o.provider)
            const l = new Ve(o.chainId, u),
                U = (([t, n] = fe(() => l.getOwners())), (t = await t), n(), t),
                _ = (([t, n] = fe(() => l.getThreshold())), (t = await t), n(), t)
            async function te() {}
            return (
                te(),
                (W, O) => (
                    p(),
                    f("div", vn, [
                        s("div", xn, [
                            s("h2", null, m(c(o).chainName) + " " + m(c(d).name) + " MultiSig", 1),
                            h(" Address: " + m(c(u)), 1),
                            Bn,
                            On,
                            (p(!0),
                            f(
                                C,
                                null,
                                S(
                                    c(d).owners,
                                    (j) => (
                                        p(),
                                        f("span", null, [
                                            s(
                                                "span",
                                                {
                                                    class: Ie(
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
                                                [b(F, { address: j }, null, 8, ["address"]), In],
                                                2
                                            ),
                                        ])
                                    )
                                ),
                                256
                            )),
                            Dn,
                            h(" Threshold: " + m(c(_)) + " of " + m(c(U).length), 1),
                            Sn,
                            Fn,
                        ]),
                    ])
                )
            )
        },
    })
class Un {
    async getPrices(t, n) {
        const i = n.filter((r) => r.constructor === et).map((r) => r.address)
        for (; i.length; )
            try {
                const r =
                        "https://api.coingecko.com/api/v3/simple/token_price/" +
                        t.coinGeckoId +
                        "?contract_addresses=" +
                        i.splice(0, 100).join(",") +
                        "&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false",
                    o = await (await fetch(r)).json()
                for (const u of Object.entries(o)) {
                    const d = N.get(t.chainId, u[0])
                    d.details.price = new A(u[1].usd)
                }
            } catch (r) {
                console.log(r)
            }
    }
}
const Rn = { key: 0 },
    ye = v({
        props: { amount: null },
        setup(e) {
            const t = e,
                n = P(() => {
                    var i
                    return ((i = t.amount) == null ? void 0 : i.toFixed(2)) || "0.00"
                })
            return (i, r) => (e.amount ? (p(), f("span", Rn, " $" + m(c(n)), 1)) : L("", !0))
        },
    }),
    ae = v({
        props: { network: null },
        setup(e) {
            const t = e,
                n = R("app")
            return (i, r) => {
                const o = H("b-button")
                return (
                    p(),
                    K(o, null, {
                        default: g(() => {
                            var u
                            return [
                                c(n).web3.address
                                    ? e.network && ((u = c(n).web3.connector) == null ? void 0 : u.chainId) !== e.network
                                        ? (p(), f("span", { key: 1, onClick: r[1] || (r[1] = (d) => c(n).web3.switch(t.network)) }, "Switch"))
                                        : De(i.$slots, "default", { key: 2 })
                                    : (p(),
                                      f(
                                          "span",
                                          { key: 0, onClick: r[0] || (r[0] = (...d) => c(n).web3.connect && c(n).web3.connect(...d)) },
                                          "Connect"
                                      )),
                            ]
                        }),
                        _: 3,
                    })
                )
            }
        },
    }),
    Ln = { class: "row" },
    Pn = { class: "col-10 mx-auto" },
    Hn = h(" Address: "),
    $n = s("br", null, null, -1),
    Gn = h(" Owner: "),
    qn = s("br", null, null, -1),
    Vn = s("br", null, null, -1),
    Yn = { class: "table" },
    Kn = s("th", { scope: "col" }, "Tokens", -1),
    Xn = s("th", { scope: "col" }, "Pending", -1),
    Wn = s("th", { scope: "col" }, "Value", -1),
    jn = { scope: "col" },
    Jn = h("Burn"),
    Zn = h("Safe"),
    Qn = h("Withdraw"),
    zn = h("Safe"),
    ea = h(" - "),
    ta = v({
        async setup(e) {
            let t, n
            const i = R("app"),
                r = Se(),
                o = new w[parseInt(r.params.network)](),
                u = r.params.address,
                d = i.wethMakers.filter((M) => M.address === u && M.network === o.chainId)[0],
                l = Z.connect(u, o.provider),
                U = (([t, n] = fe(() => l.owner())), (t = await t), n(), t),
                _ = i.factories.filter((M) => M.network === d.network)[0],
                te = Me(new A(0)),
                W = P(() => d.account.tokens.sort((M, x) => d.account.value(x).sub(d.account.value(M)).toNumber())),
                O = Me([])
            async function j(M, x) {
                const k = d.account.balance(M),
                    T = Z.connect(d.address, x)
                try {
                    const $ = await T.withdraw(M.address, U, k)
                    console.log($)
                } catch ($) {
                    console.log($)
                }
            }
            async function Ce(M) {
                const x = Z.connect(d.address, M)
                console.log(
                    O.value.map((k) => k.address),
                    O.value.map((k) => d.account.balances[k.address].toString()),
                    O.value.map((k) => k.details.balance0(d.account.balances[k.address]).mul(98).div(100).toString()),
                    O.value.map((k) => k.details.balance1(d.account.balances[k.address]).mul(98).div(100).toString())
                )
                try {
                    const k = await x.burnPairs(
                        O.value.map((T) => T.address),
                        O.value.map((T) => d.account.balances[T.address]),
                        O.value.map((T) => T.details.balance0(d.account.balances[T.address]).mul(98).div(100)),
                        O.value.map((T) => T.details.balance1(d.account.balances[T.address]).mul(98).div(100))
                    )
                    console.log(k)
                } catch (k) {
                    console.log(k)
                }
            }
            async function dt() {
                _.pairs || (console.log("Getting factory info"), await it(_)),
                    console.log(d, _),
                    _.pairs &&
                        ((d.account.tokens = []),
                        console.log("Getting SLP balances"),
                        await d.account.loadNetworkBalances(d.network),
                        await N.loadInfo(d.account.tokens),
                        await N.loadSLPInfo(d.account.tokens),
                        await d.account.loadNetworkBalances(d.network),
                        console.log("Loading coinGecko"),
                        await new Un().getPrices(o, Object.values(N.tokens[o.chainId])),
                        (te.value = d.account.tokens.map((M) => d.account.value(M)).reduce((M, x) => M.add(x), new A(0))))
            }
            return (
                dt(),
                (M, x) => {
                    const k = H("b-form-checkbox")
                    return (
                        p(),
                        f("div", Ln, [
                            s("div", Pn, [
                                s("h2", null, [
                                    h(m(c(o).chainName) + " WethMaker ", 1),
                                    s("small", null, [b(ye, { amount: te.value }, null, 8, ["amount"])]),
                                ]),
                                Hn,
                                b(B, { network: c(d).network, address: c(u) }, null, 8, ["network", "address"]),
                                $n,
                                Gn,
                                b(F, { address: c(U) }, null, 8, ["address"]),
                                qn,
                                h(" Factory: " + m(c(_).address), 1),
                                Vn,
                                s("table", Yn, [
                                    s("thead", null, [
                                        s("tr", null, [
                                            Kn,
                                            Xn,
                                            Wn,
                                            s("th", jn, [
                                                O.value.length
                                                    ? (p(),
                                                      K(
                                                          ae,
                                                          { key: 0, onClick: x[0] || (x[0] = (T) => Ce(c(i).web3.provider.getSigner())) },
                                                          { default: g(() => [Jn]), _: 1 }
                                                      ))
                                                    : L("", !0),
                                                O.value.length && c(i).web3.gnosis
                                                    ? (p(),
                                                      K(
                                                          ae,
                                                          { key: 1, onClick: x[1] || (x[1] = (T) => Ce(c(i).web3.gnosis.getSigner())) },
                                                          { default: g(() => [Zn]), _: 1 }
                                                      ))
                                                    : L("", !0),
                                            ]),
                                        ]),
                                    ]),
                                    s("tbody", null, [
                                        (p(!0),
                                        f(
                                            C,
                                            null,
                                            S(
                                                c(W),
                                                (T) => (
                                                    p(),
                                                    f("tr", null, [
                                                        T.type === "ERC20"
                                                            ? (p(),
                                                              f(
                                                                  C,
                                                                  { key: 0 },
                                                                  [
                                                                      s("td", null, m(T.symbol), 1),
                                                                      s("td", null, [
                                                                          b(oe, { token: T, amount: c(d).account.balance(T) }, null, 8, [
                                                                              "token",
                                                                              "amount",
                                                                          ]),
                                                                      ]),
                                                                      s("td", null, [
                                                                          b(ye, { amount: c(d).account.value(T) }, null, 8, ["amount"]),
                                                                      ]),
                                                                      s("td", null, [
                                                                          b(
                                                                              ae,
                                                                              {
                                                                                  network: c(d).network,
                                                                                  onClick: ($) => j(T, c(i).web3.provider.getSigner()),
                                                                              },
                                                                              { default: g(() => [Qn]), _: 2 },
                                                                              1032,
                                                                              ["network", "onClick"]
                                                                          ),
                                                                          c(i).web3.gnosis
                                                                              ? (p(),
                                                                                K(
                                                                                    ae,
                                                                                    {
                                                                                        key: 0,
                                                                                        network: c(d).network,
                                                                                        onClick: ($) => j(T, c(i).web3.gnosis.getSigner()),
                                                                                    },
                                                                                    { default: g(() => [zn]), _: 2 },
                                                                                    1032,
                                                                                    ["network", "onClick"]
                                                                                ))
                                                                              : L("", !0),
                                                                      ]),
                                                                  ],
                                                                  64
                                                              ))
                                                            : L("", !0),
                                                        T.type === "SLP"
                                                            ? (p(),
                                                              f(
                                                                  C,
                                                                  { key: 1 },
                                                                  [
                                                                      s("td", null, m(T.symbol), 1),
                                                                      s("td", null, [
                                                                          b(
                                                                              oe,
                                                                              {
                                                                                  token: T.details.token0,
                                                                                  amount: T.details.balance0(c(d).account.balance(T)),
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ["token", "amount"]
                                                                          ),
                                                                          ea,
                                                                          b(
                                                                              oe,
                                                                              {
                                                                                  token: T.details.token1,
                                                                                  amount: T.details.balance1(c(d).account.balance(T)),
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ["token", "amount"]
                                                                          ),
                                                                      ]),
                                                                      s("td", null, [
                                                                          b(ye, { amount: c(d).account.value(T) }, null, 8, ["amount"]),
                                                                      ]),
                                                                      s("td", null, [
                                                                          b(
                                                                              k,
                                                                              {
                                                                                  modelValue: O.value,
                                                                                  "onUpdate:modelValue": x[2] || (x[2] = ($) => (O.value = $)),
                                                                                  value: T,
                                                                              },
                                                                              null,
                                                                              8,
                                                                              ["modelValue", "value"]
                                                                          ),
                                                                      ]),
                                                                  ],
                                                                  64
                                                              ))
                                                            : L("", !0),
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
A.config({ precision: 36 })
A.config({ toExpNeg: -1e3 })
A.config({ toExpPos: 1e3 })
A.prototype.toInt = function (e) {
    return X.from(this.times(new A("10").pow(new A(e.toString()))).todp(0))
}
X.prototype.toDec = function (e) {
    return new A(this.toString()).dividedBy(new A(10).toPower((e || 0).toString()))
}
async function na() {
    const e = Tt(Xt)
    await be.web3.setup(),
        (window.data = be),
        (e.config.globalProperties.app = Q(be)),
        e.provide("app", e.config.globalProperties.app),
        e.use(
            gt({
                history: wt(),
                routes: [
                    { path: "/", component: Zt },
                    { path: "/multisigs", component: G0 },
                    { path: "/makers", component: xe },
                    { path: "/factories", component: nn },
                    { path: "/chefs", component: wn },
                    { path: "/bentoboxes", component: Mn },
                    { path: "/kashimasters", component: xe },
                    { path: "/routers", component: J0 },
                    { path: "/multisig/:network/:address", component: Nn },
                    { path: "/wethmaker/:network/:address", component: ta },
                ],
            })
        ),
        e.use(_t),
        e.mount("#app")
}
na()

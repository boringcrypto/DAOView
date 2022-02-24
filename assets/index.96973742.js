var Q0 = Object.defineProperty
var ee = (e, n, a) => (n in e ? Q0(e, n, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[n] = a))
var f = (e, n, a) => (ee(e, typeof n != "symbol" ? n + "" : n, a), a)
import {
    r as Y,
    o as l,
    c as p,
    a as s,
    t as b,
    b as y,
    w as x,
    d as h,
    e as k,
    F as M,
    f as E0,
    g as te,
    S as ne,
    i as S,
    C as i0,
    I as O,
    h as D,
    j as v0,
    k as B0,
    l as ae,
    m as P,
    n as _0,
    W as C0,
    B as c0,
    p as z,
    u as m,
    q as B,
    s as o0,
    v as se,
    x as re,
    y as O0,
    z as Q,
    A as ie,
    D as w,
    E as d0,
    G as ce,
    H as oe,
    J as de,
    K as ue,
    L as le,
} from "./vendor.bd6e6241.js"
const pe = function () {
    const n = document.createElement("link").relList
    if (n && n.supports && n.supports("modulepreload")) return
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) c(i)
    new MutationObserver((i) => {
        for (const r of i) if (r.type === "childList") for (const d of r.addedNodes) d.tagName === "LINK" && d.rel === "modulepreload" && c(d)
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
    function c(i) {
        if (i.ep) return
        i.ep = !0
        const r = a(i)
        fetch(i.href, r)
    }
}
pe()
var be = (e, n) => {
    const a = e.__vccOpts || e
    for (const [c, i] of n) a[c] = i
    return a
}
const fe = {},
    ye = { class: "navbar navbar-expand-lg navbar-light bg-light sticky-top" },
    me = { class: "container-fluid" },
    he = { class: "navbar-brand", href: "#" },
    Te = s(
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
    ge = { class: "collapse navbar-collapse", id: "navbarSupportedContent" },
    Ae = { class: "navbar-nav me-auto mb-2 mb-lg-0" },
    Ee = { class: "nav-item" },
    _e = h("Home"),
    Ce = { class: "nav-item dropdown" },
    xe = s(
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
    we = { class: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
    ke = h("Multi Sigs"),
    Me = h("Routers"),
    ve = h("Factories"),
    Be = h("Makers"),
    Oe = h("Chefs"),
    De = { class: "navbar-nav d-flex" }
function Ie(e, n) {
    var c
    const a = Y("router-link")
    return (
        l(),
        p("nav", ye, [
            s("div", me, [
                s("a", he, b(e.app.name), 1),
                Te,
                s("div", ge, [
                    s("ul", Ae, [
                        s("li", Ee, [y(a, { class: "nav-link active", "aria-current": "page", to: "/" }, { default: x(() => [_e]), _: 1 })]),
                        s("li", Ce, [
                            xe,
                            s("ul", we, [
                                s("li", null, [
                                    y(a, { class: "dropdown-item", "aria-current": "page", to: "/multisigs" }, { default: x(() => [ke]), _: 1 }),
                                ]),
                                s("li", null, [
                                    y(a, { class: "dropdown-item", "aria-current": "page", to: "/routers" }, { default: x(() => [Me]), _: 1 }),
                                ]),
                                s("li", null, [
                                    y(a, { class: "dropdown-item", "aria-current": "page", to: "/factories" }, { default: x(() => [ve]), _: 1 }),
                                ]),
                                s("li", null, [
                                    y(a, { class: "dropdown-item", "aria-current": "page", to: "/makers" }, { default: x(() => [Be]), _: 1 }),
                                ]),
                                s("li", null, [
                                    y(a, { class: "dropdown-item", "aria-current": "page", to: "/chefs" }, { default: x(() => [Oe]), _: 1 }),
                                ]),
                            ]),
                        ]),
                    ]),
                    s("ul", De, b((c = e.app.web3.connector) == null ? void 0 : c.chainName) + " " + b(e.app.web3.address), 1),
                ]),
            ]),
        ])
    )
}
var Fe = be(fe, [["render", Ie]])
const Ne = h(" Loading... "),
    Ue = k({
        setup(e) {
            return (n, a) => {
                const c = Y("router-view")
                return (
                    l(),
                    p(
                        M,
                        null,
                        [
                            y(Fe),
                            y(c, null, {
                                default: x(({ Component: i }) => [
                                    (l(),
                                    E0(
                                        ne,
                                        null,
                                        { fallback: x(() => [Ne]), default: x(() => [s("div", null, [(l(), E0(te(i)))])]), _: 2 },
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
    Se = { class: "row mt-3" },
    Re = s("div", { class: "col-10 mx-auto" }, null, -1),
    He = [Re],
    Le = k({
        setup(e) {
            return S("app"), (n, a) => (l(), p("div", Se, He))
        },
    }),
    W = [
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
    x0 =
        "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d146101a657806386d516e8146101c4578063a8b0574e146101e2578063bce38bd714610200578063c3077fa914610230578063ee82ac5e14610262576100b4565b80630f28c97d146100b9578063252dba42146100d757806327e86d6e14610108578063399542e91461012657806342cbb15c146101585780634d2301cc14610176575b600080fd5b6100c1610292565b6040516100ce91906106a3565b60405180910390f35b6100f160048036038101906100ec91906109d2565b61029a565b6040516100ff929190610b65565b60405180910390f35b610110610423565b60405161011d9190610bae565b60405180910390f35b610140600480360381019061013b9190610c01565b610438565b60405161014f93929190610d6b565b60405180910390f35b610160610457565b60405161016d91906106a3565b60405180910390f35b610190600480360381019061018b9190610da9565b61045f565b60405161019d91906106a3565b60405180910390f35b6101ae610480565b6040516101bb91906106a3565b60405180910390f35b6101cc610488565b6040516101d991906106a3565b60405180910390f35b6101ea610490565b6040516101f79190610de5565b60405180910390f35b61021a60048036038101906102159190610c01565b610498565b6040516102279190610e00565b60405180910390f35b61024a600480360381019061024591906109d2565b610640565b60405161025993929190610d6b565b60405180910390f35b61027c60048036038101906102779190610e4e565b610663565b6040516102899190610bae565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff8111156102bc576102bb6106e8565b5b6040519080825280602002602001820160405280156102ef57816020015b60608152602001906001900390816102da5790505b50905060005b835181101561041d5760008085838151811061031457610313610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061034957610348610e7b565b5b6020026020010151602001516040516103629190610ee6565b6000604051808303816000865af19150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5091509150816103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090610f5a565b60405180910390fd5b808484815181106103fd576103fc610e7b565b5b60200260200101819052505050808061041590610fa9565b9150506102f5565b50915091565b60006001436104329190610ff2565b40905090565b60008060604392504340915061044e8585610498565b90509250925092565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b6060815167ffffffffffffffff8111156104b5576104b46106e8565b5b6040519080825280602002602001820160405280156104ee57816020015b6104db61066e565b8152602001906001900390816104d35790505b50905060005b82518110156106395760008084838151811061051357610512610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061054857610547610e7b565b5b6020026020010151602001516040516105619190610ee6565b6000604051808303816000865af19150503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915085156105ef57816105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590611098565b60405180910390fd5b5b604051806040016040528083151581526020018281525084848151811061061957610618610e7b565b5b60200260200101819052505050808061063190610fa9565b9150506104f4565b5092915050565b6000806060610650600185610438565b8093508194508295505050509193909250565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b61069d8161068a565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610720826106d7565b810181811067ffffffffffffffff8211171561073f5761073e6106e8565b5b80604052505050565b60006107526106be565b905061075e8282610717565b919050565b600067ffffffffffffffff82111561077e5761077d6106e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107c98261079e565b9050919050565b6107d9816107be565b81146107e457600080fd5b50565b6000813590506107f6816107d0565b92915050565b600080fd5b600067ffffffffffffffff82111561081c5761081b6106e8565b5b610825826106d7565b9050602081019050919050565b82818337600083830152505050565b600061085461084f84610801565b610748565b9050828152602081018484840111156108705761086f6107fc565b5b61087b848285610832565b509392505050565b600082601f830112610898576108976106d2565b5b81356108a8848260208601610841565b91505092915050565b6000604082840312156108c7576108c6610794565b5b6108d16040610748565b905060006108e1848285016107e7565b600083015250602082013567ffffffffffffffff81111561090557610904610799565b5b61091184828501610883565b60208301525092915050565b600061093061092b84610763565b610748565b905080838252602082019050602084028301858111156109535761095261078f565b5b835b8181101561099a57803567ffffffffffffffff811115610978576109776106d2565b5b80860161098589826108b1565b85526020850194505050602081019050610955565b5050509392505050565b600082601f8301126109b9576109b86106d2565b5b81356109c984826020860161091d565b91505092915050565b6000602082840312156109e8576109e76106c8565b5b600082013567ffffffffffffffff811115610a0657610a056106cd565b5b610a12848285016109a4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a81578082015181840152602081019050610a66565b83811115610a90576000848401525b50505050565b6000610aa182610a47565b610aab8185610a52565b9350610abb818560208601610a63565b610ac4816106d7565b840191505092915050565b6000610adb8383610a96565b905092915050565b6000602082019050919050565b6000610afb82610a1b565b610b058185610a26565b935083602082028501610b1785610a37565b8060005b85811015610b535784840389528151610b348582610acf565b9450610b3f83610ae3565b925060208a01995050600181019050610b1b565b50829750879550505050505092915050565b6000604082019050610b7a6000830185610694565b8181036020830152610b8c8184610af0565b90509392505050565b6000819050919050565b610ba881610b95565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b60008115159050919050565b610bde81610bc9565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b60008060408385031215610c1857610c176106c8565b5b6000610c2685828601610bec565b925050602083013567ffffffffffffffff811115610c4757610c466106cd565b5b610c53858286016109a4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c9281610bc9565b82525050565b6000604083016000830151610cb06000860182610c89565b5060208301518482036020860152610cc88282610a96565b9150508091505092915050565b6000610ce18383610c98565b905092915050565b6000602082019050919050565b6000610d0182610c5d565b610d0b8185610c68565b935083602082028501610d1d85610c79565b8060005b85811015610d595784840389528151610d3a8582610cd5565b9450610d4583610ce9565b925060208a01995050600181019050610d21565b50829750879550505050505092915050565b6000606082019050610d806000830186610694565b610d8d6020830185610b9f565b8181036040830152610d9f8184610cf6565b9050949350505050565b600060208284031215610dbf57610dbe6106c8565b5b6000610dcd848285016107e7565b91505092915050565b610ddf816107be565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b60006020820190508181036000830152610e1a8184610cf6565b905092915050565b610e2b8161068a565b8114610e3657600080fd5b50565b600081359050610e4881610e22565b92915050565b600060208284031215610e6457610e636106c8565b5b6000610e7284828501610e39565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000610ec082610a47565b610eca8185610eaa565b9350610eda818560208601610a63565b80840191505092915050565b6000610ef28284610eb5565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564600082015250565b6000610f44602083610efd565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb48261068a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fe757610fe6610f7a565b5b600182019050919050565b6000610ffd8261068a565b91506110088361068a565b92508282101561101b5761101a610f7a565b5b828203905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611082602183610efd565b915061108d82611026565b604082019050919050565b600060208201905081810360008301526110b181611075565b905091905056fea26469706673582212202ad79168f7d1dfe0e32b590efa8eefaaaf0c61e9f6257161be30bcbab1ad332264736f6c63430008090033",
    $e = (e) => e.length > 1
class j extends i0 {
    constructor(...n) {
        f(this, "contractName")
        $e(n) ? super(...n) : super(W, x0, n[0]), (this.contractName = "Multicall2")
    }
    deploy(n) {
        return super.deploy(n || {})
    }
    getDeployTransaction(n) {
        return super.getDeployTransaction(n || {})
    }
    attach(n) {
        return super.attach(n)
    }
    connect(n) {
        return super.connect(n)
    }
    static createInterface() {
        return new O(W)
    }
    static connect(n, a) {
        return new D(n, W, a)
    }
}
f(j, "contractName"), f(j, "bytecode", x0), f(j, "abi", W)
var t = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.ETHEREUM = 1)] = "ETHEREUM"),
    (e[(e.ROPSTEN = 3)] = "ROPSTEN"),
    (e[(e.KOVAN = 42)] = "KOVAN"),
    (e[(e.RINKEBY = 4)] = "RINKEBY"),
    (e[(e.GOERLI = 5)] = "GOERLI"),
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
    (e[(e.ARBITRUM = 42161)] = "ARBITRUM"),
    (e[(e.ARBITRUM_TEST = 421611)] = "ARBITRUM_TEST"),
    (e[(e.AVALANCHE = 43114)] = "AVALANCHE"),
    (e[(e.AVALANCHE_TEST = 43113)] = "AVALANCHE_TEST"),
    (e[(e.TOMO = 88)] = "TOMO"),
    (e[(e.TOMO_TEST = 89)] = "TOMO_TEST"),
    (e[(e.FANTOM = 250)] = "FANTOM"),
    (e[(e.FANTOM_TEST = 4002)] = "FANTOM_TEST"),
    (e[(e.MOONBEAM_KUSAMA = 1285)] = "MOONBEAM_KUSAMA"),
    (e[(e.MOONBEAM_TEST = 1287)] = "MOONBEAM_TEST"),
    (e[(e.HARDHAT = 31337)] = "HARDHAT"),
    (e[(e.CELO = 42220)] = "CELO"),
    (e[(e.HARMONY = 16666e5)] = "HARMONY"),
    (e[(e.HARMONY_TEST = 16667e5)] = "HARMONY_TEST"),
    (e[(e.PALM = 11297108109)] = "PALM"),
    (e[(e.TELOS = 40)] = "TELOS"),
    e
))(t || {})
class A {
    constructor(n) {
        f(this, "provider")
        n ? (this.provider = n) : (this.provider = new ae({ url: this.rpcUrls[0] }))
    }
    static get chainId() {
        return t.NONE
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
            chainId: v0(B0(this.chainId)),
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
class u0 {
    constructor(n, a) {
        f(this, "connector")
        f(this, "items", [])
        if (((this.connector = n), a && a.length)) for (const c of a) Array.isArray(c) ? this.queue(c[0], c[1]) : this.queue(c)
    }
    queue(n, a, c) {
        this.items.push({ transactionPromise: n, contractInterface: a, callback: c })
    }
    async call(n = 0) {
        const a = []
        for (let c in this.items) this.items[c].transaction = await this.items[c].transactionPromise
        for (; this.items.length; ) {
            const c = j.connect(this.connector.multiCallAddress, this.connector.provider),
                i = this.items.splice(0, n || this.items.length),
                r = i.map((u) => ({ target: u.transaction.to, callData: u.transaction.data })),
                d = (await c.callStatic.aggregate(r)).returnData
            i.forEach((u, g) => {
                var v
                const I = u.contractInterface
                    ? u.contractInterface.decodeFunctionResult(
                          u.contractInterface.parseTransaction({ data: ((v = u.transaction) == null ? void 0 : v.data) || "" }).name,
                          d[g]
                      )
                    : d[g]
                return u.callback && u.callback(I.length === 1 ? I[0] : I, u.transaction), I
            })
        }
        return a
    }
}
class H extends A {
    static get chainId() {
        return t.ETHEREUM
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
class Pe extends H {
    static get chainId() {
        return t.ROPSTEN
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
class Ge extends H {
    static get chainId() {
        return t.KOVAN
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
class qe extends H {
    static get chainId() {
        return t.RINKEBY
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
class Ke extends H {
    static get chainId() {
        return t.GOERLI
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
class D0 extends A {
    static get chainId() {
        return t.BINANCE
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
class Ye extends D0 {
    static get chainId() {
        return t.BINANCE_TEST
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
class Ve extends A {
    static get chainId() {
        return t.FUSE
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
class I0 extends A {
    static get chainId() {
        return t.POLYGON
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
class Xe extends I0 {
    static get chainId() {
        return t.POLYGON_TEST
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
class We extends A {
    static get chainId() {
        return t.XDAI
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
class F0 extends A {
    static get chainId() {
        return t.HUOBI
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
class je extends F0 {
    static get chainId() {
        return t.HUOBI_TEST
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
class N0 extends H {
    static get chainId() {
        return t.ARBITRUM
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
class Je extends N0 {
    static get chainId() {
        return t.ARBITRUM_TEST
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
class U0 extends A {
    static get chainId() {
        return t.AVALANCHE
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
class Ze extends U0 {
    static get chainId() {
        return t.AVALANCHE_TEST
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
class S0 extends A {
    static get chainId() {
        return t.TOMO
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
class ze extends S0 {
    static get chainId() {
        return t.TOMO_TEST
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
class R0 extends A {
    static get chainId() {
        return t.FANTOM
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
class Qe extends R0 {
    static get chainId() {
        return t.FANTOM
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
class et extends A {
    static get chainId() {
        return t.MOONBEAM_TEST
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
class tt extends A {
    static get chainId() {
        return t.MOONBEAM_KUSAMA
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
class nt extends H {
    static get chainId() {
        return t.HARDHAT
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
class at extends A {
    static get chainId() {
        return t.CELO
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
class H0 extends A {
    static get chainId() {
        return t.HARMONY
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
class st extends H0 {
    static get chainId() {
        return t.HARMONY_TEST
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
class L0 extends A {
    static get chainId() {
        return t.OKEX
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
class rt extends L0 {
    static get chainId() {
        return t.OKEX_TEST
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
class it extends A {
    static get chainId() {
        return t.PALM
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
class ct extends A {
    static get chainId() {
        return t.TELOS
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
const E = {
    [t.NONE]: A,
    [t.ETHEREUM]: H,
    [t.ROPSTEN]: Pe,
    [t.KOVAN]: Ge,
    [t.RINKEBY]: qe,
    [t.GOERLI]: Ke,
    [t.BINANCE]: D0,
    [t.BINANCE_TEST]: Ye,
    [t.FUSE]: Ve,
    [t.POLYGON]: I0,
    [t.POLYGON_TEST]: Xe,
    [t.XDAI]: We,
    [t.HUOBI]: F0,
    [t.HUOBI_TEST]: je,
    [t.ARBITRUM]: N0,
    [t.ARBITRUM_TEST]: Je,
    [t.AVALANCHE]: U0,
    [t.AVALANCHE_TEST]: Ze,
    [t.TOMO]: S0,
    [t.TOMO_TEST]: ze,
    [t.FANTOM]: R0,
    [t.FANTOM_TEST]: Qe,
    [t.MOONBEAM_TEST]: et,
    [t.MOONBEAM_KUSAMA]: tt,
    [t.HARDHAT]: nt,
    [t.CELO]: at,
    [t.HARMONY]: H0,
    [t.HARMONY_TEST]: st,
    [t.OKEX]: L0,
    [t.OKEX_TEST]: rt,
    [t.PALM]: it,
    [t.TELOS]: ct,
}
class ot {
    constructor() {
        f(this, "name", "Loading...")
        f(this, "connected", !1)
        f(this, "chainId", t.NONE)
        f(this, "address", "")
        f(this, "addresses", [])
        f(this, "block", 0)
        f(this, "provider")
        f(this, "update")
        f(this, "connector")
    }
    connect() {
        this.connected && window.ethereum.request && window.ethereum.request({ method: "eth_requestAccounts" })
    }
    switch(n) {
        window.ethereum &&
            window.ethereum.request &&
            window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId: v0(B0(n)) }] }).catch((a) => {
                console.log(a),
                    a.code == 4902 &&
                        window.ethereum &&
                        window.ethereum.request &&
                        window.ethereum.request({ method: "wallet_addEthereumChain", params: [E[n].chainParams] })
            })
    }
    setup() {
        if (
            ((this.update = P(() => this.chainId + "|" + this.block + "|" + this.address)),
            (this.connector = P(() => (this.provider ? new E[this.chainId](this.provider) : null))),
            window.ethereum && window.ethereum.request)
        ) {
            ;(this.provider = _0(new C0(window.ethereum))),
                this.connector,
                window.ethereum.isMetaMask ? (this.name = "MetaMask") : (this.name = "Other"),
                (window.ethereum.autoRefreshOnNetworkChange = !1)
            const n = (r) => {
                    this.block = r
                },
                a = (r) => {
                    var d
                    ;(this.chainId = Number(c0.from(r))),
                        (this.connected = !0),
                        (d = this.provider) == null || d.off("block"),
                        (this.provider = _0(new C0(window.ethereum))),
                        this.provider.on("block", n)
                },
                c = (r) => {
                    a(r.chainId)
                },
                i = (r) => {
                    ;(this.addresses = r || []), r && r.length ? (this.address = r[0]) : (this.address = "")
                }
            window.ethereum.on("accountsChanged", i),
                window.ethereum.on("chainChanged", a),
                window.ethereum.on("connect", c),
                window.ethereum.on("disconnect", (r) => {
                    ;(this.connected = !1), (this.block = 0)
                }),
                this.provider.on("block", n),
                window.ethereum
                    .request({ method: "eth_accounts" })
                    .then((r) => {
                        i(r), c({ chainId: window.ethereum.chainId })
                    })
                    .catch((r) => {
                        console.log("Error", r)
                    })
        } else this.name = "None"
    }
}
const J = [
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
    $0 =
        "0x60806040523480156200001157600080fd5b5060405162000812380380620008128339818101604052810190620000379190620002a4565b80600090805190602001906200004f92919062000057565b50506200035a565b828054620000659062000324565b90600052602060002090601f016020900481019282620000895760008555620000d5565b82601f10620000a457805160ff1916838001178555620000d5565b82800160010185558215620000d5579182015b82811115620000d4578251825591602001919060010190620000b7565b5b509050620000e49190620000e8565b5090565b5b8082111562000103576000816000905550600101620000e9565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620001708262000125565b810181811067ffffffffffffffff8211171562000192576200019162000136565b5b80604052505050565b6000620001a762000107565b9050620001b5828262000165565b919050565b600067ffffffffffffffff821115620001d857620001d762000136565b5b620001e38262000125565b9050602081019050919050565b60005b8381101562000210578082015181840152602081019050620001f3565b8381111562000220576000848401525b50505050565b60006200023d6200023784620001ba565b6200019b565b9050828152602081018484840111156200025c576200025b62000120565b5b62000269848285620001f0565b509392505050565b600082601f8301126200028957620002886200011b565b5b81516200029b84826020860162000226565b91505092915050565b600060208284031215620002bd57620002bc62000111565b5b600082015167ffffffffffffffff811115620002de57620002dd62000116565b5b620002ec8482850162000271565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200033d57607f821691505b60208210811415620003545762000353620002f5565b5b50919050565b6104a8806200036a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610057575b600080fd5b6100556004803603810190610050919061031e565b610075565b005b61005f61008f565b60405161006c91906103ef565b60405180910390f35b806000908051906020019061008b929190610121565b5050565b60606000805461009e90610440565b80601f01602080910402602001604051908101604052809291908181526020018280546100ca90610440565b80156101175780601f106100ec57610100808354040283529160200191610117565b820191906000526020600020905b8154815290600101906020018083116100fa57829003601f168201915b5050505050905090565b82805461012d90610440565b90600052602060002090601f01602090048101928261014f5760008555610196565b82601f1061016857805160ff1916838001178555610196565b82800160010185558215610196579182015b8281111561019557825182559160200191906001019061017a565b5b5090506101a391906101a7565b5090565b5b808211156101c05760008160009055506001016101a8565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61022b826101e2565b810181811067ffffffffffffffff8211171561024a576102496101f3565b5b80604052505050565b600061025d6101c4565b90506102698282610222565b919050565b600067ffffffffffffffff821115610289576102886101f3565b5b610292826101e2565b9050602081019050919050565b82818337600083830152505050565b60006102c16102bc8461026e565b610253565b9050828152602081018484840111156102dd576102dc6101dd565b5b6102e884828561029f565b509392505050565b600082601f830112610305576103046101d8565b5b81356103158482602086016102ae565b91505092915050565b600060208284031215610334576103336101ce565b5b600082013567ffffffffffffffff811115610352576103516101d3565b5b61035e848285016102f0565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103a1578082015181840152602081019050610386565b838111156103b0576000848401525b50505050565b60006103c182610367565b6103cb8185610372565b93506103db818560208601610383565b6103e4816101e2565b840191505092915050565b6000602082019050818103600083015261040981846103b6565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061045857607f821691505b6020821081141561046c5761046b610411565b5b5091905056fea26469706673582212202df62d8852bcb0e0db2e0c936670271d826d4c7f8be6532ea5f14d364c5fc86364736f6c63430008090033",
    dt = (e) => e.length > 1
class P0 extends i0 {
    constructor(...n) {
        dt(n) ? super(...n) : super(J, $0, n[0]), (this.contractName = "Greeter")
    }
    deploy(n, a) {
        return super.deploy(n, a || {})
    }
    getDeployTransaction(n, a) {
        return super.getDeployTransaction(n, a || {})
    }
    attach(n) {
        return super.attach(n)
    }
    connect(n) {
        return super.connect(n)
    }
    static createInterface() {
        return new O(J)
    }
    static connect(n, a) {
        return new D(n, J, a)
    }
}
P0.bytecode = $0
P0.abi = J
const e0 = [
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
class R {
    static createInterface() {
        return new O(e0)
    }
    static connect(n, a) {
        return new D(n, e0, a)
    }
}
R.abi = e0
const t0 = [
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
class l0 {
    static createInterface() {
        return new O(t0)
    }
    static connect(n, a) {
        return new D(n, t0, a)
    }
}
l0.abi = t0
const n0 = [
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
class G0 {
    static createInterface() {
        return new O(n0)
    }
    static connect(n, a) {
        return new D(n, n0, a)
    }
}
G0.abi = n0
const a0 = [
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
class L {
    static createInterface() {
        return new O(a0)
    }
    static connect(n, a) {
        return new D(n, a0, a)
    }
}
L.abi = a0
const s0 = [
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
class q0 {
    static createInterface() {
        return new O(s0)
    }
    static connect(n, a) {
        return new D(n, s0, a)
    }
}
q0.abi = s0
const r0 = [
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
class p0 {
    static createInterface() {
        return new O(r0)
    }
    static connect(n, a) {
        return new D(n, r0, a)
    }
}
p0.abi = r0
const Z = [
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
    K0 =
        "0x608060405234801561001057600080fd5b506110ee806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806372425d9d1161007157806372425d9d146101a657806386d516e8146101c4578063a8b0574e146101e2578063bce38bd714610200578063c3077fa914610230578063ee82ac5e14610262576100b4565b80630f28c97d146100b9578063252dba42146100d757806327e86d6e14610108578063399542e91461012657806342cbb15c146101585780634d2301cc14610176575b600080fd5b6100c1610292565b6040516100ce91906106a3565b60405180910390f35b6100f160048036038101906100ec91906109d2565b61029a565b6040516100ff929190610b65565b60405180910390f35b610110610423565b60405161011d9190610bae565b60405180910390f35b610140600480360381019061013b9190610c01565b610438565b60405161014f93929190610d6b565b60405180910390f35b610160610457565b60405161016d91906106a3565b60405180910390f35b610190600480360381019061018b9190610da9565b61045f565b60405161019d91906106a3565b60405180910390f35b6101ae610480565b6040516101bb91906106a3565b60405180910390f35b6101cc610488565b6040516101d991906106a3565b60405180910390f35b6101ea610490565b6040516101f79190610de5565b60405180910390f35b61021a60048036038101906102159190610c01565b610498565b6040516102279190610e00565b60405180910390f35b61024a600480360381019061024591906109d2565b610640565b60405161025993929190610d6b565b60405180910390f35b61027c60048036038101906102779190610e4e565b610663565b6040516102899190610bae565b60405180910390f35b600042905090565b60006060439150825167ffffffffffffffff8111156102bc576102bb6106e8565b5b6040519080825280602002602001820160405280156102ef57816020015b60608152602001906001900390816102da5790505b50905060005b835181101561041d5760008085838151811061031457610313610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1686848151811061034957610348610e7b565b5b6020026020010151602001516040516103629190610ee6565b6000604051808303816000865af19150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5091509150816103e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e090610f5a565b60405180910390fd5b808484815181106103fd576103fc610e7b565b5b60200260200101819052505050808061041590610fa9565b9150506102f5565b50915091565b60006001436104329190610ff2565b40905090565b60008060604392504340915061044e8585610498565b90509250925092565b600043905090565b60008173ffffffffffffffffffffffffffffffffffffffff16319050919050565b600044905090565b600045905090565b600041905090565b6060815167ffffffffffffffff8111156104b5576104b46106e8565b5b6040519080825280602002602001820160405280156104ee57816020015b6104db61066e565b8152602001906001900390816104d35790505b50905060005b82518110156106395760008084838151811061051357610512610e7b565b5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff1685848151811061054857610547610e7b565b5b6020026020010151602001516040516105619190610ee6565b6000604051808303816000865af19150503d806000811461059e576040519150601f19603f3d011682016040523d82523d6000602084013e6105a3565b606091505b509150915085156105ef57816105ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e590611098565b60405180910390fd5b5b604051806040016040528083151581526020018281525084848151811061061957610618610e7b565b5b60200260200101819052505050808061063190610fa9565b9150506104f4565b5092915050565b6000806060610650600185610438565b8093508194508295505050509193909250565b600081409050919050565b6040518060400160405280600015158152602001606081525090565b6000819050919050565b61069d8161068a565b82525050565b60006020820190506106b86000830184610694565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610720826106d7565b810181811067ffffffffffffffff8211171561073f5761073e6106e8565b5b80604052505050565b60006107526106be565b905061075e8282610717565b919050565b600067ffffffffffffffff82111561077e5761077d6106e8565b5b602082029050602081019050919050565b600080fd5b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107c98261079e565b9050919050565b6107d9816107be565b81146107e457600080fd5b50565b6000813590506107f6816107d0565b92915050565b600080fd5b600067ffffffffffffffff82111561081c5761081b6106e8565b5b610825826106d7565b9050602081019050919050565b82818337600083830152505050565b600061085461084f84610801565b610748565b9050828152602081018484840111156108705761086f6107fc565b5b61087b848285610832565b509392505050565b600082601f830112610898576108976106d2565b5b81356108a8848260208601610841565b91505092915050565b6000604082840312156108c7576108c6610794565b5b6108d16040610748565b905060006108e1848285016107e7565b600083015250602082013567ffffffffffffffff81111561090557610904610799565b5b61091184828501610883565b60208301525092915050565b600061093061092b84610763565b610748565b905080838252602082019050602084028301858111156109535761095261078f565b5b835b8181101561099a57803567ffffffffffffffff811115610978576109776106d2565b5b80860161098589826108b1565b85526020850194505050602081019050610955565b5050509392505050565b600082601f8301126109b9576109b86106d2565b5b81356109c984826020860161091d565b91505092915050565b6000602082840312156109e8576109e76106c8565b5b600082013567ffffffffffffffff811115610a0657610a056106cd565b5b610a12848285016109a4565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610a81578082015181840152602081019050610a66565b83811115610a90576000848401525b50505050565b6000610aa182610a47565b610aab8185610a52565b9350610abb818560208601610a63565b610ac4816106d7565b840191505092915050565b6000610adb8383610a96565b905092915050565b6000602082019050919050565b6000610afb82610a1b565b610b058185610a26565b935083602082028501610b1785610a37565b8060005b85811015610b535784840389528151610b348582610acf565b9450610b3f83610ae3565b925060208a01995050600181019050610b1b565b50829750879550505050505092915050565b6000604082019050610b7a6000830185610694565b8181036020830152610b8c8184610af0565b90509392505050565b6000819050919050565b610ba881610b95565b82525050565b6000602082019050610bc36000830184610b9f565b92915050565b60008115159050919050565b610bde81610bc9565b8114610be957600080fd5b50565b600081359050610bfb81610bd5565b92915050565b60008060408385031215610c1857610c176106c8565b5b6000610c2685828601610bec565b925050602083013567ffffffffffffffff811115610c4757610c466106cd565b5b610c53858286016109a4565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610c9281610bc9565b82525050565b6000604083016000830151610cb06000860182610c89565b5060208301518482036020860152610cc88282610a96565b9150508091505092915050565b6000610ce18383610c98565b905092915050565b6000602082019050919050565b6000610d0182610c5d565b610d0b8185610c68565b935083602082028501610d1d85610c79565b8060005b85811015610d595784840389528151610d3a8582610cd5565b9450610d4583610ce9565b925060208a01995050600181019050610d21565b50829750879550505050505092915050565b6000606082019050610d806000830186610694565b610d8d6020830185610b9f565b8181036040830152610d9f8184610cf6565b9050949350505050565b600060208284031215610dbf57610dbe6106c8565b5b6000610dcd848285016107e7565b91505092915050565b610ddf816107be565b82525050565b6000602082019050610dfa6000830184610dd6565b92915050565b60006020820190508181036000830152610e1a8184610cf6565b905092915050565b610e2b8161068a565b8114610e3657600080fd5b50565b600081359050610e4881610e22565b92915050565b600060208284031215610e6457610e636106c8565b5b6000610e7284828501610e39565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081905092915050565b6000610ec082610a47565b610eca8185610eaa565b9350610eda818560208601610a63565b80840191505092915050565b6000610ef28284610eb5565b915081905092915050565b600082825260208201905092915050565b7f4d756c746963616c6c206167677265676174653a2063616c6c206661696c6564600082015250565b6000610f44602083610efd565b9150610f4f82610f0e565b602082019050919050565b60006020820190508181036000830152610f7381610f37565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fb48261068a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610fe757610fe6610f7a565b5b600182019050919050565b6000610ffd8261068a565b91506110088361068a565b92508282101561101b5761101a610f7a565b5b828203905092915050565b7f4d756c746963616c6c32206167677265676174653a2063616c6c206661696c6560008201527f6400000000000000000000000000000000000000000000000000000000000000602082015250565b6000611082602183610efd565b915061108d82611026565b604082019050919050565b600060208201905081810360008301526110b181611075565b905091905056fea2646970667358221220a6abea822e004150d7df5d59c9ec8933da946cf625db7b082e9dd8936ce2c7b464736f6c63430008090033",
    ut = (e) => e.length > 1
class Y0 extends i0 {
    constructor(...n) {
        ut(n) ? super(...n) : super(Z, K0, n[0]), (this.contractName = "Multicall2")
    }
    deploy(n) {
        return super.deploy(n || {})
    }
    getDeployTransaction(n) {
        return super.getDeployTransaction(n || {})
    }
    attach(n) {
        return super.attach(n)
    }
    connect(n) {
        return super.connect(n)
    }
    static createInterface() {
        return new O(Z)
    }
    static connect(n, a) {
        return new D(n, Z, a)
    }
}
Y0.bytecode = K0
Y0.abi = Z
class V0 {
    constructor(n, a) {
        f(this, "connector")
        f(this, "address")
        f(this, "safe")
        ;(this.connector = new E[n]()), (this.address = a), (this.safe = l0.connect(a, this.connector.provider))
    }
    get chainID() {
        return { [t.ETHEREUM]: "eth", [t.XDAI]: "gno", [t.POLYGON]: "matic", [t.BINANCE]: "bnb", [t.ARBITRUM]: "arb1", [t.AVALANCHE]: "avax" }[
            this.connector.chainId
        ]
    }
    get transactionHistoryUrl() {
        if ([t.ETHEREUM, t.XDAI, t.POLYGON, t.BINANCE, t.ARBITRUM, t.AVALANCHE].includes(this.connector.chainId))
            return "https://gnosis-safe.io/app/" + this.chainID + ":" + this.address + "/transactions/history"
        if (this.connector.chainId == t.HARMONY) return "https://multisig.harmony.one/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == t.FANTOM) return "https://safe.fantom.network/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == t.CELO) return "https://ui.celo-safe.io/#/safes/" + this.address + "/transactions"
        if (this.connector.chainId == t.MOONBEAM_KUSAMA)
            return "https://multisig.moonbeam.network/mriver:" + this.address + "/transactions/history"
        if (this.connector.chainId == t.FUSE) return "https://safe.fuse.io/fuse:" + this.address + "/transactions/history"
    }
    async getOwners() {
        return await this.safe.getOwners()
    }
    async getThreshold() {
        return (await this.safe.getThreshold()).toNumber()
    }
    async getTokenBalances() {
        if ([t.ETHEREUM, t.BINANCE, t.ARBITRUM, t.POLYGON, t.XDAI, t.FUSE, t.CELO, t.FANTOM].indexOf(this.connector.chainId) !== -1) {
            let n =
                "https://safe-client.gnosis.io/v1/chains/" +
                this.connector.chainId +
                "/safes/" +
                this.address +
                "/balances/USD?exclude_spam=true&trusted=false"
            this.connector.chainId === t.FUSE &&
                (n = "https://safe-service.fuse.io/cgw/v1/chains/122/safes/" + this.address + "/balances/USD/?exclude_spam=true&trusted=false"),
                this.connector.chainId === t.CELO &&
                    (n =
                        "https://client-gateway.celo-safe.io/v1/chains/" +
                        this.connector.chainId +
                        "/safes/" +
                        this.address +
                        "/balances/USD?exclude_spam=true&trusted=false"),
                this.connector.chainId === t.FANTOM &&
                    (n =
                        "https://safe.fantom.network/v1/chains/" +
                        this.connector.chainId +
                        "/safes/" +
                        this.address +
                        "/balances/USD?exclude_spam=true&trusted=false")
            const a = await (await fetch(n)).json()
            return { total: parseFloat(a.fiatTotal), tokens: a.items }
        }
        return this.connector.chainId === t.HARMONY
            ? { total: 0, tokens: [] }
            : (console.log("TODO:", this.connector.chainName), { total: 0, tokens: [] })
    }
}
const X0 = [
        { name: "Ops", network: t.ETHEREUM, address: "0x19B3Eb3Af5D93b77a5619b047De0EED7115A19e7" },
        { name: "Fees", network: t.POLYGON, address: "0x850a57630A2012B2494779fBc86bBc24F2a7baeF" },
        { name: "Ops", network: t.POLYGON, address: "0x2B23D9B02FffA1F5441Ef951B4B95c09faa57EBA" },
        { name: "Ops", network: t.XDAI, address: "0xc375411C6597F692Add6a7a3AD5b3C38626B0F26" },
        { name: "Ops", network: t.HARMONY, address: "0x30af69A3f4a6f266961313Ce0943719dF4A8AA10" },
        { name: "Ops", network: t.BINANCE, address: "0xc6fD91aD4919Fd91e2c84077ba648092cB499638" },
        { name: "Ops", network: t.FANTOM, address: "0xF9E7d4c6d36ca311566f46c81E572102A2DC9F52" },
        { name: "Ops", network: t.AVALANCHE, address: "0x09842Ce338647906B686aBB3B648A6457fbB25DA" },
        { name: "Ops", network: t.CELO, address: "0x751b01Fa14fD9640a1DF9014e2D0f3a03A198b81" },
        { name: "Fees", network: t.CELO, address: "0x8b63fcBB752e425e3C4B12F7802BAd1A24c6d7F4" },
        { name: "Ops", network: t.MOONBEAM_KUSAMA, address: "0x939f7E76cc515cc296dD3ce362D9a52e148A7D5f" },
        { name: "Fees", network: t.MOONBEAM_KUSAMA, address: "0x6669cc35031A84fAc1Efe30bB586B9ADdf223Fbc" },
        { name: "Ops", network: t.FUSE, address: "0x33b6beb37837459Ee84a1Ffed2C6a4ca22e5F316" },
        { name: "Ops", network: t.ARBITRUM, address: "0x978982772b8e4055B921bf9295c0d74eB36Bc54e" },
    ],
    W0 = [{ network: t.ETHEREUM, address: "0x5ad6211CD3fdE39A9cECB5df6f380b8263d1e277" }],
    j0 = [
        { network: t.ARBITRUM, address: "0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8" },
        { network: t.POLYGON, address: "0xf1c9881Be22EBF108B8927c4d197d126346b5036" },
        { network: t.AVALANCHE, address: "0x560C759A11cd026405F6f2e19c65Da1181995fA2" },
    ],
    J0 = [
        { network: t.ETHEREUM, address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac" },
        { network: t.POLYGON, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.ARBITRUM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.AVALANCHE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.MOONBEAM_KUSAMA, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.FANTOM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.BINANCE, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.XDAI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.HARMONY, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.TELOS, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.CELO, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.FUSE, address: "0x43eA90e2b786728520e4f930d2A71a477BF2737C" },
        { network: t.OKEX, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.HUOBI, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
        { network: t.PALM, address: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4" },
    ]
var w0 = z({
    title: "DAOView",
    name: "SushiView",
    web3: new ot(),
    multisigs: X0,
    masterchefs: [
        { network: t.ETHEREUM, address: "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd" },
        { network: t.XDAI, address: "0x80C7DD17B01855a6D2347444a0FCC36136a314de" },
        { network: t.BINANCE, address: "0x80C7DD17B01855a6D2347444a0FCC36136a314de" },
    ],
    masterchefsV2: [{ network: t.ETHEREUM, address: "0xef0881ec094552b2e128cf945ef17a6752b4ec5d" }],
    minichefs: [
        { network: t.FANTOM, address: "0xf731202A3cf7EfA9368C2d7bD613926f7A144dB5" },
        { network: t.POLYGON, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: t.XDAI, address: "0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3" },
        { network: t.ARBITRUM, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: t.HARMONY, address: "0x67da5f2ffaddff067ab9d5f025f8810634d84287" },
        { network: t.CELO, address: "0x0769fd68dFb93167989C6f7254cd0D766Fb2841F" },
        { network: t.CELO, address: "0x8084936982D089130e001b470eDf58faCA445008" },
        { network: t.MOONBEAM_KUSAMA, address: "0x3dB01570D97631f69bbb0ba39796865456Cf89A5" },
        { network: t.FUSE, address: "0x182CD0C6F1FaEc0aED2eA83cd0e160c8Bd4cb063" },
    ],
    complexRewarders: [
        { network: t.FANTOM, address: "0xeaf76e3bD36680D98d254B378ED706cb0DFBfc1B" },
        { network: t.POLYGON, address: "0xa3378Ca78633B3b9b2255EAa26748770211163AE" },
        { network: t.XDAI, address: "0x84562cE1a5f3A4A957a5a94Ed0be05BA73fD2665" },
        { network: t.HARMONY, address: "0x25836011bbc0d5b6db96b20361a474cbc5245b45" },
        { network: t.CELO, address: "0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c" },
        { network: t.CELO, address: "0xFa3de59eDd2500BA725Dad355B98E6a4346Ada7d" },
        { network: t.MOONBEAM_KUSAMA, address: "0x1334c8e873E1cae8467156e2A81d1C8b566B2da1" },
        { network: t.FUSE, address: "0xEF502259Dd5d497d082498912031E027c4515563" },
    ],
    timelocks: [{ network: t.ETHEREUM, address: "0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1" }],
    routers: [
        { network: t.ETHEREUM, address: "0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F" },
        { network: t.POLYGON, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: t.ARBITRUM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: t.AVALANCHE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: t.MOONBEAM_KUSAMA, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: t.FANTOM, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: t.BINANCE, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: t.XDAI, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: t.HARMONY, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: t.TELOS, address: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506" },
        { network: t.CELO, address: "0x1421bDe4B10e8dd459b3BCb598810B1337D56842" },
        { network: t.FUSE, address: "0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3" },
        { network: t.OKEX, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: t.HUOBI, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
        { network: t.PALM, address: "0x1b02da8cb0d097eb8d57a175b88c7d8b47997506" },
    ],
    factories: J0,
    sushiMakers: W0,
    wethMakers: j0,
    bentoBoxes: [
        { network: t.ETHEREUM, address: "0xa19b3b22f29E23e4c04678C94CFC3e8f202137d8" },
        { network: t.POLYGON, address: "0x0319000133d3AdA02600f0875d2cf03D442C3367" },
        { network: t.ARBITRUM, address: "0x74c764d41b77dbbb4fe771dab1939b00b146894a" },
        { network: t.BINANCE, address: "0xf5bce5077908a1b7370b9ae04adc565ebd643966" },
    ],
    kashiMasters: [
        { network: t.ETHEREUM, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: t.POLYGON, address: "0xb527c5295c4bc348cbb3a2e96b2494fd292075a7" },
        { network: t.ARBITRUM, address: "0xa010ee0226cd071bebd8919a1f675cae1f1f5d3e" },
        { network: t.AVALANCHE, address: "0x513037395fa0c9c35e41f89189cedfe3bd42fadb" },
        { network: t.BINANCE, address: "0x2cba6ab6574646badc84f0544d05059e57a5dc42" },
        { network: t.XDAI, address: "0x7a6da9903d0a481f40b8336c1463487bc8c0407e" },
    ],
    kashiSushiMakers: [{ network: t.ETHEREUM, address: "0x08C82f7513C7952A95029FE3B1587B1FA52DACed" }],
})
const V = {
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
}
X0.forEach((e) => {
    V[e.address] = "MultiSig: " + e.name
})
W0.forEach((e) => {
    V[e.address] = "SushiMaker"
})
j0.forEach((e) => {
    V[e.address] = "WethMaker"
})
J0.forEach((e) => {
    V[e.address] = "Factory"
})
async function Z0(e) {
    const n = new E[e.network](),
        a = "factory" + n.chainName + e.address,
        c = G0.connect(e.address, n.provider)
    if (
        ((e.pairCount = (await c.allPairsLength()).toNumber()),
        (e.feeTo = await c.feeTo()),
        (e.feeToSetter = await c.feeToSetter()),
        (e.pairs = JSON.parse(localStorage.getItem(a) || "[]")),
        e.pairs.length < e.pairCount)
    ) {
        const i = new u0(n)
        for (let r = e.pairs.length; r < e.pairCount; r++)
            i.queue(c.populateTransaction.allPairs(r), c.interface, (d) => {
                var u
                return (u = e.pairs) == null ? void 0 : u.push(d)
            })
        await i.call(250), localStorage.setItem(a, JSON.stringify(e.pairs))
    }
}
async function z0(e) {
    const n = new E[e.network]()
    ;(e.safe = new V0(e.network, e.address)),
        (e.owners = await e.safe.getOwners()),
        (e.threshold = await e.safe.getThreshold()),
        (e.tokens = await e.safe.getTokenBalances()),
        (e.nativeBalance = await n.provider.getBalance(e.address))
}
async function lt(e) {
    const n = new E[e.network](),
        a = q0.connect(e.address, n.provider)
    e.factory = await a.factory()
}
async function pt(e) {
    const n = new E[e.network](),
        a = p0.connect(e.address, n.provider)
    e.owner = await a.owner()
}
const U = k({
        props: { address: null },
        setup(e) {
            const n = e,
                a = P(() => (n.address ? V[n.address] || n.address : "<empty>"))
            return (c, i) => b(m(a))
        },
    }),
    bt = { class: "row mt-3" },
    ft = { class: "col-10 mx-auto" },
    yt = s("h2", null, "Multi Sigs", -1),
    mt = { class: "table" },
    ht = s(
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
    Tt = ["href"],
    gt = h("\xA0 "),
    At = k({
        setup(e) {
            const n = S("app")
            return (
                n.multisigs.map((a) => z0(a)),
                (a, c) => {
                    const i = Y("router-link")
                    return (
                        l(),
                        p("div", bt, [
                            s("div", ft, [
                                yt,
                                s("table", mt, [
                                    ht,
                                    s("tbody", null, [
                                        (l(!0),
                                        p(
                                            M,
                                            null,
                                            B(m(n).multisigs, (r) => {
                                                var d, u
                                                return (
                                                    l(),
                                                    p("tr", null, [
                                                        s("td", null, [
                                                            y(
                                                                i,
                                                                { to: "/multisig/" + r.network + "/" + r.address },
                                                                {
                                                                    default: x(() => [h(b(m(E)[r.network].chainName) + " " + b(r.name), 1)]),
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
                                                                    href: (d = r.safe) == null ? void 0 : d.transactionHistoryUrl,
                                                                    target: "_blank",
                                                                },
                                                                b(r.address),
                                                                9,
                                                                Tt
                                                            ),
                                                        ]),
                                                        s(
                                                            "td",
                                                            null,
                                                            b(r.threshold) + " of " + b(((u = r.owners) == null ? void 0 : u.length) || 0),
                                                            1
                                                        ),
                                                        s("td", null, [
                                                            (l(!0),
                                                            p(
                                                                M,
                                                                null,
                                                                B(
                                                                    r.owners,
                                                                    (g) => (
                                                                        l(),
                                                                        p("span", null, [
                                                                            s(
                                                                                "span",
                                                                                {
                                                                                    class: o0(
                                                                                        [
                                                                                            "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC",
                                                                                            "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0",
                                                                                            "0xFBb3a85603C398Ff22435DD40873EC190134e1f6",
                                                                                            "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3",
                                                                                            "0x6b83270726342E02a11E755e8CC35275712122eC",
                                                                                            "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74",
                                                                                        ].includes(g)
                                                                                            ? ""
                                                                                            : "text-danger"
                                                                                    ),
                                                                                },
                                                                                [y(U, { address: g }, null, 8, ["address"]), gt],
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
    Et = ["href"],
    _t = { key: 1 },
    b0 = k({
        props: { address: null, network: null },
        setup(e) {
            const n = e,
                a = P(() => (n.network ? E[n.network] : null)),
                c = se()
            return (i, r) => {
                var d
                return (
                    l(),
                    p(
                        "a",
                        { href: ((d = m(a)) == null ? void 0 : d.blockExplorerUrls[0]) + "address/" + n.address, target: "_blank" },
                        [m(c).default ? re(i.$slots, "default", { key: 0 }) : (l(), p("span", _t, b(e.address), 1))],
                        8,
                        Et
                    )
                )
            }
        },
    }),
    Ct = { class: "row mt-3" },
    xt = { class: "col-10 mx-auto" },
    wt = s("h2", null, "Routers", -1),
    kt = { class: "table" },
    Mt = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Factory")])],
        -1
    ),
    vt = k({
        setup(e) {
            const n = S("app")
            return (
                n.routers.map((a) => lt(a)),
                (a, c) => (
                    l(),
                    p("div", Ct, [
                        s("div", xt, [
                            wt,
                            s("table", kt, [
                                Mt,
                                s("tbody", null, [
                                    (l(!0),
                                    p(
                                        M,
                                        null,
                                        B(
                                            m(n).routers,
                                            (i) => (
                                                l(),
                                                p("tr", null, [
                                                    s("td", null, b(m(E)[i.network].chainName), 1),
                                                    s("td", null, [
                                                        y(b0, { network: i.network, address: i.address }, null, 8, ["network", "address"]),
                                                    ]),
                                                    s("td", null, [y(U, { address: i.factory }, null, 8, ["address"])]),
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
    Bt = { class: "row mt-3" },
    Ot = { class: "col-10 mx-auto" },
    Dt = s("h2", null, "Factories", -1),
    It = { class: "table" },
    Ft = s(
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
    Nt = k({
        setup(e) {
            const n = S("app")
            return (
                n.factories.map((a) => Z0(a)),
                (a, c) => (
                    l(),
                    p("div", Bt, [
                        s("div", Ot, [
                            Dt,
                            s("table", It, [
                                Ft,
                                s("tbody", null, [
                                    (l(!0),
                                    p(
                                        M,
                                        null,
                                        B(
                                            m(n).factories,
                                            (i) => (
                                                l(),
                                                p("tr", null, [
                                                    s("td", null, [
                                                        y(
                                                            b0,
                                                            { network: i.network, address: i.address },
                                                            { default: x(() => [h(b(m(E)[i.network].chainName), 1)]), _: 2 },
                                                            1032,
                                                            ["network", "address"]
                                                        ),
                                                    ]),
                                                    s("td", null, b(i.pairCount), 1),
                                                    s("td", null, [y(U, { address: i.feeTo }, null, 8, ["address"])]),
                                                    s("td", null, [y(U, { address: i.feeToSetter }, null, 8, ["address"])]),
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
    Ut = { class: "row mt-3" },
    St = { class: "col-10 mx-auto" },
    Rt = s("h2", null, "Makers", -1),
    Ht = { class: "table" },
    Lt = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Network"), s("th", { scope: "col" }, "Address"), s("th", { scope: "col" }, "Admin")])],
        -1
    ),
    $t = k({
        setup(e) {
            const n = S("app")
            return (
                n.wethMakers.map((a) => pt(a)),
                (a, c) => {
                    const i = Y("router-link")
                    return (
                        l(),
                        p("div", Ut, [
                            s("div", St, [
                                Rt,
                                s("table", Ht, [
                                    Lt,
                                    s("tbody", null, [
                                        (l(!0),
                                        p(
                                            M,
                                            null,
                                            B(
                                                m(n).wethMakers,
                                                (r) => (
                                                    l(),
                                                    p("tr", null, [
                                                        s("td", null, [
                                                            y(
                                                                i,
                                                                { to: "/wethmaker/" + r.network + "/" + r.address },
                                                                { default: x(() => [h(b(m(E)[r.network].chainName), 1)]), _: 2 },
                                                                1032,
                                                                ["to"]
                                                            ),
                                                        ]),
                                                        s("td", null, [
                                                            y(
                                                                b0,
                                                                { network: r.network, address: r.address },
                                                                { default: x(() => [h(b(r.address), 1)]), _: 2 },
                                                                1032,
                                                                ["network", "address"]
                                                            ),
                                                        ]),
                                                        s("td", null, [y(U, { address: r.owner }, null, 8, ["address"])]),
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
    Pt = { class: "row mt-3" },
    Gt = { class: "col-10 mx-auto" },
    qt = s("h2", null, "Multi Sigs", -1),
    Kt = { class: "table" },
    Yt = s(
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
    Vt = ["href"],
    Xt = h("\xA0 "),
    Wt = k({
        setup(e) {
            const n = S("app")
            return (
                n.multisigs.map((a) => z0(a)),
                (a, c) => {
                    const i = Y("router-link")
                    return (
                        l(),
                        p("div", Pt, [
                            s("div", Gt, [
                                qt,
                                s("table", Kt, [
                                    Yt,
                                    s("tbody", null, [
                                        (l(!0),
                                        p(
                                            M,
                                            null,
                                            B(m(n).multisigs, (r) => {
                                                var d, u
                                                return (
                                                    l(),
                                                    p("tr", null, [
                                                        s("td", null, [
                                                            y(
                                                                i,
                                                                { to: "/multisig/" + r.network + "/" + r.address },
                                                                {
                                                                    default: x(() => [h(b(m(E)[r.network].chainName) + " " + b(r.name), 1)]),
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
                                                                    href: (d = r.safe) == null ? void 0 : d.transactionHistoryUrl,
                                                                    target: "_blank",
                                                                },
                                                                b(r.address),
                                                                9,
                                                                Vt
                                                            ),
                                                        ]),
                                                        s(
                                                            "td",
                                                            null,
                                                            b(r.threshold) + " of " + b(((u = r.owners) == null ? void 0 : u.length) || 0),
                                                            1
                                                        ),
                                                        s("td", null, [
                                                            (l(!0),
                                                            p(
                                                                M,
                                                                null,
                                                                B(
                                                                    r.owners,
                                                                    (g) => (
                                                                        l(),
                                                                        p("span", null, [
                                                                            s(
                                                                                "span",
                                                                                {
                                                                                    class: o0(
                                                                                        [
                                                                                            "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC",
                                                                                            "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0",
                                                                                            "0xFBb3a85603C398Ff22435DD40873EC190134e1f6",
                                                                                            "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3",
                                                                                            "0x6b83270726342E02a11E755e8CC35275712122eC",
                                                                                            "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74",
                                                                                        ].includes(g)
                                                                                            ? ""
                                                                                            : "text-danger"
                                                                                    ),
                                                                                },
                                                                                [y(U, { address: g }, null, 8, ["address"]), Xt],
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
    jt = { class: "row" },
    Jt = { class: "col-10 mx-auto" },
    Zt = s("br", null, null, -1),
    zt = h(" Owners: "),
    Qt = h("\xA0 "),
    en = s("br", null, null, -1),
    tn = s("br", null, null, -1),
    nn = s(
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
    an = k({
        async setup(e) {
            let n, a
            const c = S("app"),
                i = O0(),
                r = new E[parseInt(i.params.network)](),
                d = i.params.address,
                u = c.multisigs.filter((G) => G.address === d && G.network === r.chainId)[0]
            l0.connect(d, r.provider)
            const g = new V0(r.chainId, d),
                I = (([n, a] = Q(() => g.getOwners())), (n = await n), a(), n),
                v = (([n, a] = Q(() => g.getThreshold())), (n = await n), a(), n)
            async function X() {}
            return (
                X(),
                (G, _) => (
                    l(),
                    p("div", jt, [
                        s("div", Jt, [
                            s("h2", null, b(m(r).chainName) + " " + b(m(u).name) + " MultiSig", 1),
                            h(" Address: " + b(m(d)), 1),
                            Zt,
                            zt,
                            (l(!0),
                            p(
                                M,
                                null,
                                B(
                                    m(u).owners,
                                    (F) => (
                                        l(),
                                        p("span", null, [
                                            s(
                                                "span",
                                                {
                                                    class: o0(
                                                        [
                                                            "0x3027a0c4E35272c0707dE2651A0638c3dF1c37AC",
                                                            "0x4bb4c1B0745ef7B4642fEECcd0740deC417ca0a0",
                                                            "0xFBb3a85603C398Ff22435DD40873EC190134e1f6",
                                                            "0xb2701351a2c1c6E30BFA2699d25f85a5100e39D3",
                                                            "0x6b83270726342E02a11E755e8CC35275712122eC",
                                                            "0x8620D3edd67Ed411CCb314F3CFFF5a27A7C74A74",
                                                        ].includes(F)
                                                            ? ""
                                                            : "text-danger"
                                                    ),
                                                },
                                                [y(U, { address: F }, null, 8, ["address"]), Qt],
                                                2
                                            ),
                                        ])
                                    )
                                ),
                                256
                            )),
                            en,
                            h(" Threshold: " + b(m(v)) + " of " + b(m(I).length), 1),
                            tn,
                            nn,
                        ]),
                    ])
                )
            )
        },
    })
class sn {
    constructor(n, a) {
        f(this, "network")
        f(this, "address")
        f(this, "loaded", !1)
        f(this, "name")
        f(this, "symbol")
        f(this, "decimals")
        f(this, "price")
        ;(this.network = n), (this.address = a)
    }
}
class rn {
    constructor() {
        f(this, "tokenList", z([]))
        f(this, "tokens", z({}))
        f(this, "web3")
        this.load()
    }
    get(n, a) {
        if (((a = ie(a)), this.tokens[n] || (this.tokens[n] = {}), !this.tokens[n][a])) {
            const c = new sn(n, a)
            this.tokenList.push(c), (this.tokens[n][a] = c)
        }
        return this.tokens[n][a]
    }
    async loadInfo(n) {
        n ? (n = [...new Set(n)]) : (n = this.tokenList), (n = n.filter((c) => !c.loaded))
        const a = {}
        n.forEach((c) => {
            var i
            a[c.network] || (a[c.network] = []), (i = a[c.network]) == null || i.push(c)
        })
        for (const c of Object.values(a).filter((i) => i.length)) {
            console.log("load", c)
            const i = new E[c[0].network](),
                r = new u0(i)
            for (const d of c) {
                const u = R.connect(d.address, i.provider)
                r.queue(u.populateTransaction.name(), R.createInterface(), (g) => (d.name = g)),
                    r.queue(u.populateTransaction.symbol(), R.createInterface(), (g) => (d.symbol = g)),
                    r.queue(u.populateTransaction.decimals(), R.createInterface(), (g) => (d.decimals = g))
            }
            await r.call(100)
            for (const d of c) d.loaded = !0
        }
        this.save()
    }
    load() {
        const n = JSON.parse(localStorage.getItem("tokens") || "[]")
        for (const a of n) Object.assign(this.get(a.network, a.address), a)
    }
    save() {
        localStorage.setItem("tokens", JSON.stringify(this.tokenList))
    }
}
const $ = new rn()
class cn {
    async getPrices(n, a) {
        const c = a.map((i) => i.address)
        for (; c.length; )
            try {
                const i =
                        "https://api.coingecko.com/api/v3/simple/token_price/" +
                        n.coinGeckoId +
                        "?contract_addresses=" +
                        c.splice(0, 100).join(",") +
                        "&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false",
                    r = await (await fetch(i)).json()
                for (const d of Object.entries(r)) $.get(n.chainId, d[0]).price = parseFloat(d[1].usd)
                console.log(i, r, $)
            } catch (i) {
                console.log(i)
            }
    }
}
const on = { key: 0 },
    k0 = k({
        props: { token: null, amount: null },
        setup(e) {
            const n = e,
                a = P(() => {
                    var i, r
                    const c = ((r = n.amount) == null ? void 0 : r.toDec(((i = n.token) == null ? void 0 : i.decimals) || 0)) || new w(0)
                    return c.gt(1e4) ? c.toFixed(0) : c.toSignificantDigits(4).toString()
                })
            return (c, i) => {
                var r, d
                return (
                    l(),
                    p(
                        M,
                        null,
                        [
                            h(b(m(a)), 1),
                            ((r = e.token) == null ? void 0 : r.symbol)
                                ? (l(), p("span", on, b(" " + ((d = e.token) == null ? void 0 : d.symbol)), 1))
                                : d0("", !0),
                        ],
                        64
                    )
                )
            }
        },
    }),
    dn = { key: 0 },
    M0 = k({
        props: { amount: null },
        setup(e) {
            const n = e,
                a = P(() => {
                    var c
                    return ((c = n.amount) == null ? void 0 : c.toFixed(2)) || "0.00"
                })
            return (c, i) => (e.amount ? (l(), p("span", dn, " $" + b(m(a)), 1)) : d0("", !0))
        },
    }),
    un = { class: "row" },
    ln = { class: "col-10 mx-auto" },
    pn = s("br", null, null, -1),
    bn = h(" Owner: "),
    fn = s("br", null, null, -1),
    yn = s("br", null, null, -1),
    mn = { class: "table" },
    hn = s(
        "thead",
        null,
        [s("tr", null, [s("th", { scope: "col" }, "Tokens"), s("th", { scope: "col" }, "Pending"), s("th", { scope: "col" }, "Value")])],
        -1
    ),
    Tn = { key: 0 },
    gn = h(" - "),
    An = k({
        async setup(e) {
            let n, a
            const c = S("app"),
                i = O0(),
                r = new E[parseInt(i.params.network)](),
                d = i.params.address,
                u = c.wethMakers.filter((_) => _.address === d && _.network === r.chainId)[0],
                g = p0.connect(d, r.provider),
                I = (([n, a] = Q(() => g.owner())), (n = await n), a(), n),
                v = c.factories.filter((_) => _.network === u.network)[0],
                X = ce(new w(0))
            async function G() {
                if ((v.pairs || (console.log("Getting factory info"), await Z0(v)), v.pairs)) {
                    ;(u.tokens = []), v.pairs.forEach((o) => u.tokens.push({ address: o }))
                    const _ = new u0(r),
                        F = L.createInterface(),
                        C = R.createInterface()
                    console.log("Getting balances"),
                        u.tokens.forEach((o) => {
                            _.queue(R.connect(o.address, r.provider).populateTransaction.balanceOf(u.address), C, (T) => (o.balance = T))
                        }),
                        await _.call(100),
                        u.tokens
                            .filter((o) => {
                                var T
                                return !((T = o.balance) == null ? void 0 : T.isZero())
                            })
                            .forEach((o) => {
                                _.queue(
                                    L.connect(o.address, r.provider).populateTransaction.token0(),
                                    F,
                                    (T) => (o.token0 = $.get(u.network, T))
                                ),
                                    _.queue(
                                        L.connect(o.address, r.provider).populateTransaction.token1(),
                                        F,
                                        (T) => (o.token1 = $.get(u.network, T))
                                    ),
                                    _.queue(L.connect(o.address, r.provider).populateTransaction.totalSupply(), F, (T) => (o.totalSupply = T)),
                                    _.queue(L.connect(o.address, r.provider).populateTransaction.getReserves(), F, (T) => {
                                        ;(o.reserve0 = T.reserve0), (o.reserve1 = T.reserve1)
                                    })
                            }),
                        await _.call(100),
                        console.log("Loading tokens"),
                        await $.loadInfo(
                            u.tokens
                                .filter((o) => o.token0)
                                .map((o) => o.token0)
                                .concat(u.tokens.filter((o) => o.token1).map((o) => o.token1))
                        ),
                        console.log("Loading coinGecko"),
                        await new cn().getPrices(r, Object.values($.tokens[r.chainId])),
                        u.tokens.forEach((o) => {
                            var T, N, q, K, f0, y0, m0, h0, T0, g0, A0
                            o.totalSupply &&
                                !o.totalSupply.isZero() &&
                                ((o.value0 =
                                    (q = o.reserve0) == null
                                        ? void 0
                                        : q
                                              .mul(o.balance || 0)
                                              .div(o.totalSupply || 1)
                                              .toDec((T = o.token0) == null ? void 0 : T.decimals)
                                              .mul(((N = o.token0) == null ? void 0 : N.price) || 0)),
                                (o.value1 =
                                    (y0 = o.reserve1) == null
                                        ? void 0
                                        : y0
                                              .mul(o.balance || 0)
                                              .div(o.totalSupply || 1)
                                              .toDec((K = o.token1) == null ? void 0 : K.decimals)
                                              .mul(((f0 = o.token1) == null ? void 0 : f0.price) || 0))),
                                (o.value = ((m0 = o.value0) == null ? void 0 : m0.isZero())
                                    ? (h0 = o.value1) == null
                                        ? void 0
                                        : h0.mul(2)
                                    : ((T0 = o.value1) == null ? void 0 : T0.isZero())
                                    ? (g0 = o.value0) == null
                                        ? void 0
                                        : g0.mul(2)
                                    : ((A0 = o.value0) == null ? void 0 : A0.add(o.value1 || 0)) || new w(0))
                        }),
                        u.tokens.sort((o, T) => {
                            var N
                            return ((N = T.value) == null ? void 0 : N.sub(o.value || 0).toNumber()) || 1
                        }),
                        (X.value = u.tokens.map((o) => o.value || new w(0)).reduce((o, T) => o.add(T), new w(0)))
                }
            }
            return (
                G(),
                (_, F) => (
                    l(),
                    p("div", un, [
                        s("div", ln, [
                            s("h2", null, [
                                h(b(m(r).chainName) + " WethMaker ", 1),
                                s("small", null, [y(M0, { amount: X.value }, null, 8, ["amount"])]),
                            ]),
                            h(" Address: " + b(m(d)), 1),
                            pn,
                            bn,
                            y(U, { address: m(I) }, null, 8, ["address"]),
                            fn,
                            h(" Factory: " + b(m(v).address), 1),
                            yn,
                            s("table", mn, [
                                hn,
                                s("tbody", null, [
                                    (l(!0),
                                    p(
                                        M,
                                        null,
                                        B(m(u).tokens, (C) => {
                                            var o, T, N, q, K
                                            return (
                                                l(),
                                                p(
                                                    M,
                                                    null,
                                                    [
                                                        ((o = C.balance) == null ? void 0 : o.isZero()) === !1
                                                            ? (l(),
                                                              p("tr", Tn, [
                                                                  s(
                                                                      "td",
                                                                      null,
                                                                      b((T = C.token0) == null ? void 0 : T.symbol) +
                                                                          "-" +
                                                                          b((N = C.token1) == null ? void 0 : N.symbol),
                                                                      1
                                                                  ),
                                                                  s("td", null, [
                                                                      y(
                                                                          k0,
                                                                          {
                                                                              token: C.token0,
                                                                              amount:
                                                                                  (q = C.reserve0) == null
                                                                                      ? void 0
                                                                                      : q.mul(C.balance).div(C.totalSupply || 1),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ["token", "amount"]
                                                                      ),
                                                                      gn,
                                                                      y(
                                                                          k0,
                                                                          {
                                                                              token: C.token1,
                                                                              amount:
                                                                                  (K = C.reserve1) == null
                                                                                      ? void 0
                                                                                      : K.mul(C.balance).div(C.totalSupply || 1),
                                                                          },
                                                                          null,
                                                                          8,
                                                                          ["token", "amount"]
                                                                      ),
                                                                  ]),
                                                                  s("td", null, [y(M0, { amount: C.value }, null, 8, ["amount"])]),
                                                              ]))
                                                            : d0("", !0),
                                                    ],
                                                    64
                                                )
                                            )
                                        }),
                                        256
                                    )),
                                ]),
                            ]),
                        ]),
                    ])
                )
            )
        },
    })
w.config({ precision: 36 })
w.config({ toExpNeg: -1e3 })
w.config({ toExpPos: 1e3 })
w.prototype.toInt = function (e) {
    return c0.from(this.times(new w("10").pow(new w(e.toString()))).todp(0))
}
c0.prototype.toDec = function (e) {
    return new w(this.toString()).dividedBy(new w(10).toPower((e || 0).toString()))
}
console.error = function (...e) {
    console.log(...e)
}
async function En() {
    const e = oe(Ue)
    await w0.web3.setup(),
        (e.config.globalProperties.app = z(w0)),
        e.provide("app", e.config.globalProperties.app),
        e.use(
            de({
                history: ue(),
                routes: [
                    { path: "/", component: Le },
                    { path: "/multisigs", component: At },
                    { path: "/routers", component: vt },
                    { path: "/factories", component: Nt },
                    { path: "/makers", component: $t },
                    { path: "/chefs", component: Wt },
                    { path: "/multisig/:network/:address", component: an },
                    { path: "/wethmaker/:network/:address", component: An },
                ],
            })
        ),
        e.use(le),
        e.mount("#app")
}
En()

export const gateways = [
    {
        gateway_id: "69880484-a368-41ca-9e55-7eaada7a762f",
        gateway_name: "John's Ecommerce - Prod",
        ethereum_address: "0x2427D60cdC470Fe79540293DdBb0de16F1Ee33EE",
        gateway_url: "https://johnsecom.com"
    },
    {
        gateway_id: "f49be896-8ce7-414c-84f7-2bb9b7e9eefb",
        gateway_name: "John's Ecommerce - Test",
        ethereum_address: "0x2427D60cdC470Fe79540293DdBb0de16F1Ee33EE",
        gateway_url: "http://localhost:3000"
    }
]

//tx_time is in epoch so you'll have to convert it on ur frontend.
//Keep the variable names in the frontend same as this since the db also has the same names.

export const transactions = [
    {
        tx_id: "eb15dd6b-b334-4f8e-9670-e15cb4e00a4c",
        gateway_id: "69880484-a368-41ca-9e55-7eaada7a762f",
        from_address: "0x6C2B255a67516B332897a71BF18A519a8dF4F0E7",
        to_address: "0x2427D60cdC470Fe79540293DdBb0de16F1Ee33EE",
        tx_hash: "0xeef10fc5170f669b86c4cd0444882a96087221325f8bf2f55d6188633aa7be7c",
        tx_time: "1621777293",
        token_type: "MATIC"
    },
    {
        tx_id: "fcddd1b9-4850-43ae-bc49-13be0402d651",
        gateway_id: "69880484-a368-41ca-9e55-7eaada7a762f",
        from_address: "0xDB546ECB02bB33ee31493d94c7B21F5Dc3735ea3",
        to_address: "0x2427D60cdC470Fe79540293DdBb0de16F1Ee33EE",
        tx_hash: "0x5f550a5b4c4ada9e5032ec21b4195a325d0365214f35219ad36c31dcacd5cc37",
        tx_time: "1621778293",
        token_type: "WETH"
    }
]
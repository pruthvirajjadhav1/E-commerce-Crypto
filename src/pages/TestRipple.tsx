import React from 'react'
import { RippleAPI } from 'ripple-lib'
import DummyCheckout from '../components/DummyCheckout'
import Navbar from '../components/landing/Navbar'

const rippleTestServer = 'wss://s.altnet.rippletest.net:51233'

const TestRipple: React.FC = () => {

     const initRipple = async () => {
        var api = new RippleAPI({
            server: rippleTestServer 
        })
        var address = 'r9CpKxBA4xK3ig136ZenoT4uVTmRiJapAL'
        var secret = 'shkfGFyZzomybYoHiha97wE775adF'
        console.log(`Initializing Connection to Ripple`)
        // 1-> Connecting to the XRP Ledger
        var apiResponse = await api.connect()

        // 2-> Preparing the transaction
        var preparedTx = await api.prepareTransaction({
            "TransactionType": "Payment",
            "Account": address,
            "Amount": api.xrpToDrops(10),
            "Destination": "rUCzEr6jrEyMpjhs4wSdQdz4g8Y382NxfM" 
        }, {
            "maxLedgerVersionOffset": 75 
        })
        const maxLedgerVersion = preparedTx.instructions.maxLedgerVersion
        console.log("Prepared transaction instructions:", preparedTx.txJSON)
        console.log("Transaction cost:", preparedTx.instructions.fee, "XRP")
        console.log("Transaction expires after ledger:", maxLedgerVersion)
    
        // 3-> Signing the transaction
        var signed = api.sign(preparedTx.txJSON, secret)
        var txId = signed.id
        var txBlob = signed.signedTransaction
        console.log(`TX Hash:`, txId)
        console.log(`Tx data`, txBlob)

        // 4-> Submit the signed transaction
        var earliestLedgerVersion = (await api.getLedgerVersion()) + 1
        var result = await api.submit(txBlob)
        console.log(`Result: ${result}`)
        console.log(`Result: ${result.resultMessage}, code: ${result.resultCode}`)
    }


    return(
        <div className="h-screen w-screen bg-gray-100">
            <Navbar />
            <DummyCheckout />
        </div>
    )
}

export default TestRipple
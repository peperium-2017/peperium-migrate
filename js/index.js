const { ethereum } = window;

const oldWrapperAddr = '0xFAe57936702a445A91Efb5fA1274E7B5F43EC641'
const wrapperAddr = '0xFe880206214856F984D4f64Fc89c26681DcA15a2'

const erc20Abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"standard","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"description","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"target","type":"address"},{"name":"mintedAmount","type":"uint256"}],"name":"mintToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ipfs_hash","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"desc","type":"string"}],"name":"setDescription","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isLocked","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"lock","outputs":[],"payable":false,"type":"function"},{"inputs":[{"name":"initialSupply","type":"uint256"},{"name":"tokenName","type":"string"},{"name":"tokenSymbol","type":"string"},{"name":"tokenDescription","type":"string"},{"name":"ipfsHash","type":"string"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]
const oldWrapperAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_value","type":"string"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contracts","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"metadatas","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"unwrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"wrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
const wrapperAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":false,"internalType":"bool","name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"_values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_operator","type":"address"},{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"_value","type":"string"},{"indexed":true,"internalType":"uint256","name":"_id","type":"uint256"}],"name":"URI","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address[]","name":"_owners","type":"address[]"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contracts","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"exists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"metadatas","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"},{"internalType":"uint256[]","name":"_values","type":"uint256[]"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"unwrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"wrap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

let hasOldWrapperBalances = false
let hasUnwrappedBalances = false
let hasWrappedBalances = false
let provider = false
let signer = false

let connectedUserAccount = null

const allowanceAmount = 2500000000
const cards = [
    'KFPEPE',
    'PEPESTREET',
    'ZENPEPE',
    'PEPRESSIONISM',
    'PEPEBANKSY',
    'MONAPEPE',
    'LORDRARE',
    'BASEBALLPEPE',
    'BATPEPE',
    'HOTDOGPEPE',
    'KINGRARE',
    'ACCEPTRARE',
    'NEVERENDINGPEPE',
    'PEPEGOD',
    'PEPEGOLD',
    'NEWPEPE',
    'PEPETTE',
    'VAPORPEPE',
    'PEPESTENCIL',
    'GlitchPepe',
    'PEPERIUMCLASSIC',
    'CHILLPEPE',
    'RUINSOFPEPE',
    'GIGERPEPECITY',
    'PEPEZEUSLIGHT',
    'CRIMEANDPEPESHMENT',
    'PEPENEMSTEAK',
    'RPALPHASTIK',
    'UNDEADPEPE',
    'MHV',
    'PBJCAT',
    'TAOWARARE'
]
const contracts = [
    '0x648445e48093d999966375b30186D433fEF9c364',
    '0x51b41e61B654EA852679E374171F08f35119e255',
    '0xA3832b169Ac40c23d85eEb1D0c2e51FCAc5df5De',
    '0x8B990d8bBB502eaa09AE4bAdEb8ec85Acbe7FB66',
    '0x57E62ee19ffd8f73CD978282a45a1e5ab7341c96',
    '0xA87c5dcC2e24FACe553cFC0c04d8E22c94c117a2',
    '0xEd01ca51723C0F9ebc167e8E382A7cfA73735077',
    '0x99523add649D16e69E2eE913baC893e69e926444',
    '0x9F0bf0e983B227b2c026d4655B9fDF6cd435A66E',
    '0x8F94BC777CB8B6876Cd2410Da3a6F796733212f5',
    '0x97E5cC2F56E08C6338AC7907E1073a8049D4bC60',
    '0x20Cd103D4Ed989338E122Eb069d9cC51f497151E',
    '0xD3Fab082012b7482244379B77d9548495A029F54',
    '0x38A8E6f911aB6163b663f7fa414af03c7Ab4b35b',
    '0x08aAB3C173639a37C7E5254C2F1C153c3e3444B2',
    '0x76330651533B02B89c563352062265663E410923',
    '0x3aC136f428889E0E8d88B79940dEA547Eb7Ca00D',
    '0x2523f621ce57E0503c114FbD0181B4c385165513',
    '0x5921F43985a027ba74EE110b77DcE09B96De943E',
    '0x60E762fA4FCB2bA472B055D64fEbBFccA000ED6C',
    '0x6160A19EC62392ADf43Cc22c89C0193432216417',
    '0x4B5CF00AE4D5b1a8DC4E0D81f28e373aAdbe59d3',
    '0xbA7101b0aaf0F1cF655240ed519C4EcAc3394022',
    '0xDaa9CecfE002536574D7958c50950F8f545a9Bd4',
    '0xF10e9228221777920d413E74Aa40a54b33886Ac4',
    '0x11266bF3498FaBe08707C16F3BA7fbF526Cf9f98',
    '0xa9DDec7e4B31D63Aa9fEaf77190b242070483B24',
    '0x5443F7D80875AFD18737F2A5322161582373cE5e',
    '0x0273b0846a9877af88b3F080fB963d8f51679996',
    '0xC8a1464d5936C9dcB033dAA7fc198215E7538292',
    '0x7469580d483e9832B9C68676b5EA17141bE97df2',
    '0x95907077585b09068A0d8d1185AAB872ec1836c0'
]
const images = []
images['KFPEPE'] = "images/KFPEPE.png"
images['PEPESTREET'] = "images/PEPESTREET.jpg"
images['ZENPEPE'] = "images/ZENPEPE.jpg"
images['PEPRESSIONISM'] = "images/PEPRESSIONISM.png"
images['PEPEBANKSY'] = "images/PEPEBANKSY.jpg"
images['MONAPEPE'] = "images/MONAPEPE.jpg"
images['LORDRARE'] = "images/LORDRARE.jpg"
images['BASEBALLPEPE'] = "images/BASEBALLPEPE.png"
images['BATPEPE'] = "images/BATPEPE.jpg"
images['HOTDOGPEPE'] = "images/HOTDOGPEPE.png"
images['KINGRARE'] = "images/KINGRARE.png"
images['ACCEPTRARE'] = "images/ACCEPTRARE.png"
images['NEVERENDINGPEPE'] = "images/NEVERENDINGPEPE.png"
images['PEPEGOD'] = "images/PEPEGOD.png"
images['PEPEGOLD'] = "images/PEPEGOLD.png"
images['NEWPEPE'] = "images/NEWPEPE.png"
images['PEPETTE'] = "images/PEPETTE.png"
images['VAPORPEPE'] = "images/UNKNOWN.png"
images['PEPESTENCIL'] = "images/PEPESTENCIL.jpg"
images['GlitchPepe'] = "images/GlitchPepe.gif"
images['PEPERIUMCLASSIC'] = "images/PEPERIUMCLASSIC.jpg"
images['CHILLPEPE'] = "images/CHILLPEPE.png"
images['RUINSOFPEPE'] = "images/RUINSOFPEPE.png"
images['GIGERPEPECITY'] = "images/UNKNOWN.png"
images['PEPEZEUSLIGHT'] = "images/PEPEZEUSLIGHT.jpg"
images['CRIMEANDPEPESHMENT'] = "images/CRIMEANDPEPESHMENT.png"
images['PEPENEMSTEAK'] = "images/PEPENEMSTEAK.jpg"
images['RPALPHASTIK'] = "images/RPALPHASTIK.jpg"
images['UNDEADPEPE'] = "images/UNDEADPEPE.jpg"
images['MHV'] = "images/MHV.png"
images['PBJCAT'] = "images/PBJCAT.gif"
images['TAOWARARE'] = "images/TAOWARARE.jpg"

let oldWrapperContractsWithBalance = []
let oldWrapperCardIds = []
let oldWrapperContractBalances = []

let unwrappedContractsWithBalance = []
let unwrappedCardIds = []
let unwrappedContractBalances = []

let wrappedContractsWithBalance = []
let wrappedCardIds = []
let wrappedContractBalances = []

const formatValue = (card, value, decimals = 0, style = 'decimal') => {
    if(card === 'TAOWARARE') {
        value = value / 10 ** 8
        decimals = 8
    }

    return new Intl.NumberFormat('en-US', {
        style,
        currency: 'USD',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value)
}
    
function setConnected(isConnected, userAddr) {
    connectedUserAccount = userAddr
    
    document.querySelector('#info-connect').innerHTML = `Connected to <strong>${userAddr}</strong>`
    document.querySelector('#btn-connect').style.display = isConnected ? 'none' : 'block'

    populateOldWrapperBalances(userAddr)
    populateUnwrappedBalances(userAddr)
    populateWrappedBalances(userAddr)
}

async function getErc20Balance(tokenAddr) {
    console.debug("fetching balance for tokenAddr: " + tokenAddr);

    const contract = await new ethers.Contract(tokenAddr, erc20Abi, provider);
    return await contract.balanceOf(connectedUserAccount);
}

async function wrapTokens() {
    console.log("wrapTokens");
    
    document.querySelector('#btn-wrap').style.display = 'none'

    try {
        const newWrapperContract = new ethers.Contract(wrapperAddr, wrapperAbi, signer)
        
        unwrappedContractsWithBalance.forEach(async (value, index) => {
            const cardId = unwrappedCardIds[index]
            
            // check if user has approval for erc20
            const erc20Contract = new ethers.Contract(value, erc20Abi, signer)
            const allowanceToSpend = parseInt(await erc20Contract.allowance(connectedUserAccount, wrapperAddr), 10)
            const balance = unwrappedContractBalances[index]
            
            if(allowanceToSpend > 0) {
                console.log(`current allowance for ${cardId}: ${allowanceToSpend}`)
            }
            
            // Step 1: approve erc20 to new wrapper
            const approvalResult = await erc20Contract.approve(wrapperAddr, allowanceAmount)
            const approvalReceipt = await approvalResult.wait()
            console.log(`approvalReceipt: ${JSON.stringify(approvalReceipt)}`)
            
            // Step 2: wrap to new wrapper
            const wrapResult = await newWrapperContract.wrap(cardId, balance)
            const wrapReceipt = await wrapResult.wait()
            console.log(`wrapReceipt: ${JSON.stringify(wrapReceipt)}`)
            
            populateUnwrappedBalances(connectedUserAccount)
            
            document.querySelector('#unwrapped-balances').style.display = 'none'
            document.querySelector('#unwrapped-no-balances').style.display = 'block'
        })
    } catch (e) {
        if (e.code) {
            console.warn("Received Metamask errorcode: " + e.code);
            
            if (e.code == "ACTION_REJECTED") {
                console.log("Metamask error: User denied transaction signature");
            } else {
                console.log("Metamask error " + e.code);
            }
        } else {
            console.log("Unexpected error while executing transaction. Contact the Peperium Discord for help.");
        }
        // rethrow for logging
        throw e;
    }
}

async function wrapSingleToken(cardId, amount) {
    console.log(`wrapSingleToken(${cardId}, ${amount})`);
   
    try {
        const wrapperContract = new ethers.Contract(wrapperAddr, wrapperAbi, signer)
        
        unwrappedContractsWithBalance.forEach(async (value, index) => {
            const cardId = unwrappedCardIds[index]
            
            // check if user has approval for erc20
            const erc20Contract = new ethers.Contract(value, erc20Abi, signer)
            const allowanceToSpend = parseInt(await erc20Contract.allowance(connectedUserAccount, wrapperAddr), 10)
            const balance = unwrappedContractBalances[index]
            
            if(allowanceToSpend > 0) {
                console.log(`current allowance for ${cardId}: ${allowanceToSpend}`)
            }
            
            // Step 1: approve erc20 to new wrapper
            if(allowanceToSpend < amount) {
                const approvalResult = await erc20Contract.approve(wrapperAddr, allowanceAmount)
                const approvalReceipt = await approvalResult.wait()
                console.log(`approvalReceipt: ${JSON.stringify(approvalReceipt)}`)
            }
            
            // Step 2: wrap to new wrapper
            const wrapResult = await wrapperContract.wrap(cardId, balance)
            const wrapReceipt = await wrapResult.wait()
            console.log(`wrapReceipt: ${JSON.stringify(wrapReceipt)}`)
            
            populateUnwrappedBalances(connectedUserAccount)
            populateWrappedBalances(connectedUserAccount)
        })
    } catch (e) {
        if (e.code) {
            console.warn("Received Metamask errorcode: " + e.code);
            
            if (e.code == "ACTION_REJECTED") {
                console.log("Metamask error: User denied transaction signature");
            } else {
                console.log("Metamask error " + e.code);
            }
        } else {
            console.log("Unexpected error while executing transaction. Contact the Peperium Discord for help.");
        }
        // rethrow for logging
        throw e;
    }
}

async function unwrapOldWrapperTokens() {
    console.log("unwrapOldWrapperTokens");
    
    document.querySelector('#btn-migrate').style.display = 'none'
    
    let accts = []
    let userAddr = null

    try {
        accts = await provider.listAccounts()
        userAddr = accts[0]
        const oldWrapperContract = new ethers.Contract(oldWrapperAddr, oldWrapperAbi, signer)
        const newWrapperContract = new ethers.Contract(wrapperAddr, wrapperAbi, signer)
        
        oldWrapperContractsWithBalance.forEach(async (value, index) => {
            const cardId = oldWrapperCardIds[index]
            
            // check if user has approval for erc20
            const erc20Contract = new ethers.Contract(value, erc20Abi, signer)
            const allowanceToSpend = parseInt(await erc20Contract.allowance(userAddr, wrapperAddr), 10)
            const balance = oldWrapperContractBalances[index]
            
            if(allowanceToSpend > 0) {
                console.log(`current allowance for ${cardId}: ${allowanceToSpend}`)
            }
            
            // Step 1: unwrap from old wrapper
            const unwrapResult = await oldWrapperContract.unwrap(cardId, balance)
            const unwrapReceipt = await unwrapResult.wait()
            console.log(`unwrapReceipt: ${JSON.stringify(unwrapReceipt)}`)
            
            // Step 2: approve erc20 to new wrapper
            const approvalResult = await erc20Contract.approve(wrapperAddr, allowanceAmount)
            const approvalReceipt = await approvalResult.wait()
            console.log(`approvalReceipt: ${JSON.stringify(approvalReceipt)}`)
            
            // Step 3: wrap to new wrapper
            const wrapResult = await newWrapperContract.wrap(cardId, balance)
            const wrapReceipt = await wrapResult.wait()
            console.log(`wrapReceipt: ${JSON.stringify(wrapReceipt)}`)
            
            populateOldWrapperBalances(userAddr)
            
            document.querySelector('#container-balances').style.display = 'none'
            document.querySelector('#container-no-balances').style.display = 'block'
        })
    } catch (e) {
        if (e.code) {
            console.warn("Received Metamask errorcode: " + e.code);
            
            if (e.code == "ACTION_REJECTED") {
                console.log("Metamask error: User denied transaction signature");
            } else {
                console.log("Metamask error " + e.code);
            }
        } else {
            console.log("Unexpected error while executing transaction. Contact the Peperium Discord for help.");
        }
        // rethrow for logging
        throw e;
    }
}

async function unwrapTokens() {
    console.log("unwrapTokens");
    
    document.querySelector('#btn-unwrap').style.display = 'none'
    
    try {
        const wrapperContract = new ethers.Contract(wrapperAddr, wrapperAbi, signer)
        
        wrappedContractsWithBalance.forEach(async (value, index) => {
            const cardId = wrappedCardIds[index]
            const balance = wrappedContractBalances[index]
            
            // unwrap
            const unwrapResult = await wrapperContract.unwrap(cardId, balance)
            const unwrapReceipt = await unwrapResult.wait()

            console.log(`unwrapReceipt: ${JSON.stringify(unwrapReceipt)}`)
            
            // last one
            if(index === wrappedContractsWithBalance.length-1) {
                populateUnwrappedBalances(connectedUserAccount)
                populateWrappedBalances(connectedUserAccount)
            }
        })
    } catch (e) {
        if (e.code) {
            console.warn("Received Metamask errorcode: " + e.code);
            
            if (e.code == "ACTION_REJECTED") {
                console.log("Metamask error: User denied transaction signature");
            } else {
                console.log("Metamask error " + e.code);
            }
        } else {
            console.log("Unexpected error while executing transaction. Contact the Peperium Discord for help.");
        }
        // rethrow for logging
        throw e;
    }
}

async function unwrapSingleToken(cardId, amount) {
    console.log(`unwrapSingleToken(${cardId}, ${amount})`);
   
    try {
        const wrapperContract = new ethers.Contract(wrapperAddr, wrapperAbi, signer)
        
        // Step 1: unwrap from old wrapper
        const unwrapResult = await wrapperContract.unwrap(cardId, amount)
        const unwrapReceipt = await unwrapResult.wait()
        console.log(`unwrapReceipt: ${JSON.stringify(unwrapReceipt)}`)
        
        document.querySelector('#wrapped-balances').style.display = 'none'
        document.querySelector('#wrapped-no-balances').style.display = 'block'
        
        populateUnwrappedBalances(connectedUserAccount)
        populateWrappedBalances(connectedUserAccount)
    } catch (e) {
        if (e.code) {
            console.warn("Received Metamask errorcode: " + e.code);
            
            if (e.code == "ACTION_REJECTED") {
                console.log("Metamask error: User denied transaction signature");
            } else {
                console.log("Metamask error " + e.code);
            }
        } else {
            console.log("Unexpected error while executing transaction. Contact the Peperium Discord for help.");
        }
        // rethrow for logging
        throw e;
    }
}

async function migrate() {
    unwrapOldWrapperTokens()
}

async function wrap() {
    wrapTokens()
}

async function wrapSingle(id, amount) {
    wrapSingleToken(id, amount)
}

async function unwrap() {
    unwrapTokens()
}

async function unwrapSingle(id, amount) {
    unwrapSingleToken(id, amount)
}

async function populateOldWrapperBalances(userAddr) {
    console.log("populateOldWrapperBalances");
    
    const oldWrapperContract = await new ethers.Contract(oldWrapperAddr, oldWrapperAbi, provider);
    const cardIdArr = [...Array(32).keys(), 99].slice(1,33)
    const userAddrArr = [...Array(32).fill(userAddr, 0, 32)]
    
    oldWrapperContract.balanceOfBatch(userAddrArr, cardIdArr).then(balances => {
        let tableHTML = `
        <thead>
            <tr>
                <th>Image</th>
                <th>Card</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>`
        
        balances.forEach((val, index) => {
            const amount = parseInt(val, 10)
            const contract = contracts[index]
            
            if(amount > 0) {
                hasOldWrapperBalances = true
                oldWrapperContractsWithBalance.push(contract)
                oldWrapperContractBalances.push(amount)
                oldWrapperCardIds.push(cardIdArr[index])
                tableHTML += `
                <tr>
                    <td class="align-middle"><img src="${images[cards[index]]}" height="100" /></td>
                    <td class="align-middle">${cards[index]}</td>
                    <td class="align-middle">${formatValue(cards[index], amount)}</td>
                </tr>`    
            }
        })
        
        tableHTML += `</tbody>`
        
        if(hasOldWrapperBalances) {
            document.querySelector('#container-balances').style.display = 'block'
            document.querySelector('#container-no-balances').style.display = 'none'
            document.querySelector('#table-old-wrapper-balances').innerHTML = tableHTML
            document.querySelector('#btn-migrate').addEventListener('click', migrate)
        } else {
            document.querySelector('#container-balances').style.display = 'none'
            document.querySelector('#container-no-balances').style.display = 'block'
        }
    });
}

async function populateUnwrappedBalances(userAddr) {
    console.log("populateUnwrappedBalances");
    
    const cardIdArr = [...Array(32).keys(), 99].slice(1,33)
    
    let tableBody = ''
    let promises = []

    cardIdArr.forEach((cardId, index) => {
        promises.push(getErc20Balance(contracts[index], userAddr).then(balance => {
            const amount = parseInt(balance, 10)

            if(amount > 0) {
                console.log(`User has an unwrapped balance of ${amount} for contract ${contracts[index]}`)

                hasUnwrappedBalances = true
                unwrappedContractsWithBalance.push(contracts[index])
                unwrappedContractBalances.push(amount)
                unwrappedCardIds.push(cardIdArr[index])
                tableBody += `<tr>
                    <td class="align-middle"><img src="${images[cards[index]]}" height="100" /></td>
                    <td class="align-middle">${cards[index]} <a href="https://etherscan.io/address/${contracts[index]}" target="_blank" title="View on etherscan">↗️</a></td>
                    <td class="align-middle">${formatValue(cards[index], amount)}</td>
                    <td class="align-middle"><button class="btn btn-primary btn-sm btn-wrap-single" data-wrap-amount="${amount}" data-wrap-id="${cardIdArr[index]}">Wrap this card</button></td>
                </tr>`    
            }
        }))
    })

    Promise.all(promises).then(() => {
        if(hasUnwrappedBalances) {
            let tableHTML = `
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Card</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${tableBody}
            </tbody>`

            document.querySelector('#unwrapped-balances').style.display = 'block'
            document.querySelector('#unwrapped-no-balances').style.display = 'none'
            document.querySelector('#table-unwrapped-balances').innerHTML = tableHTML

            // add click handlers
            document.querySelector('#btn-wrap').addEventListener('click', wrap)

            document.querySelectorAll('.btn-wrap-single').forEach(item => {
                item.addEventListener('click', e => {
                    e.preventDefault()

                    const cardId = parseInt(e.target.getAttribute('data-wrap-id'), 10)
                    let amount = parseInt(e.target.getAttribute('data-wrap-amount'), 10)

                    let desiredAmount = prompt(`Please enter amount (max ${amount})`, amount);
                    if (desiredAmount == null || desiredAmount == "") {
                        console.log("User cancelled the prompt")
                    } else {
                        if(parseInt(desiredAmount, 10) > amount) {
                            console.log("Can't wrap more cards than the balance")
                        } else {
                            console.log(`User wants to wrap ${desiredAmount}x card #${cardId}`)
                            wrapSingle(cardId, parseInt(desiredAmount, 10))
                        }
                    }

                })
            })                
        } else {
            document.querySelector('#unwrapped-balances').style.display = 'none'
            document.querySelector('#unwrapped-no-balances').style.display = 'block'
        }
    })
}

async function populateWrappedBalances(userAddr) {
    console.log("populateWrappedBalances");
    
    const wrapperContract = await new ethers.Contract(wrapperAddr, wrapperAbi, provider);
    const cardIdArr = [...Array(32).keys(), 99].slice(1,33)
    const userAddrArr = [...Array(32).fill(userAddr, 0, 32)]
    
    wrapperContract.balanceOfBatch(userAddrArr, cardIdArr).then(balances => {
        let tableHTML = `
        <thead>
            <tr>
                <th>Image</th>
                <th>Card</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>`
        
        balances.forEach((val, index) => {
            const amount = parseInt(val, 10)
            const contract = contracts[index]
            
            if(amount > 0) {
                hasWrappedBalances = true
                wrappedContractsWithBalance.push(contract)
                wrappedContractBalances.push(amount)
                wrappedCardIds.push(cardIdArr[index])
                tableHTML += `<tr>
                    <td><img src="${images[cards[index]]}" height="100" /></td>
                    <td class="align-middle">${cards[index]}</td>
                    <td class="align-middle">${formatValue(cards[index], amount)}</td>
                    <td class="align-middle"><button class="btn btn-primary btn-sm btn-unwrap-single" data-unwrap-amount="${amount}" data-unwrap-id="${cardIdArr[index]}">Unwrap this card</button></td>
                </tr>`    
            }
        })
        
        tableHTML += `</tbody>`
        
        if(hasWrappedBalances) {
            document.querySelector('#wrapped-balances').style.display = 'block'
            document.querySelector('#wrapped-no-balances').style.display = 'none'
            document.querySelector('#table-wrapped-balances').innerHTML = tableHTML

            // add click handlers
            document.querySelector('#btn-unwrap').addEventListener('click', unwrap)

            document.querySelectorAll('.btn-unwrap-single').forEach(item => {
                item.addEventListener('click', e => {
                    e.preventDefault()

                    const cardId = parseInt(e.target.getAttribute('data-unwrap-id'), 10)
                    let amount = parseInt(e.target.getAttribute('data-unwrap-amount'), 10)

                    let desiredAmount = prompt(`Please enter amount (max ${amount})`, amount);
                    if (desiredAmount == null || desiredAmount == "") {
                        console.log("User cancelled the prompt")
                    } else {
                        if(parseInt(desiredAmount, 10) > amount) {
                            console.log("Can't unwrap more cards than the balance")
                        } else {
                            console.log(`User wants to unwrap ${desiredAmount}x card #${cardId}`)
                            unwrapSingle(cardId, parseInt(desiredAmount, 10))
                        }
                    }

                })
            })            
        } else {
            document.querySelector('#wrapped-balances').style.display = 'none'
            document.querySelector('#wrapped-no-balances').style.display = 'block'
        }
    });
}

async function connectWallet() {
    console.log("connectWallet");
    
    await ethereum.request({
        method: 'eth_requestAccounts'
    });
    
    accts = await provider.listAccounts();
    
    let userAddr = accts[0]
    setConnected(true, userAddr);
}

if (ethereum) {
    provider = new ethers.providers.Web3Provider(ethereum);
    signer = provider.getSigner();
}

if (!provider) {
    console.error("Your browser is not web3 enabled.");
}

provider.listAccounts().then(accts => {
    if (accts && accts.length > 0) {
        let userAddr = accts[0]

        // already connected
        console.log("already connected; accts: " + userAddr);
        setConnected(true, userAddr);
    } else {
        console.log('Not connected')
        document.querySelector('#btn-connect').style.display = 'block'
    }
});

document.querySelector('#btn-connect').addEventListener('click', connectWallet)

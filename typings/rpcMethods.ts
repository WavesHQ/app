export const GET_BLOCKCHAIN_INFO = 'getblockchaininfo';
export const SEND_TO_ADDRESS = 'sendtoaddress';
export const SEND_MANY = 'sendmany';
export const VALIDATE_ADDRESS = 'validateaddress';
export const LIST_RECEIVED_BY_ADDRESS = 'listreceivedbyaddress';
export const GET_NEW_ADDRESS = 'getnewaddress';
export const GET_BLOCK = 'getblock';
export const GET_BLOCK_HASH = 'getblockhash';
export const GET_BALANCE = 'getbalance';
export const GET_BLOCK_COUNT = 'getblockcount';
export const GET_PEER_INFO = 'getpeerinfo';
export const LIST_TRANSACTIONS = 'listtransactions';
export const GET_WALLET_INFO = 'getwalletinfo';
export const GET_BALANCES = 'getbalances';
export const GET_RAW_TRANSACTION = 'getrawtransaction';
export const LIST_UNSPENT = 'listunspent';
export const WALLET_CREATE_FUNDED_PSBT = 'walletcreatefundedpsbt';
export const WALLET_PROCESS_PSBT = 'walletprocesspsbt';
export const FINALIZE_PSBT = 'finalizepsbt';
export const DECODE_RAW_TRANSACTION = 'decoderawtransaction';
export const CREATE_MASTER_NODE = 'createmasternode';
export const CREATE_TOKEN = 'createtoken';
export const MINT_TOKEN = 'minttokens';
export const UPDATE_TOKEN = 'updatetoken';
export const LIST_MASTER_NODE = 'listmasternodes';
export const LIST_TOKEN = 'listtokens';
export const DESTROY_TOKEN = 'destroytoken';
export const GET_ACCOUNT = 'getaccount';
export const LIST_ACCOUNTS = 'listaccounts';
export const RESIGN_MASTER_NODE = 'resignmasternode';
export const GET_TOKEN_NODE = 'gettoken';
export const GET_TOKEN_BALANCES = 'gettokenbalances';
export const DUMP_PRIV_KEY = 'dumpprivkey';
export const IMPORT_PRIV_KEY = 'importprivkey';
export const GET_ADDRESS_INFO = 'getaddressinfo';
export const STOP = 'stop';
export const DUMP_WALLET = 'dumpwallet';
export const BACKUP_WALLET = 'backupwallet';
export const IMPORT_WALLET = 'importwallet';
export const ACCOUNT_TO_ACCOUNT = 'accounttoaccount';
export const SEND_TOKENS_TO_ADDRESS = 'sendtokenstoaddress';
export const ACCOUNT_TO_UTXOS = 'accounttoutxos';
export const UTXOS_TO_ACCOUNT = 'utxostoaccount';
export const GET_TRANSACTION = 'gettransaction';
export const SET_LABEL = 'setlabel';
export const SET_HD_SEED = 'sethdseed';

// wallet lock/unlock methods
export const ENCRYPT_WALLET = 'encryptwallet';
export const WALLET_PASSPHRASE = 'walletpassphrase';
export const WALLET_LOCK = 'walletlock';
export const WALLET_PASSPHRASE_CHANGE = 'walletpassphrasechange';

// LP RPC Methods
export const LIST_POOL_PAIRS = 'listpoolpairs';
export const LIST_POOL_SHARES = 'listpoolshares';
export const GET_POOL_PAIR = 'getpoolpair';
export const ADD_POOL_LIQUIDITY = 'addpoolliquidity';
export const POOL_SWAP = 'compositeswap';
export const REMOVE_POOL_LIQUIDITY = 'removepoolliquidity';
export const TEST_POOL_SWAP = 'testpoolswap';
export const GET_GOV = 'getgov';
export const LIST_ACCOUNT_HISTORY = 'listaccounthistory';
export const ACCOUNT_HISTORY_COUNT = 'accounthistorycount';
export const CREATE_WALLET = 'createwallet';

// BTC SPV Methods
export const SPV_CLAIMHTLC = 'spv_claimhtlc';
export const SPV_CREATEANCHOR = 'spv_createanchor';
export const SPV_CREATEANCHORTEMPLATE = 'spv_createanchortemplate';
export const SPV_CREATEHTLC = 'spv_createhtlc';
export const SPV_DECODEHTLCSCRIPT = 'spv_decodehtlcscript';
export const SPV_DUMPPRIVKEY = 'spv_dumpprivkey';
export const SPV_ESTIMATEANCHORCOST = 'spv_estimateanchorcost';
export const SPV_GETADDRESSPUBKEY = 'spv_getaddresspubkey';
export const SPV_GETBALANCE = 'spv_getbalance';
export const SPV_GETHTLCSEED = 'spv_gethtlcseed';
export const SPV_GETNEWADDRESS = 'spv_getnewaddress';
export const SPV_GETRAWTRANSACTION = 'spv_getrawtransaction';
export const SPV_GETTXCONFIRMATIONS = 'spv_gettxconfirmations';
export const SPV_LISTANCHORS = 'spv_listanchors';
export const SPV_LISTANCHORAUTHS = 'spv_listanchorauths';
export const SPV_LISTANCHORREWARDCONFIRMS = 'spv_listanchorrewardconfirms';
export const SPV_LISTANCHORREWARDS = 'spv_listanchorrewards';
export const SPV_LISTANCHORSUNREWARDED = 'spv_listanchorsunrewarded';
export const SPV_LISTANCHORSPENDING = 'spv_listanchorspending';
export const SPV_LISTHTLCOUTPUTS = 'spv_listhtlcoutputs';
export const SPV_LISTTRANSACTIONS = 'spv_listtransactions';
export const SPV_REFUNDHTLC = 'spv_refundhtlc';
export const SPV_RESCAN = 'spv_rescan';
export const SPV_SENDRAWTX = 'spv_sendrawtx';
export const SPV_SENDTOADDRESS = 'spv_sendtoaddress';
export const SPV_SYNCSTATUS = 'spv_syncstatus';
export const SPV_LISTRECEIVEDBYADDRESS = 'spv_listreceivedbyaddress';
export const SPV_VALIDATEADDRESS = 'spv_validateaddress';
export const SPV_GETALLADDRESSES = 'spv_getalladdresses';
export const GET_NETWORK_INFO = 'getnetworkinfo';

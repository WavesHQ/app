import path from 'path';
import * as log from '../services/electronLogger';
import DialogManager from '../services/dialogmanager';
import {
  MENU_BACKUP_WALLET,
  MENU_IMPORT_WALLET,
  START_BACKUP_WALLET,
  WALLET_DAT,
} from '../constants';
import { copyFile, deleteFile, getBaseFolder, responseMessage } from '../utils';
import DefiHwWallet from '../defiHwWallet/defiHwWallet';

const saveFileDailog = async (
  extensions: { name: string; extensions: string[] }[]
) => {
  const dialogManager = new DialogManager();
  const paths = await dialogManager.saveFilePath(extensions);
  if (!paths.length) {
    throw new Error('No valid path available');
  }
  return paths;
};

const appendExtension = (paths: string, extension: string) => {
  const isDatFile = paths.lastIndexOf('.');
  return isDatFile === -1 ? `${paths}.${extension}` : paths;
};

export default class Wallet {
  async load(bw: Electron.BrowserWindow) {
    try {
      const dialogManager = new DialogManager();
      const paths = await dialogManager.getFilePath();
      bw.webContents.send(MENU_IMPORT_WALLET, { paths });
    } catch (err) {
      log.error(err);
    }
  }

  async backup(bw: Electron.BrowserWindow) {
    try {
      const paths = await saveFileDailog([
        { name: 'Text file', extensions: ['txt'] },
      ]);

      bw.webContents.send(MENU_BACKUP_WALLET, {
        paths: appendExtension(paths, 'txt'),
      });
      return responseMessage(true, {});
    } catch (err) {
      log.error(err);
      return responseMessage(false, {
        message: err.message,
      });
    }
  }

  async backupWalletDat() {
    const paths = await saveFileDailog([
      { name: 'Wallet', extensions: ['dat'] },
    ]);
    const dest = appendExtension(paths, 'dat');
    const baseFolder = getBaseFolder();
    const src = path.join(baseFolder, WALLET_DAT);
    return copyFile(src, dest);
  }

  async replaceWalletDat() {
    const baseFolder = getBaseFolder();
    const destFileName = `wallet-bak-${Date.now()}.dat`;
    const destFilePath = path.join(baseFolder, destFileName);
    const srcFilePath = path.join(baseFolder, WALLET_DAT);
    copyFile(srcFilePath, destFilePath);
    deleteFile(srcFilePath);
  }

  async startBackupWallet(bw: Electron.BrowserWindow) {
    bw.webContents.send(START_BACKUP_WALLET);
  }
  async connectHwWallet() {
    const defiHwWallet = new DefiHwWallet();
    console.log('connectHwWallet');
    let devsPath = await defiHwWallet.getDevices();
    console.log('devs: ' + devsPath.toLocaleString());
    await defiHwWallet.connect(devsPath[0]);
    for (let i = 0; i < 5; i++) {
      let ret: { pubkey: Buffer; address: String };
      ret = await defiHwWallet.getDefiPublicKey(i, 'legacy');
      console.log('legacy addr: ' + ret.address);
      ret = await defiHwWallet.getDefiPublicKey(i, 'p2sh');
      console.log('p2sh addr: ' + ret.address);
      ret = await defiHwWallet.getDefiPublicKey(i, 'bech32');
      console.log('bech32 addr: ' + ret.address);
      ret = await defiHwWallet.getDefiPublicKey(i, 'cashaddr');
      console.log('cashaddr addr: ' + ret.address);
    }
    return await defiHwWallet.getDefiPublicKey(0);
  }
}

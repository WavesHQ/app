#!/bin/sh
#!/usr/bin/env fish
mkdir -p binary
cd binary && rm -rf win mac linux
mkdir linux
cd ..
mkdir -p temp
cd temp && rm -rf linux
mkdir linux && cd linux
wget https://github.com/DeFiCh/ain/releases/download/v1.3.16/defichain-1.3.16-x86_64-pc-linux-gnu.tar.gz
tar -xvf defichain-1.3.16-x86_64-pc-linux-gnu.tar.gz
cp defichain-1.3.16/bin/defid .
cd ../.. && cp temp/linux/defid binary/linux/defid
chmod 777 binary/linux/defid

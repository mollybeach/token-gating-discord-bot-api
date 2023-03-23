#!/bin/bash 

# Use this script if `terraform init` is failing to connect to
# the Terraform github repo. It is caused by how golang resolves DNS
# addresses different from the OS.

# You may also need to add execute rights to the script 
# `chmod +x fix_terraform_dns_resolution.sh`

sudo cp /etc/resolv.conf /etc/resolv.conf.new
sudo sed -i 's/127.0.0.11/8.8.8.8/' /etc/resolv.conf.new
sudo cp -f /etc/resolv.conf.new /etc/resolv.conf
sudo rm /etc/resolv.conf.new
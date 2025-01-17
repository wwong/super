#!/bin/sh

# comment below to DISABLE ssh, API from the Upstream Interface
UPSTREAM_SERVICES_ENABLE=1

# Uncomment below to use SPR without wifi,
#  as a VPN gateway for example
#VIRTUAL_SPR=1

#PPPIF=eth0
#WANIF=ppp0
#PPP_VLANID=201
#PPP_PROVIDER=provider-config
WANIF=eth0
RUN_WAN_DHCP=true
RUN_WAN_DHCP_IPV=4
# Uncomment the next line if a second ethernet port goes to wired LAN
#LANIF=eth1

LANIP=192.168.2.1
DNSIP=$LANIP
TINYNETSTART=192.168.2.4
TINYNETSTOP=192.168.2.255
TINYNETMASK=255.255.255.252
TINYSLASHMASK=30
DOCKERNET=172.17.0.0/16
DOCKERIF=docker0

WIREGUARD_PORT=51280

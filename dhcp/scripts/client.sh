#!/bin/bash
. /configs/base/config.sh
if [ "$RUN_WAN_DHCP" ]; then
  # workaround for coredhcp bug
  ip addr add dev $WANIF 192.168.250.250/32
  /coredhcp_client -d -i $WANIF -v $RUN_WAN_DHCP_IPV
  ip addr del dev $WANIF 192.168.250.250/32

  # check for an IP, if no IP, run dhclient as a fallback
  ping 4.2.2.2 -c 1 -W 3
  ret=$?
  if [ "$ret" -eq "1" ]
  then
    dhclient -i $WANIF
  fi
fi

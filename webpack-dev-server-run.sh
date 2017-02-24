#!/usr/bin/env bash
echo "webpack-dev-server find..."
pid=`lsof -i:52273 | grep LISTEN | awk '{print $2}'`
if [ -z $pid ]; then
#-z 옵션은 null 일 때 true
  echo "Already webpack-dev-server Application Stopped."
else
  kill -9 $pid
  processCount=`lsof -i:52273 | grep LISTEN | wc | awk '{print $1}'`
  echo "webpack-dev-server Count : "$processCount
  if [ "$processCount" = "0" ]; then
    echo "webpack-dev-server stopped."
  else
    echo "webpack-dev-server shutting down fail."
  fi
fi
sleep 1
npm install
bnr development

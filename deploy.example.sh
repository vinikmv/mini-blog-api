#!/bin/bash

echo Type the VERSION
read VERSION

docker build -t test/repository:$VERSION .
docker push test/repository:$VERSION
ssh root@<VPS IP> "docker pull test/repository:$VERSION && docker tag test/repository:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION"
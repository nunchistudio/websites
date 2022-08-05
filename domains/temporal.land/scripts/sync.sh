#!/bin/bash

rm -f ./domains/temporal.land/data/ecosystem.json
cp ../temporal-land/ecosystem.json ./domains/temporal.land/data/ecosystem.json

rm -f ./domains/temporal.land/pages/overview.md
rm -f ./domains/temporal.land/pages/how.md
cp ../temporal-land/documentation/* ./domains/temporal.land/pages

rm -f ./domains/temporal.land/pages/committee.md
cp ../temporal-land/COMMITTEE.md ./domains/temporal.land/pages/committee.md

toplevel=$( cat ./domains/temporal.land/data/ecosystem.json | jq -r '.toplevel[].id' | cat )
for mod in $toplevel; do
  rm -rf ./domains/temporal.land/pages/$mod
  mkdir -p ./domains/temporal.land/pages/$mod
  cp -R ../temporal-land/$mod/documentation/* ./domains/temporal.land/pages/$mod
done

rm -rf ./domains/temporal.land/markdoc/partials/specifications
mkdir -p ./domains/temporal.land/markdoc/partials/specifications
specifications=$( cat ./domains/temporal.land/data/ecosystem.json | jq -r '.specifications[].id' | cat )
for mod in $specifications; do
  cp ../temporal-land/specifications/$mod/documentation/partials/* ./domains/temporal.land/markdoc/partials/specifications
done

rm -rf ./domains/temporal.land/pages/integrations
mkdir -p ./domains/temporal.land/pages/integrations
integrations=$( cat ./domains/temporal.land/data/ecosystem.json | jq -r '.integrations[].id' | cat )
for mod in $integrations; do
  cp ../temporal-land/integrations/$mod/documentation/* ./domains/temporal.land/pages/integrations
done

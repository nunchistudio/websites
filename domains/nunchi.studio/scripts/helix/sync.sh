#!/bin/bash

rm -f ./domains/nunchi.studio/data/helix/ecosystem.json
cp ../helix/ecosystem.json ./domains/nunchi.studio/data/helix/ecosystem.json

rm -f ./domains/go.nunchi.studio/data/helix/ecosystem.json
cp ../helix/ecosystem.json ./domains/go.nunchi.studio/data/helix/ecosystem.json

find ./domains/nunchi.studio/pages/helix -name "*.md" -exec rm -rf \;
cp ../helix/documentation/*.md ./domains/nunchi.studio/pages/helix

find ./domains/nunchi.studio/pages/helix/integration -name "*.md" -exec rm -rf \;
integrations=$( cat ./domains/nunchi.studio/data/helix/ecosystem.json | jq -r '.integrations[] | select(.soon|not) | .id' | cat )
for mod in $integrations; do
  cp ../helix/documentation/integration/$mod.md ./domains/nunchi.studio/pages/helix/integration/$mod.md
done

find ./domains/nunchi.studio/markdoc/partials/helix-go -name "*.md" -exec rm -rf \;
cp ../helix.go/documentation/*.md ./domains/nunchi.studio/markdoc/partials/helix-go
rm -rf ./domains/nunchi.studio/markdoc/partials/helix-go/integration
mkdir -p ./domains/nunchi.studio/markdoc/partials/helix-go/integration
for mod in $integrations; do
  cp ../helix.go/documentation/integration/$mod.md ./domains/nunchi.studio/markdoc/partials/helix-go/integration/$mod.md
done

find ./domains/nunchi.studio/markdoc/partials/helix-ts -name "*.md" -exec rm -rf \;
cp ../helix.ts/documentation/*.md ./domains/nunchi.studio/markdoc/partials/helix-ts
rm -rf ./domains/nunchi.studio/markdoc/partials/helix-ts/integration
mkdir -p ./domains/nunchi.studio/markdoc/partials/helix-ts/integration
for mod in $integrations; do
  cp ../helix.ts/documentation/integration/$mod.md ./domains/nunchi.studio/markdoc/partials/helix-ts/integration/$mod.md 2>/dev/null
done

rm -rf ./domains/nunchi.studio/public/helix

mkdir -p ./domains/nunchi.studio/public/helix/descriptions
cp -r ../helix/descriptions ./domains/nunchi.studio/public/helix

mkdir -p ./domains/nunchi.studio/public/helix/screenshots
cp -r ../helix/assets/screenshots ./domains/nunchi.studio/public/helix

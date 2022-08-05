#!/bin/bash

rm -rf ./domains/hashibox.sh/public/screenshots/*
cp ../hashibox/assets/screenshots/* ./domains/hashibox.sh/public/screenshots

rm -rf ./domains/hashibox.sh/pages/*.md
cp ../hashibox/documentation/*.md ./domains/hashibox.sh/pages

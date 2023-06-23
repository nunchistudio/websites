#!/bin/bash

rm -rf ./domains/nunchi.studio/public/hashibox/screenshots/*
cp ../hashibox/assets/screenshots/* ./domains/nunchi.studio/public/hashibox/screenshots

rm -rf ./domains/nunchi.studio/pages/hashibox/*.md
cp ../hashibox/documentation/*.md ./domains/nunchi.studio/pages/hashibox

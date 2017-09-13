#!/bin/bash

set -ev

echo "TRAVIS_BRANCH: $TRAVIS_BRANCH TRAVIS_TAG: $TRAVIS_TAG"

if [ "$TRAVIS_BRANCH" == "master" ]; then
  echo deploying production
  ember deploy production --verbose;
fi

# if [ -n "$TRAVIS_TAG" ]; then
#   echo deploying production
#   ember deploy production --verbose;
# fi

#!/bin/bash -exu

npm run build
mv "dist/" "${HOME}/" 
git checkout master

if [[ -d node_modules && -d .git ]]; then
  rm -rfv $(ls | sed 's/node_modules//g' | tr '\n' ' ')
  mv ${HOME}/dist/* . 
  git add -A && git commit -m "New version" && git push -f
fi

git checkout develop
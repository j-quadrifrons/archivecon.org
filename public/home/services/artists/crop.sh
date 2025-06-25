#!/bin/bash

for f in *.jpg
do convert $f -thumbnail 100x100^ -gravity center -extent 100x100 ${f%.*}-thumb.gif
done

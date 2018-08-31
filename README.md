# glyphs.wf

## How to run jekyll in docker for testing locally

This requires that you have already have installed [docker](https://www.docker.com/get-docker) (and changed it to use use [linux containers](https://docs.docker.com/docker-for-windows/#switch-between-windows-and-linux-containers) if you are on windows).

Dont forget to change the path to where you cloned the repository to (`E:\code\git\WFRSB\docs`).

`docker run --rm --label=jekyll --env POLLING=true --env VERBOSE=true --volume=E:\code\git\glyphs.wf:/srv/jekyll -it -p 4000:4000 jekyll/jekyll jekyll serve`

Then open your favorite browser and point it to [http://localhost:4000/](http://localhost:4000/).

Press ctrl + c to exit / close it.

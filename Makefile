babel=node_modules/.bin/babel
pug=node_modules/.bin/jade
stylus=node_modules/.bin/stylus

all: reset javascript pug stylus

reset:
	rm -rf out
	mkdir out

javascript:
	$(babel) src -d out

pug:
	mkdir out/view
	$(pug) src/views -o out/views

stylus:
	mkdir out/style
	$(stylus) src/styles -o out/styles

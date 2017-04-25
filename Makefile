.PHONY: clean all

LIBDIR = lib

all: node_modules lib demo

node_modules: package.json
	@rm -r node_modules
	@npm install
	@touch $@

clean:
	@rm -r $(LIBDIR)

lib: clean
	@rollup -c

.PHONY: clean all

SRCDIR = src
DOCSRC = $(SRCDIR)/docs
LIBDIR = lib

all: node_modules lib docs

node_modules: package.json
	@rm -r node_modules
	@npm install
	@touch $@

clean:
	@if [ -d $(LIBDIR) ]; then rm -r $(LIBDIR); fi

lib: clean
	@rollup -c

docs: lib
	@rsync -rupE $(DOCSRC) .
	@cp $(LIBDIR)/index.iife.js docs/

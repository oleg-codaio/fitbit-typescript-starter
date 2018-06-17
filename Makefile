SHELL = /bin/bash
ROOTDIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

TSC := tsc
TSLINT := tslint

default: build

.PHONY: _build-app
_build-app:
	${TSC} -project app --noEmit

.PHONY: _build-companion
_build-companion:
	${TSC} -project companion --noEmit

.PHONY: _build-settings
_build-settings:
	${TSC} -project settings --noEmit

.PHONY: build
build: _build-app _build-companion _build-settings

.PHONY: _lint-app
_lint-app:
	${TSLINT} -c tslint.json -p app/tsconfig.json

.PHONY: _lint-companion
_lint-companion:
	${TSLINT} -c tslint.json -p companion/tsconfig.json

.PHONY: _lint-settings
_lint-settings:
	${TSLINT} -c tslint.json -p settings/tsconfig.json

.PHONY: lint
lint: _lint-app _lint-companion _lint-settings
# CHANGELOG

<!-- TEMPLATE OF NEW VERSION -->

<!-- 
## [VERSION](https://github.com/acacode/stonex/releases/tag/VERSION)

### Changed
### Fixed
### Added
### Removed
 -->

## [0.1.3](https://github.com/acacode/stonex/releases/tag/0.1.3)

### Added
- JSDOC documentation

### Fixed
- Fixed the work of `resetState()` method
- Fixed the work of `setState()` method (*merging previous state with current*)

### Changed
- `ModifiersWorker` class in `ModifiersWorker.ts` file at now will exporting as named export

### Removed
- default export from `ModifiersWorker.ts` file

## [0.1.3-beta](https://github.com/acacode/stonex/releases/tag/0.1.3-beta)

### Added
- The bridge for using another modules in module via using property `this.modules` inside methods of your StonexModule
- Pure Stonex modules
- Fulfill documentation in `README.md`

### Changed
- Files of example of stonex store. Tested new feature inside code example (folder: `example`)


## [0.1.3-alpha](https://github.com/acacode/stonex/releases/tag/0.1.3-alpha)

### Changed
- Renamed `lib` to `src` folder  
- Travis CI config  
- Updated `CHANGELOG`  

### Added
- Rollup build (before build was with using `tsc`)

### Removed
- `release-it` dev. dependency

## [0.0.9-alpha](https://github.com/acacode/stonex/releases/tag/0.0.9-alpha)

### Changed
- Travis CI configuration file

## [0.0.8-alpha](https://github.com/acacode/stonex/releases/tag/0.0.8-alpha)

### Changed
- Travis CI configuration file

## [0.0.7-alpha](https://github.com/acacode/stonex/releases/tag/0.0.7-alpha)

### Added
- Travis CI integration

### Changed
- Project structure, renamed most properties/methods of classes
- Renamed stonex hooks to Stonex modifiers and changed logic of their work
- Code with examples of usings
- To separated logic of working with state into the one module (`StateWorker`)

### Fixed
- Typescript configuration file
- Bug with sending storeBinder to stonex modules
- Fixed a bug of calling the store modifier when call the module


## [0.0.6-alpha](https://github.com/acacode/stonex/releases/tag/0.0.6-alpha)

Fully rewrited all application compared previous versions

**Not working version** (as npm package)


## [0.0.2-alpha](https://github.com/acacode/stonex/releases/tag/0.0.2-alpha)

Created a project

**Not working version**


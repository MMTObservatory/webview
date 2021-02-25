# webview
Tool for opening web pages from the command-line


## Build and Install
Use the `build.sh` script to install the `node` package dependencies and perform the build to create `.rpm` and `.deb` files. For the script to work you will obviously need `node` and `npm` installed in your environment. The developer libraries and tools for building `rpm` and `deb` files are also required. On Debian/Ubuntu, you may need to manually install `rpmbuild` for this.

## Versioning
Use `npm version <version tag>` to increment the package version. This will update `package.json` as well as perform `git tag`. Do `git push --tags` to push the new version upstream. Pushing a new version will trigger a new release which will automatically build `rpm` and `deb` packages and make them available for download.

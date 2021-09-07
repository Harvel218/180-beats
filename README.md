> Development environment

- it runs webpack-dev-server with browser-sync support
- it builds source-maps


> Production environment

- it minifies `js`
- it minifies multiple image types _(gif, png, jpg, jpeg, svg)_
- it copies all `web fonts`
- it minifies all `json` files from `data` directory
- it has subresource-integrity
- it does not build source-maps, but you may specify it on line `216` if you want them


### Commands?

It's pretty easy... You do not have a bunch of commands, just two of them:

- `npm run serve` – to start with development
- `npm run build` - to make it ready for production use

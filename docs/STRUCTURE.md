
## Structure of project

Default lang set as first element of array in `build.json` in "langs" key

#### Mode: multi
```yaml
sites:
  default: # default site
    build.json: 'config file for building of site'
    deploy.json: 'config file for building of site'
    assets: # common images for design
      icon.svg
      logo.svg
    data: # custom json files to access data in all pug templates
      list.json   # #{data.list.key1} in pug template
      custom.json # data.custom.key2... in pug template
    pages: # site content directory; page structure of site  
      index.en.md: 'Root page content and page options in yaml on top of file'
      index.ru.md: 'Root page on other lang'
      about:
        index.en.md: 'Next Page content and page options in yaml on top of file'
        index.ru.md: 'Next Page on other lang'
    scripts:
      index.ts: 'Root of typescript'
      any.ts: ' any scripts that will by imported in index.ts: import any from "./any.js" '
    styles:
      index.scss: 'Root of sass styles'
      any.scss: ' any style that will by included in index.scss'
    views:
      index.pug: 'Core file, has skeleton of html'
      layouts:  #main design of page, can set in top of pages/<page>/index.<lang>.md
        default.pug: 'default layout if layout=main or not set or layout not found'
        other.pug: 'other layout, layout=other in pages/**/*.md'
      partial: # parts of page
        head.pug: ' <head> with title, meta etc'
```

#### Mode: mono, only as npm pack
```yaml
build.json: 'config file for building of site'
deploy.json: 'config file for building of site'
assets: # common images for design
  icon.svg
  logo.svg
data: # custom json files to access data in all pug templates
  list.json   # #{data.list.key1} in pug template
  custom.json # data.custom.key2... in pug template
pages: # site content directory; page structure of site  
  index.en.md: 'Root page content and page options in yaml on top of file'
  index.ru.md: 'Root page on other lang'
  about:
    index.en.md: 'Next Page content and page options in yaml on top of file'
    index.ru.md: 'Next Page on other lang'
scripts:
  index.ts: 'Root of typescript'
  any.ts: ' any scripts that will by imported in index.ts: import any from "./any.js" '
styles:
  index.scss: 'Root of sass styles'
  any.scss: ' any style that will by included in index.scss'
views:
  index.pug: 'Core file, has skeleton of html'
  layouts:  #main design of page, can set in top of pages/<page>/index.<lang>.md
    default.pug: 'default layout if layout=main or not set or layout not found'
    other.pug: 'other layout, layout=other in pages/**/*.md'
  partial: # parts of page
    head.pug: ' <head> with title, meta etc'
```

Current site structure for site.com, default lang is 'en'
- https://site.com/
- https://site.com/ru/
- https://site.com/about
- https://site.com/ru/about



pages in `md` format contains yaml before markdown separated by &lt;!--config-->
```markdown
'''yaml
ke1: value1
ke2: value2
'''
&lt;!--config-->
Markdown here

```

import { getConfig, cleanDir, info } from './utils/index.js'
import { CoreConfig } from './utils/types.js'
import { taskScript } from './task-script.js'
import { taskStyle } from './task-style.js'
import { taskHtml } from './task-html.js'
import { taskImages } from './task-images.js'

type CoreProps = {
  siteName: string
  dev?: boolean
  log?: boolean
  root?: string
}
type CoreResp = {
  cleanDist: () => void
  renderHtml: () => Promise<void>
  renderScript: () => Promise<void>
  renderStyle: () => void
  copyImages: () => void
}

export const Core = async ({
  siteName,
  root,
  dev = false,
}: CoreProps): Promise<CoreResp> => {
  const coreConfig: CoreConfig = getConfig({ siteName, root, dev })
  const { timekey, styleIndexPath, scriptIndexPath, distDir } = coreConfig

  return {
    cleanDist: () => {
      info('title', 'Task: CLEAN')
      cleanDir(distDir)
    },
    renderHtml: () => taskHtml(coreConfig),
    renderStyle: () => taskStyle({ timekey, styleIndexPath, distDir }),
    renderScript: () => taskScript({ timekey, scriptIndexPath, distDir }),
    copyImages: () => taskImages(coreConfig),
  }
}

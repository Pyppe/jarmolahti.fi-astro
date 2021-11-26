import _ from 'lodash'

export function determineSlug(pathname: string) {
  console.log('AT DETERMINE SLUG: ' + pathname)
  const filename = _.last(pathname.split('/')) as string
  return filename
    .replace(new RegExp('^(\\d{4})-(\\d{2})-', 'g'), '$1/$2/')
    .replace(new RegExp('\\.(md|html)', 'g'), '')
}

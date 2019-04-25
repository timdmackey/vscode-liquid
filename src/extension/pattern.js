import { matches } from './config'

export default {
  frontmatter: new RegExp(matches.frontmatter.join(''), 'g'),
  tags: new RegExp(matches.tags.join(''), 'g'),
  ignore: new RegExp(matches.ignore.join(''), 'g')
}

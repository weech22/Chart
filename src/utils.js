import { freeChartTypes, linkRegEx, jsonRegEx } from './constants'
import * as R from 'ramda'

export const isFigma = window.name === 'Plugin Iframe'
export const isAdobe = window.name === undefined
export const isSketch = window.name === ''

export const platform = () => (isFigma ? 'Figma' : isAdobe ? 'Adobe' : 'Sketch')

// Adobe Figma Sketch
export const afs = (a, f, s) => (isAdobe ? a : isFigma ? f : s)

export const isChartDisabled = (isPro, chartType) =>
  !(isPro || freeChartTypes.includes(chartType))

export const equalIgnoreOrder = R.compose(R.isEmpty, R.symmetricDifference)

export const readFileContent = (file) => {
  const reader = new FileReader()

  return new Promise((resolve, reject) => {
    reader.onload = (event) => resolve(event.target.result)
    reader.onerror = (error) => reject(error)
    reader.readAsText(file)
  }).then((data) => data)
}

export const isValidGSLink = (link) =>
  link.match(linkRegEx) && link.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)

export const isValidJSONLink = (link) =>
  link.match(linkRegEx) && getTitleFromUrl(link).match(jsonRegEx)

export const getTitleFromUrl = (url) => /[^/]*$/.exec(url)[0]

export const transpose = (a) =>
  R.map((c) => R.map((r) => r[c], a), R.keys(a[0]))

export const clearGrid = (grid) =>
  grid.map((row) =>
    row.map(() => ({
      value: '',
    }))
  )

export const generateEmptyGrid = (n = 100) =>
  Array(n).fill(Array(n).fill({ value: '' }))

const cToHex = (c) => {
  const hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

export const rgbToHex = (r, g, b) =>
  `${cToHex(r)}${cToHex(g)}${cToHex(b)}`.toUpperCase()

export const numToPercent = (n) => `${Math.round(n * 100)}%`

export const swap = R.curry((index1, index2, list) => {
  if (
    index1 < 0 ||
    index2 < 0 ||
    index1 > list.length - 1 ||
    index2 > list.length - 1
  ) {
    return list
  }
  const value1 = list[index1]
  const value2 = list[index2]
  return R.pipe(
    R.set(R.lensIndex(index1), value2),
    R.set(R.lensIndex(index2), value1)
  )(list)
})

export const getSheetLink = (spreadsheetId, gid) =>
  `https://docs.google.com/spreadsheets/d/${spreadsheetId}/edit#gid=${gid}`

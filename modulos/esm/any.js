import { fileURLToPath } from 'url'
import { dirname } from 'path'

export const getName = () => {
    console.log('Any Name')
}
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

console.log(__filename);
console.log(__dirname);

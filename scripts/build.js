import fs from 'fs'
import path from 'path'
import * as esbuild from 'esbuild'

try {
  const srcIndex = fs.readFileSync('src/avataaars.js', 'utf8')
  const cssContent = fs.readFileSync('src/animations.css', 'utf8')

  // Replace stylesheet link reference with inlined style string
  let bundleIndex = srcIndex.replace(
    "const cssUrl = new URL('./animations.css', import.meta.url).href",
    `const styleContent = ${JSON.stringify(cssContent)}`
  )
  bundleIndex = bundleIndex.replace(
    '<link rel="stylesheet" href="${cssUrl}">',
    '<style>${styleContent}</style>'
  )

  // Recreate dist directory to clear stale files and chunks
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true })
  }
  fs.mkdirSync('dist')

  // Create temporary entry point to support esbuild code splitting (which requires file entrypoints, not stdin)
  const tempEntry = 'src/entry-temp.js'
  fs.writeFileSync(tempEntry, bundleIndex, 'utf8')

  try {
    // 1. Build standard bundled ES module with splitting
    await esbuild.build({
      entryPoints: [tempEntry],
      bundle: true,
      splitting: true,
      format: 'esm',
      outdir: 'dist',
      target: 'es6',
      chunkNames: 'chunks/[name]-[hash]',
      entryNames: 'avataaars'
    })

    // 2. Build minified bundled ES module with splitting
    await esbuild.build({
      entryPoints: [tempEntry],
      bundle: true,
      splitting: true,
      minify: true,
      format: 'esm',
      outdir: 'dist',
      target: 'es6',
      chunkNames: 'chunks/[name]-[hash].min',
      entryNames: 'avataaars.min'
    })
  } finally {
    if (fs.existsSync(tempEntry)) {
      fs.unlinkSync(tempEntry)
    }
  }

  console.log('Build completed successfully: dist/avataaars.js and dist/avataaars.min.js generated with split chunks.')
} catch (err) {
  console.error('Build failed:', err)
  process.exit(1)
}

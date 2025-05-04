![Preview](docs/image.png)

# Example TSX + MDX Project

This project is a sample React application using:

- **React** with **TypeScript** (TSX)
- **MDX** for rich content pages
- **Vite** as the bundler
- **Tailwind CSS** for styling
- **PNPM** as the package manager

## How to run locally

1. Install dependencies:
   ```sh
   pnpm install
   ```
2. Start the development server:
   ```sh
   pnpm dev
   ```
3. Access at [http://localhost:5173](http://localhost:5173)

## Structure
- `src/components/DocumentPage.tsx`: Example of a TSX page
- `src/components/DocumentPage.mdx`: Example of an MDX page
- `src/components/mdx/`: Custom components for use in MDX

## Notes
- The project supports frontmatter in MDX files (via `remark-frontmatter`).
- React components can be used directly inside MDX.
- Test and explore MDX online at the [MDX Playground](https://mdxjs.com/playground/).

---
Feel free to adapt this project to your needs! 
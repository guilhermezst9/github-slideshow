# Table Generator App

## Overview
A React application that allows users to generate a dynamic table by specifying the number of rows and columns. Users can input values into each cell of the generated table.

## Tech Stack
- **Framework**: React 19 (via Vite)
- **Styling**: Tailwind CSS v3
- **UI Library**: Shadcn UI (Radix UI + Tailwind)
- **Language**: TypeScript

## Features
- Dynamic table generation based on user input (Rows/Columns).
- Editable cells in the generated table.
- Responsive design with a clean, modern UI.
- Input validation (min/max limits).

## Project Structure
- `src/App.tsx`: Main application component.
- `src/components/TableGenerator.tsx`: Core logic for table generation.
- `src/components/ui/`: Reusable UI components (Card, Button, Input).
- `src/lib/utils.ts`: Utility functions (cn).

## Changelog
- **2025-12-09**: Initial release with table generation and cell editing features.

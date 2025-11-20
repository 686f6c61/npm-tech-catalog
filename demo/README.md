# DEMO - BROWSER TEST

SIMPLE HTML PAGE TO TEST THE PACKAGE IN THE BROWSER

## HOW TO RUN

### OPTION 1: PYTHON HTTP SERVER

```bash
cd /home/r/Escritorio/Autocompletado
python3 -m http.server 8000
```

Then open: http://localhost:8000/demo/

### OPTION 2: NODE HTTP SERVER

```bash
cd /home/r/Escritorio/Autocompletado
npx http-server -p 8000
```

Then open: http://localhost:8000/demo/

### OPTION 3: DIRECT FILE

Open the file directly in your browser:
```
file:///home/r/Escritorio/Autocompletado/demo/index.html
```

**NOTE**: Some browsers may block ES modules from file:// URLs.
Use HTTP server for best results.

## WHAT THE DEMO SHOWS

1. **Statistics** - Total technologies, categories, stacks
2. **Autocomplete** - Live search with typo tolerance
3. **Categories** - All 8 categories with counts
4. **Technology List** - All 1094 technologies

## FEATURES DEMONSTRATED

- ✅ Fuzzy search (try: "recat" finds "React")
- ✅ Real-time autocomplete
- ✅ Statistics display
- ✅ Category browsing
- ✅ Full technology list

## TECHNICAL NOTES

The demo imports directly from the built files:
```javascript
import { getTechnologies, autocomplete } from '../dist/index.mjs';
```

This proves the package works correctly in a browser environment.

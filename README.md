# Kluger Sim
### Description
Kluger Sim (Smart Sim in German) is a software designed to be used as a sandbox-style Monte Carlo Simulation Builder.  With drag and drop capability, many various simulations can be constructed and run all within the browser.

### Building from source code
##### Prerequisites
- Emscripten - Compiler for cpp (used for compiling the cpp code into browser-ready .js and .wasm files)
  - https://emscripten.org/docs/getting_started/downloads.html
- Flask - Python web framework for the backend
##### Steps
1. Navigate to the cpp directory
2. Compile the cpp code via the makefile (e.g. if you have MinGW installed {mingw32-make})
3. Move the generated sim.js and sim.wasm files from the cpp directory to the static directory
4. Navigate to the root directory and run app.py {python app.py}
5. Kluger Sim is now running at http://127.0.0.1:5000/

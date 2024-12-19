all:
#	g++ -o main main.cpp
#	emcc -lembind -o arithmetic.js main.cpp -s MODULARIZE=1 -s EXPORT_NAME="ArithModule"
#	emcc -lembind -s MODULARIZE=1 -s EXPORT_NAME='SimModule' main.cpp -o sim.js
	emcc -l embind main.cpp -o sim.js -O3 -s EXPORT_ES6=1 -s MODULARIZE=1 -s WASM=1 -s EXPORT_NAME='SimModule'


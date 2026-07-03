function a(b) {
	// console.log(b)

	return b()
}

// console.log(a);
// console.dir(a);
// a.age = 30 //? functions is also a object behind the scene,, that's the proof

// a("helloB")
a(helloB)
// console.log(result);


function helloB () {
	console.log("hello b is the function in that")
}
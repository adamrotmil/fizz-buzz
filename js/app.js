for ( i = 1; i < 101; i++) {							// set up the loop
if (((i % 3) !=0) && ((i % 5) !=0)) {					// skip numbers that can't divide
	console.log(i);
	$(".my-output").append($('<li>' + i + '</li>'));
} else
	if (( i % 3 ) == 0) {								// test for fizz candidate
		if (( i % 5 ) == 0) {							// if pass then test for fizz buzz
		console.log(i + "fizz buzz");					// if it's fizz buzz then log out
		$(".my-output").append(
			$('<li>' + "fizz buzz" + '</li>'));
		} else {                    					// else it must be fizz, log out
			console.log(i + "fizz");
			$(".my-output").append(
				$('<li>' + "fizz" + '</li>'));
		}
	} else {											// if fizz candidate test failed then must be buzz
		if (( i % 5) == 0) {
			console.log(i + "buzz");
			$(".my-output").append(
				$('<li>' + "buzz" + '</li>'));
		}
	}
}


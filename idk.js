	var list = [8, 10, 4, 10, 9];


	for (var i=0;i<list.length;i++) {
		for (var x=0;x<list.length;x++) {
			if (list[x] < list[i]) {
				
				console.log(list[x]);
				break;
			}
		};
	};
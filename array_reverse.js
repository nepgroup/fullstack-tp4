var arr1 = ['abc', 'def', 'ghi', 'jkl'];

function arrayReverse (arg1) {
	if (Array.isArray(arg1)) {
		arg1.reverse();
		console.log(arg1);
		return true;
	} else{
		return false;
	};
};

arrayReverse(arr1);
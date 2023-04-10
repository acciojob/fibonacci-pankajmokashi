function fibonacci(num) {
// your code here
	if(num == 1)
	{
		return 0
	}
	if(num == 2)
	{
		return 1
	}
	let f1 = 0
	let f2 = 1
	let f3 = 0
	for(let i = 0; i < num - 2; i++)
		{
			f3 = f1 + f2
			f1 = f2
			f2 = f3
		}
	return f3
}

module.exports = fibonacci;

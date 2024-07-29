# J.A. updates ideas

1. **Few changes in CONTRIBUTING.md file for better readability.**
2. **Small changes in customizer-reset.php**
	- Changes to be more consistent formatting and spacing
	- Future idea to Separate logic for handling specific themes (Divi and Astra) into their own functions for better
	  modularity.
3. **JS Script improvements**
	- First of all, I think it would be better to refactor this small jQuery script to Vanilla JavaScript.
	- For the first part of the refactor, I will:
		1. Use of const and let: Use const and let instead of var for better scoping.
		2. Used an object for element creation to group attributes together for better readability.
		3. Change to use 'button' instead of 'input' tag because is generally more flexible and semantically appropriate
		   for AJAX actions.
		4. Safely remove event.preventDefault() action.
		5. Use the fetch API instead of jQuery's $.post, making it a pure JavaScript solution.
		6. Implement better handling of promises and responses.

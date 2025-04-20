const buttons = document.querySelectorAll('.myButton');
	const tabs = document.querySelectorAll('.myTab');
	const contents = document.querySelectorAll('.tabContent');
  
	function clearActive() {
	  tabs.forEach(tab => {
		tab.classList.remove(
		  'before:absolute',
		  'before:bottom-0',
		  'before:left-0',
		  'before:h-1',
		  'before:w-full',
		  'before:rounded-tl-[4px]',
		  'before:rounded-tr-[4px]',
		  'before:bg-[#006bff]',
		);
	  });
	}
  
	function clearContent() {
	  contents.forEach(content => {
		content.classList.add('hidden');
		content.classList.remove('block');
	  });
	}
  
	buttons.forEach((button, index) => {
	  button.addEventListener('click', () => {
		clearActive();
		clearContent();
  
		tabs[index].classList.add(
		  'before:content-[""]',
		  'before:absolute',
		  'before:bottom-0',
		  'before:left-0',
		  'before:h-1',
		  'before:w-full',
		  'before:rounded-tl-[4px]',
		  'before:rounded-tr-[4px]',
		  'before:bg-[#006bff]'
		);
  
		contents[index].classList.remove('hidden');
		contents[index].classList.add('block');
	  });
	});
  
	// Mặc định tab đầu tiên active và content đầu tiên hiện
	tabs[0].classList.add(
	  'before:content-[""]',
	  'before:absolute',
	  'before:bottom-0',
	  'before:left-0',
	  'before:h-1',
	  'before:w-full',
	  'before:rounded-tl-[4px]',
	  'before:rounded-tr-[4px]',
	  'before:bg-[#006bff]'
	);
	contents[0].classList.remove('hidden');
	contents[0].classList.add('block');
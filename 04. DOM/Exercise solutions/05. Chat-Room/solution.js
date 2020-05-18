function solve() {

   let sendButton = document.getElementById('send');
   let input = document.getElementById('chat_input');
   let messageField = document.getElementById('chat_messages');

   sendButton.addEventListener('click', (e)=>{
      console.log(input.value);

      let newElement = document.createElement('div');
      newElement.innerHTML = input.value;
      newElement.classList.add('message', 'my-message');

      messageField.appendChild(newElement);

      input.value = '';
   })
}



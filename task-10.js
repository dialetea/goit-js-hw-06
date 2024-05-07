function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';

    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = size + 'px';
      box.style.height = size + 'px';
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';
  }

  document.getElementById('createButton').addEventListener('click', function() {
    const amountInput = document.getElementById('amountInput');
    const amount = parseInt(amountInput.value);
    createBoxes(amount);
  });

  document.getElementById('destroyButton').addEventListener('click', destroyBoxes);
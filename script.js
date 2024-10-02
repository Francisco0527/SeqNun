document
  .getElementById("generate-btn")
  .addEventListener("click", generateSequences);

function generateSequences() {
  const sequencesContainer = document.getElementById("sequences-container");
  sequencesContainer.innerHTML = "";

  const sequenceCount = parseInt(
    document.getElementById("sequence-count").value
  );
  const allNumbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const sequences = [];

  for (let i = 0; i < sequenceCount; i++) {
    const sequence = [];
    while (sequence.length < 15) {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      if (!sequence.includes(randomNumber)) {
        sequence.push(randomNumber);
      }
    }
    sequences.push(sequence);
  }

  // Garante que todos os números de 1 a 25 estejam presentes em pelo menos uma sequência
  const missingNumbers = allNumbers.filter(
    (num) => !sequences.some((seq) => seq.includes(num))
  );
  missingNumbers.forEach((num, index) => {
    sequences[index % sequenceCount].push(num);
    while (sequences[index % sequenceCount].length > 15) {
      sequences[index % sequenceCount].splice(
        Math.floor(Math.random() * sequences[index % sequenceCount].length),
        1
      );
    }
  });

  // Ordena as sequências e exibe
  sequences.forEach((sequence, index) => {
    const sequenceElement = document.createElement("div");
    sequenceElement.className = "sequence";
    sequence.sort((a, b) => a - b); // Ordena a sequência em ordem crescente
    sequenceElement.textContent = `Sequência ${index + 1}: ${sequence.join(
      ", "
    )}`;
    sequencesContainer.appendChild(sequenceElement);
  });
}

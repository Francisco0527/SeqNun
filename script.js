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
  const sequences = Array.from({ length: sequenceCount }, () => []);

  // Preenche cada sequência com um número único de 1 a 25
  allNumbers.forEach((num, index) => {
    const seqIndex = index % sequenceCount; // Distribui os números de forma equitativa
    sequences[seqIndex].push(num);
  });

  // Preenche o restante da sequência com números aleatórios, garantindo que não haja repetições
  sequences.forEach((sequence) => {
    while (sequence.length < 15) {
      const randomNumber = Math.floor(Math.random() * 25) + 1;
      if (!sequence.includes(randomNumber)) {
        sequence.push(randomNumber);
      }
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

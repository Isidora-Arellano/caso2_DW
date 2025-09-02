// ==== JavaScript Básico ====
const listaHoras = document.getElementById("listaHoras");
const horaSeleccionadaInput = document.getElementById("horaSeleccionada");
const formAgendar = document.getElementById("formAgendar");

// Horas disponibles
const horas = ["09:00", "10:00", "11:00", "12:00", "15:00", "16:00", "17:00"];
let reservadas = [];

// Mostrar las horas en pantalla
function mostrarHoras() {
  listaHoras.innerHTML = "";
  horas.forEach(h => {
    const div = document.createElement("div");
    div.classList.add("hora");
    div.textContent = h;

    if (reservadas.includes(h)) {
      div.classList.add("reservada");
    } else {
      div.addEventListener("click", () => {
        horaSeleccionadaInput.value = h;
      });
    }
    listaHoras.appendChild(div);
  });
}

// Validación y reserva
formAgendar.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const especialidad = document.getElementById("especialidad").value;
  const hora = horaSeleccionadaInput.value;

  if (!nombre || !especialidad || !hora) {
    alert("⚠️ Por favor complete todos los campos.");
    return;
  }

  if (reservadas.includes(hora)) {
    alert("⚠️ Esa hora ya está reservada.");
    return;
  }

  reservadas.push(hora);
  alert(`✅ Hora reservada para ${nombre} a las ${hora}`);
  formAgendar.reset();
  mostrarHoras();
});

// Inicializar
mostrarHoras();

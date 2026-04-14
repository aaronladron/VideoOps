const note = document.getElementById('build-note');

if (note) {
  const now = new Date();
  note.textContent = `Dernière mise à jour locale : ${now.toLocaleDateString('fr-FR')}`;
}
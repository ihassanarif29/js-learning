const insert = document.getElementById("insert");

window.addEventListener("keydown", (eventObject) => {
  insert.innerHTML = `<div class='color'>
  <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${eventObject.key === " " ? "Space" : eventObject.key}</td>
        <td>${eventObject.keyCode}</td>
        <td>${eventObject.code}</td>
    </tr>
  </table>
  </div>`;
});

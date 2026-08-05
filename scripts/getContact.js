const getContact = async () => {
  const parent = document.getElementById("parent");
  const response = await fetch("../db.json");
  const data = await response.json();
  Object.keys(data).forEach((key) => {
    if (data[key].isMain) {
      const div = document.createElement("div");
      const link = document.createElement("a");
      link.target = "_blank";
      link.innerText = "Send massege";
      const phone = data[key]["phone-number"].replace(/\D/g, "");
      link.href = `https://wa.me/${phone}`;
      div.appendChild(link);
      parent.appendChild(div);
    }
  });
};
getContact();

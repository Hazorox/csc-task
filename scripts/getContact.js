const getContact = async () => {
  const parent = document.getElementById("parent");
  const response = await fetch("../db.json");
  const data = await response.json();
  Object.keys(data).forEach((key) => {
    if (data[key].isMain) {
      const link = document.createElement("a");
      const img = document.createElement("img");
      const text = document.createElement("span");
      text.innerText = data[key].name;
      img.src = "../assets/whatsApp.png";
      img.className = "w-25 absolute left-2 top-[50%] -translate-y-[50%]";
      link.target = "_blank";
      link.appendChild(img);
      link.appendChild(text);
      const phone = data[key]["phone-number"].replace(/\D/g, "");
      link.href = `https://wa.me/${phone}`;
      link.className = `flex-1 
      bg-white flex shadow-orange 
      shadow-lg hover:shadow-sm 
      transition-all duration-200 
      active:scale-95 
      justify-center items-center font-bold rounded-full select-none cursor-pointer relative`;
      parent.appendChild(link);
    }
  });
};
getContact();
